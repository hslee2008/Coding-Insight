# 압축 프로그램

사실 윈도우아 맥에는 압축 프로그램이 있습니다.

하지만 미리 코드가 다 짜진 프로그램을 사용하면 재미가 없습니다!

저희 만의 압축 프로그램을 만들어 보겠습니다.

## 프로그램 설명

1. 압축의 원리: 자주 반복하는 문자들 대신 더 짧은 문자열을 넣는 방법입니다.
2. 딕셔너리를 사용해서 이 압축된 정보를 닮아 보겠습니다

## 코드 설명

1. 문장 입력

```py
sent = input("압축할 글: ")
```

2. 압축 정보

```py
zipp_info = {}
```

3. 압축하기

```py
sent = sent.replace("Hello", "0")
sent = sent.replace("World", "1")
```

4. 압축 정보 저장

```py
zipp_info["Hello"] = "0"
zipp_info["World"] = "0"
```

5. 압축 결과 출력

```py
print(sent)
```

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/836101c4af" height="400" />

## 실체 파이썬 압축 프로그램

<details>
  <summary>실제 파이썬 압축 프로그램 사용해 보기</summary>
  <div>

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

문자를 압축하겠습니다.

아래 코드에 대한 설명을 하자면

1. 먼저, `zlib` 모듈을 가지고 옵니다.
2. 다음, 압축할 문자를 만듭니다. 이 문자는 `byte` 문자여야 하니 문자 앞에 `b`를 붙입니다.
3. 그리고, `zlib.compress()` 메서드를 이용하여 압축합니다.

아래의 코드를 실행하면 `63`, `44` 숫자가 나옵니다. 이처럼 길이가 63인 문자를 길이가 `44`인 문자로 바꾸기가 가능합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/74a9209480" height="400" />

## level

문자 압축을 하는데 다양한 level이 있습니다.

zlib에서는 총 10개의 level (0~9)이 있습니다.

```
0 - 가장 낮은 level로 압축을 하지 않습니다.
1 - 두 번째로 낮은 level로 압축을 조금 합니다. 속도는 빠릅니다.
...
9 - 가장 높은 level로 압축은 많이 하지만 속도는 느립니다.
```

하지만 위의 예시에서는 1(원래 값)과 9와 차이가 없습니다.

그 이유는 너무 짧기 때문입니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/50ab5d6ef3" height="400" />

## 압축 풀기

압축을 풀기 위하여 `zlib.decompress()` 메서드를 사용할 수 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/c42b0b500e" height="400" />

  </div>
</details>
