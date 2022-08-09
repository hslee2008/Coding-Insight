# 던더 메서드

클래스 시간에 `__`변수 이름 형태인 클래스 변수를 배웠습니다.

파이썬에서 `__`를 함수 이름 앞과 뒤에 붙인 것을 던더라고 합니다.

매직 함수라고도 합니다.

이번 시간에는 다양한 던더 메서드에 대하여 배우겠습니다.

## `__str__()`, `__repr__()`

1. 내용이 없는 클래스를 만들겠습니다.
2. 그리고 클래스를 출력하겠습니다.

하지만 이상한 글씨만 보입니다.

그 글씨는 우리가 만든 `Person()` 클래스의 저장된 위치를 담은 정보입니다.

우리의 목표는 `print(a)`를 출력했을 때 사용자가 이해할 수 있는 정보를 출력하는 것입니다.

`__str__`을 사용하면 클래스를 출력할 때 대신 출력되는 값을 넣는 함수입니다.

`__repr__`는 `repr()` 함수를 사용했을 때 대신 출력되는 값을 입력할 수 있는 던더 메서드입니다.

`repr()`는 문자로 바꾸는 함수입니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/f4dfd29f8c"
  height="400"
/>

## `__del__()`

클래스를 삭제하려면 `del` 키워드를 사용할 수 있습니다.

파이썬에서 클래스가 삭제되면 실행할 코드를 `__del__()` 함수 안에 담을 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/3c64d6b06e"
  height="400"
/>

## `__new__()`

new는 새롭다는 뜻으로 파이썬에서는 클래스가 만들어졌을 때 실행이 되는 코드를 담은 던더 메서드입니다.

하지만 꼭 new 던더 메서드에 매개변수로 `self`를 입력해야 합니다.

`"I am created by you!"`가 출력이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/5505e2e889"
  height="400"
/>

## `__call__()`

`__call__()`을 사용하면 클래스가 함수처럼 실행이 되면 어떤 코드를 런할 수 있는 던더 메서드입니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/f57619f30e"
  height="500"
/>

## `__len__()`

`len` 던더 메서드가 `len()` 함수를 클래스에 실행 했을 때 대신 실행할 코드를 넣는 곳입니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/686326e052"
  height="400"
/>

## `_` & `__` 차이 (클래스 변수)

간단한 클래스를 만들겠습니다.

하지만 두 세 번째 매개변수에는 `_` & `__`를 앞에 넣어보겠습니다.

먼저, `__`이 앞에 붙으면 `dir()` 메서드를 사용했을 때 보이지 않는 값입니다.

이를테면, 프로그래머가 보면 안 되는 변수들은 다 앞에 `__`를 붙여서 숨길 수 있습니다.

하지만 `_Person__test3` 변수는 볼 수 있습니다.

이는 파이썬이 이름을 조작하여 보여주는 가짜 변수입니다.

또한, `Person.__test3`로 `__test3` 변수의 값을 가지고 오지 못하지만 `Person._Person__test3`를 사용하면 변수를 사용하는 것이 가능합니다.

그리고 `_`는 변수를 숨기지만 이름을 바꾸지는 않을 변수입니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/3b038ad255"
  height="400"
/>

## 숫자 던더 메서드

```py
__neg__()
__pos__()
__abs__()
__invert__() #- 또는 + 또는 ~
__complex__()
__int__()
__float__()
__index__()
__round__()
__trunc__()
__floor__()
__ceil__()
```

위의 던더 메서드는 함수가 클래스에 실행이 될 때 따로 나만의 코드를 실행할 수 있게 해주는 던더 메서드입니다.

## 연산자 던더 메서드

```py
__radd__(self, a) # +
__rsub__(self, a) # -
__rmul__(self, a) # *
__rtruediv__(self, a) # /
__rfloordiv__(self, a) # //
__rmod__(self, a) # %
__rpow__(self, a) # pow()
__iadd__(self, a) # +=
__isub__(self, a) # -=
__imul__(self, a) # *=
__itruediv__(self, a) # /=
__ifloordiv__(self, a) # //=
__imod__(self, a) # %=
__ipow__(self, other) # **=
__lt__(self, other) # <__ge__(self, other) # >
```

첫 번째는 `self`이고 두 번째는 클래스 `+` 연산자 `+` `x` 형태에서 `x`입니다.

## 더 다양한 던더 메서드

```py
__contains__(self, ITEM)
__reversed__(self)
__iter__(self)
__missing__(self, key) # __getitem__()에서 키가 없다
__delitem__(self, key) # del dict[key]가 실행되면
__dir__(self, key)
__delattr__(self, name)
__setattr__(self, name, value)
__getattribute__(self, name)
__bool__(self)
```

## `__doc__`

함수를 만들 때, 파이썬에서는 맨 위에 한 줄 이상 주석을 달아 그것의 기능, 매개변수 등을 설명할 수 있습니다.

그 설명을 `__doc__`를 사용하여 출력할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/2dc115b16f"
  height="400"
/>
