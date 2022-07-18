---
sidebar_position: 74
id: 'keyboardmouse'
---

# 키보드와 마우스 제어

## 설치하기

```sh
pip install keyboard
pip install mouse
```

## 준비하기

```py
import keyboard as key
import mouse as m
```

## 키보드

### 키보드로 문자 쓰기

키보드를 이용하여 'Python keyboard control'을 써보겠습니다.

```py
import keyboard as key key.write("Python keyboard control")
```

### 키보드 누르기

키보드에서 `shift`(쉬프트), `alt`(알트), 그리고 `ctrl`(컨트롤) 키를 이용하기 위하여 `press_and_release()` 메서드를 사용할 수 있습니다.

```py
import keyboard as key
key.press_and_relase("ctrl+alt+delete")
```

## 마우스

### 마우스 클릭

마우스를 클릭하는 함수 `click()`을 이용하여 왼쪽 또는 오른쪽 버튼을 마우스가 있는 자리에서 클릭할 수 있습니다.

left, right은 왼쪽 오른쪽 버튼인데 가운데 버튼은 무엇일까요?

가운데 버튼은 스크롤링 버튼을 클릭하는 것을 의미합니다.

`ctrl` 키를 누르고 왼쪽 클릭과 같은 것입니다.

```py
m.click("left")
m.click("right")
m.click("middle")
```

### 마우스 위치

파일을 삭제하려면 os라는 모듈을 사용해야 합니다.

```py
print(m.get_position())
```

### 드래깅

드래깅은 마우스에 위에 있는 물질을 좌표로 움직이는 행위입니다.

```py
m.drag(0, 0, 200, 200, duration=3.0)
```

위의 커맨드를 지금 실행하면 VSCode 창이 드래깅됩니다.

### 마우스 움직이기

마우스는 `move()` 메서드를 움직일 수 있습니다.

```py
b.move(100, 100, duration=3.0)
```

마우스를 오른쪽으로 100, 밑으로 100 움직입니다.

왼쪽 또는 위로 움직이고 싶다면 음의 정수 숫자를 입력하면 됩니다.

### 스크롤링

마우스 스크롤링은 `scroll()` 메서드를 사용하여 위아래로 페이지를 움직일 수 있습니다.

```py
m.scroll(-2)
```

2 밑으로 스크롤링합니다.

위로 스크롤링하고 싶다면 양의 정수를 입력하세요.
