---
sidebar_position: 13
id: 'stringmethod'
---

# 문자열 메서드

<iframe width="560" height="315" src="https://www.youtube.com/embed/D4xUOyss96k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4_uGNu9IlCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 문자열 메서드란?

메서드란 특정 객체에 정의된 함수를 호출하는 것을 뜻합니다.

즉, 문자열이라는 객체에 미리 만들어진 기능들을 사용한다는 뜻입니다.

예: 뒤집기, 다 대문자로 만들기 등...

## 문자의 대소문자 메서드

파이썬에서 대문자를 소문자로, 소문자를 대문자로 바꿀 수 있는 방법이 있습니다.

`title()`은 책 제목 형식(책 제목 형식은 첫 번째 단어의 첫 번째 알파벳이 대문자인 형태)으로 바꿉니다.

`upper()`은 모든 알파벳을 대문자로 전환합니다.

`lower()`은 모든 알파벳을 소문자로 전환합니다.

`casefold()`는 모든 알파벳을 소문자로 전환합니다. `lower()`와 조금 달리 영어가 아닌 문자도 소문자로 전환합니다.

`isupper()`은 모든 알파벳이 대문자인지 알려줍니다.

`islower()`은 모든 알파벳이 소문자인지 알려줍니다.

`istitle()`은 책 제목 형식인지 알려주는 역할을 합니다.

<iframe src="https://trinket.io/embed/python3/75c4671dd7" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 문자에 대한 정보 구하는 메서드

| 메서드         | 설명                                     |
| -------------- | ---------------------------------------- |
| isalnum()      | 문자가 알파벳과 숫자로만 이루어져 있는지 |
| isalpha()      | 문자가 알파벳으로만 되어있는지           |
| isdecimal()    | 숫자(0~9)로만 이루어져 있는지            |
| isdigit()      | 숫자로만 이루어져 있는지                 |
| isidentifier() | 변수 이름 규칙과 일치하는지              |
| isnumeric()    | 정수로만 이루어져 있는지                 |
| isprintable()  | 출력하는 것이 가능한지                   |
| isspace()      | 스페이스(공백)로만 이루어져 있는지       |

<iframe src="https://trinket.io/embed/python/9da1796e91" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## len()

가끔 파이썬에서 문자의 길이를 알아야 할 때가 있습니다.

예를 들어 사용자가 새로운 암호를 `input()` 함수 안에 입력하고 있을 때, 파이썬 프로그램은 암호가 짧아서 조금 더 긴 암호를 넣으라고 물어 볼 수 있습니다.

문자의 길이를 구하기 위해서 `len()` 함수를 사용할 수 있습니다.

`len`은 영어로 '길이'를 뜻하는 `length`의 줄임말입니다.

<iframe src="https://trinket.io/embed/python/41e9ea9617" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## index()

`index()` 메서드를 사용하여 문자 안에 또 다른 문자가 존재하는지 알 수 있습니다.

```py
print('abcdef'.index('abc'))
```

만일 문자열이 문자 안에 없다면 에러가 생깁니다.

## center()

파이썬에서 센터링이란 문자를 ' '로 둘러싸는 것을 뜻합니다. ' '로 둘러싸여 있지만 가운데에 있는 것처럼 보입니다.

```py
txt = "Hello, World!"
x = txt.center(50)
print(x)
```

`center`에서 첫 번째 숫자는 문자를 센터하는 ' '의 수이고 두 번째는 문자를 센터할 문자입니다.

```py
txt = "Hello, World!"
x = txt.center(50, '|')
print(x)
```

<iframe src="https://trinket.io/embed/python3/6051c25773" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## partition()

나쁜 단어 필터링하는 프로그램을 만들겠습니다.

먼저, 나쁜 말을 물어보고 `나는 {나쁜 말}이 아니다`라는 뜻이 있는 문장을 만들었습니다.

그리고, `partition()` 메서드를 사용하여 나쁜 단어를 기준으로 문장을 자르고 그 나쁜 단어 대신 `**`를 넣었습니다.

또 다른 예시를 들어보겠습니다.

이 예시에서 `name`을 기준으로 잘랐습니다. `partitionedSentence`를 출력하면 `("Hello. My ", "name", " is Hyunseung")`가 터미널에 출력됩니다.

인덱싱을 사용하여 `name` 전의 문장과 `name` 후의 문장을 결합했습니다.

<iframe src="https://trinket.io/embed/python/d278186aad" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## ~ in ~

부분문자열은 문자 안의 문자입니다.

예를 들어 문자 `abc`에는 부분문자열 'a','b'등이 존재합니다.

문자 안에 부분문자열이 존재하는지 알기 위하여 우리는 'in'이라는 키워드를 사용할 수 있습니다.

'in'은 한국어로 '안'이라는 뜻으로 "abc가 abcdef 안에 있나요?"라고 파이썬에게 물어보는 것과 같습니다.

<iframe src="https://trinket.io/embed/python/a26965d6fd" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## +와 \*

문자를 `+`를 사용하여 더할 수 있습니다.

하지만 반복되는 패턴을 더하고 싶다면 어떻게 해야 할까요?

다음과 같은 방법도 있습니다.

문자 `*` 숫자는 문자를 숫자만큼 반복하여 되돌려준다는 뜻입니다.

예를 들어 `"Hello" * 2`는 `HelloHello`입니다.

<iframe src="https://trinket.io/embed/python/54f740c487" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
