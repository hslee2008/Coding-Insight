---
sidebar_position: 33
id: 'function'
---

# 함수

코딩에서 함수의 정의란 코드의 모음을 뜻합니다.

함수를 사용하면 매우 길고 실행하는데 오래 걸리는 코드를 한 줄 안에 쉽게 실행할 수 있게 해주는 도구입니다.

## 함수 선언과 실행

함수를 선언하기 위하여 `def` 키워드 다음에 함수 이름과 소괄호()와 `:`를 넣고 코드를 안에 넣습니다.

이 코드를 실행하면 출력이 되는 값이 없습니다.

그 이유는 함수는 선언(변수처럼)만 되었지 실행이 되지 않았기 때문입니다.

함수를 실행하기 위하여 `함수이름()`를 사용할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/6de0abee4a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 매개변수

### 매개변수란?

매개변수는 변수인데 '매개변수'의 정의는 무엇일까요?

매개변수라는 것은 우리가 함수 안에서 함수를 실행할 때 사용할 수 있는 변수를 뜻합니다.

그래서 다음과 같은 함수 addNum에서 a와 b를 매개변수라고 하고 항상 우리가 이 코드를 실행할 때 우리가 원하는 수로 바꿀 수 있습니다.

:::note
매개변수를 선언하고 싶지 않거나, 초기화하고 싶거나, 만일 개발자가 매개변수에 새로운 값을 넣는지 넣지 않는지 확인할 수 있습니다.
:::

<iframe src="https://trinket.io/embed/python3/3a2f78ef6b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 키워드 매개변수

함수를 실행할 때 매개변수의 순서에 따라 각 변수 안에 값을 넣을 수 있습니다.

하지만 이 방법을 사용하면 순서 상관 없이 매개변수에 값을 입력할 수 있습니다(매개변수 = 값 형태로 변수 선언하는 형태와 같습니다).

리스트와 같이 무한의 매개변수를 딕셔너리에 저장해서 나중에 한 아이템만 선택할 수 있습니다. 매개변수 앞에 `**`를 붙이면 됩니다.

딕셔너리의 이름은 매개변수의 이름이고 키의 이름은 사용자가 입력한 매개변수의 이름입니다.

<iframe src="https://trinket.io/embed/python3/901f63378a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 매개변수 기본값 지정하는 방법

가끔 우리가 프로그래밍에서 함수를 사용할 때 매개변수에 값을 입력하는 것을 잊어버리기도 합니다.

이때 우리는 만일 변수의 값이 `None`이 되는 것을 막기 위하여 기본값을 정할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/095fe5cab9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## apply()

또는 `apply()` 함수를 이용하여 또 다른 함수를 실행하는 것도 가능합니다.

```python
def printWithEnd(a, b, c=None):
  print(a + b, end = c)

apply(printWithEnd, ("hello", "world"), {'c': ""} )
```

## 다양한 키워드

### return 키워드

함수를 실행하면 어떤 값을 반환하기 위해서 `return`이라는 키워드를 사용할 수 있습니다.

그래서 우리가 이 함수에서 나오는 값을 변수 안에 저장할 수 있습니다.

`return` 키워드 다음에 나오는 코드는 다 무시됩니다.

그 이유는 `return` 키워드를 실행하면 함수가 바로 종료합니다.

<iframe src="https://trinket.io/embed/python3/981bc3174e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

return 키워드에서 하나 이상 변수를 되돌려주는 방법이 있습니다. 파이썬에서만 존재하는 기능입니다.

<iframe src="https://trinket.io/embed/python3/aa6a155d5a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### pass 키워드

만일 아무것도 하지 않은 함수를 만들고 싶다면 'pass'라는 키워드를 사용할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/80ed8ae473" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 함수의 중요성

함수는 우리의 코드를 매우 효율적이게 만들 수 있습니다.

예를 들어 우리가 사용자에게 두 수의 덧셈을 10번 물어보고 출력하기 위하여 다음과 코드를 실행하면 다음과 같은 결과가 나옵니다.

매우 복잡하지 않나요? 다음 코드를 `addNumbers`라는 함수를 만들어 효율적으로 만들 수 있습니다.

<iframe src="https://trinket.io/embed/python3/7e46f0a592" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
