# 데이터 형태 바꾸기

## 리스트로 바꾸기

리스트로 바꾸기 위해서는 `list()`와 `split()` 메서드를 사용할 수 있습니다.

첫 번째 방법은 `list()`를 사용하는 방법입니다. `list()`는 리스트로 바꾸는 메서드입니다.

두 번째 방법은 `split()` 메서드를 이용하여, 문자 또는 문자를 기준으로 문자를 리스트로 자를 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/b8df2e09d4"
  height="400"
/>

## 튜플로 바꾸기

튜플로 바꾸기 위하여 문자를 먼저 리스트로 바꾸고 `tuple()` 메서드를 사용하여 튜플로 전환할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/facd314b6c"
  height="400"
/>

## 숫자로 바꾸기

숫자로는 바꾸기 위해서는 `int()`, `float()`, `complex()` 메서드를 사용할 수 있습니다.

만일 문자 안에 있는 문자가 숫자가 아니라면 다음과 같은 결과가 나올 것입니다.

```py
NaN
```

`NaN`은 Not a Number의 약자입니다

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/cf87c918cc"
  height="400"
/>

## 불리언으로 바꾸기

불리언으로 바꾸기 위해서는 `bool()` 이라는 메서드를 사용할 수 있습니다.

`bool()`은 Boolean의 약자입니다.

0은 항상 `False`이고 1은 `True`입니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/314b0e422c"
  height="400"
/>

## 정리

| 데이터 형태 | 바꾸는 방법 | 예시 |
| :-- | :-- | :-- |
| 튜플 | `tuple()` | `tuple(a)` |
| 문자 | `str()` | `str(a)` |
| 리스트 | `list()`, `slpit()` | `list(a)`, `a.split(" ")` |
| 숫자 | `int()`, `float()`, `complex()` | `int(a)`, `float(a)`, `complex(a)` |
| 불리언 | `bool()` | `bool(a)` |
