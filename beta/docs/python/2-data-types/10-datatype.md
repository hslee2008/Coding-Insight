---
sidebar_position: 10
id: 'datatype'
---

# 데이터 형태

프로그램에서 다양한 기호(숫자, 문자 등)를 통틀어 데이터라고 합니다.

그리고 데이터 형태는 데이터의 다양한 종류를 뜻합니다..

사람이 가장 자주 접하는 데이터 형태인 문자는 ""를 사용하여 변수 안에 저장할 수 있습니다..

```python
weather = "대체로 흐림"
```

<iframe src="https://www.youtube.com/embed/DDrOcpflWDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 데이터 형태 찾기

저희는 파이썬에서 `type()` 함수를 사용하여 변수의 데이터 형태를 알 수 있습니다.

```python
print(type("안녕"))
```

`<class 'str'>`는 "안녕"이 `str` 데이터 변수(`str`은 문자입니다)라는 것을 알려줍니다.

<iframe src="https://trinket.io/embed/python/1068ac5668" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

##️ 데이터 형태 확인

`isinstance()`는 변수의 데이터 형태를 확인해주는 함수입니다.

첫 번째에 변수 이름을 넣고 두 번째에는 데이터 형태 이름을 넣습니다. 이 코드를 실행하면 `True` 또는 `False`가 출력됩니다.

<iframe src="https://trinket.io/embed/python/437398710e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

위의 예시에서는 `weather` 변수가 `str`인지 알려주는 프로그램을 만들었습니다.

`isinstance(변수, 변수 형태)`의 형태를 가지고 있습니다.

위의 예시는 `True`를 출력합니다. 그 이유는 `sunny`가 문자(`str`)이기 때문입니다.
