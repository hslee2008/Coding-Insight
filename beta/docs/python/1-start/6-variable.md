---
sidebar_position: 6
id: 'variable'
---

# 변수

프로그래밍에서는 변수라고 하면 어떤 정보를 담을 수 있는 장소를 뜻합니다.

예를 들어 상자를 생각해보세요. 상자 안에는 다양한 물건을 담을 수 있습니다.

이와 비슷하게 변수도 다양 한 정보를 담을 수 있는 '상자'라고 할 수 있습니다.

<iframe src="https://www.youtube.com/embed/Qu5_eBK6OkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 변수 선언하기

변수를 만들려면 다음과 같은 방법을 사용할 수 있습니다.

```py
name = data
```

에서 NAME은 변수의 이름을 뜻하고 DATA는 값입니다.

이렇게 하면 변수를 만들 수 있습니다.

<iframe src="https://trinket.io/embed/python/a5d980683b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 변수 사용 방법

변수를 사용하기 위해서는 변수의 이름을 print()안에 넣으면 변수 이름이 출력되지 않고 변수의 값이 출력됩니다.

```py
name = 'John'
print(name) #John이 출력됩니다.
```

파이썬에서 변수의 이름은 대문자 소문자가 구별됩니다.

NAME과 name은 대문자와 수문자가 다르기 때문에 다른 변수입니다.

## 변수 이름을 만들때 규칙

변수를 만들 때 매우 다양한 규칙이 있습니다.

1. 영문자 (대문자, 소문자), 숫자, 언더바 (\_) 만 사용할 수 있습니다.
2. 변수의 이름의 첫 자리는 숫자이면 안됩니다.
3. 파이썬 키워드는 변수의 이름으로 사용할 수 없습니다 (키워드에 대한 더 자세한 내용은 조금 뒤에 배우겠습니다)
