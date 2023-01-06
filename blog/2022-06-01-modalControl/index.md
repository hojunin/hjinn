---
slug: modal
title: 겟차에서 모달을 컨트롤하는 방법
authors: [hojun]
tags: [react-native]
---

import myImageUrl from './modal_wiki.png';

안녕하세요. Getcha FrontEnd 개발자 **Nick**입니다.

UI / UX의 측면에서 interaction은 매우 중요한 부분을 차지합니다. 적재적소에 배치된 버튼이나 모달, 상황에 맞는 인터렉션은 사용자 이탈을 막고 서비스 내에서 사용자와 사업자가 원하는 화면까지 가도록 돕는 방법이기 때문입니다.

그 중에서 오늘 다뤄볼 주제는 모달(Modal)입니다.

# 모달

Modal은 User Interface 중 부모 화면의 윗 레이어에 위치해서 간단한 사용자 인터렉션을 진행하고 되돌아가도록 설계되어있는 모든 종류의 UI를 통칭합니다.

<img src={myImageUrl} alt="Example banner" width="400" height="200"/>

참조 : 위키백과

그 종류는 디자인 시스템에 따라, 플랫폼마다 종류가 다릅니다. 심지어 같은 UI인데 다르게 부르는 경우도 많아요.

저희는 디자인 시스템을 구축하기 전에 모달에 대해 정리하기로 하고, 이 기준을 모달의 **성격**으로 나눠보기로 했어요.

# 구현

---

모달을 구현하는 방식은 정말 다양합니다. 그리고 방법마다 다양한 차이가 있습니다.

저희도 나름대로 기준을 가지고 모달을 구현해두었는데, 비효율성을 체감하고 이번 리팩토링 과정에서 다음의 기준으로 여러 방법을 모색하고, 가장 좋은 방법을 선택해서 구현하기로 했습니다.

1. 구현 & 유지보수 난이도
2. 효율 (리렌더링, 메모리 등)
3. 사용 방법의 용이성

물론 이런저런 생각 하지 말고 무지성으로 이쁘게 잘 만들어진 라이브러리를 가져다 사용하는 방법이 가장 효율적일 수도 있답니다.

## 현재 상황

저희 Getcha Frontend Chapter에서는 모달을 종류로 나누고, 컨텐츠 단위로 컴포넌트를 하나씩 만들었어요. 모달의 활용이 너무 다양해지다보니 하나로 통일하지 못하고 BoilerPlate 코드를 기반으로 매번 복사 붙혀넣기로 찍어내고 있었습니다. 그래서 아래 예시와 같이 팝업이나 모달을 사용할 때마다 새로 만들어 사용하고 있었어요.

```jsx
// ex. ChooseAnotherFeatureModal.tsx
return <Container>
	<TX.P16 isBold lineHeight="24px">
		다른 기능을 선택하면
	</TX.P16>
	<TX.P16 isBold lineHeight="24px">
		입력하신 내용이 삭제됩니다.
	</TX.P16>
	</Container>
	<TwoBtn
	leftText="취소"
	rightText="차량비교하기"
	handleLeftPress={handleLeftPress}
	handleRightPress={handleRightPress}
	leftBtnColor={Colors.base.grey300}
	leftTextColor={Colors.base.black}
/>
```

그저 팝업만 하나 켰다 끄고 싶을 뿐인데, 비슷한 파일이 하나 새로 생기는 일이 벌어진 것이죠. 상당히 비효율적입니다.

또한 이 모달을 컨트롤하려면, 이 모달을 호출하는 부모 뷰에서 이 컴포넌트를 선언해줘야하고, 켜고 끄는 State를 따로 만들어줘야합니다. 이 모달을 켜고 끌 때마다 리렌더링이 발생하는 것은 덤이고요.

## 모달을 컨트롤하는 방법

모달을 켜고 끄는 방법은 다양합니다. 구현하기 나름이고 대부분 런타임에 큰 오버헤드 없이 동작합니다. 엄청난 계산을 요하는 동작은 아니니까요. 하지만 위에서 언급한 기준들을 고려해서 가장 좋은 방법을 찾아 수정하기로 했습니다. 다음 방법들을 살펴봅시다.

1. 호출하는 화면에 선언 후 내부 State로 호출

   모달이 자주 쓰이지 않거나 프로젝트 크기가 작다면 대부분 이런 방식으로 활용할겁니다. 리팩토링 전엔 저희도 토스트 메시지를 제외한 모달들을 이와 같이 호출했습니다.

   이 방법은 모달 간 의존도가 낮아 사이드이펙트가 거의 없다는 점입니다. 공통 컴포넌트로 사용하는 보일러플레이트 컴포넌트가 있긴 하지만, 그것만 잘 만들어두면됩니다.

   단점은 간단한 팝업 하나 호출해도 파일을 하나 새로 만들어야 한다는 점입니다. 유지보수 난이도가 확 올라가죠. 간단한 수정에도 모든 파일을 고쳐야하니까요.

2. 최상단에 선언 후 Store로 호출

   미리 최상단에 공통 컴포넌트로 모달을 호출해두고 전역 상태 관리 라이브러리로 내부 컨텐츠와 모달의 visible 상태를 컨트롤하는 방법입니다.

   하지만 이를 위해 Store를 구현해야하고, 저희같이 Redux를 사용한다면 벌써 짜증을 낼 수도 있어요. 사용성도 좋지 않아요. 그저 모달을 켜고 끄기 위해 디스패칭 함수를 호출해야하니까요. (일을 위한 일을 한다고 하죠.)

   성능 이슈도 있습니다. 리렌더링마다 전역 Store가 변화하고, 이에 따라 연관된 컴포넌트들을 리렌더링 시키기 때문입니다.

3. 최상단에 선언 후 Static 함수로 켜고 끄기

   가장 이상적인 방법인데요. 2번과 비슷하지만 Dom Tree 전체를 리렌더링 시키지 않습니다.

   단점은 Class Component밖에 사용할 수 없다는 점입니다. 사실 Functional Component에서 구현하는 방식은 아직 찾지 못했습니다.

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

결론적으로 저희는 3번. Static 함수를 활용해서 모달을 만들기로 했습니다. Class Component를 활용해야한다는 점만 제외하면 효율, 사용 방법의 용이성은 탁월했기 때문이에요.

1번 방식은 저희가 비효율을 느끼고 바꾸려는 방법이라 패스했습니다. 작은 프로젝트에는 의존성 문제도 없고 좋지만 저희처럼 서비스 크기가 켜지는 페이즈에서 차용하기엔 부적합하다고 결론지었습니다.

2번 방식은 Redux의 사용성 문제가 있었습니다. 어쨌건 리덕스에 의존해야 하거든요. 다른 스토어 라이브러리를 도입한다고 해도 그 라이브러리에 의존하게 됩니다. 스토어를 만들고, 이를 변경하는 과정이 모두 리소스 낭비처럼 느껴졌습니다.

4번 방식은 효율이 좋지만 일단 React Native에서 Portal을 지원하지 않습니다. 이를 위해 따로 서드파티 라이브러리를 활용하자니 의존성이 하나 더 생길 뿐이거든요. 또한 활용 방식 마저 스토어나 컨텍스트, 커스텀 훅을 활용해야하는지라 간단한 피봇팅 치고 큰 이점이 없었습니다.

그렇다면 3번 방식인 Static 함수를 활용한 모달은 어떻게 만드는지 알아볼게요.

---

## 구현 방식

핵심 아이디어는, Class Component의 Static 메소드를 호출하고, 그 Static Method는 ref로 내부 method에 접근해서 state를 변경하는 방식입니다.

:::tip
javaScript에서 static 메소드는 class의 instance가 생성되기 전에 호출 가능합니다. instance를 만들게된다면 호출할 수 없어요.
:::

단점이라고 한다면 유지보수가 조금 어려워진다는 점인데, 모두가 Functional Component를 사용하고 있는데 Class Component를 사용해야한다는 점이에요.

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

먼저 선언을 해줍니다. 앱의 최상단에 선언하고 이를 켰다 껐다 하는 방식으로 컨트롤할거에요.

```jsx
// App.tsx
...
return (
	...
	<Loading ref={(ref) => Loading.setRef(ref)}/>
	...
)
```

그리고 Loading Class를 import 받으시고, static method를 호출해주기만 하면 로딩 화면이 최상단에 뜨게 됩니다.

```jsx
import Loading form "Getcha-UI-Toolkit"

// 로딩을 켤 때
Loading.show()
// 로딩의 상태를 변경할 때
Loading.update({status: "success"})
// 로딩을 끌 때
Loading.close()
```

# 글을 마치며

서두에서도 언급했듯 로딩 컴포넌트는 사용자 경험에 있어서 굉장히 중요한 지위를 갖는 UI입니다. 그만큼 자주 사용되고 수정도 빈번한 코드라는 뜻이기도 해요. 그 점에 있어 모달 구현의 **일관성**, **개발 및 유지보수**, **성능 및 효율**, **사용 방식**은 모두 굉장히 중요한 요소입니다.

팀 바이 팀, 개발자 바이 개발자로 이견이 있을 수 있지만 저희가 제시한 방법들 중 선호하는 방식으로 모달을 구현해보시면 좋을 것 같습니다.
