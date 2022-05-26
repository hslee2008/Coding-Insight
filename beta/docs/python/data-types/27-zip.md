---
sidebar_position: 27
id: 'zip'
---

# 압축 프로그램

사실 윈도우아 맥에는 압축 프로그램이 있습니다.

하지만 미리 코드가 다 짜진 프로그램을 사용하면 재미가 없습니다!

저희 만의 압축 프로그램을 만들어 보겠습니다.

## 프로그램 설명

1. 압축의 원리: 자주 반복하는 문자들 대신 더 짧은 문자열을 넣는 방법입니다.
2. 딕셔너리를 사용해서 이 압축된 정보를 닮아 보겠습니다

## 코드 설명

1. 문장 입력

```python
sent = input("압축할 글: ")
```

2. 압축 정보

```python
zipp_info = {}
```

3. 압축하기

```python
sent = sent.replace("Hello", "0")
sent = sent.replace("World", "1")
```

4. 압축 정보 저장

```python
zipp_info["Hello"] = "0"
zipp_info["World"] = "0"
```

5. 압축 결과 출력

```python
print(sent)
```

<iframe src="https://trinket.io/embed/python3/836101c4af" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
