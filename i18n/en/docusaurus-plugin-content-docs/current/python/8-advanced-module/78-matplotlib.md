# mathplotlib

```
mathplotlib = math + plot + libarary
```

matplotlib는 수학과 그래프를 다루는 파이썬 모듈입니다.

matplotlib는 모듈이이어서 먼저 가지고 와야합니다.

```py
import matplotlib
```

matplotlib의 버전을 출력하기 위하여 다음과 같은 방법을 사용할 수 있습니다.

```py
print(matplotlib.__version__)
```

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/3e28c18725" height="400" />

## 그래프 그리기

matplotlib에서는 리스트를 이용하여 함수의 정의역과 치역을 계산합니다.

정의역은 x의 값들이고 치역은 y의 값들입니다.

```py
import matplotlib.pyplot as plt
plt.plot([1, 10], [1, 10])
plt.show()
```

pyplot은 matplotlib 모듈의 또 다른 모듈입니다.

pyplot은 Python + plot입니다.

`plt.show()`는 그래프를 보여줍니다.

점을 만들기 위하여 plot 메서드의 세 번째 매개변수로 문자를 입력하면 됩니다.

`x`도 되고 `o`도 됩니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/40b5ec6e62" height="400" />

## 마커

### marker

matplotlib에서의 마커는 그래프가 꺽이는 부분에 점을 넣을 수 있습니다.

```py
plt.plot([1, 10, 30], [1, 10, 20], marker="x")
```

marker 매개변수로 문자를 넣을 수 있습니다.

### 문자 fmt

그래프의 마커, 선, 그리고 색을 정하기 위하여 다음과 같은 방법을 사용할 수 있습니다.

첫 번째는 마커의 모양입니다.

두 번째는 그래프 선의 모양입니다. (: 점선, - 선, --줄선, -. 줄/점 선)

세 번째는 그래프의 색깔입니다. (색깔의 첫 번째 색깔)

```py
plt.plot([1, 10, 20], [1, 24, 44], 'o:r')
```

### 마커 크기

마커의 크기는 매개변수 ms에 수를 입력하면 됩니다.

```py
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30)
```

### 마커 윤곽선

마커의 윤곽선은 mec를 이용하여 지정할 수 있습니다.

```py
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r')
```

`mec`는 marker + edge + color의 약자입니다.

### 마커 색깔

마커의 색깔은 `mfc` (marker + face + color)로 설정할 수 있습니다.

```py
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r', mfc = 'g')
```

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/6d6b423f37" height="400" />

## 선

### 선 스타일

선의 스타일을 정할 수 있는 방법을 알아보겠습니다.

선의 스타일로 `linestyle` 매개변수에 dotted, dotted, dashed, None, dashdot, solid를 사용할 수 있습니다.

`linestyle`은 `ls`로도 사용할 수 있습니다.

```py
plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')
```

### 선 폭

선의 폭은 `linewidth` 또는 `lw`로 설정할 수 있습니다.

```py
plt.plot([1, 4, 5], [1, 4, 6], linewidth = '3.14159')
```

## 레이블과 제목

x 쪽이 무엇인지 사용자에게 알려주어야합니다.

시간일 수도 있고 값일 수도 있습니다.

```py
plt.xlabel("Time (h)")
plt.ylabel("Money (w)")
```

그래프의 제목은 `title()` 메서드를 사용할 수 있습니다.

```py
plt.title("Money spent")
```

그래프 제목의 스타일과 위치를 바꾸기 위하여 다음과 같은 방법을 사용할 수 있습니다.

```py
font1 = { 'family': "serif", 'color': "black", 'size': 30 }
plt.title("Money spent", fontdict = font1)
```

## scatter

점을 여러개 만들고 싶다면 `scatter` 메서드를 사용할 수 있습니다.

`scatter`는 영어로 '튀다'라는 뜻을 가지고 있지만 '퍼져있다'라는 뜻고 가지고 있습니다.

```py
plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])
plt.show()
```

매개변수는 다음이 전부입니다.

1. `color = "color"` --- 점의 색깔
2. `c = ["red", "green"]` --- 하나하나 점 색칠하기
3. `s = [1, 2, 4`] --- 사이즈
4. `alpha = 0.5` --- 투명도 (0~1)

## historgrams

`historgrams`는 통계에 자주 사용되는 그래프의 종류입니다.

바와 비슷하지만 붙어있습니다.

`historgrams`는 `hist()` 메서드를 사용할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/c4218ab83d" height="400" />

## pie

pie 그래프란 pie와 모양이 비슷하게 생긴 그래프를 뜻합니다.

파이차트는 `pie()` 메서드를 사용할 수 잇습니다.

매개변수:

1. `explode = [0.2, 0, 0]` --- 터지다! (사실 아닙니다. 어떤 파이처트의 부분이 가운데에서 떨어져 있는 거리를 뜻합니다.)
2. `shadow = True` --- 그림자
3. `colors = "colorname"`
4. `labels = ["Appple", "Banana"]` --- 설명

파이그래프의 재목은 label을 지정하고 `legend()`를 이용하여 정할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/074b4c95ef" height="400" />
