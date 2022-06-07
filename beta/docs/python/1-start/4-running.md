---
sidebar_position: 4
id: 'running'
---

# 파이썬 실행 방법

파이썬을 실행하는 방법은 크게 3가지 방법이 있습니다.

## 1. Code Runner 사용하기

코드를 작성하고 삼각형 버튼을 누르면 결과를 확인할 수 있습니다.

하지만 입력 (다음 시간에 배울 내용) 기능이 없기 때문에 입력을 할 때에는 다른 방법을 사용해야 합니다.

```py
print("hello world")
```

![결과](/img/python/run/code_runner_hello_world.png)

## 2. 터미널 사용하기

터미널이란 코드를 실행할 수 있는 공간입니다.

컴퓨터에게 파이썬 코드를 실행하라고 알려주기 위해서 다음을 실행합니다.

```sh
python hello.py
```

hello 대신 만든 파이썬 파일 이름을 넣으세요.

1. 터미널을 열기 위해서는 VSCode에서 `` ctrl + ` ``를 누르거나 (즉, ctrl을 누르면서 `누르기)
2. Terminal > New Terminal을 버튼을 클릭하면 됩니다.

![터미널](/img/python/run/new_terminal.png)

![결과 확인](/img/python/run/result_hello_terminal.png)

## 3. IDLE

파이썬을 설치할 때 'IDLE' 옵션을 선택했으면 IDLE가 자동으로 설치 됩니다.

앱 리스트에서 IDLE를 찾고 실행하면 다음과 같은 창이 뜨는데...

![IDLE 결과](/img/python/run/idle_hello_world.png)

`print("Hello World")`라고 입력하고 엔터를 누르면 실행이 됩니다.

:::note

## 문제

터미널에서 파이썬이라고 치면 IDLE 프로그램이 작동합니다.

하지만 IDLE에서는 조건문을 사용하기 어렵습니다.

이 상황에서는 `\`라는 문자를 사용할 수 있습니다.

## \

`\`를 사용하면 계속 코드를 작성하겠다는 뜻이 됍니다.

`\`를 IDLE에서 사용하지 않고 VSCode 파이썬에서 사용한다면 들여쓰기를 하지 않아도 됩니다!

들여쓰기가 불편하신 분들은 `\`를 끝에 붙이면 들여쓰기는 신경 안 쓰셔도 됩니다.

0이어도 되고 100이어도 됩니다.

만일 조건문 안에 한줄 이상 코드를 사용하고 싶다면 `;` 를 사용할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/b6c75a2237" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

더 자세한 내용은 조건문에서 확인하세요.

:::

## 4. Trinket (웹사이트에서)

폰이나 다른 기기여서 파이썬을 실행을 하지 못하는 경우에는 Trinket을 사용하면 됩니다.

저희 사이트는 [Trinket](https://trinket.io)에서 IDLE를 사용해 직접 웹사이트에서 코드를 실행할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/93a3b5a1dc" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
