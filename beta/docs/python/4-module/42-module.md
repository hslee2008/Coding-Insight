---
sidebar_position: 42
id: 'module'
---

# 모듈

파이썬에서 모듈이란 클래스, 함수, 변수, 코드 등 다양한 정보를 저장하고 있거나 실행할 수 있는 코드의 모임이라고 할 수 있습니다.

이러한 코드를 우리가 2개 이상 파일에서 사용하기 위하여 모듈을 다른 파일에서 가지고 올 수 있습니다.

## import

모듈은 다른 파일에 있기 때문에 먼저 그 파일에서 가지고 와야합니다.

모듈을 가지고 오려면 'import 모듈 이름' 형태를 사용하면 됩니다.

:::note
우리만의 모듈을 만들어 인터넷에 올리는 것도 가능하지만 먼저 모듈에 대하여 더 알아보겠습니다.
:::

```python
import math
```

## dir()

모듈에서 모든 함수, 클래스, 변수 이름을 보기 위하여 `dir(모듈이름)` 사용할 수 있습니다.

`math` 모듈에서 `sqrt`라는 아이템이 보입니다.

`sqrt`는 Square Root의 약자로 한국어로 번역하면 제곱근입니다.

이 함수를 사용하기 위하여 `모듈이름.함수이름()` 형태를 사용할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/cc5f724ff2" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 'as' 키워드

만일 `abcdefghijklmnopqrstuvwxyz`라는 모듈이 있다고 가정해 봅시다.

그렇다면 `abcdefgjijklmnopqrstuvwxyz` 모듈의 `abc` 함수를 이용하기 위하여 `abcdefghijklmnopqrstuvwxyz.abc()` 코드를 실행하기 위하여 항상 a부터 z까지 다 쳐야합니다.

그래서 긴 모듈 이름의 불편함을 최소화하기 위하여 다음과 같은 두 가지의 방법이 있습니다.

1. 새로운 변수를 만들어 모듈 저장

```python
import abcdefghijklmnopqrstuvwxyz

alphabet = abcdefghijklmnopqrstuvwxyz

alphabet.abc()
abcdefghibjkmnopqrstuvwxyz.abc() #위의 코드와 같음
```

2. as 이용하기

```python
import abcdefghijklmnopqrstuvwxyz as alphabet
alphabet.abc()
```

## 나만의 모듈 만들기

조금 더 재미있는 프로젝트 하나를 만들어 보겠습니다. 바로 우리만의 모듈을 만들어서 짝수인지 홀수인지 계산할 수 있는 함수를 만들 것입니다.

우리의 모듈 이름을 `OEM`(Odd, Even Module)로 정하려면 파일의 이름은 'OEM'으로 만들면 됩니다.

```python
#OEM
def isEven(num):
  return num % 2 == 0

def isOdd(num):
  return num % 2 == 1
```

그리고 우리의 중요한 코드를 담을 `main.py` 파일을 만드세요.

`isEven`을 사용하기 위하여 `isEven`을 가지고 오겠습니다.

```python
#main
from OEM import isEven
print(isEven(3)) #False가 출력됩니다
```

하지만 `isEven`만 사용이 가능하고 `isOdd`는 불가능합니다.

그래서 모든 함수를 가지고 오기 위하여 `*`를 사용할 수 있습니다

```python
from OEM import *
print(OEM.isEven(3)) #False가 출력됩니다
print(OEM.isOdd(5)) #True가 출력됩니다
```

하지만 이 방법을 사용하지 마세요 (느립니다)!

`import OEM`을 사용하면 더 좋습니다.

<iframe src="https://trinket.io/embed/python3/18e9b5aa47" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 모듈 출판하기

모듈을 PyPi에 출판이 가능합니다.

출판하면 전 세계 사람들이 `pip install`을 실행하면 우리의 코드를 내려받는 것이 가능합니다.

터미널에 다음과 같은 코드를 실행하세요.

```bash
python filename.py register -r
```

## 모듈 - `__import__()`

파이썬에서 `__import()__` 함수를 사용한다면 모듈을 불러올 수 있습니다.

```python
OS = __import__("os")
```

나만의 모듈은 모듈 파일의 주소를 적어주면 됩니다.

```python
myMod = __import__(r"C:\main.py")
```

파일의 주소는 VSCode에서 파일에 우클릭하고 `Copy path`를 누르면 복사할 수 있습니다.

## 모듈 사용할 수 있는 범위

하지만 모듈을 사용하기 위하여 우리는 우리의 매인 코드를 저장한 곳의 파일에만 모듈 파일을 저장할 수 있습니다.
