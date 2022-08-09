# 집합 연산

집합의 종류에는 합집합, 교집합, 차집합이 있습니다.

합집합은 어떤 두 집합의 모든 값을 뜻합니다. 예를 들어 집합 1, 2와 2, 3의 합집합은 1, 2, 3입니다. 같은 값은 중복되지 않게 하나로만 줄입니다.

교집합은 어떤 두 집합의 같은 값을 뜻합니다. 예를 들어 집합 1, 2와 2, 3의 교집합은 2입니다. 두 집합에 다 존재하는 값의 집합입니다.

차집합은 A 집합과 B 집합이 있으면 A 집합에만 있는 값의 모임입니다. 예를 들어 1, 2와 2, 3의 차집합은 1입니다. A와 B의 차집합은 A에만 존재하는 값입니다.

## 합집합

영어로 union은 '하나로 만들다'라는 뜻이 있습니다.

파이썬에서 집합을 하나로 만들기 위하여 `union()`이라는 메서드를 사용할 수 있습니다.

`union()` 대신 `update()`를 사용해도 됩니다. 같은 메서드입니다.

또는 더 간단하고 쉽게 | (엔터 위에 있는 키보드(\)와 shift를 같이 누르세요) 연산자를 사용할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/f16d8554a4"
  height="400"
/>

## 교집합

어떤 두 집합에서 겹치는 값들만 찾기 위하여 `intersection_update()`를 사용해보겠습니다.

`intersection()`은 '겹치는 파트'라는 뜻이 있습니다.

어떤 집합에 `intersection_update()`를 실행하고 첫 번째 매개변수를 두 번째 집합으로 입력하면 첫 번째 집합에 결합하지 않는 값들은 제거할 것입니다.

`intersection_update()`은 첫 번째 집합을 바꾸었지만 새로운 집합을 만들려면 `intersection()` 메서드를 사용하고 새로운 변수 안에 저장하면 됩니다.

`intersection_update()`과 `intersection()` 대신 & 연산자를 사용하여 교집합을 찾을 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/bdb3068e9e"
  height="400"
/>

## 차집합

`intersection_update()`의 반대인 `symmetric_difference_update()`은 어떤 두 집합에 공동으로 존재하지 않는 아이템들만 저장합니다.

`symmetric_difference()` 메서드는 새로운 변수에 저장합니다.

간단하게 '-'를 사용해보겠습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/a69bea0190"
  height="400"
/>
