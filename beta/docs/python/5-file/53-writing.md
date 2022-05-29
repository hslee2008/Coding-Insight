---
sidebar_position: 53
id: 'writing'
---

# 파일 쓰기

파일을 쓰는데는 두 가지 모드가 있습니다.

'w'는 그 파일 안에 있는 모든 내용을 새로운 텍스트로 바꾸고 'a'는 새로운 줄에 쓰고자 하는 텍스트를 더합니다.

<iframe src="https://trinket.io/embed/python3/890655e828" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## write()

`write()` 메서드를 사용하면 파일에 새로운 내용을 쓸 수 있습니다.

## writelines()

`writelines()`는 문자로 구성된 리스트의 값들을 결합하고 파일에 씁니다.

<iframe src="https://trinket.io/embed/python3/2fdad67c09" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

<br /><br /><br /><br /><br />

:::note

## 파일 만들기

파일을 만들기 위해서는 `x` 모드를 사용할 수 있습니다.

```py
mainFile = open("example.txt", "x")
```

만일 `example.txt` 라는 파일이 이미 존재한다면 에러가 생기게 되고, 그렇지 않다면 `example.txt` 파일을 만들 수 있습니다.

## 파일 삭제

파일을 삭제하려면 os라는 모듈을 사용해야 합니다.

```py
import os
os.remove("example.txt") #첫 번째 방법
os.rmdir("example.txt") #두 번째 방법 (ReMoveDIRectory)
```

:::
