---
sidebar_position: 14
id: 'stringmethod2'
---

# 문자열 메서드 2

<iframe width="560" height="315" src="https://www.youtube.com/embed/D4xUOyss96k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 문자 더하기

문자를 `+`를 사용하여 더할 수 있습니다.

하지만 반복되는 패턴을 더하고 싶다면 어떻게 해야 할까요?

다음과 같은 방법도 있습니다.

문자 `*` 숫자는 문자를 숫자만큼 반복하여 되돌려준다는 뜻입니다.

예를 들어 `"Hello" * 2`는 `HelloHello`입니다.

<iframe src="https://trinket.io/embed/python/54f740c487" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 문자에 대한 정보

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

## 파이썬 문자 자르기 - 나쁜말 필터기

나쁜 단어 필터링하는 프로그램을 만들겠습니다.

먼저, 나쁜 말을 물어보고 `나는 {나쁜 말}이 아니다`라는 뜻이 있는 문장을 만들었습니다.

그리고, `partition()` 메서드를 사용하여 나쁜 단어를 기준으로 문장을 자르고 그 나쁜 단어 대신 `**`를 넣었습니다.

또 다른 예시를 들어보겠습니다.

이 예시에서 `name`을 기준으로 잘랐습니다. `partitionedSentence`를 출력하면 `("Hello. My ", "name", " is Hyunseung")`가 터미널에 출력됩니다.

인덱싱을 사용하여 `name` 전의 문장과 `name` 후의 문장을 결합했습니다.

<iframe src="https://trinket.io/embed/python/d278186aad" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
