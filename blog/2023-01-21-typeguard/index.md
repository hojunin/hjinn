---
slug: typeguard
title: 타입 가드로 type-safe한 데이터 얻기
authors: [hojun]
tags: [typeScript]
---

typeGuard는 typeScript에서 어떤 타입인지 모르는 데이터가 어떤 타입인지를 판단해줍니다. typeGuard를 통과한 데이터는 검사필 도장을 받은 쇠고기마냥 안전하게 조리할 수 있어요. 이번 글에서는 타입가드를 어떻게 작성하고 활용하는지 알려드릴게요. 그리고 리액트 쿼리와 연계해서 사용해볼거에요.

<!--truncate-->

제가 속한 조직에 처음 합류할 때만 해도 프론트엔드 코드는 **javaScript Only**였어요. 런타임에도 에러가 왕왕 발생하고 디버깅도 힘들었습니다. 이러한 상황에서 챕터 구성원들의 합의를 얻고 타입스크립트를 도입했지만, 도입 속도는 느렸고 런타임 에러는 비슷했으며 코드 생산성 또한 느렸으면 느렸지 더 빨라지진 않았던 것 같습니다.

하지만 그런식으로 우후죽순 생겨난 any들은 나중에 런타임 에러를 낼 가능성이 높아요. 그래서 사용부에서 이런 에러를 제거하기 위해 타입을 좁혀 원하는 타입인지 확인하는 방법론이 있는데, 그걸 타입 좁히기(**Type Narrowing**)라고 부르고 그리고 그 구체적인 방법을 타입가드(**type guard)**라고 합니다.

## 타입 좁히기 (Type Narrowing)

타입 좁히기(type narrowing)는 **아직 타입을 잘 모르는 데이터**에 일단 제너럴한 타입을 부여하고 점점 그 범위를 **좁혀나가는 과정**을 의미합니다.

:::info typeScript docs - 타입 좁히기

💡 [타입스크립트 공식문서 - Type Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

:::

타입 좁히기를 통해 우리는 천편일률적으로 처리하던 데이터들을 이제는 실제로 들어오는 데이터의 타입을 확인하고 그에 맞는 처리를 해줄 수 있습니다. type narrowing을 하는 방법에는 여러가지가 방법이 있습니다. 그리고 더 좋은 방법들이 생겨나고 있죠. 그 중 유명한 방법들을 몇몇 소개하고, 어떻게 type-safe한 데이터를 얻어내는지 확인해보도록 해요.

## 타입가드 (Type Guard)

타입가드는 방법론이기 때문에 다양한 구체화된 방법들이 존재해요.

### **Differentiating**

흔히 Union 타입 객체가 구체적으로 어떤 타입 객체인지를 판별하기 위해 in 문법을 사용합니다.

아래와 같은 예시가 들어볼게요. 차량 구매상담이 들어와서 데이터를 받아 딜러와 매칭을 해주려 합니다. 이 때 같은 차량 데이터라도 가지고 있는 데이터가 조금씩 다를 수 있어요. 이럴 때 in 예약어를 활용해 해당 데이터 객체에 포함된 엔티티로 타입을 구별합니다.

가령 car 데이터 안에 bmw_dealer_code라는 값이 들어있으면 그 데이터는 BMW_CAR 타입임을 확신하고 BMW 딜러에게 연락을 해주는 것이죠.

```tsx
// 이 함수는 어떤 브랜드의 차량 데이터를 준다.
const getCarByBrand (): BMW_CAR | HYUNDAI_CAR | ... => { ... }

const callDealer = () => {
	const car = getCarByBrand();

	if ("bmw_dealer_code" in car) {
		callBmwDealer(car)
		return
	}

	if ("hyundai_dealer_code" in car) {
	  callHyundaiDealer(car)
		return
	}

	callAllDealer(car)
}
```

### User Define Type Guard

사용자가 함수로 정의한 타입가드의 형태입니다. 들어오는 데이터는 아직 모르니까 unknown타입이고, 이 함수를 통과했을 때 true를 리턴하면 해당 타입이다 라고 정의된 boolean을 리턴하는 함수입니다.

아래 예시를 보면서 이해해볼까요?

어떤 데이터에는 반드시 포함되어야 할 세부 데이터가 있습니다. 가령 네트워크 오류나 로딩 때문에 데이터가 undefined가 내려온다면 이는 타입가드를 통과할 필요도 없습니다. 하지만 요청이 정상적으로 데이터를 반환했을 때, 그 중 꼭 있어야 할 필드를 한번 더 검수하는 과정입니다.

아래 예시에서는 어떤 데이터가 어떤 타입인지 모르는 상태로 함수를 통과하고, 이 데이터의 타입 중 두개의 필수 id 필드가 특정 조건으로 존재하는지 확인한 다음 그 결과를 boolean으로 리턴합니다.

```tsx
interface Car {
	id_car: ID
	id_cargrade:ID
	name?: string
	brand?: string
	...
}

// 차량 데이터라면 차량 아이디와 차량 등급 아이디가 존재해야한다.
const isCar = (car: unknown): car is Car {
  return (car as Car)?.id_car !== undefined && (car as Car)?.id_cargrade;
}

// 배열은 다음과 같이 검사한다.
const isCars = (cars: unknown[]): cars is Car[] {
  return (cars as Car[])?.every(isCar)
}
```

### typeof와 instanceof

간단히 typeof, instanceof를 활용하는 방법입니다. 가령 다음과 같은 예시에서 활용할 수 있습니다. input 컴포넌트에서 사용자의 입력은 원시타입인 string 타입과 number 타입이 올 수 있습니다. 두 타입에 적용될 수 있는 메소드가 다르고, 리턴하는 데이터 타입도 다르기 때문에 둘을 구분하는 용도로 간단히 활용할 수 있습니다.

```tsx
cosnt handleInput = (input: string | number) => {
	if(typeof input === "string"){
		handleStringInput(input)
		return
	}

	handleNumberInput(input)
}

return (
	<input onChange=(e=>handleInput(e.target))/>
)
```

하지만 typeof는 primitive 타입과 object, function, undefined까지만 구별할 수 있고, instanceof는 특정 타입의 인스턴스만 체크할 수 있기 때문에 활용도가 높지 않습니다. 또한 null도 object로 보는 자바스크립트에서 천편일률적으로 이 방법을 활용하기는 애매합니다. 그래서 위와 같이 특별한 경우에서만 명확하게 쓸 수 있어요.

---

## 활용해보기

물론 정해진 정답은 없기에 위 방법들을 적절히 섞어서 사용합니다. 그 와중에 구조는 지키는 편이에요.

### Null Check

어떤 타입의 데이터를 검사하든 있는 데이터를 검사해야합니다.

```tsx
const isEmpty = (data: unknown): boolean => {
	if(data === undefined || data === null || ...){
		return true
	}
	...

	return false
}
```

### Type Guard

타입 가드는 위에서 사용한 예시를 그대로 가져와 볼게요.

```tsx
// 차량 데이터라면 차량 아이디와 차량 등급 아이디가 존재해야한다.
const isCar = (car: unknown): car is Car {
	if(isEmpty(car)) return false

  return (car as Car)?.id_car !== undefined && (car as Car)?.id_cargrade;
}

// 배열은 다음과 같이 검사한다.
const isCars = (cars: unknown[]): cars is Car[] {
	if(!Array.isArray(cars)) return false

  return (cars as Car[])?.every(isCar)
}
```

그리고 특정 키값에 따라 달리 동작하는 아래와 같은 분기로직도 존재할 수 있습니다.

```tsx
// Car 데이터에는 "bmw_dealer_code"나 "hyundai_dealer_code"가 포함되어 있을 수 있다.
const callDealer = (car: Car) => {
  if ("bmw_dealer_code" in car) {
    callBmwDealer(car);
    return;
  }

  if ("hyundai_dealer_code" in car) {
    callHyundaiDealer(car);
    return;
  }

  callAllDealer(car);
};
```

### 로직 안에서 사용하기

서버에서 데이터를 받아서 타입을 체크하고 렌더링하는 로직을 작성하면 다음과 같아요. 더 나아가 **react-query**와 결합해서 사용해볼게요.

```tsx
const { useQuery } from "react-query"

// 서버에서 데이터를 가져와 타입가드를 통과한 데이터만을 렌더링부로 넘깁니다.
const useFetchCarData = () => {
	const { data, isLoading, isError } = useQuery([FETCH_CAR_KEY], fetchCar)

	if(isLoading || isError){ // 요청에 오류가 있다면 스켈레톤 UI를 보여줄 수 있는 데이터를 내려줍니다.
		return initialData
	}

	if(isCars(data.cars)){
		return makeClean(data.cars) // 데이터가 오염되었을 때, 이 데이터는 렌더링 오류를 발생시킬 수 있으므로 정정합니다
	}

	return data.cars // 정상 데이터라면 데이터 객체를 반환합니다.
}

const CarPage = () => {
	const cars = useFetchCarData()

	const onClickCarItem = () => { // 로직에서도 타입 가드를 활용할 수 있습니다.
			...
			const car = getCarByBrand();

			callDealer(car)
			...
	}

	return (
		{cars.map(car => <CarItem car={car} onClickItem={onClickCarItem} key={car.id_car}/>)}
	)
}
```

위와 같이 어떤 타입만 정해져 있다면 로직 안에서 자유롭게 활용할 수 있습니다. 이렇게 타입가드를 통과한 데이터는 type-safe하기 때문에 타입 오류로 없는 property에 접근한다던가 타입에 맞지 않는 method를 호출할 수 없습니다. 그 전에 어떤 처리가 이루어지니까요. 덤으로 optional chaning을 걸지 않아도 됩니다.

---

# 마치며

타입가드는 타입스크립트를 사용한다면 절대 외면할 수 없는 존재입니다. type-safe한 데이터를 얻고 싶다면 우리는 조금 귀찮더라도 이러한 과정을 거쳐야 합니다.
