# 카운터

카운터 모듈은 어떤 이터러블 변수(리스트, 튜플, 집합)에 대한 다양한 정보를 알려줄 수 있습니다.

예를 들어 리스트 안에 A, A, B 아이템이 있다면 `Counter({"A": 2, "B": 1})`를 돌려줍니다.

또는 `매개변수이름=값` 형태로 값의 수가 많으면 하나하나 다 입력하지 않고 숫자만 이용하여 카운터를 만드는 것이 가능합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/da3dfe80d1" height="400" />

## 글로벌 카운터

카운터를 글로벌 변수로 삼아 계속 업데이트하는 것이 가능합니다.

업데이트하면 새롭게 원래 카운트하는 이터러블에 값을 더합니다.

업데이트는 `update()` 메서드를 사용합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/1784ae1aca" height="400" />

## 카운터 아이템

카운터를 계속 업데이트하다 보면 카운터 아이템의 값을 다시 찾아야 하는 경우가 종종 있습니다.

카운터의 아이템은 `elements()`라는 메서드를 이용할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/6776498f90" height="400" />

## 카운터 가장 흔한 값

카운터에서 가장 흔히 나오는 값을 찾으려면 `most_common()` 메서드를 사용하고 매개변수로 숫자를 입력하여 그 수 만큼 가장 흔한 아이템을 찾을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/f918534c52" height="400" />

## 카운터 값 빼기

카운터 2개로 값을 빼서 새로운 카운터를 저장할 수 있습니다.

하지만 어떤 아이템의 수가 음의 정수가 될 수 있습니다.

물건이 0보다 적게 있다는 것이 말은 되지 않지만 파이썬 카운터에서는 가능합니다.

```py
a = Counter(a = 4, b = 5)
b = Counter(a = 6, b = 9)
print(a.subtract(b))
```
