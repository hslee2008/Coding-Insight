---
sidebar_position: 62
id: 'arraytype'
---

# 정렬 종류

## 정렬 치수

정렬의 치수란 정렬의 깊이입니다.

조금 더 쉽게 설명하자면, 정렬 안에 정렬이 몇 개 있는지의 값이 정렬의 치수라고 합니다.

### Scalars - 0D

0-D 정렬은 값이 1개입니다. 0-D는 Scalars라고도 합니다.

```python
arr = numpy.array(44)
```

### uni-dimension - 1D

1-D 정렬은 정렬이 1개입니다. 1-D는 uni-dimension이라고도 합니다.

```python
arr = numpy.array([4, 44, 444])
```

### 2-D와 x-D

2-D 정렬은 정렬 안에 또 다른 정렬이 있는 형태입니다.

정렬의 치수는 무한대로 늘어날 수 있습니다.

```python
arr = numpy.array([ [4, 44, 444], [3, 3, 444] ])
```

### ndim

정렬의 치수를 알기 위하여 항상 numpy 정렬을 선언한 후 ndim이라는 값을 이용할 수 있습니다.

```python
print(arr.ndim)
```

정렬을 만들 때 정렬의 치수를 지정할 수도 있습니다.

```python
arr = numpy.array([4, 44, 444, 4444], ndmin=1000)
```

## 정렬 인덱싱

### 1-D

uni-dimension 정렬의 인덱싱은 리스트 인덱싱과 같습니다.

### 2-D

2-D는 정렬 안에 정렬이 있습니다. 그래서 첫 번째 정렬을 선택하고 그 정렬 안의 값을 선택하는 것이 가능합니다.

이와 같이 3-D는 3개의 수, 4-D는 4개의 수...를 입력하면 됩니다.

<iframe src="https://trinket.io/embed/python3/4fe0b3d005" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 정렬 모양

정렬 모양이란 정렬의 길이를 뜻합니다.

예를 들면 정렬 `[[1, 2],[2, 3]]`는 2개의 정렬 안에 2개의 아이템이 있기 때문에 모양은 (2, 2)입니다.

### 정렬 모양

정렬의 모양을 알기 위하여 `shape`라는 것을 쓸 수 있습니다.

이것을 이용하여 정렬의 큰 모양을 알 수 있습니다.

`arr.shape`을 출력하면 `(2, 3)` 튜플이 출력됩니다.

`(2, 3)`에서 2란 2-D 정렬을 뜻하고 3은 3개 아이템이 있다는 뜻입니다.

<iframe src="https://trinket.io/embed/python3/20b4a15af9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 정렬 모양 바꾸기

`정렬.reshape()` 메서드는 새로운 정렬을 되돌려주고 그것을 변수에 저장하는 메서드입니다.

첫 번째 매개변수에는 정렬의 치수를 입력하고, 두 번째 매개변수에는 정렬 아이템의 개수를 입력하면 됩니다.

<iframe src="https://trinket.io/embed/python3/2143d07d6a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
