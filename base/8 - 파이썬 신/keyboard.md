# 키보드
키보드를 제어해보겠습니다.

# 키보드 모듈 준비
> pip install keyboard

# 키보드 문자 쓰기
키보드를 이용하여 'Python keyboard controll'을 써보겠습니다.

```
import keyboard as key

key.write("Python keyboard controll")
```

# 키보드 누르기
키보드에서 shift(쉬프트), alt(알트), 그리고 ctrl(컨트롤) 키를 이용하기 위하여 press_and_release() 메서드를 사용할 수 있습니다.

```
import keyboard as key

key.press_and_relase("ctrl+alt+delete")
```

# 키보드 기다리기
어떤 키가 눌러지기 전까지 기다라는 방법도 있습니다.

```
import keyboard as key

key.wait("ctrl")
print("pressed ctrl")
```
