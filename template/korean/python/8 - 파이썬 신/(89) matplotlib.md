# mathplotlib

mathplotlib = math + plot + libarary

다시 말해, matplotlib는 수학과 그래프를 다루는 파이썬 모듈입니다.

matplotlib는 모듈이이어서 먼저 가지고 와야합니다.

```
import matplotlib
```

matplotlib의 버전을 출력하기 위하여 다음과 같은 방법을 사용할 수 있습니다.

```
print(matplotlib.__version__)
```

# 그래프 그리기

matplotlib에서는 리스트를를 이용하여 함수의 정의역과 치역을 계산합니다. 정의역은 x의 값들이고 치역은 y의 값들입니다.

```
import matplotlib.pyplot as plt

plt.plot([1, 10], [1, 10])
plt.show()
```

pyplot은 matplotlib 모듈의 또 다른 모듈입니다. pyplot은 Python + plot입니다. plt.show()는 그래프를 보여줍니다.

점을 만들기 위하여 plot 메서드의 세 번째 매개변수로 문자를 입력하면 됩니다. 'x'도 되고 'o'도 됩니다.

## 정리

1차 방정식: 리스트 안에 수 2개
2차 방정식: 3개
...
n차 방정식: n+1개

# 마커

### marker

matplotlib에서의 마커는 그래프가 꺽이는 부분에 점을 넣을 수 있습니다.

```
plt.plot([1, 10, 30], [1, 10, 20], marker="x")
```

marker 매개변수로 문자를 넣을 수 있습니다.

### 문자 fmt

그래프의 마커, 선, 그리고 색을 정하기 위하여 다음과 같은 방법을 사용할 수 있습니다.

첫 번째는 마커의 모양입니다.
두 번째는 그래프 선의 모양입니다. (: 점선, - 선, --줄선, -. 줄/점 선)
세 번째는 그래프의 색깔입니다. (색깔의 첫 번째 색깔)

```
plt.plot([1, 10, 20], [1, 24, 44], 'o:r')
```

### 마커 크기

마커의 크기는 매개변수 ms에 수를 입력하면 됩니다.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30)
```

### 마커 윤곽선

마커의 윤곽선은 mec를 이용하여 지정할 수 있습니다.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r')
```

mec는 marker + edge + color의 약자입니다.

### 마커 색깔

마커의 색깔은 mfc (marker + face + color)로 설정할 수 있습니다.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r', mfc = 'g')
```

# 선

### 선 스타일

선의 스타일을 정할 수 있는 방법을 알아보겠습니다.

선의 스타일로 linestyle 매개변수에 dotted, dotted, dashed, None, dashdot, solid를 사용할 수 있습니다. linestyle은 ls로도 사용할 수 있습니다.

```
plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')
```

### 선 폭

선의 폭은 linewidth 또는 lw로 설정할 수 있습니다.

```
plt.plot([1, 4, 5], [1, 4, 6], linewidth = '3.14159')
```

# 레이블과 제목

x 쪽이 무엇인지 사용자에게 알려주어야합니다. 시간일 수 있고 값일 수 있습니다.

```
plt.xlabel("Time (h)")
plt.ylabel("Money (w)")
```

그래프의 제목은 title() 메서드를 사용할 수 있습니다.

```
plt.title("Money spent")
```

그래프 제목의 스타일과 위치를 바꾸기 위하여 다음과 같은 방법을 사용할 수 있습니다.

```
font1 = {
  'family': "serif",
  'color': "black",
  'size': 30
}

plt.title("Money spent", fontdict = font1)
```

# scatter

점을 여러게 만들고 싶다면 scatter 메서드를 사용할 수 있습니다.

scatter은 영어로 '튀다'라는 뜻을 가지고 있지만 '퍼져있다'라는 뜻고 가지고 있습니다.

```
plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])
plt.show()
```

매개변수는 다음이 전부입니다.

1. color = "color" --- 점의 색깔
2. c = ["red", "green"] --- 하나하나 점 색칠하기
3. s = [1, 2, 4] --- 사이즈
4. alpha = 0.5 --- 투명도 (0~1)

# historgrams

historgrams는 통계에 자주 사용되는 그래프의 종류입니다. 바와 비슷하지만 붙어있습니다.

historgrams는 hist() 메서드를 사용할 수 있습니다.

```
import matplotlib.pyplot as plt

plt.hist(30, 40, 40, 43)
plt.show()
```

# pie 그래프

pie 그래프? pi 그래프?

pie 그래프란 pie와 모양이 비슷하게 생긴 그래프를 뜻합니다.

pie가 무엇인지 모르나요? pie는 파이입니다 (3.14159...가 아니고요! 이 숫자를 생각했다면 유식합니다).

파이타트는 pie() 메서드를 사용할 수 잇습니다.

```
import matplotlib.pyplot as plt

mylabels = ["Oranges", "Bananas", "Cherries", "Apples"]

plt.pie([30, 10, 50, 10], labels = mylabels)
plt.show()
```

매개변수:

1. explode = [0.2, 0, 0] --- 터지다! (사실 아닙니다. 어떤 파이처트의 부분이 가운데에서 '터지'는 길이를 뜻합니다.)
2. shadow = True --- 그림자
3. colors = "colorname"
4. labels = ["Appple", "Banana"] --- 설명

파이그래프의 재목은 label을 지정하고 legend()를 이용하여 정할 수 있습니다.

```
plt.pie([50, 30, 20], labels = ["Chrome", "Firefox", "Safari"])
plt.legend(title = "Three most commonly used browsers")
```
