# 터틀

Turtle은 파이썬에서 그래픽을 만드는데 사용되는 모듈입니다.

원한다면 Turtle을 이용하여 간단한 게임을 만드는 것이 가능합니다.

## 터틀 시작하기

Turtle은 모듈입니다. 이 모듈은 파이썬을 깔 때 설치가 저동적으로 되어있습니다.

시작하기 위하여 새로운 파일을 만들고 터틀을 가지고 옵니다.

하지만 절대로 파일의 이름을 turtle이라고 만들지 마세요!!!

그렇게 한다면 우리가 터틀을 가지고올 때 터틀 모듈이 아니라 우리의 파일을 가지고 옵니다.

```py
import turtle as turty
```

## Turtle 진짜로 시작

터틀에서 우리의 '거북이'가 움직일 창이 필요합니다.

창을 보이게 하기 위하여 `getscreen()` 메서드를 사용해보겠습니다.

또, 터틀을 만들어야합니다.

터틀이란 파이썬 터틀 모듈에서 주인공입니다.

우리가 그 터틀을 기준으로 그림을 그리거나 게임을 만듭니다.

이 웹사이트에서 '터틀'이라고 하면 파이썬의 모듈 또는 파이썬 모듈의 주인공 문자를 뜻합니다.

## Turtle 움직이기
### 앞, 뒤, 옆으로 움직이기
우리가 `getscreen()` 메서드를 사용했을 때 새로은 창이 생겼고 그 가운데에 마우스가 있었습니다.

그 마우스를 파이썬에서는 '터틀'이라고 합니다.

이 터틀을 움직이게 하기 위하여 4개의 메서드가 있습니다.

```py
import turtle as turty
mainTurty = turty.Turtle()

mainTurty.right(90) #오른쪽으로 90도 돌기
mainTurty.forward(90) #앞으로 90도 움직이기
mainTurty.left(90) #왼쪽으로 90도 돌기
mainTurty.backward(90) #앞으로 90도 움직이기
```

`right`, `forward`, `left`, `backward` 메서드가 있습니다.

이 메서드를 자주 사용할 것입니다.

더 효율적이고 보기 쉽게 만들기 위하여 이 네 개 메서드의 속기를 알아보겠습니다.

`right`, `forward`, `left`의 가장 앞과 뒤 자를 따서 `rt()`, `fd()`, `lt()`와 `backward`의 `b`와 `k`자를 따서 `bk()`가 있습니다.

### x, y 좌표
터틀을 x와 y 좌표 한 점으로 움직이는 것도 가능합니다. `goto(x, y)` 메서드를 사용하면 됩니다.

```py
import turtle as turty
mainTurty = turty.Turtle()
mainTurty.goto(100, 100)
```

집(home)으로 가자는 터틀에서는 0, 0으로 가자를 뜻합니다.

다음 3 메서드 `goto`, `setpos`, `setposition`은 다 같은 것을 하는 메서드입니다.

```py
import turtle as turty
mainTurty = turty.Turtle()

mainTurty.goto(444, 444)
mainTurty.setpos(444, 444)
mainTurty.setposition(444, 444)
mainTurty.home()
```

x, y 좌표 하나하나 지정하고 싶다면 `setx()` 또는 `sety()` 함수를 사용할 수 있습니다.

```py
import turtle as turty
mainTurty = turty.Turtle()

mainTurty.setx(444)
mainTurty.sety(444)
```

### 터틀 방향
터틀의 방향은 `right()`와 `left()`를 이용할 수 있지만 지금 문자의 방향을 기준으로 `x` 만큼 터틀이 돌아갑니다.

각도를 기준으로 터틀이 보는 각도를 정할 수 있습니다.

`setheading()`과 `seth()`를 이용하여 터틀 보는 방향을 바꿀 수 있습니다.

```py
import turtle as turty
mainTurty = turty.Turtle()

mainTurty.setheading(180) #190도로 보기
```
