# 파일 만들기
파일을 만들기 위하여 'x' 모드를 사용할 수 있습니다.

```
mainFile = open("example.txt", "x")
```

만일 example.txt 파일이 이미 존재한다면 에러가 생기고 그렇지 않다면 example.txt 파일을 만들 것입니다.

# 파일 제거하기
파일을 제거하려면 os라는 모듈을 사용해야 합니다.

```
import os

os.remove("example.txt") #첫 번째 방법
os.rmdir("example.txt") #두 번째 방법 (ReMoveDIRectory)
```

# ENCODING
읽고 싶은 파일이 있는데 만일 이모지나 키보드에 존재하지 않는 케릭터가 있다면 encoding이라는 옶션을 사용하여 어떤 이코딩을 사용하여 파일을 열지 지정할 수 있습니다.

이모지는 ASCII(파이썬 파일을 여는 원래 값)은 이모지가 없어서 UTF-8을 사용해야합니다.

```
with open("example.txt", "w", encoding="UTF-8") as mainFile:
  mainFile.write("testing123")
```
