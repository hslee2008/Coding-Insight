---
sidebar_position: 39
id: 'while'
---

# While 반복문

while 반복문이란 반복문의 일종으로 주어진 불리언 자료형 조건을 기반으로 코드가 반복적으로 수행할 수 있게 도와줍니다.

쉽게 말해서 어떤 조건을 만족시킨다면 코드를 무한반복 시키는 것입니다.

<iframe src="https://trinket.io/embed/python3/496fc82d74" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

:::note
for v.s. while
파이썬에서 for을 사용하는 것이 더 좋습니다.

1. 무한 반복의 확률이 낮다.
2. 하나하나 변수를 선언하지 않아도 된다.
3. 더 다양한 옵션이 있다(이터러블, yield 등).
4. 더 효율적이고 효과적이다.
::: 

## While 반복문 사용법

### 예시 1

While 반복문 밑에 있는 CODE1을 확인하세요.

while하고 조건을 쓴다면 :를 쓰고 들여쓰기(Tab키나 스페이스 바 4번)를 꼭 넣어줘야 합니다.

while 문에서는 무한 반복문을 조심해야 합니다. 무한 반복문이란 말 그대로 무한으로 코드를 실행하는 것으로 소수로 코드를 잘못 작성해서 코드가 계속 실행될 수 있습니다.

### 예시 2

밑에 있는 CODE2 에시를 살펴보겠습니다.

소수로 코드를 이렇게 작성하고 실행하면 a가 0이 아닐 때 실행되지만 a의 값은 계속 증가하니 이 코드는 멈추지 않는다면 영원히 실행될 것입니다.

이런 상황을 접하면 `ctrl+c`를 눌러주면 멈춥니다. 터미널에서 멈춥니다.

1. 먼저, while 반복문이 반복하는 양을 저장할 수 있는 변수를 만듭니다. (예: `a = 0`)
2. while 반복문을 만들고 반복할 코드를 넣습니다.
3. 다음에, 만든 변수를 감소시키거나 증가시킵니다. (예: `a += 1`, `a -= 1`)

<iframe src="https://trinket.io/embed/python3/3f6d66c42e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## break 문

break 문은 while True 문을 정지시킬 때 사용하는 코드입니다.

이 코드 역시 무한반복문이 일어나면 터미널에서 ctrl+c로 멈출 수 있습니다.

<iframe src="https://trinket.io/embed/python3/d35c515f41" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
