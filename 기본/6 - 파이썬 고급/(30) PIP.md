# PIP이란?
PIP는 파이썬에서 파일 또는 모듈을 다루는 프로그램 이름입니다. 파이썬 3.4 버전 이상이면 PIP는 자동으로 다운로드가 되지먼 처음에 파이썬을 다운로드할때 PIP를 설치를 안했을 수 있습니다.

# PIP 설치를 했는지 확인하는 방법
처음에 파이썬 IDLE을 열때 윈도우 밑에 검색하는 창에서 IDLE을 찾았습니다. 우리는 CMD라는 프로그램을 이용하여 PIP가 설치 되었는지 알아보겠습니다. 검색창에 'cmd'라고 친후 엔터를 누르면 새로운 창이 뜹니다. 'pip --version'이라고 입력후 엔터를 누릅니다. 만일 에러가 뜨지 않고 숫자가 나온다면 PIP는 설치 되어있는 것입니다. 하지만 빨간 글시로 에러가 나면 설치가 되지 않았습니다.

# PIP 설치 방법
1. 처음 파이썬 마법사를 다시 클릭한 후 'MODIFY'를 누르세요. 다음에 'pip 설치' 옵션을 선택한 후 다시 설치하는 방법도 있습니다
2. cmd에서 'pip install pip'를 치세요

# PIP install
PIP에서 파이썬 모듈을 설치할 수 있습니다. CMD에서 다음과 같은 코드를 입력후 엔더를 누르세요.

```
pip install camelcase
```

# PIP uninstall
Camelcase라는 모듈을 설치했습니다. 다음에 `pip uinstall camelcase`를 입력하세요. Camelcase가 삭제됩니다.

```
pip uninstall camelcase
```

# PIP list
지금까지 설치된 모든 모듈을 보기 위하여 `pip list`라고 CMD에 입력하세요. 설치된 모든 모둘이 출력됩니다. 저는 다음과 같은 모듈이 설치 되었습니다.

```
Package                           Version
--------------------------------- ---------
appdirs                           1.4.4
asgiref                           3.4.1
atomicwrites                      1.4.0
attrs                             20.3.0
autopep8                          1.5.5
backcall                          0.2.0
backports.entry-points-selectable 1.1.0
black                             20.8b1
certifi                           2021.5.30
click                             7.1.2
cycler                            0.10.0
decorator                         4.4.2
distlib                           0.3.2
Django                            3.2.5
filelock                          3.0.12
iniconfig                         1.1.1
ipykernel                         5.5.0
ipython                           7.20.0
ipython-genutils                  0.2.0
jedi                              0.18.0
jupyter-client                    6.1.11
jupyter-core                      4.7.1
keyboard                          0.13.5
kiwisolver                        1.3.1
matplotlib                        3.4.2
mypy-extensions                   0.4.3
numpy                             1.21.0
packaging                         20.9
pandas                            1.3.0
parso                             0.8.1
pathspec                          0.8.1
pbr                               5.6.0
pickleshare                       0.7.5
Pillow                            8.3.1
pip                               21.1.3
pipenv                            2021.5.29
platformdirs                      2.0.2
pluggy                            0.13.1
prompt-toolkit                    3.0.16
protobuf                          3.17.3
py                                1.10.0
pycodestyle                       2.6.0
pygame                            2.0.1
Pygments                          2.8.0
pyparsing                         2.4.7
pytest                            6.2.2
python-dateutil                   2.8.1
pytz                              2021.1
pywin32                           300
pyzmq                             22.0.3
selenium                          3.141.0
setuptools                        56.0.0
six                               1.15.0
sprites                           1.39
sqlparse                          0.4.1
stevedore                         3.3.0
toml                              0.10.2
tornado                           6.1
traitlets                         5.0.5
typed-ast                         1.4.2
typing-extensions                 3.7.4.3
urllib3                           1.26.6
virtualenv-clone                  0.5.4
virtualenvwrapper-win             1.2.6
wcwidth                           0.2.5
wheel                             0.36.2
```
