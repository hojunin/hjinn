---
slug: event-tracking-module
title: 이벤트 전송 모듈 최적화하기
authors: [hojun]
tags: [기술적 정복자, 리더]
---

이벤트 트래킹은 데이터 기반 의사결정을 위해 필수적인 장치입니다. 우리의 설계 내에서 유저가 어떤 액션을 하거나 노출되었을 때 **특정 이벤트가 발생**했다고 생각하고 서버에 기록합니다.

그럼 이벤트의 트리거일 때 전송하면 되는거 아닌가?

이게 일반적인 생각이고, 제가 처음 합류했을 시기에도 그렇게 작성되어 있었으며 별 문제가 없었습니다. 허나 시간이 지나니까 문제가 되더라구요. 수집하고 싶은 데이터가 많아지고 하고싶은 실험의 수가 많아지고 컴포넌트끼리 겹치다보니 클릭 한 번, 페이지 진입 한번에 수십개의 API가 호출되고 있었고, 이벤트 처리 서버가 툭하면 죽었습니다.

제가 이벤트 대량 전송 문제를 해결하기 위해 고민했던 내용에 대해 함께 알아봅시다.

![썸네일 사진](https://i.imgur.com/6eRJJpU.png)

<!--truncate-->

### 프론트엔드의 이벤트 트레킹

클라이언트에서 이벤트 트래킹 모듈을 만들어야 한다고 가정해봅시다. 가장 간단하게 만든다면 이벤트 전송 함수를 하나 만들고 이벤트가 발생할 때마다 서버에 요청하면 되겠죠?

```tsx
async function logEvent(payload) {
  await fetch('${host}/event', { method: 'POST', body: payload });
}
```

위 API는 저희가 재설계 이전에 실제로 사용하던 모양입니다. 특정 end point에 이벤트 데이터인 payload를 담아 POST요청을 보내는 것이죠. 가령 다음과 같이 활용할 수 있습니다.

```tsx
const AdBanner = ({banner}: {banner: Banner) => {
	const {id, title, thumbnail} = banner

	useEffect(() => {
		logEvent({
			type : "VIEW",
			screen : "AdBanner",
			...
		})
	} , [])
	...
	const onClickBanner = () => {
		...
		logEvent({
			type: "CLICK",
			screen: "AdBanner",
			...
		})
		...
	}
	return <BannerItem title={title} thumbnail={thumbnail} onClick={onClickBanner}/>
}
```

그림으로 나타내면 다음과 같이 표현할 수 있어요. 이벤트가 발생하는 즉시 클라이언트는 데이터를 취합하고 서버에 요청하죠.

![](https://i.imgur.com/xaZSQq3.png)

생각보다 단순합니다. 모듈을 작성하고 사용하는데 거의 시간이 들지 않고 직관적이죠. 최초 요구사항에는 무리가 없었을 거에요.

## 문제점

하지만 이 방식으로 사용하다보니 **과도한 API 콜**이나 **데이터 누락**과 같은 문제점들이 눈에 보이기 시작했습니다. 로깅 모듈의 호출 횟수는 비즈니스 성장에 맞추어 가파르게 상승하고, 실패했을 때의 처리가 없던 터라 사용자 환경에 따라 데이터가 소실되는 치명적인 문제가 발생했던 것이죠.

이는 클라이언트와 서버의 성능에 직간접적으로 영향을 줍니다. 더 나아가 사용자 **데이터의 오염**으로 잘못된 의사결정을 불러일으키기도 하죠.

### 과도한 API 호출

위에서 언급한대로 이전 방식대로라면 실험을 세밀하게 설계하거나 세세한 부분까지 이벤트를 수집한다고 했을 때 이벤트 로깅 API만 초당 수십개씩 날아갑니다.

API 콜이 많아지면 실행되는 자바스크립트 양이 증가로 인한 성능저하는 물론 당시 API들이 HTTP 1.x대를 쓰고 있었던 관계로 API 콜의 워터폴 현상도 발생했습니다.

### 서버 부하

사실 클라이언트는 브라우저나 앱 하나 뿐이라 부하가 크지 않습니다. 하지만 서버는 다릅니다. 그 수십만명의 기기에서 서버 몇대에 요청을 보내기 때문에 부하와 이에 따른 유지비용이 기하급수적으로 늘어납니다.

선착순 이벤트라도 열어서 한번에 20개의 API 콜을 서버에 요청한다고 가정해보세요. 서버는 몇천 몇만명의 API 콜을 처리해야 할 수도 있습니다.

당시 서버 개발자들이 이러한 문제를 인지하고 bulk로 처리할 수 있는 API를 하나 만들어주셨습니다. 이제 클라이언트가 잘 설계해서 활용하면 되는 상태였어요.

```tsx
async function logEvents(payloadList) {
  await fetch('${host}/bulk/event', { method: 'POST', body: payloadList });
}
```

### 실패로 인한 데이터 유실 문제

이벤트 API의 요청에 실패하고 그대로 둔다면 귀중한 사용자 데이터를 잃게 됩니다.

그래서 요청이 실패했을 때의 재시도 처리도 중요한 요소입니다. 간단히 생각해보면, 실패했을 때 재귀적으로 재시도 처리를 해주면 될 것 같습니다. 아래와 같이요.

```tsx
const RETRY_COUNT = 3;

const onClickBanner = async (payload, retry_count = 0) => {
  if (retry_count >= RETRY_COUNT) {
    throw new Error('최대 시도 횟수를 초과했어요');
  }
  try {
    await logEvent(payload);
  } catch (error) {
    logError(error);
    onClickBanner(payload, retry_count + 1); // 재시도 숫자를 넣어 다시 호출한다.
  }
};
```

하지만 요청이 실패했을 땐 네트워크 환경이나 같이 실패할만한 이유가 있기 때문에 즉각 혹은 적은 시간을 두고 재시도를 하면 다시 실패할 확률이 높습니다. 실시간성이 요구되지 않는 만큼 나중에 성공할 확률이 높을 때 다시보내는 로직 또한 꼭 필요하죠.

이 부분도 고려가 필요했습니다.

## 해결방법

문제를 해결하기 전에 현재 상황을 설명하면, 이미 위에서 설명한 단순한 모듈을 거의 몇백군데에서 활용중이었습니다. 즉, 모듈을 새로 만들거나 argument 등은 건들지 않고 이 문제를 해결해야 했죠.

```tsx
async function logEvent(payload) {
  await fetch('${host}/event', { method: 'POST', body: payload });
}

/*
	모듈의 이름과 argument 변경을 최소화하여 아래와 같이 bulk api로 바뀌어야 합니다.
	await fetch("${host}/bulk/event", {method: "POST", body: payloadList})
**/
```

그래서 저는 같은 모듈을 그대로 호출하되, 특정 시간 조건에 따라 전역 Store에 저장할지 요청을 보낼지를 결정하면 되지 않을까 하고 생각했습니다.

### 인터벌을 써보자

채팅이나 중계, 랭킹 서비스를 만들 때, 웹소켓을 쓰지 않고도 실시간성을 묘사하기 위해 **폴링(Polling)**이라는 기법을 사용합니다. 특정 시간마다 요청을 보내 데이터를 갱신하는 방법인데요. 엄밀하진 않지만 성능을 챙기면서 비슷한 수준의 서비스를 제공할 수 있다는 점에서 활용할 수 있습니다.

저는 폴링을 역으로 활용해서 요청을 보내면 되겠다고 생각했습니다. 이벤트는 실시간성이 필요 없거든요. 서버도 미뤄놨다 나중에 처리해도 될 데이터니까요.

![xB2F9FN.png](https://i.imgur.com/xB2F9FN.png)
타임스탬프만 클라이언트가 생성해서 보내주고, 유실 데이터 최소화 처리 방안만 강구하면 문제 없다고 판단하고 진행하기로 했습니다.

### 중앙 관리가 되도록 만들자

특정 기간에 한번씩 보내려면 그간 발생한 이벤트를 모아둬야 해요. 이를 위해 전역에서 접근 가능한 스토어를 하나 작성합니다. 저는 Zustand를 활용했습니다(Redux, recoli, zotai 등 어떤 라이브러리든 가능합니다)

```tsx
interface EventBufferState {
  eventBuffer: EventPayload[]; // 이벤트 보내기 직전에 모이는 장소
  isSending: boolean // 중복 전송 방지를 위한 플래그
  pushEventBuffer: () => void; // 버퍼에 추가하는 메소드
  flushEventBuffer: () => void; // 버퍼 비우는 메소드
  setIsSendingEvents: (isSending: boolean) => void; // 중복 전송 방지 플래그 세팅
}

const useEventBufferStore = create<EventBufferState>()(
    persist(
      (set) => ({
        eventBuffer: [],
        isSending: false,
        pushEventBuffer: (payload: EventPayload) => set((state) => ({ eventBuffer: [...state.eventBuffer,payload]})),
        flushEventBuffer: () => set(state => ({eventBuffer : []})),
        setIsSendingEvents: (isSending) => set(state => ({isSending}));
      })
    )
  )
)
```

사용자가 이벤트를 전송하기도 전에 앱을 종료하거나 백그라운드로 이동했을 때 이벤트가 유실되지 않도록 persist store를 활용했고, 이를 통해 다음 앱을 켰을 때 flush되지 않은 이벤트들이 다음 인터벌에 전송되도록 했습니다.

### 이벤트 전송 모듈 생성

위에서 작성한 스토어를 활용해 이벤트 전송 함수를 살짝 고쳐줍니다. 현재 상황대로, 모듈의 이름과 argument를 건들지 않고 내용만 고칩니다.

최대 버퍼 사이즈(MAX_BUFFER_SIZE)를 넘어갔다면 충분히 많다고 가정하고 바로 요청을 보내지만 그렇지 않거나 요청중이 아니라면 전부 **스토어에 버퍼**해줍니다.

```tsx
// 유저가 액션을 했을 때마다 호출된다(view, click, ...)
const logEvent = async (payload) => {
  const { eventBuffer, isSending, pushEventBuffer } =
    useEventBufferStore.getState();
  if (eventBuffer.length < MAX_BUFFER_SIZE || isSending) {
    return pushEventBuffer(payload);
  }
  sendEventsAndFlushBuffer();
};
```

이제 3초마다 사용할 이벤트 전송 모듈을 만들어봅시다. 모듈을 실행할 때마다 현재 eventBufferStore를 조회하여 상태를 가져옵니다.

```tsx
// 스토어 상태에 따라 이번트를 서버에 전송한다.
const sendEventsAndFlushBuffer = () => {
  const { eventBuffer, isSending } = useEventBufferStore.getState();

  if (isSending || eventBuffer.length === 0) {
    return; // 버퍼가 비어있거나 현재 전송중이라면 다음 인터벌에 보냅니다.
  }
  requestEvent(eventBuffer);
};
```

아래 모듈은 실제 서버에 요청하는 코드입니다.

```tsx
// 서버에 현재까지 모은 이벤트를 전송한다.
	 const requestEvent = (payloadList) => {
		const { setIsSending, flushEventBuffer } = useEventBufferStore.getState()

		try{
			setIsSending(true)
		const response = await fetch("${host}/bulk/event", {method: "POST", body: payloadList})
});
		if (response.status === 200) {
			flushEventBuffer() // 성공 시 버퍼 초기화
		}
		} catch (error) {
			logError("이벤트 전송 중 실패")
			// 실패 시 에러 로깅함수를 호출하고 넘어간다. 실패한 이벤트들은 다음 인터벌에 합쳐져 호출된다.
		} finally{
			setIsSending(false) // 성공/실패에 관계없이 초기화. 실패했다면 다음 인터벌에 합쳐서 보내진다.
		}
	}
```

### 인터벌 세팅

이제 작성된 모듈을 엔트리파일에서 호출합니다. 저희는 3초정도로 했는데, 꼭 이만큼이 아니어도 됩니다. 더 짧거나 길어도 된다는 뜻이죠. 잔여 이벤트가 있는 상태로 사용자가 앱을 종료하면 Persist Store에 저장된 데이터가 다음 앱을 켤 때 함께 전송되어 유실률을 낮출 수 있습니다.

```tsx
// 엔트리 파일 (App.tsx or index.tsx)
const EVENT_API_INTERVAL = 3000; // 전송 주기

const { setIsSendingEvents, flushEventBuffer, bufferEvents, isSendingEvents } =
  useEventBufferStore();

useEffect(() => {
  setIsSendingEvents(false); // 앱 최초 마운트 시 초기화 과정

  const eventInterval = setInterval(() => {
    sendEventsAndFlushBuffer();
  }, EVENT_API_INTERVAL);

  return () => {
    clearInterval(eventInterval);
  };
}, []);
```

---

## 결론

최초 해결하고자 했던 문제는 "**한번에 호출되는 API가 너무 많다**"였습니다. 하지만 이는 비단 프론트엔드의 성능 뿐만 아니라 백엔드의 성능문제, DevOps의 안정성과 비용 문제 그리고 사용자 이벤트의 유실 혹은 오염으로 인한 의사결정 혼동 문제와 직접적인 연관이 있을 만큼 중요한 문제였습니다.

기술적으로는 이미 암세포처럼 잠식된 레거시 코드가 돌고있는 와중에 최소한의 수정으로 설계를 이식하는 과정이었기 때문에 어려운 문제였습니다.
