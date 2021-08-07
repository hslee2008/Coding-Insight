# PIP란?
PIP는 파이썬에서 파일 또는 모듈을 다루는 프로그램 이름입니다.

파이썬 3.4 버전 이상이면 PIP는 자동으로 다운로드가 되지만 그 아래버전은 처음에 파이썬을 내려받을 때 PIP를 설치를 안 했을 수 있습니다.

# PIP 설치를 했는지 확인하는 방법
처음에는 파이썬 IDLE을 열 때 윈도우에 검색하는 창에서 IDLE을 찾습니다.

저희는 CMD라는 프로그램을 이용하여 PIP가 설치되었는지 알아보겠습니다.

1. 검색창에 'cmd'라고 친 후 엔터를 누르면 새로운 창이 뜹니다. 맥 PC를 사용중이라면 F4를 눌러 런치패드를 열고 [기타] 폴더 안에 있는 Terminal을 켜면 됩니다.
2. 'pip --version'이라고 입력 후 엔터를 누릅니다.

만일 에러가 뜨지 않고 숫자가 나온다면 PIP는 설치되어있는 것입니다.
하지만 빨간 글씨로 에러가 나면 설치되지 않은 것입니다.

# PIP 설치 방법
1. 처음 파이썬 마법사를 검색하여 클릭한 후 'MODIFY'를 누르세요. 다음에 'pip 설치' 옵션을 선택한 후 다시 설치하는 방법도 있습니다.
2. cmd에서 'pip install pip'이라고 치면 됩니다.

# PIP install
PIP에서 파이썬 모듈을 설치할 수 있습니다. CMD에서 다음과 같은 코드를 입력 후 엔터를 누르세요.

```
pip install camelcase
```

# PIP uninstall
Camelcase라는 모듈을 설치했습니다. 그 다음 `pip uninstall camelcase`를 입력하시면 Camelcase가 삭제됩니다.

```
pip uninstall camelcase
```

# PIP show
어떤 PIP package에 대한 정보를 보기 위하여 `pip show ` 커맨드를 사용할 수 있습니다.

```
pip show pygame
```

위 커맨드를 실행하면 이름, 버전, 설명, 웹사이트, 작가 이름과 이메일, 라이선스, 설치된 장소, 그리고 이 모듈을 사용하기 위하여 어떤 환경이 필요한지 설명이 출력됩니다.

# PIP -v
VERBOSE는 영어로 '말이 많은'을 뜻합니다. 프로그래밍에서는 조금 더 자세히 설명을 한다는 뜻이 있습니다.

-v 옵션을 사용하면 조금 더 자세한 설명이 나옵니다.

```
pip -v show pygame

pip -v list
```

# PIP list
지금까지 설치된 모든 모듈을 보기 위하여 `pip list`라고 CMD에 입력하세요. 설치된 모든 모듈이 출력됩니다.

보기 쉽게 파이썬 PIP에서는 테이블로 터미널에 출력합니다.

# PIP 업그레이드
PIP에서 어떤 파이썬 모듈을 업그레이드를 원한다면 끝에 --upgrade 또는 -U 옵션을 같이 실행하면 자동으로 파이썬 모듈이 업그레이드 됩니다.

```
pip install pygame --upgrade
pip install pygame -U
```

PIP을 업그레이드하고 싶다면 다음과 같은 방법을 사용해야 합니다.

```
pip install pip --upgrade
pip install pip -U
```

# PIP 도움말
PIP 커맨드에서 도움말을 찾기 위하여 pip이라고 터미널에 입력하세요. 조금 뒤 PIP 도움말이 출력이 됩니다.

또는 pip 커맨드 다음에 -h 또는 --help 또는 help 옵션을 달면 아주 자세한 설명이 나옵니다.

다음은 pip 도움말을 호출할 수 있는 모든 커맨드입니다. 가장 상황에 맞는 커맨드를 사용하세요.
```
pip -h
pip --help
pip help
pip
```
