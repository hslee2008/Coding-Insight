---
sidebar_position: 72
id: 'request'
---

# 리퀘스트

'물을 리퀘스트하다'라고 할 때 리퀘스트는 '요구하다'를 의미합니다.

리퀘스트는 파이썬에서 웹에 있는 정보를 가지고 오는 모듈의 이름입니다.

온라인상에서 원하는 데이터를 리퀘스트하는 것이 가능합니다.

예를 들어 온라인에 올려진 유명한 사람의 생일 JSON 파일을 파이썬 프로그램에서 가지고 와서 사용할 수 있습니다.

## get()

온라인에서 `https://api.github.com/events` 데이터를 요청하여 JSON 데이터를 변수 안에 저장하겠습니다.

GET은 HTTP 메서드로 HTTP에 있는 데이터를 가지고 오는 방법의 하나입니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/a8fbf8fda2" height="400" />

## params

GMAIL에 로그인할 때 처음으로 뜨는 스크린의 URL은 다음과 같습니다.

```
https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
```

`accounts.google.com/signin/v2/indentifier?` 링크에서 `continue = https%3A%2F%2Fmail.google.com%2Fmail%2F`, `service = mail`이고 `sacu=1`, `ripe = 1`, `flowName = GlifWebSignIn`, 그리고 `flowEntry = ServiceLogin`이 있습니다.

그리고 `indentifier?` 뒤에 있는 데이터가 다 딕셔너리로 표현이 될 수 있습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/3f896f4b27" height="400" />

## 리스폰스

리퀘스트를 하여 돌아오는 값을 반응이라고 합니다.

반응은 다양한 포맷이 있을 수 있습니다. JSON 파일일 수 있고 HTML 파일 일 수도 있습니다.

### text

문자로 전환은 text 키를 이용하여 새로운 변수 안에 저장할 수 있습니다.

### encoding

데이터를 가지고 오며 ASCII에 존재하지 않는 문자가 있어서 문제가 발생할 수 있습니다.

반응.encoding의 형태로 encoding의 값을 알 수 있고 지정하는 것이 가능합니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/4751110c8f" height="400" />

## status_code

데이터의 상태는 `status_code` 키를 사용할 수 있습니다.

200이 출력이 된다면 성공했습니다.

모든 `status_code`는 여기에서 배울 수 있습니다.

쉽게 성공했는지만 확인하기 위하여 ok 키를 이용할 수 있습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/ae32425775" height="400" />

## header

머리글이란 리퀘스트를 할 때 어떤 리퀘스트인지 설명하는 데이터 이름입니다.

머리글은 영어로 header라고 하고 `header` 매개변수 안에 딕셔너리로 나만의 머리글을 만드는 것이 가능합니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/30fb5ba090" height="400" />
