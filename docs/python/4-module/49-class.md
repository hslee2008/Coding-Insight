# 클래스

여러분, 파일의 템플릿을 만들고 그 템플릿을 복사하여 따로 다른 파일에 저장하신 적이 있나요?

클래스는 그 파일의 템플릿과 비슷합니다.

클래스라는 것은 데이터의 블루프린트라고 할 수 있습니다.

예를 들어 우리가 어떤 자동차에 대한 정보를 만들고 싶다면 클래스를 만들어서 무수히 많이 사용할 수 있습니다.

이제 이 자동차에 대한 정보를 얻기 위하여 `new MyCar()`라고 객체를 만들 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/725e856cf1" height="400" />

## `__init__()`

첫 번째 예시는 딕셔너리와 같은 역할을 하고 있습니다.

하지만 이제 `__init__()` 함수를 사용하면 딕셔너리와 비슷하게 변수를 저장할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/1b58b7cdc3" height="400" />

먼저, 클래스 안에서 `def __init__()`이라고 선언한 후 안에 `self`, `name`, `age`, `gender` 변수를 만들었습니다.

`self`는 항상 첫 번째에 있어야 합니다.

`init` 함수 안에 `sef.name = name` 같이 `p1.name`이라고 할 때 사용하는 값입니다.

그래서 우리가 `Person()`을 선언할 때 첫 번째 값은 `name`입니다.

`name`의 값을 알기 위해서 `p1.name`을 사용했습니다.

## 클래스 안에 함수

클래스 안에서 함수를 선언하면 항상 그 클래스를 사용할 때 이미 정해진 함수를 쉽게 다룰 수 있습니다.

예를 들면, 우리가 `Person` 클래스에서 그 사람의 이름을 출력하는 함수를 만들기 위해 `Person` 클래스 안에 새로운 함수를 만들겠습니다.

self 매개변수는 항상 존재해야 합니다.

그 이유는 처음에 선언된 값들이 다 `self` 안에 저장되어 있기 때문입니다.

이름 'Hyunseung'은 `self` 안에 딕셔너리와 비슷하게 있어서 `self.name`을 사용하여 값을 찾을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/a1a4151531" height="400" />

## self (자신!)

`self`는 영어로 '자신'을 뜻합니다.

클래스가 만들어질 때 모든 변수는 다 `self` 안에 저장합니다.

`self`는 클래스 안에 있는 딕셔너리입니다.

단, init 함수와 모든 클래스에 있는 함수는 만일 클래스의 데이터를 접근하고 싶다면 다 첫 번째 매개변수가 `self`의 이름이어야 합니다.

## 파이썬에서 계승

### 계승이란?

계승이란 무언가를 밑으로 물려주는 것을 뜻합니다.

파이썬에서는 클래스의 함수와 변수를 다른 클래스로 옮기는 작업을 뜻합니다.

클래스에서도 클래스와 클래스끼리 서로 함수와 변수를 주고받을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/e0b362c25c" height="400" />

### 문제의 해결

하지만, 문제가 하나 있습니다.

우리가 `Student` 클래스에서 `init` 메서드를 선언했습니다.

이 선언한 값은 다 `Person` 클래스에서 `name`, `age`, 그리고 `gender` 값이 다 없어집니다.

이를 방지하기 위하여 `Person.__init__(python_class, name, age, gender)`를 `init` 메서드 안에 넣을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/8e1797ce82" height="400" />

## `super()`

`super()` 함수를 이용하면 매우 더 편리할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/e9f98d6de4" height="400" />

## attribute

그렇다면 클래스에 있는 `attribute(변수들)`은 어떻게 바꾸고, 만들고, 삭제할까요?

먼저, 변수를 만드는 방법을 알아보겠습니다.

이미 만들어진 클래스의 변수들을 바꾸는 것이 가능합니다.

첫 번째 매개변수는 클래스 만들어진 변수 이름이고 두 번째는 변수 이름이고 세 번째는 변수의 새로운 값입니다.

클래스의 변수는 클래스 이름.변수이름으로 알 수 있지만 `getattr()` 메서드를 사용하는 방법도 있습니다.

세 번째로, 클래스가 어떤 변수를 가졌는지를 알 수 있는 함수는 `hasattr()`을 사용하면 에러를 피할 수 있습니다.

마지막으로, 클래스의 변수를 삭제할 수 있는 무서운 기능이 있는 `delattr()`을 사용하면 변수의 에러를 피하는 것이 가능합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/45cfee23ee" height="400" />
