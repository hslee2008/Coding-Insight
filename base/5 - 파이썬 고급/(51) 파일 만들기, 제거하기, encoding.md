# 파일 만들기
파일을 만들기 위해서는 'x' 모드를 사용할 수 있습니다.

```
mainFile = open("example.txt", "x")
```

만일 example.txt 라는 파일이 이미 존재한다면 에러가 생기게 되고, 그렇지 않다면 example.txt 파일을 만들 수 있습니다.

# 파일 제거하기
파일을 제거하려면 os라는 모듈을 사용해야 합니다.

```
import os

os.remove("example.txt") #첫 번째 방법
os.rmdir("example.txt") #두 번째 방법 (ReMoveDIRectory)
```

# 인코딩
키보드에 존재하지 않는 문자나 이모지를 읽기 위해서는 인코딩이라는 옵션을 사용해야 합니다.

파이썬은 기본적으로 Ascii Code 형식을 지원하지만 이모지의 경우는 UTF-8를 사용하기 때문에 인코딩을 사용하여 변환해줘야 합니다.

```
with open("example.txt", "w", encoding="UTF-8") as mainFile:
  mainFile.write("testing123")
```
