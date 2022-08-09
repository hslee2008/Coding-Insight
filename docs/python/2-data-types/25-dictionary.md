# 딕셔너리

<iframe
  loading="lazy"
  className="youtube"
  src="https://www.youtube.com/embed/LmDFgFK4mFA"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
/>

딕셔너리(DICTIONARY)는 한국어로 '사전'을 뜻합니다.

일상생활에서의 사전은 단어와 그 단어에 대한 설명으로 이루어져 있습니다.

코딩에서도 파이썬 딕셔너리는 키(key)와 값(value)의 한쌍이 여러개로 이루어진 데이터 형태를 뜻합니다.

예를 들어 보겠습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/ba9dc3b4ac"
  height="400"
/>

## 딕셔너리 만드는 방법

딕셔너리는 Key와 Value로 이루어져 있습니다.

기본적인 형태는 다음과 같습니다. Key와 Value의 쌍은 하나의 딕셔너리 안에 저장할 수 있습니다.

```py
{ Key1:Value1, Key2:Value2, Key3:Value3 }
```

딕셔너리 예를 살펴보겠습니다.

옆의 예시에서 Key는 `phonenumber`, `age`, `bestfriend이고` 이 Key에 해당하는 Value는 `"010-1234-5678"`, `14`, `"James"`입니다.

딕셔너리에서는 Key와 Value에는 정수, 문자열 등 모든 데이터를 넣을 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/534b32664d"
  height="400"
/>

## `keys()`

딕셔너리에서 모든 Key의 값을 찾기 위해서 `keys()`를 사용할 수 있습니다.

`keys()`를 사용하고 그 정보를 출력하면 `dict_keys([keys])`의 형태로 출력이 됩니다.

`keys()`는 for [반복문](/docs/python/data-flow/for) 에서 더 유용하게 사용할 수 있는 예시를 들겠습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/1e671b6947"
  height="400"
/>

## `values()`

Key의 값을 모두 찾는 것처럼 Value의 모든 값을 찾을 수 있습니다.

`values()`를 사용하면 `dict_values([values])` 형태로 value가 출력이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/ef70d46c83"
  height="400"
/>
