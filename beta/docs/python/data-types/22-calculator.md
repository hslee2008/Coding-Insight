---
sidebar_position: 22
id: 'calculator'
---

# 덧셈 계산기 만들기

이번 시간에는 저번에 배운 숫자와 연산자를 사용해 간단한 덧셈 계산기를 만들어보겠습니다.

몰래 이 프로그램을 사용해서 덧셈의 왕처럼 보일 수 있습니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-CRGv2pHTjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 코드 설명

어떻게 사칙연산 계산기를 만들지 알아보겠습니다.

1. 먼저, 사용자의 입력을 받아 2 변수 안에 그 숫자를 넣겠습니다.
2. 아직 그 입력은 문자이기 때문에 먼저 숫자로 바꿀 것입니다 `float()`.
3. 더하여 출력하겠습니다.

참고로 저희는 소수를 더하는 계산기이기 때문에 `int()`를 사용하지 않겠습니다.

## 계산기 만들기

두 숫자 안에 입력을 받겠습니다.

```python
num1 = input("숫자1: ")
num2 = input("숫자2: ")
```

`float()` 메서드를 사용해서 소수로 전환하고 더하겠습니다.

```python
addnum = float(num1) + float(num2)
```

그리고 `addnum`을 출력하겠습니다.

```python
print(addnum)
```

<iframe src="https://trinket.io/embed/python3/2a317b1dba" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
