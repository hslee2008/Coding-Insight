# `__name__`

`__name__`이란 실행이 되고 있는 파일의 이름을 알려주는 변수입니다.

이 변수는 파일이 `import` 되었는지 아니면 원래 파일에서 실행이 되었는지 알 수 있는 변수입니다.

또한, `__name__`은 모듈의 이름을 확인하는 데도 사용됩니다.

## `__name__` == `__main__`

다음과 같은 예시를 보겠습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/c6d50081cf"
  height="400"
/>

main.py를 실행하면 HI가 두 번 출력이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/b01563dd19"
  height="400"
/>

위에 있는 예시에 있는 main.py 파일을 실행하면 HI가 한번 출력됩니다.

`__name__ == '__main__'`은 파일이 직접 실행이 되었다면 조건문 안에 있는 코드가 실행이 되고 그렇지 않다면 실행이 되지 않습니다.
