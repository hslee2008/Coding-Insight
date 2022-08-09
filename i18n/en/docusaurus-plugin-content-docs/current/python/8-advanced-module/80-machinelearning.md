# 머신 러닝

영화에서 보면 AI가 세상을 정복해서 인간보다 더 똑똑해 지는 장면들이 자주 등장합니다.

사람들이 실제로 AI에 대해 잘 모르기 때문에 두려워합니다.

이번에는 머신 러닝 (AI가 공부하는 과정 중 하나)를 사용해서 데이터 분석하는 방법을 알아보겠습니다.

## 모델

모델은 저장하고, 분석하고, 사용하는 데이터를 담고 있는 객체 (예: "사람이 마스크를 쓰고 있는가?"에서는 사람의 얼굴)

학습 - 모델에게 데이터를 제공해서 결과를 알려주는 과정 (예: "사람이 마스크를 쓰는 사진 제공, 쓰고 있다고 알려줌")

참고로 머신 러닝은 처음에는 데이터가 많이 없어서 정확도가 떨어지는 이유는 결과의 가능성이 너무 많아서입니다. 사실 머신 러닝은 모든 경우의 수를 계산하기 때문에 모델이 많을 수록 경우의 수를 줄일 수 있습니다. (예: 사진에서 `010101010101111001010` 데이터가 사람의 얼굴이다하면 학습의 과정을 통해 컴퓨터는 더 확신할 수 있습니다.)

## 준비

1. `pip install pandas와 pip install -U scikit-learn` 터미널에서 실행하기
2. `music.csv` 파일 다운로드 받기 (꼭 파이썬 파일과 똑같은 폴더 안에 넣기)
3. 코드 짜기!

## 코드

```py
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
```

지금까지 파이썬에서 필요한 라이브러리를 가지고 왔습니다.
판다스는 데이터를 읽고 정리하는데 사용하고 sklearn은 데이터를 학습하고 결과 예측을 얻기 위한 도구입니다.

```py
data_mus = pd.read_csv('music.csv')
no_genre = data_mus.drop(columns=['genre'])
genre = data_mus['genre']
```

저흐는 총 2개의 데이터 변수 `(no_genre, genre)`를 사용해서 어떤 나이의 사람이 어떤 `genre`를 좋아하는지 예측할 것입니다.

그래서 데이터(이 파일에는 나이와 성별)과 레이블(좋아하는 genre)를 분리해서 사용합니다.

```py
model = DecisionTreeClassifier()
model.fit(no_genre, genre)
pred = model.predict([[21, 1], [22, 0]])
```

참고로 `predict()` 메서드는 21세 남성, 22세 여성이 좋아하는 음악 `genre`를 예측해서 결과를 `pred` 변수 안에 저장할 것입니다.

```py
print(pred)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/02de47df74"
  height="400"
/>

## 추가로 정확도 측정하기

```py
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
X_train, X_test, y_train, y_test = train_test_split(no_genre, genre, test_size=0.2)
```

참고로 `test_size`는 가지고 있는 데이터 (`music.csv`) 파일 중 얼마나 많은 데이터를 사용할 것인가를 물어봅니다. 저희는 20%를 사용합니다.

```py
model.fit(X_train, y_train)
pred = model.predict(X_test)
print(accuracy_score(y_test, pred))
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/282aeb7817"
  height="400"
/>

:::note
참고로 실행하면 정확도가 항상 달라지는 것을 확인할 수 있습니다.

참고로 정확도를 높이기 위해서는 `test_size`를 낮추어야 합니다.

그 이유는 `test_size`를 낮추면 남은 데이터를 사용하여 학습하기 때문입니다.
:::
