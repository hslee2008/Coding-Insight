# What is Turtle?

We use Turtle for drawing and making simple games.

# Preparing Turtle

Turtle is a module.

Let's first fetch the turtle module.

When you are making Python file, do not name it turtle(because Python will import from your file instead of turtle file).

```
import turtle as turty
```

# Get started with Turtle

Turtle needs to have a screen to move on.

Use the getscreen() method to show the screen.

```
import turtle as turty

turty.getscreen()
```

Now, let's try making a turtle(character) in that window using the Turtle() method.

```
import turtle as turty

mainTurty = turty.Turtle()
```

# Moving turtle

### forward, backward, right, left

When we first ran the function Turtle(), a turtle-shaped character popped on screen.

Use the forward() and backward() to move the turtle.

Furthermore, if you want to turn the turtle, use the right() & left() method then put in the degree.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.right(90) #Right 90 degrees
mainTurty.forward(90) #Move front 90 pixel
mainTurty.left(90) #Left 90 degrees
mainTurty.backward(90) #Move back 90 pixel
```

Note that rt() can be used instead of right(), fd() instead of forward(), lt() instead of left() and finally, bk() instead of backward().

### x, y coordinate

We can use the goto() method to move turtle to a specific x and y coordinate.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.goto(100, 100)
```

Furthermore, use the home() methdo to go to the center of you screen.

Note that you can also use the setpos(), setposition() method to move turtle to specific place.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.goto(444, 444)
mainTurty.setpos(444, 444)
mainTurty.setposition(444, 444)

mainTurty.home()
```

Use setx() and sety() function to move turtle to specific x and y coordinate.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.setx(444)
mainTurty.sety(444)
```

### Turtle Direction

You can set the angle the turtle will be looking at by using the setheading() or seth() method.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.setheading(180) #Look at 90 degree
```

# Draw Shapes

### Shape

Use the circle() method to make the turtle move in a circle.

The number parameter inside circle() method is the radius of the circle.

```
import turtle as turty

mainTurty = turty.Turtle()

mainTurty.circle(100) #100 radius.
```

The dot() method will draw a dot on the screen having the radius of given number.

```
mainTurty.dot(20)
```

### Cloning Turtle

When you use the stamp() method, a double turtle will pop up on screen.

```
mainTurty.stamp()

mainTurty.forward(100)
```

Clear every single fake clones of the turtle using clearstamps() method.

If you put in a number in clearstamps() that number of stamps, in order, will be cleared from screen.

```
for i in range(30):
  mainTurty.stamp()
  mainTurty.fd(10)

mainTurty.clearstamps(3)
mainTurty.clearstamps(-3)
mainTurty.clearstamps()
```

### Turtle speed

To set the turtle speed, use the speed() method and either put in the speed value or speed name.

```
mainTurty.speed("fastest")
```

Turtle's speed can be expressed as an intger from 1 to 10.

fastest: 0
fast: 10
normal: 6
slow: 3
slowest: 1
