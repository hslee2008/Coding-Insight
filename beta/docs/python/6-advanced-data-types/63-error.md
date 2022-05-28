---
sidebar_position: 63
id: 'error'
---

# 에러

## 에러 메시지

`except`에서 에러의 메시지를 알 수 있습니다.

<iframe src="https://trinket.io/embed/python3/92021ab319" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 나만의 에러

파이썬에서 우리만의 에러를 만들 수 있습니다.

`raise Exception()` 코드를 실행하면 됩니다.

괄호 안에 에러 설명을 넣을 수 있습니다.

<iframe src="https://trinket.io/embed/python3/bc5786961c" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 에러 처리 다시 만들기

에러를 다시 만드는 것은 에러를 `except`로 잡았을 때 그 안에서 다른 에러를 만드는 작업을 뜻합니다.

`raise Exception()` 다음에 `from ERR`를 붙이면 됩니다.

<iframe src="https://trinket.io/embed/python3/dbdf0c2a5e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
