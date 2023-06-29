---
slug: modal
title: 모달을 명령형으로 컨트롤하는 방법
authors: [hojun]
tags: [react-native, react, modal]
---

import myImageUrl from './modal_wiki.png';

UI / UX의 측면에서 interaction은 매우 중요한 부분을 차지합니다. 적재적소에 배치된 버튼이나 모달, 상황에 맞는 인터렉션은 사용자 이탈을 막고 서비스 내에서 사용자와 사업자가 원하는 화면까지 가도록 돕는 방법이기 때문입니다.

그 중에서 오늘 다뤄볼 주제는 모달(Modal)입니다.

<!--truncate-->

## 모달

Modal은 User Interface 중 부모 화면의 윗 레이어에 위치해서 간단한 사용자 인터렉션을 진행하고 되돌아가도록 설계되어있는 모든 종류의 UI를 통칭합니다.

<img src={myImageUrl} alt="Example banner" width="600" height="200"/>

참조 : 위키백과

그 종류는 디자인 시스템에 따라, 플랫폼마다 종류가 다릅니다. 심지어 같은 UI인데 다르게 부르는 경우도 많아요.

## 구현

---

모달을 구현하는 방식은 정말 다양합니다. 그리고 방법마다 다양한 차이가 있습니다. 사용의 용의성이나 효율, 보일러플레이트 코드의 양 등 사용자 경험과 개발저 경험을 동시에 올릴 수 있는지의 기준에서 가장 좋은 방법을 선택해서 구현해봅시다. 아래 방법은 가장 대표적으로 사용되는 방법입니다.

isVisible 이라는 state를 통해 모달을 켜거나 끌 수 있죠. 선언적 잘 작성된 컴포넌트입니다.

```tsx
const [isVisible, setIsVisible] = useState(false)

return <Container isVisible={isVisible}>
    <h2>
      제목을 입력하세요
    </h2>
    <p>
      입력하신 내용이 삭제됩니다.
    </p>
    </Container>
	<Buttons
	leftButtonLabel="취소"
	rightButtoLabel="확인"
	onLeftButtonPressed={handleLeftPress}
	onRightButtonPress={handleRightPress}
/>
```

하지만 그저 팝업만 하나 켰다 끄고 싶을 뿐인데, 부모나 상태관리도구가 그 상태를 관리해줘야 합니다. 그리고 그저 타이틀이나 컨텐츠만 바뀌는데 계속 비슷한 파일이 하나 새로 생기는 문제도 있고요.

또한 이 모달을 컨트롤하려면, 이 모달을 호출하는 부모 뷰에서 이 컴포넌트를 **선언**해줘야하고, 켜고 끄는 State를 따로 만들어줘야합니다. 이 모달을 켜고 끌 때마다 리렌더링이 발생하는 것은 덤입니다.

## 모달을 명령형으로 컨트롤하는 방법

모달을 켜고 끄는 방법은 다양합니다. 구현하기 나름이고 대부분 런타임에 큰 오버헤드 없이 동작합니다. 엄청난 계산을 요하는 동작은 아니니까요. 그 중 저는 명령형으로, 조금 더 직관적으로 켜고 끌 수 있도록 만들어봤어요. 일단 다양한 방법들부터 알아보고, 비교해본 다음 제가 선택한 방법을 보여드릴게요.

1. 호출하는 화면에 선언 후 내부 State로 호출

   정말 많이 사용하는 대표적인 방법입니다. 위에도 예시로 언급한 방법이에요. 이 일단 방법은 선언적이라는 점에서 리액트와 어울립니다. 모달 간 의존도가 낮아 사이드이펙트가 거의 없다는 게 장점입니다. 공통으로 사용하는 보일러플레이트 컴포넌트가 있긴 하지만, 그것만 잘 만들어두면됩니다.

   단점은 간단한 팝업 하나 호출해도 파일을 하나 새로 만들어야 한다는 점입니다. 유지보수 난이도가 확 올라가죠. 간단한 수정에도 모든 파일을 고쳐야하니까요. 가령 팝업이나 스낵바 컴포넌트의 색상을 변경하거나 폰트를 수정한다면 일일이 다 찾아서 수정해줘야 합니다.

2. 최상단에 선언 후 Store로 호출

   미리 최상단에 공통 컴포넌트로 모달을 호출해두고 전역 상태 관리 라이브러리로 내부 컨텐츠와 모달의 visible 상태를 컨트롤하는 방법입니다.

   하지만 이를 위해 Store를 구현해야합니다. 그저 모달을 켜고 끄기 위해 디스패칭 함수를 호출해야하니까요. 전역 상태관리 도구나 리액트에서 제공하는 컨텍스트에 상태와 컨텐츠를 두고 상태를 조절합니다. show 액션과 payload를 넘기면 해당 payload에 있는 컨텐츠로 모달을 켜는 식입니다.

   ```tsx
   const dispatch = useDispatch()

   dispatch(showSnackBarAction({...}))
   ```

3. 최상단에 선언 후 Static 함수로 켜고 끄기

   제가 생각했을 때 가장 이상적인 방법인데요. 2번과 비슷하지만 조금 더 직관적이고

   단점은 Class Component밖에 사용할 수 없다는 점입니다. 사실 Functional Component에서 구현하는 방식은 아직 찾지 못했습니다.

   ```tsx
    Popup.show({
      title: "신청하기"
      description: "신청하면 취소할 수 없습니다. 정말 하시겠습니까?",
      leftButtonLabel:"취소",
      rightButtonLabel:"신청하기",
      leftButtonPressed: closeModal,
      rightButtonPressed: request
    })
   ```

4. Portal 활용

   포탈을 활용하면 다른 루트에 컴포넌트를 렌더링할 수 있습니다. 현재 보이는 컴포넌트들과 다른 곳에 렌더링하기 때문에 컴포넌트 트리를 무너뜨리지 않고 모달을 켜고 끌 수 있는 것이죠.

   켜고 끄는 방식은 2번과 유사합니다. Hook이나 Context를 활용하시면 됩니다.

### 비교

|                  | 구현 & 유지보수 난이도                                       | 효율                                                                        | 사용 방법의 용이성                                                                                      |
| ---------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 화면 내부 선언   | 매우 높음. 사용할 때마다 새 파일을 생성해줘야 합니다.        | 부모 컴포넌트가 State를 관리하기 때문에 켜고 끌 때마다 리렌더링 발생합니다. | 매우 어려움. 사용 시 항상 파일을 만들어줘야하고, 선언해줘야 하며 켜고 끄는 state를 따로 만들어줘야해요. |
| Store 활용       | 스토어 관리를 해야해서 난이도가 조금 올라갑니다.             | 스토어 업데이트마다 리렌더링 발생합니다.                                    | 리덕스나 컨텍스트 API 를 활용해야해서 사용방법은 좋지 않습니다.                                         |
| Static 함수 활용 | Class Component로 구현해야 해서 유지보수가 힘들 수 있습니다. | 내부 State로 관리하기 때문에 성능은 제일 좋습니다.                          | 제일 간단하고 쉽습니다. import하고 method를 호출해주기만 하면 끝.                                       |
| Portal 활용      | 커스텀 훅 관리로 인해 살짝 높습니다.                         | 다른 Dom Tree 내에 생성되어 있기 때문에 리렌더링 이슈 없습니다.             | 컨텍스트나 훅을 활용해야해서 사용방법은 좋지 않습니다.                                                  |

명령형으로 모달을 컨트롤하는 3번 방식은 여러모로 장점이 많습니다. 굉장히 직관적이고 내부에 들어갈 컨텐츠를 Object 객체로 넘기기만 하면 되니까요.

비슷한 방식으로 toss의 use-overlay를 예로 들 수 있는데, 이 방식은 타겟 컴포넌트가 항상 존재한다는 점에서 명령형이면서도 선언형이라고 볼 수 있습니다. 실제 [소개글](https://toss.tech/article/frontend-declarative-code)에서는 선언형이라고 하는데, 함수 내에서 호출할 수 있고 코드가 논리적으로 읽힌다는 점에서 저는 명령형으로 보입니다.

```tsx
const { open } = useOverlay();

const onClick = () => {
  open(({ isOpen, close }) => (
    <FooConfirmDialog open={isOpen} onClose={close} />
  ));
};
```

---

## 구현 방식

구현에 있어 핵심 아이디어는, Class Component의 Static 메소드를 호출하고, 그 Static Method는 ref로 내부 method에 접근해서 state를 변경하는 방식입니다.

:::tip
javaScript에서 static 메소드는 class의 instance가 생성되기 전에 호출 가능합니다. instance를 만들게된다면 호출할 수 없어요.
:::

단점이라고 한다면 Class Component인데, 요즘은 대부분 Functional Component를 사용하고 있는데 Class Component를 쓰는 코드 중 하나가 되기 때문이에요.

기본적으로 Functional Component에서는 static 메소드라는 개념이 없기 때문에 Class Component를 활용해요.

로딩 컴포넌트를 구현한 예시를 볼게요. 코드가 길어져서 interface나 styled component 객체는 전부 생략했습니다.

## 예시1. Loading 컴포넌트

```jsx
import { Dimensions } from 'react-native';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import LottieLoading from '@Components/Screens/MyCarPrice/LottieLoading';

class Loading extends Component<LoadingProps, LoadingState> {
  state = initialState;

  static _ref = null;

  static setRef(ref = null) {
    Loading._ref = ref;
  }

  static show() {
    Loading._ref?.show();
  }

  static close() {
    Loading._ref?.close();
  }

  static update(props: LoadingProps) {
    Loading._ref.update(props);
  }

  timer() {
    return setTimeout(() => {
      this.close();
    }, 1000);
  }

  show() {
    clearTimeout(this.timerID);
    this.setState({ isLoading: true });
  }

  close() {
    clearTimeout(this.timerID);
    this.setState(initialState);
  }

  update({ status = 'loading' }) {
    this.setState({ isLoading: true, status });

    this.timerID = this.timer();
  }

  render(): React.ReactNode {
    const { isLoading, status } = this.state;
    return (
      <>
        {isLoading ? (
          <BackDrop>
            <LottieLoading status={status} />
          </BackDrop>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Loading;
```

### 사용 방법

먼저 최상단에 선언을 해줍니다. 한반만 마운트시키고 그저 켰다 껐다 하는 방식으로 컨트롤할거에요.

```tsx
// _app.tsx
...
return (
	...
	<Loading ref={(ref) => Loading.setRef(ref)}/>
	...
)
```

사용부에서는 해당 컴포넌트의 static method를 호출해주기만 하면 로딩 화면이 최상단에 뜨게 됩니다.

```tsx
// 로딩을 켤 때
Loading.show();
// 로딩의 상태를 변경할 때
Loading.update({ status: 'success' });
// 로딩을 끌 때
Loading.close();
```

# 글을 마치며

서두에서도 언급했듯 로딩 컴포넌트는 사용자 경험에 있어서 굉장히 중요한 지위를 갖는 UI입니다. 그만큼 자주 사용되고 수정도 빈번한 코드라는 뜻이기도 해요. 그 점에 있어 모달 구현의 **일관성**, **개발 및 유지보수**, **성능 및 효율**, **사용 방식**은 모두 굉장히 중요한 요소입니다.

팀 바이 팀, 개발자 바이 개발자로 이견이 있을 수 있지만 저희가 제시한 방법들 중 선호하는 방식으로 모달을 구현해보시면 좋을 것 같습니다.
