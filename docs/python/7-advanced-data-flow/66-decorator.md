# 데코레이터

데코레이터는 한국어로 번역하면 '장식하는 물체'입니다.

하지만 파이썬에서는 조금 다른 개념입니다.

데코레이터는 파이썬 함수를 장식하는 또 다른 함수로 함수에 추가 기능을 더합니다.

## 예시

어떤 수의 제곱근을 계산하는 함수를 만들어 보겠습니다.

밑에 있는 함수에 4를 입력하면 2가 출력이 됩니다.

하지만, 만일 a 값이 0보다 작다면 어떻게 대처를 할 수 있을까요?

조건문을 사용한다면 가능하겠지만 매우 복잡해집니다. 이 상황에서 데코레이터를 사용할 수 있습니다.

이제 우리가 원하는 값을 반환하는 함수를 만들겠습니다. 입력을 사용하여 사용자가 지정한 값을 반환하는 것도 가능하지만 이 예시에서는 쉽게 설명하기 위하여 -4를 돌려주는 함수를 만들겠습니다.

```py
def returnVal():
  return -4
```

위의 함수는 데코레이터의 예시입니다.

먼저, 데코레이터 함수를 만들기 위하여 메인 함수를 매개변수 안에 만듭니다.

이 `mainFunction`은 어떤 다른 함수에서 돌려주는 값(squreRootOf에서는 a의 제곱근)입니다.

함수 안에 또 다른 함수를 만들어서 `func` 변수 안에 저장하고 새로운 값인 `abs()` 함수를 사용하여 새로운 값을 돌려줍니다.

밑에 있는 예시를 확인하세요. 하지만 이렇게 하면 많이 복잡합니다.

그래서 파이썬에는 더 쉬운 방법이 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/867aac4aa9" height="400" />

## 사용 방법

데코레이터를 사용하기 위하여 `returnVal()` 함수를 선언하기 바로 전에 다음과 같은 코드를 붙여넣습니다.

```py
@minusDecorator def returnVal():
  return -4
```

위 코드의 첫 번째 매개변수는 함수이지만 `@`를 하면 바로 다음에 나오는 코드를 실행합니다.

`returnVal()`에서 돌려주는 절댓값을 계산하기 위하여 쉽게 `returnVal()` 함수만 사용하면 됩니다.

원래는 `minusDecorator(returnVal())`을 사용하여 절댓값을 계산하지만 `@`를 사용하면 바로 `returnVal()`을 실행해도 데코레이터에 있는 함수가 실행되어 절댓값을 출력할 수 있습니다.

## 2개 이상

데코레이터를 2개 이상 사용하기 위하여 `@minusDecorator` 밑에 또 다른 데코레이터 코드를 넣고 그다음에 함수를 넣을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/659cf1cdb5" height="400" />

## @mydecorator

데코레이터를 사용하면 나만의 기능을 더 추가할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/98ddcafe80" height="400" />

다음과 같은 클래스를 만들어 보겠습니다.

```py
class Teacher:
  def __init__(self, name, subjectTeaching):
    self.name = name
    self.subjectTeaching = subjectTeaching

  def name(self):
    return self.name
```

위의 클래스에서 선생님의 이름을 알기 위하여 `name()`을 사용해야 합니다.

하지만 `@property`를 사용한다면 `name`을 사용할 수 있습니다.

그래서 이 코드를 함수 앞에 넣으면 그 함수는 이제 클래스에서 변수가 됩니다.

```py
@property def name(self):
  return self.name
```

그리고 그 값을 바꿀 수도 있습니다.

`@name.setter #name` 함수의 값을 정하는 새로운 함수를 만들겠습니다

```py
def name(self, val):
  self.name = val
```

다음과 같은 코드를 실행할 수 있습니다.

```py
myFavTeacher = Teacher("MR JAY")
print(myFavTeacher.name)

myFavTeacher.name = 'MS GOULD'
print(myFavTeacher.name)
```

또 값을 지울 수도 있습니다.

```py
@name.deleter def name(self, val):
  print('삭제하겠습니다….')
  del self.name
```

## @classmethod

클래스 값을 메서드로 바꿀 수도 있습니다.

하지만 이 코드 뒤에 나오는 함수에서 `self`는 항상 `__init__()` 밖에 있는 변수들입니다.

그래서 `__init__()` 안에 있는 변수는 다음 함수에서 존재하지 않습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/25a3cc23d1" height="400" />

## @staticmethod

다음에 나오는 함수는 클래스 안에서만 함수 또는 변수를 사용할 수 있습니다.

만일 클래스 밖에서 사용했다면 에러가 생길 것입니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/916a1d2442" height="400" />
