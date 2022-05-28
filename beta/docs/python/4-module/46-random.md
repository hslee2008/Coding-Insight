---
sidebar_position: 46
id: 'random'
---

# 랜덤

`random` 모듈을 가지고 오겠습니다.

```python
import random as R
```

## random()

무작위 모듈에서 숫자 0에서 1 사이의 소수(15자리까지)를 선택하여 출력하고 싶다면 `random()`을 사용하면 됩니다.

<iframe src="https://trinket.io/embed/python3/71d6fef8dc" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 두 숫자 사이의 무작위 값 구하기

### uniform()

예를 들어 1과 10 사이의 무작위 소수(14자리까지)를 선택하기 위하여 `uniform()`을 사용할 수 있습니다.

`uniform()`의 매개변수는 처음 숫자 이상(처음 숫자 포함)부터 두 번째 숫자까지(포함) 포함합니다.

### randint()

일정한 숫자 사이에서 무작위로 정수를 선택하기 위하여 `randint()`를 사용할 수 있습니다.

첫 번째 숫자와 두 분째 숫자 둘 다 포함됩니다.

### randrange()

숫자 간의 차이를 정할 수 있는 메서드 `randrange()`는 첫 번째 숫자, 끝나는 숫자, 그리고 공차(연속되는 두 숫자의 차이)로 이루어져 있습니다.

마지막으로 `triangular()`라는 메서드를 사용하면 어떤 범위 안에서의 정수를 랜덤으로 선택하는 것도 가능하지만 어떤 수가 나올 수 있는 확률을 높이는 방법도 있습니다.

<iframe src="https://trinket.io/embed/python3/2c93c0b550" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
