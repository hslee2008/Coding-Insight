---
sidebar_position: 12
id: 'indexing'
---

# 문자와 문자열 인덱싱

문자에서 선택하고 싶은 한 장소의 정보를 찾아내는 작업을 인덱싱이라고 하고 그 장소를 인덱스라고 합니다.

예를 들어 Hello에서 첫 번째 문자를 출력하기 위해서 인덱스 0을 사용할 수 있습니다.

```python
a = "Hello"
print(a[0])
```

문자 다음에 나오는 `[]` 대괄호 안에 있는 숫자는 문자의 인덱스입니다.

일상생활에서 '처음'이라고 하면 보통 1을 생각합니다.

하지만 배열(문자열, 리스트 등)에서 첫 번째 인덱스를 출력하기 위해서 0을 사용합니다.

2번째는 1이고 3번째는 2입니다.

이 이유는 조금 뒤에 설명하겠습니다.

<iframe src="https://trinket.io/embed/python3/e1cdc9760f" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 문자 인덱싱 (x ~ y 값)

문자에서 어떤 범위의 부분 문자를 구하기 위하여 다음과 같은 방법을 사용할 수 있습니다.

`[]` 안에 `:`를 사용하여 `:` 전에 나오는 인덱스를 포함하고 `:` 다음에 나오는 인덱스는 제외하고 출력이 됩니다.

만일 0이 없이 `''` 만 있어도 파이썬은 0이라고 인식합니다.

<iframe src="https://trinket.io/embed/python/47c742b3bd" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 거꾸로 문자 뒤집기

문자를 거꾸로 바꾸기 위하여 인덱싱을 사용할 수도 있습니다.

옆의 예시에서 `::-1`은 `0:0:-1`을 생략한 코드입니다.

마지막 숫자는 스텝을 뜻합니다.

스텝은 문자 인덱싱을 셀때 단위입니다.

예를 들면, 단위를 2로 정하면 2 문자 중 하나씩만 출력됩니다.

스텝을 -1로 입력하면 거꾸로 바꿀 수 있습니다.

<iframe src="https://trinket.io/embed/python/4e95210044" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
