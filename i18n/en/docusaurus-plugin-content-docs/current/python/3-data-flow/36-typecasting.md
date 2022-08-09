# 타입 지정

## 타입 지정 ->

사용자가 매개변수와 함수를 만들 때 돌아오는 값과 매개변수의 타입을 정할 수 있습니다!

```py
def wowAnd(nextToWow):
  return "wow " + nextToWow
```

위 코드에서 사용자가 소수로 nextToWow 매개변수의 값을 숫자로 입력할 수 있습니다.

이를 방지하기 위하여 다음과 같은 방법이 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/215ca4e0af"
  height="400"
/>

## 함수의 실행 여부

가끔 함수의 이름과 변수의 이름을 바꾸어서 생각하여 변수의 이름을 실행하는 경우도 있습니다. (에러!).

이 경우를 막기 위하여 어떤 변수가 실행될 수 있는지 알 방법이 있습니다.

`callable()`을 사용하면 어떤 변수를 실행할 수 있는지 알고 다음과 같은 에러를 방지할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/a5ed372467"
  height="400"
/>
