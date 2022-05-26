---
sidebar_position: 16
id: 'ascii'
---

# ASCII

ASCII는 한국어로 '아스키'라고 발음합니다.

아스키는 American Standard Code for Information Interchange의 약자입니다.

한국어로는 "정보 교환을 위한 미국 표준 암호"를 뜻합니다.

ASCII는 알파벳의 모든 문자를 0에서 127(자연수)로 나타낸 코드입니다.

예를 들면, 아무것도 없는 ' '는 0입니다.

:::note
알파벳을 ASCII로 나타낼 때 a가 클까요 아니면 A가 클까요?

A가 크게 보이지만 ASCII에서는 a가 더 큽니다.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/YnFUR00gk5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ord()

어떤 문자의 ASCII 코드를 알기 위하여 `ord()` 함수를 사용할 수 있습니다.

단, 꼭 문자여야 합니다. 알파벳 하나하나만 입력할 수 있습니다.

여러 개의 아스키를 찾고 싶으면 for 반복문을 사용해야 하지만 이 내용은 조금 뒤에 배우겠습니다.

<iframe src="https://trinket.io/embed/python3/4f4507d894" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## chr()

반대로, `chr()`은 아스키코드를 알파벳으로 바꾸는 함수입니다.

<iframe src="https://trinket.io/embed/python3/2f04cf1944" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
