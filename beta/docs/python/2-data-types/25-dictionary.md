---
sidebar_position: 25
id: 'dictionary'
---

# 딕셔너리

<iframe width="560" height="315" src="https://www.youtube.com/embed/LmDFgFK4mFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

딕셔너리(DICTIONARY)는 한국어로 '사전'을 뜻합니다.

일상생활에서의 사전은 단어와 그 단어에 대한 설명으로 이루어져 있습니다.

코딩에서도 파이썬 딕셔너리는 키(key)와 값(value)의 한쌍이 여러개로 이루어진 데이터 형태를 뜻합니다.

예를 들어 보겠습니다.

<iframe src="https://trinket.io/embed/python3/ba9dc3b4ac" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 딕셔너리 만드는 방법

딕셔너리는 Key와 Value로 이루어져 있습니다.

기본적인 형태는 다음과 같습니다. Key와 Value의 쌍은 하나의 딕셔너리 안에 저장할 수 있습니다.

```python
{ Key1:Value1, Key2:Value2, Key3:Value3 }
```

딕셔너리 예를 살펴보겠습니다.

옆의 예시에서 Key는 `phonenumber`, `age`, `bestfriend이고` 이 Key에 해당하는 Value는 `"010-1234-5678"`, `14`, `"James"`입니다.

딕셔너리에서는 Key와 Value에는 정수, 문자열 등 모든 데이터를 넣을 수 있습니다.

<iframe src="https://trinket.io/embed/python3/534b32664d" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## keys()

딕셔너리에서 모든 Key의 값을 찾기 위해서 `keys()`를 사용할 수 있습니다.

`keys()`를 사용하고 그 정보를 출력하면 `dict_keys([keys])`의 형태로 출력이 됩니다.

`keys()`는 for [반복문](/docs/data-flow/flow) 에서 더 유용하게 사용할 수 있는 예시를 들겠습니다.

<iframe src="https://trinket.io/embed/python3/1e671b6947" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## values()

Key의 값을 모두 찾는 것처럼 Value의 모든 값을 찾을 수 있습니다.

`values()`를 사용하면 `dict_values([values])` 형태로 value가 출력이 됩니다.

<iframe src="https://trinket.io/embed/python3/05de91d4c2" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
