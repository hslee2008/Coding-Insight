# 통계

통계란 어떤 데이터를 가지고 새로운 정보를 찾아내는 수학 분야 중 하나입니다.

예를 들어 나의 성적 데이터 `[100, 99, 88, 95, 97]`를 가지고 평균을 계산할 수 있습니다.

파이썬에서 통계는 `statistics` 모듈을 사용하여 쉽게 계산할 수 있습니다.

## 평균

### 평균의 정의

평균이라는 것은 어떤 데이터에서 가운데 값을 뜻합니다. 그래서 100과 50의 평균값은 75입니다.

### 평균을 구하는 방법

평균의 값은 데이터 전체 합 나누기 수입니다.

### `mean()`

mean은 영어로 평균을 뜻합니다.

`mean()` 메서드를 사용하고 그 메서드 안에 리스트를 입력하면 평균값을 찾을 수 있습니다.

### `harmonic_mean()`

`harmonic_mean()`은 `mean()`과 같지만 분자 평균의 숫자가 짝수일 때의 분자와 분모를 바꾼 값입니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/b4ab6a9593" height="400" />

## `중앙값 median()`

중앙값은 중앙값을 뜻합니다.

평균은 리스트값들 사이의 중간을 찾지만 리스트를 작은 숫자부터 큰 숫자로 나열한 후 가운데 값을 뜻합니다.

만일 데이터의 수가 홀수이면 가운데 숫자를 찾으면 됩니다.

하지만 데이터의 수가 짝수라면 가운데 2수를 찾고 그 2수의 평균의 값이 중앙값이 됩니다.

`statistics` 모듈을 사용하면 다음과 같은 방법으로 중앙값을 쉽게 찾을 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/0a8bc90264" height="400" />

## 최빈값

최빈값이란 데이터 중에서 가장 자주 등장하는 데이터의 형태를 뜻합니다.

평균과 중앙값은 숫자만 입력할 수 있지만 모든 데이터 형태를 사용할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/0a8bc90264" height="400" />
