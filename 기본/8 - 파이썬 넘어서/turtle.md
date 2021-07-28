# Turtle이란?
"Turtle이란 영어로 거북이를 뜻합니다."

"빙고!!!"

...라고 할 줄 알았죠? 하지만 터틀은 거북이가 아닙니다.

Turtle은 파이썬에서 그래픽을 만드는데 사용되는 모듈입니다. 원한다면 Turtle을 이용하여 간단한 게임을 만드는 것이 가능합니다.

# Turtle 시작
Turtle은 모듈입니다. 이 모듈은 파이썬을 깔 때 설치가 저동적으로 되어있습니다. 시작하기 위하여 새로운 파일을 만들고 터틀을 가지고 옵니다.


하지만 절대로 파일의 이름을 turtle이라고 만들지 마세요!!! 그렇게 한다면 우리가 터틀을 가지고 올때 터틀 모듈이 아니라 우리의 파일을 가지고 옵니다.

```
import turtle as turty
```

# Turtle 진짜로 시작
터틀에서 우리의 '거북이'가 움직일 창이 필요합니다. 창을 보이게 하기 위하여 'getscreen()' 메서드를 사용헤보겠습니다.

```
import turtle as turty

turty.getscreen()
```

또, 터틀을 만들어야합니다. 터틀이란 파이썬 터틀 모듈에서 주인공입니다. 우리가 그 터틀을 기준으로 그림을 그리거나 게임을 만듭니다. 이 이웹사이트에서 '터틀'이라고 하면 파이썬의 모듈 또는 파이썬의 모듈의 주인공 캐릭터를 뜻합니다.

```
import turtle as turty

mainTurty = turty.Turtle()
```

# Turtle 움직이기
### 앞, 뒤, 옆으로 움직이기
우리가 getscreen 메서드를 사용했을때 새로은 창이 생겼고 그 가운데에 마우스가 있었습니다. 그 마우스를 파이썬에서는 '터틀'이라고 합니다. 이 터틀을 움직이게 하기 위하여 4개의 메서드가 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.right(90) #오른쪽으로 90도 돌기
mainTurty.forward(90) #앞으로 90 움직이기
mainTurty.left(90) #왼쪽으로 90도 돌기
mainTurty.backward(90) #앞으로 90 움직이기
```

right, forward, left, backward 메서드가 있습니다. 이 메서드를 자주 사용할 것입니다. 더 효율적이고 보기 쉽게 만들기 위하여 이 네 메서드의 속기를 알아보겠습니다.

right, forward, left의 가장 앞과 뒤 자를 따서 rt(), fd(), lt()와 backward의 b와 k자를 따서 bk()가 있습니다.

### x, y 좌표
터틀을 x와 y 좌표 한 점으로 움직이는 것도 가능합니다. 바로 goto(x, y) 메서드를 사용하면 됩니다. GO to your room! (너 방으로 가!)는 부모님이 많이 하시는 말씀입니다. 여기서 goto를 따서 터틀을 움직이게 할 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.goto(100, 100)
```

또, let's go to your home(집에 가자)은 친구들 사이 간 자주 사용되는 말입니다. 집(home)으로 가자는 터틀에서는 0, 0으로 가쟈를 뜻합니다.

다음 3 메서드 goto, setpos, setposition은 다 같은 것을 하는 메서드입니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.goto(444, 444)
mainTurty.setpos(444, 444)
mainTurty.setposition(444, 444)

mainTurty.home()
```

x, y 좌표 하나하나 지정하고 싶다면 setx() 또는 sety() 함수를 사용할 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.setx(444)
mainTurty.sety(444)
```

### 터틀 방향
터틀의 방향은 right()와 left()를 이용할 수 있지만 지금 캐릭터의 방향을 기준으로 x 만큼 터틀이 돌아갑니다.

각도를 기준으로 터틀이 보는 각도를 정할 수 있습니다. setheading()과 seth()를 이용하여 터틀 보는 방향을 바꿀 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.setheading(180) #190도로 보기
```

# 그림 그리기
### 도형
터틀에서 원을 제외하고는 다 우리가 right, forward, left, backward를 이용해야 다.

원은 'circle()' 메서드를 사용할 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.circle(100) #100 반지름인 원을 그린다
```

점은 영어로 dot입니다. 터틀에서 점을 그리려면 dot()을 사용할 수 있습니다.

```
mainTurty.dot(20)
```

### 터틀 복제
영어로 stamp는 도장을 의미합니다. 도장을 이용하며 무수히 많은 복제본을 만들 수 있드시 파이썬 터틀에서 터틀이 즈금 있는 위치에 복제본을 그릴 수 있습니다.

```
mainTurty.stamp()

mainTurty.forward(100)
```

터틀 복제본을 삭제하기 위하여 clearstamps() 메서드를 사용할 수 있습니다. clearstamps()를 사용하면 마지막 n개 또는 첫 번째로 만들어진 복제본 n개를 삭제하는 것이 가능합니다.

만일 clearstamps()의 첫 번째 개변수가 양의 정수이면 처음 n개를 제거하고 음의 정수라면 마지막 n개를 없앱니다. 입력하지 않으면 모든 복제본이 삭제됩니다.

```
for i in range(30):
  mainTurty.stamp()
  mainTurty.fd(10)

mainTurty.clearstamps(3)
mainTurty.clearstamps(-3)
mainTurty.clearstamps()
```

### 터틀 속력
터틀에서 우리가 다양한 그림을 그릴 수 있습니다. 하지만 아주 복잡한 형태 또는 시간이 필요하면 터틀이 느르리게 그 작업을 끝날때까지 기다릴 수 없습니다.

```
mainTurty.speed("fastest")
```

터틀의 속도는 0-10 정수로 정할 수 있습니다.

fastest: 0
fast: 10
normal: 6
slow: 3
slowest: 1

speed 안의 대개변수로 정수와 문자 다 가능합니다.

# 터틀의 상태
터틀의 상태에 속하는 메서드는 다 정보를 돌려줍니다.

1. mainTurty.pos() 또는 mainTurty.position()을 사용하여 터틀의 x와 y좌표를 알 수 있습니다. 되돌아오는 값은 튜플입니다.
2. mainTurty.xcor()와 mainTurty.ycor()는 터틀의 각각 x, y 좌표(정수로)를 돌려줍니다.
3. 터틀이 보고있는 각도(정수로)는 mainTurty.heading()로 알 수 있습니다.
4. 터틀과 좌표가 떨어져 있는 길이는 distance(x, y)로 알 수 있습니다.

### 터틀 보이기
터틀의 상태는 hideturtle() 또는 ht()로 터틀을 안 보이게 할 수 있습니다.
6. 반대로. showturtle() 또는 st()로 터틀을 보이게 할 수 있습니다.
7. isvisible()로 터틀이 지금 보이는지 알 수 있습니다.

### 터틀 모양
shape()으로 터틀의 모양을 정할 수 있습니다.

```
turty.shape("circle")
```

터틀의 모양으로 가능한 값을 모두 찾아보기 위하여 turty.getshapes() 메서드를 사용할 수 있습니다.
10.

```
print(turty.getshapes())
```

우리만의 터틀 모양은 다음과 같은 방법으로 만들 수 있습니다. 첫 번째는 사진의 이름을 입력합니다. 우리의 파이썬 파일이 그림 파일과 같은 폴더 안에 있는지 확인하세요. 그림 이름은 '그림이름.그림형식' 형식으로 입력하면 됩니다. 그림 형식은 파일을 우클릭하고 속성으로 들어가면 알 수 있습니다.

screen은 screen = turty.Screen()입니다.
```
screen.register_shape("그림 이름")
```


# 터틀 펜
터틀이 움직이면 화면에 터틀의 움직임을 나타내는 선이 그려집니다. 이 그림을 그리는 가상의 '물체'를 펜이라고 합니다.

1. 터틀의 움직임을 나타내는 선을 활성화하기 위하여 mainTurty.pendown() 또는 mainTurty.pd() 또는 mainTurty.down() 메서드를 사용할 수 있습니다.
2. 반대로, 펜을 비활성화하기 위하여 mainTurty.penup(), pu(), up()을 사용할 수 있습니다.
3. 펜의 두께는 mainTurty.pensize()로 정할 수 있고 대개변수로는 펜의 두께(정수로)를 입력합니다.
4. 더 많은 설정은 mainTurty.pen() 메서드를 사용할 수 있습니다. 대개변수는 다음과 같이 있습니다.
  - shown: True/False (예: mainTurty.pen(shown=True))
  - pendown: True/False
  - pencolor: "color name"
  - fillcolor: "color name"
  - pensize: integer
  - speed: 0-10
  - resizemode: auto or user or noresize
  - stretchfactor: (positive, positive)
  - outline: positive
  - tilt: number
5. mainTurty.color() 메서드를 이용하면 터틀의 색깔을 바꿀 수 있습니다. 터틀이 동작을 나타내는 선의 색깔은 바뀌지 않습니다.
6. mainTurty.pencolor() 터틀의 동작을 나타내는 선의 생깔이 바뀝니다.
7. 도형을 그리기 전에 begin_fill() 메서드를 사용하면 그림 안의 생깔을 바꿀 수 있습니다. 색칠되는 색은 터틀의 생깔과 같습니다. 끝날때는 end_fill() 함수를 실행하면 됩니다.

# 터틀 컨트롤
터틀이 그린 것을 다시 되돌리기 위하여 mainTurty.undo() 메서드를 사용할 수 있습니다. 우리가 컴퓨터에서 모르고 오타가 나면 ctlr+z를 눌러서 되돌리는 것과 같습니다.

우리가 구글 덕스에서 내용을 작성하고 다시시작을 원한다면 모든 내용을 선택하고 (ctrl+a) 삭제합니다(backspace). 이와 같이 터틀도 다시시작하기 위하여 mainTurty.reset() 함수를 사용할 수 있습니다.

조금 뒤 배우겠지만 우리는 터틀의 화면도 설정을 이용하여 제어하기가 가능합니다. 우리가 지정한 설정도 다 삭제하고 싶다면 turty.resetscreen() 메서드를 이용하세요.

# 터틀 화면
### 화면 크기
터틀 화면은 원래는 우리 컴퓨터 스크린 가운데에 높이의 반 정도로 설정이 되어 나타납니다. 원한다면 더 작거나 더 크게 만들 수 있습니다.

첫 번쨰 대개변수에는 우리가 창의 폭을 입력하면 됩니다.
두 번쨰 대개변수에는 우리가 창의 높이를 입력하면 됩니다.
새 번째 대개변수는 우리가 창의 바탕화면 색을 넣으면 됩니다. (turty.bgcolor("red")) 도 같은 일을 하는 메서드입니다.

```
import turtle as turty

turty.screensize(2000, 1500, "red")
```

화면 크기는 turty.window_height()와 turty.window_width로 알 수 있습니다.

### 터틀 제목

터틀의 창에서 재목이 보입니다. 원래는 Python Turtle Graphics라는 재목이지만 우리가 원하는 텍스트로 바꿀 수 있습니다.

```
turty.title("나의 파이썬 터틀 프로그램...")
```

터틀은 항상 화면이 끝난 후 꺼집니다. 방지하기 위하여 exitonclick()을 사용할 수 있습니다.

```
turty.exitonclick()
```

# 터틀 이벤트
### 터틀 키보드
우리가 게임을 만들고 싶다면 키보드에서 무슨 키가 눌렸는지 알아양합니다.

1. 먼저, 만일 어떤 키가 눌려지면 실형할 함수를 만드세요. 예: `function whenKeyPressW(): mainTurty.forward(100)`
2. 다음에 터틀에게 이 함수와 크보드 'w'와 연결을 시킵니다. 예: `screen.onkey(whenKeyPressW, "w"). 첫 번째 대개변수는 함수의 이름 그리고 두 분째는 키보드의 키 이름입니다. screen은 screen = turty.Screen()입니다.
3. screen.listen() 함수를 실행하여 터틀이 키보드가 눌렸는지 '듣기' 시작합니다.

우리는 onkey 메서드를 이용했습니다. onkey라는 것은 키보드가 눌려지고 때지면 이 함수가 실행이됩니다. 게임에서 계속 w를 누르면 앞으로 움직이게하는 함수를 원한다면 다른 메서드를 사용해야합니다.

onkeyrelease는 우리가 원하는 키가 때졌을때 실행이 되는 코드입니다.

onkeypress는 우리가 원하는 키가 눌렸을때 실행이 되는 코드입니다.

### 터틀 마우스
마우스가 클릭이 되면 함수를 실행하는 메서드가 있습니다. 바로 onclick입니다. 첫 번째 함수는 매개변수입니다. 두 번째는 버튼(왼쪽-1 또는 오른쪽-2)입니다.

```
turty.onclick(turtle.goto, btn=1)
```

# 터틀 정보 입력
터틀에서 사용자로부터 정보를 엍을 수 있습니다.

```
turty.textinput("제목", "설명")
```

숫자를 입력하게 할 수 있습니다. 3 번째 대개변수는 만일 사용자가 숫자를 입력하지 않았다면 기본 값입니다. 4 번째는 가장 작은 수이고 만일 사용자가 더 큰 수를 입력하면 다시 물어봅니다. 5 번째는 가장 큰 수입니다.

```
turty.numinput("제목", "설명", 0, 0, 100)
```

# 터틀 끝네기
터틀을 강제로 끝내는 방법도 있습니다.

'byebye' 또는 '빠이빠이'의 뜻은 아시나요? 바로 '잘가'라는 뜻을 가지고 있습니다.

`turty.bye()`룰 사용하면 터틀을 끝낼 수 있습니다.
