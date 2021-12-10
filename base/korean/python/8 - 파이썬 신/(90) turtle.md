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

또, 터틀을 만들어야합니다. 터틀이란 파이썬 터틀 모듈에서 주인공입니다. 우리가 그 터틀을 기준으로 그림을 그리거나 게임을 만듭니다. 이 웹사이트에서 '터틀'이라고 하면 파이썬의 모듈 또는 파이썬 모듈의 주인공 캐릭터를 뜻합니다.

```
import turtle as turty

mainTurty = turty.Turtle()
```

# Turtle 움직이기

### 앞, 뒤, 옆으로 움직이기

우리가 getscreen 메서드를 사용했을 때 새로은 창이 생겼고 그 가운데에 마우스가 있었습니다. 그 마우스를 파이썬에서는 '터틀'이라고 합니다. 이 터틀을 움직이게 하기 위하여 4개의 메서드가 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.right(90) #오른쪽으로 90도 돌기
mainTurty.forward(90) #앞으로 90 움직이기
mainTurty.left(90) #왼쪽으로 90도 돌기
mainTurty.backward(90) #앞으로 90 움직이기
```

right, forward, left, backward 메서드가 있습니다. 이 메서드를 자주 사용할 것입니다. 더 효율적이고 보기 쉽게 만들기 위하여 이 네 개 메서드의 속기를 알아보겠습니다.

right, forward, left의 가장 앞과 뒤 자를 따서 rt(), fd(), lt()와 backward의 b와 k자를 따서 bk()가 있습니다.

### x, y 좌표

터틀을 x와 y 좌표 한 점으로 움직이는 것도 가능합니다. 바로 goto(x, y) 메서드를 사용하면 됩니다. GO to your room! (너 방으로 가!)는 부모님이 많이 하시는 말씀입니다. 여기서 goto를 따서 터틀을 움직이게 할 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.goto(100, 100)
```

또, let's go to your home(집에 가자)은 친구들 사이에서 자주 사용되는 말입니다. 집(home)으로 가자는 터틀에서는 0, 0으로 가자를 뜻합니다.

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

터틀에서 원을 제외하고는 다 우리가 right, forward, left, backward를 이용해야합니다.

원은 'circle()' 메서드를 사용할 수 있습니다.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.circle(100) #100 반지름인 원을 그린다.
```

점은 영어로 dot입니다. 터틀에서 점을 그리려면 dot()을 사용할 수 있습니다.

```
mainTurty.dot(20)
```

### 터틀 복제

영어로 stamp는 도장을 의미합니다. 도장을 이용하며 무수히 많은 복제본을 만들 수 있듯이 파이썬 터틀에서 터틀이 즈금 있는 위치에 복제본을 그릴 수 있습니다.

```
mainTurty.stamp()

mainTurty.forward(100)
```

터틀 복제본을 삭제하기 위하여 clearstamps() 메서드를 사용할 수 있습니다. clearstamps()를 사용하면 마지막 n개 또는 첫 번째로 만들어진 복제본 n개를 삭제하는 것이 가능합니다.

만일 clearstamps()의 첫 번째 매개변수가 양의 정수이면 처음 n개를 제거하고 음의 정수라면 마지막 n개를 없앱니다. 입력하지 않으면 모든 복제본이 삭제됩니다.

```
for i in range(30):
  mainTurty.stamp()
  mainTurty.fd(10)

mainTurty.clearstamps(3)
mainTurty.clearstamps(-3)
mainTurty.clearstamps()
```

### 터틀 속력

터틀에서 우리가 다양한 그림을 그릴 수 있습니다. 하지만 아주 복잡한 형태 또는 시간이 필요하면 터틀이 느려 그 작업이 끝날때까지 기다릴 수 없습니다.

```
mainTurty.speed("fastest")
```

터틀의 속도는 0-10 정수로 정할 수 있습니다. 참고로 속도를 0으로 하면 가장 빠른 속도로 움직입니다.

fastest: 0
fast: 10
normal: 6
slow: 3
slowest: 1

speed 안의 매개변수로 정수와 문자 다 가능합니다.

# 터틀 모양

shape()로 터틀의 모양을 정할 수 있습니다.

```
turty.shape("circle")
```

터틀의 모양으로 가능한 값을 모두 찾아보기 위하여 turty.getshapes() 메서드를 사용할 수 있습니다. 10.

```
print(turty.getshapes())
```

우리만의 터틀 모양은 다음과 같은 방법으로 만들 수 있습니다. 첫 번째는 사진의 이름을 입력합니다. 우리의 파이썬 파일이 그림 파일과 같은 폴더 안에 있는지 확인하세요. 그림 이름은 '그림이름.그림형식' 형식으로 입력하면 됩니다. 그림 형식은 파일을 우클릭하고 속성으로 들어가면 알 수 있습니다.

screen은 screen = turty.Screen()입니다.

```
screen.register_shape("그림 이름")
```
