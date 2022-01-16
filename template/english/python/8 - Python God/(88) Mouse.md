# Mouse

Python has a module named mouse that can help us control our computer mouse!

Very good for pranking friends.

# Mouse Module

Run the following command to install mouse.

> pip install mouse

Now, let's import mouse.

```
import mouse as m
```

# Mouse click

We can use the click() method to click either left, right, or middle of mouse.

The middle is same as pressing ctrl and clicking right.

```
m.click("left")
m.click("right")
m.click("middle")
```

# Mouse position

To get the x and y coordinate of you mouse, use he get_position() method.

```
print(m.get_position())
```

# Dragging

You can drag by using the drag() method.

Put in the x and y coordinate of starting place and x&y coordinate of end place.

You can also specify the duration.

```
m.drag(0, 0, 200, 200, duration=3.0)
```

If we run that command right now in VSCode, the window is dragged to 200 and 200.

# Moving mouse

Simply use the move() method to move the mouse.

You will move right and top of your mouse by 100.

```
b.move(100, 100, duration=3.0)
```

# Scrolling

Use the scroll() method to scroll up and down.

If the number is positive, you will move up and a negative number will scroll down.

```
m.scroll(-2)
```
