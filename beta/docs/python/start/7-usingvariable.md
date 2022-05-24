---
sidebar_position: 7
id: 'usingvariable'
---

# 변수 사용하기

변수를 사용하는 방법을 알아보겠습니다.

<iframe src="https://www.youtube.com/embed/Qu5_eBK6OkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 변수 값 바꾸기

변수에 저장된 값을 바꾸기 위하여 저희는 먼저 변수를 선언하겠습니다.

변수를 만들었다면 이제 변수의 값을 새로운 데이터로 바꾸어 보겠습니다.

변수를 만들었을 때와 같이 '변수 이름 = 값' 코드를 실행하면 됩니다.

<iframe src="https://trinket.io/embed/python/4745a3ecb9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 변수 삭제하기

변수가 더 이상 필요 없고 이 코드가 실행되고 있는 기기에 저장 공간이 많이 없다면 삭제해도 됩니다.

삭제는 del 키워드를 사용하고 뒤에 변수 이름을 넣으면 이제 변수를 다시 사용할 수 없게 됩니다.

```python
name = 'Coding-Insight'
del name
print(name)
```

이 코드를 실행하면 에러가 생깁니다.

그 이유는 name이라는 변수가 삭제되어 존재하지 않기 때문입니다.

## 변수를 한번에 많이 선정하기

처음에는 원하는 변수들의 이름을 다 쉼표로 나누고 '='를 붙입니다.

'=' 뒤에 각 변수의 값을 순서대로 나열합니다.

위의 방법을 따르면 첫 번째 변수에 첫 번째 값이 저장되고 두 번째에는 두 번째 값이 지정됩니다.

```python
a, b, c = 1, 2, 3
print(a, b, c) # 1 2 3이 출력됩니다.
```

변수 5개에 값 `"alphabet"`을 저장하고 싶다고 가정을 해보겠습니다.

하지만 `name="alphabet"` 코드를 5번 실행하려면 시간이 많이 걸립니다.

그래서 파이썬에서는 변수를 `=`로 연결하여 끝에 한 값을 넣어주면 모든 변수에 그 마지막 값이 저장됩니다.

```python
a = b = c = d = e = 'alphabet'
print(a, b, c, d, e) # alphabet이 5번 출력됩니다.
```

<iframe src="https://trinket.io/embed/python3/ac33761c8a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
