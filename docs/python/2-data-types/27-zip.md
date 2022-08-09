# 압축 프로그램

사실 윈도우아 맥에는 압축 프로그램이 있습니다.

하지만 미리 코드가 다 짜진 프로그램을 사용하면 재미가 없습니다!

저희 만의 압축 프로그램을 만들어 보겠습니다.

## 프로그램 설명

1. 압축의 원리: 자주 반복하는 문자들 대신 더 짧은 문자열을 넣는 방법입니다.
2. 딕셔너리를 사용해서 이 압축된 정보를 닮아 보겠습니다

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/2cf09d6f55"
  height="400"
/>

## 실제 파이썬 압축 프로그램

## ZLIB 모듈

파이썬에서는 파일 또는 데이터 형태를 압축할 수 있는 모듈이 있습니다.

zlib이라는 모듈입니다.

zlib은 ZIP COMPRESSION LIBRARY의 약자입니다.

먼저, PIP을 이용하여 zlib을 내려받겠습니다.

```sh
pip install zlib
```

다음에, 새로운 파일을 만들어 zlib 모듈을 가지고 오겠습니다.

```py
import zlib
```

## 압축하기

1. 먼저, `zlib` 모듈을 가지고 옵니다.
2. 다음, 압축할 문자를 만듭니다. 이 문자는 `byte` 문자여야 하니 문자 앞에 `b`를 붙입니다.
3. 그리고, `zlib.compress()` 메서드를 이용하여 압축합니다.

아래의 코드를 실행하면 `63`, `44` 숫자가 나옵니다. 이처럼 길이가 63인 문자를 길이가 `44`인 문자로 바꾸기가 가능합니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/74a9209480"
  height="400"
/>

## 압축 풀기

압축을 풀기 위하여 `zlib.decompress()` 메서드를 사용할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/c42b0b500e"
  height="400"
/>
