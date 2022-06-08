---
sidebar_position: 34
id: 'variablespecification'
---

# 변수 설정

## Global 변수

파이썬에서는 함수 안에 변수를 선언한다면 다른 곳에서 그것을 사용하지 못합니다.

그 이유는 함수 안에서 선언된 변수는 그 함수만 특별히 가진 변수이기 때문입니다.

하지만 우리는 `global` 키워드를 이용할 수 있습니다.

`global` 다음에 변수 이름을 사용하고 변수 이름에 값을 선언하면 모든 코드에서 사용할 수 있는 코드로 변합니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/db03626a7c" height="400" />

## Nonlocal 변수

nonlocal은 global의 반대입니다.

GLOBAL은 그 파일 안에서 변수를 사용할 수 있지만 NONLOCAL은 그 함수, 루프, 클래스 안에서만 사용할 수 있습니다.

다시 말해, NONLOCAL은 그 들여쓰기가 된 부분에서만 사용할 수 있습니다.

```py
def testing():
  nonlocal message
  message = "Hello, World!"
  print(message)

print(message)
```

위의 코드를 실행하면 에러가 생깁니다.
