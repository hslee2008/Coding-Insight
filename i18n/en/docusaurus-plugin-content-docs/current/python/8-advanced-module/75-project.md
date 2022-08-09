# 다양한 프로젝트

## 스펨 이메일 장난

`smtplib`와 `ssl`을 설치 해야합니다.

아마도 이미 설치 되어있겠지만 혹시 모르니까 이 코드를 터미널에서 실행을 하세요.

```sh
pip install smtpllib
pip install ssl
```

먼저, 저의 컴퓨터에서 서버를 연결을 해야합니다.

서버란, 이메일을 보내는 기계라고 할 수 있습니다.

```sh
python -m smtpd -c DebuggingServer -n localhost:1025
```

계정에서 먼저 파이썬이 로그인을 하는 것을 허락해야합니다.

[설정](https://myaccount.google.com/lesssecureapps)에서 허락을 누르세요.

만일 구글이 당신의 계정을 블록킹 했다면 다른 계정으로 하세요.

참고로 그 계정과 밑에 있는 코드의 계정 이메일이 일치해야합니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/db9f325b98"
  height="400"
/>

## 자동으로 줌 열기

파이썬에서 자동으로 줌을 열 수 있습니다.

먼저, 파이썬 모듈의 도움이 필요합니다. 줌 링크를 열기 위하여 webbrowser와, 키보드에서 엔터와 비밀번호를 칠 때, 그리고 로딩하는데 코드를 멈출 수 있는 time 모듈이 필요합니다.

```sh
pip install keyboard
pip install webbrowser
```

1. 몇 분 기달릴지 `minute` 변수에 저장한 후 코드를 실행합니다.
2. 웹 프라우저에서 줌 링크를 열고 5초후 왼쪽화살표와 엔터를 눌러 줌을 열고, 비밀번호를 입력하고, 로딩을 멈춥니다.

![zoom](/img/python/proj/zoom.png)

```py
import webbrowser, keyboard, time

zoomlink = '여기에 줌 링크 넣기'
zoomid = '여기에 아이디 넣기'

minute = int(input("몇 분 기달리기: "))
print(minute, " 기다리겠습니다.")
time.sleep(minute)

webbrowser.open(zoomlink)

time.sleep(5)
keyboard.press_and_release("left")
keyboard.press_and_release("enter")
time.sleep(5)
keyboard.write(zoomid)
keyboard.press_and_release("enter")
```
