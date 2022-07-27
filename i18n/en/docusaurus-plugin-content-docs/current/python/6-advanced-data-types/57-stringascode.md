# 문자열을 코드로

파이썬에서는 문자를 코드처럼 실행하는 것이 가능합니다.

문자를 코드처럼 실행한다면 다양한 것을 할 수 있습니다.

예를 들면, 사용자가 터미널에 입력한 문자를 코드처럼 실행이 가능합니다.

## `eval()`

`eval()`은 evaluation의 약자로 어떤 코드를 계산하거나 한 줄 코드를 실행합니다.

사용자가 파이썬 코드 값을 넣으면 그 값을 계산하여 출력하는 메서드입니다.

예를 들면, 1+1을 입력하면 2가 나오게 할 수 있습니다.

`eval()`을 이용하여 다음 예제를 따라해 보세요.

또한, `eval()` 메서드를 사용할 때 미리 변수를 정하여 딕셔너리로 만든 후 실행도 가능합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/9025f99628" height="400" />

## `exec()`

`exec()`는 execute의 약자로 `eval()`과 비슷하지만 사용자가 입력한 코드를 실행합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/9ca04d8e1f" height="400" />

## `compile()`

`compile()` 함수는 문자를 코드로 컴파일을 합니다.

1. 먼저, 첫 번째 매개변수는 코드를 실행할 문자입니다.
2. 두 번째는 파일 이름입니다. 만일 파일 이름이 없다면 원하는 값을 넣을 수 있습니다.
3. 세 번째는 코드를 컴파일할 모드입니다. `eval`은 하나의 수학 식일 때, `single`은 한 코드일 때, `exec`은 여러 코드일 때 사용할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/4b5e8cc791" height="400" />
