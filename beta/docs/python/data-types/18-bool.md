---
sidebar_position: 18
id: 'bool'
---

# 불리언

불리언이란 참 또는 거짓입니다.

불리언에서는 `True`(참) 또는 `False`(거짓)라는 값만 가지고 있습니다.

사용자가 어떤 값을 입력하면 숫자 '5'와 비교하는 프로그램을 만들겠습니다.

```python
userNumber = int(input("숫자를 입력하세요: "))
print(userNumber > 5) #userNumber가 5보다 큰지 비교하고 결과를 출력합니다.
```

불리언 형태로 변수를 선언할 수도 있습니다.

```python
a = 5 > 6
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/QRDmXqVbNPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 주의할 점

파이썬에서는 '옳다면 `True`라고 출력되고 옳지 않다면 `False`'라고 출력됩니다.

기억하세요! `True`와 `False`의 첫 번째 글자는 대문자입니다!

소수로 소문자로 사용하면 다음과 같은 에러가 생깁니다.

<iframe src="https://trinket.io/embed/python/8500bba20b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## not 연산자

불리언에서 `True`를 `False`로 `False`를 `True`로 바꾸기 위하여 `not`을 변수 앞에 붙이면 그 반대가 출력됩니다.

<iframe src="https://trinket.io/embed/python/5fbbc3204c" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## assert()

다음과 같은 예시를 보겠습니다.

CODE1에서 만일 2가 1보다 크면 에러 없이 넘어갑니다.

하지만 만일 `assert` 다음에 나오는 불리언이 거짓이라면 에러가 생깁니다.

에러가 생기는 예시를 관찰하겠습니다.

CODE2는 2가 1보다 크지 않기 때문에 에러가 생깁니다.

파이썬에서 assert의 불리언이 `False`라면 assert 에러가 생깁니다.

파이썬 프로그램에서 나만의 메시지를 만들려면 불리언 뒤에 메시지를 넣으면 됩니다. (CODE3를 확인하세요)

<iframe src="https://trinket.io/embed/python3/b23c21c043" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## all()과 any()

`all()` 함수는 리스트(배울 내용)가 주어지면 그중에 모두 다 `True`라면 `True`를 돌려주고 하나라도 `True`가 아니면 `False`를 돌려줍니다.

이 메서드는 한 값이 `True`여도 `True`이고 모두 다 `True`가 아니면 `False`를 출력합니다.

<iframe src="https://trinket.io/embed/python/6d4ae0d672" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
