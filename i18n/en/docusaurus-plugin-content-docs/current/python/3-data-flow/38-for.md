---
sidebar_position: 37
id: 'for'
---

# for 반복문

for 반복문이란 반복되는 작업을 매우 효율적이게 맡을 수 있는 반복문입니다.

## for 반복문

for 반복문은 리스트와 함께 사용할 수 있는 반복문입니다.

`for ~ in ~:`의 형태로 사용합니다.

for 뒤에는 임의의 변수 이름을 쓰고 in 뒤에는 이터러블(리스트, 튜플, range())의 이름을 씁니다.

for 문이 실행될 때는 i 변수에 리스트의 값이 차례대로 들어갑니다. 예를 들어 1번째 반복에선 a의 첫 번째 값이 i에 들어갑니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/b3dec1798f" height="400" />

## for + range()

특정한 개수만큼 반복을 시킬 수도 있습니다.

바로 `range()` 메서드를 쓰면 됩니다.

`range()` 메서드는 괄호 안에 쓴 길이 만큼의 리스트를 생성해 줍니다.

`range()` 함수에 대한 더 자세한 내용은 조금 뒤 배우겠습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/dab1cb41c0" height="400" />

## for + else

조건문에서 공부했던 else를 for과 같이 사용하면 for의 range가 끝나면 else문 안에 있는 파이썬 코드를 실행합니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/4712475b5d" height="400" />

:::note
for 반복문은 하나하나 값을 모두 가지고 와서 for 문 안에 있는 코드를 실행하는 코드여서 매우 느립니다.

느린 for 반복문을 사용할 때 변수를 미리 지정하고 변수의 이름을 넣는 것이 더 빠릅니다.

예를 들어 `range(5)`을 변수 안에 저장하여` for i in range()` 대신 `for i in (name)`을 실행하면 조금 더 빨라집니다.
:::

## 반복 중단

반복을 하다가 중단시킬 수도 있습니다.

`break`라는 코드를 사용하면 됩니다.

`break`는 반복문(`while`, `for` 모두 포함) 내에 들어가면 멈추는 조건을 만족하지 않아도 반복문을 강제로 중단시킵니다.

옆에 있는 예시에서는 for 반복문이 0에서 10까지 반복하며 그 수를 출력합니다.

하지만 만일 수가 5가 된다면 바로 for 반복문을 멈추고 `Done!!!`을 출력합니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/9f190d6a4f" height="400" />

## Iterable

for 반복문을 사용하여 리스트에 있는 아이템을 순환하며 하나씩 선택하여 사용할 수 있습니다.

이런 순환이 가능한 변수를 Iterable(이-터-러-블)이라고 합니다.

옆에 있는 CODE1은 이터러블을 사용한 for 문의 예시입니다.

CODE2는 for 반복문을 줄인 코드입니다.

`[x for x in range(3)]`는 `[0, 1, 2]`와 같습니다. 첫 번째 있는 값은 각 아이템의 값이고 첫 번째 다음에는 for 반복문 형태와 같습니다.

리스트 안에 for 반복문 코드가 있습니다.

for 키워드 전에는 돌려주는 값이고 그다음은 원래 for 반복문 형태와 같습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/a532b0eef6" height="400" />

## Generator

Generator(제너레이터)는 이터러블과 같다고 할 수 있습니다.

하지만 데이터(예: 튜플)를 만든 후 바로 삭제를 합니다.

`myList`를 사용해서 for 반복문을 다시 실행할 수 없습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/c87eacfde8" height="400" />

## yield

yield는 `return`과 비슷한 기능을 가지고 있습니다.

yield를 사용하면 매우 효율적이게 작업을 처리할 수 있습니다.

1. 먼저, 제너레이터 함수를 만듭니다.
2. 다음에 제너레이터 함수 안에 for 반복문을 넣은 후 yield 키워드를 사용하여 제너레이터 함수를 사용할 때 되돌려지는 리스트를 만듭니다.
3. 변수 안에 되돌려지는 리스트를 만듭니다.
4. for 반복문을 만듭니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/c9ce2cddc8" height="400" />

## iter()와 \_\_next\_\_()

`iter()` 메서드를 사용하면 for 반복문을 대신할 수 있습니다.

`iter()` 함수를 사용하면 for 반복과 비슷한 이터러블을 만듭니다.

`__next__()` 메서드를 사용하면 i의 값을 하나하나 돌려줍니다.

`__next__()`를 사용할 때마다 새로운 값 하나하나가 새롭게 나타납니다.

만일 마지막 값까지 도착했고 더 이상 값이 존재하지 않는데 `__next__()` 메서드를 사용했다면 에러가 생깁니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/496fc82d74" height="400" />

## range()

`range()`는 for 반복문을 사용할 때 매우 유용합니다.

`range()` 함수는 숫자로 구성된 리스트를 돌려주는 함수입니다.

`range(start, stop, step)`가 있습니다.

`start`는 숫자의 시작입니다.
`stop`은 숫자의 끝입니다.
`step`은 숫자 간의 간격입니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/31f75bee24" height="400" />
