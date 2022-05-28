---
sidebar_position: 59
id: 'pip'
---

# PIP

PIP는 파이썬에서 파일 또는 모듈을 다루는 프로그램 이름입니다.

![설정](/img/python/installation/optional_feat.png)

:::note
파이썬 3.4 버전 이상이면 PIP는 자동으로 설치가 되지만 그 아래버전은 처음에 파이썬을 내려받을 때 PIP를 설치 안 했을 수 있습니다.
:::

## 설치를 했는지 확인하는 방법

터미널을 열고 `pip --version`이라고 친 후 엔터를 누릅니다.

만일 에러가 뜨지 않고 숫자가 나온다면 PIP는 설치되어있는 것입니다.

하지만 빨간 글씨로 에러가 나면 설치되지 않은 것입니다.

## 설치 방법

1. 처음 파이썬 마법사를 검색하여 클릭한 후 'MODIFY'를 누르세요. 다음에 'pip 설치' 옵션을 선택한 후 다시 설치하는 방법도 있습니다.
2. cmd에서 `pip install pip`이라고 치면 됩니다.

## install & uninstall

PIP에서 파이썬 모듈을 설치할 수 있습니다. CMD에서 다음과 같은 코드를 입력 후 엔터를 누르세요.

```bash
pip install camelcase
```

camelcase라는 모듈을 설치했습니다.

그 다음 `pip uninstall camelcase`를 입력하시면 camelcase가 삭제됩니다.

```bash
pip uninstall camelcase
```

## show

어떤 package에 대한 정보를 보기 위하여 `pip show` 커맨드를 사용할 수 있습니다.

```bash
pip show pygame
```

위를 실행하면 이름, 버전, 설명, 웹사이트, 작가 이름과 이메일, 라이선스, 설치된 장소, 그리고 이 모듈을 사용하기 위하여 어떤 환경이 필요한지 설명이 출력됩니다.
