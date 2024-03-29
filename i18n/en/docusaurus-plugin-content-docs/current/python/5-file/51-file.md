# 파일 처리

파이썬에서는 파일을 만들고, 읽고, 쓰고, 지우는 것이 가능합니다.

출력에서 `print()` 함수를 이용하여 파일에 쓰는 것이 가능합니다.

`open()`이라는 함수는 파일을 여는 메서드입니다.

## 파일 주소

파일 주소는 파일을 가지고 오는 데 매우 중요한 변수입니다.

파일 주소는 VSCode에서 파일을 우클릭하고 `copy path` 버튼을 누르면 전체 파일 주소가 복사됩니다.

![copy path](/img/python/file/copy_path.png)

## 파일 열고 닫기

파일 열기는 `open()` 함수를 이용할 수 있습니다.

첫 번째 매개변수로 파일의 주소를 적고 두 번째는 모드를 적습니다. 모드는 다음 시간에 배우겠습니다.

만일 두 번째 매개변수인 모드를 입력하지 않았다면 읽기모드로 파이썬은 인식합니다.

:::note 항상 파일을 연 후 닫아야 합니다.

그렇지 않으면 파이썬 코드가 끝나도 계속 파일이 읽어질 수 있습니다. :::

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/5755f85207"
  height="400"
/>

## 인코딩

키보드에 존재하지 않는 문자나 이모지를 읽기 위해서는 인코딩이라는 옵션을 사용해야 합니다.

파이썬은 기본적으로 Ascii Code 형식을 지원하지만 이모지의 경우는 `UTF-8`를 사용하기 때문에 인코딩을 사용하여 변환해줘야 합니다.

```py
mainFile = open("example.txt", "r", encoding="UTF-8")
mainFile.close()
```

:::note `r`의 의미에 대해 자세히 알아보겠습니다.
