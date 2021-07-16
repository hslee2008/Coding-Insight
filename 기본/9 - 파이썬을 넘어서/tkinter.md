# tkinter
tkinter은 GUI 프로그램을 만들기 위한 파이썬 모듈입니다. GUI란 Graphical User Interface의 약자입니다. Graphical은 그래픽, user interface는 사용자 상호 작용을 뜻합니다

# 준비
> pip install tkinter

tkinter를 설치하겠습니다. 대부분 파이썬 프로그램은 다 이미 tkinter 설치 되어 있을 것입니다.

그리고 새로운 파일을 만들고 tkinter 파일을 가지고 오겠습니다.

```
from tkinter import *

window = Tk()

window.mainloop()
```

# Button
tkinter에서 버튼을 만들겠습니다.

```
from tkinter import *

window = Tk()

def subscribe():
  print("User subscribed")

butt = Button(window, text = "Subscribe", command = subscribe)
butt.pack()

window.mainloop()
```

먼저, subscrbe 버튼을 누르면 실행이 되는 함수를 만듭니다.
다음, 변수 안에 Button() 클래스를 이용하여 버튼을 만듭니다.
다음에, butt.pack() 메서들 이용하여 button을 스크린에 보이게합니다.

|대개변수 이름|설명|예시|
|---|---|---|
|activebackground|마우스가 다면 버튼의 바탕화면 색|activebackground="red"|
|activeforegroud|마우스가 다면 버튼의 텍스트 색|activeforeground="blue"|
|command|버튼을 클릭하면 실행할 함수|command = runThisWhenClicked|
|height&width|높이와 길이|height = 300, width = 500|
|background|원래 바탕화면 색|background = "red"|
|foreground|원래 텍스트 색|foregroud = "black"|
|image|텍스트 대신 보일 이미지|image = "image.png"|

