# Asynchronous

While eating food, we can use fork and spoon at the same time.

Asynchronous means not happening at the same time.

In Python, asynchrnous module help us make sure two tasks does not collide with each other.

# Asynchronous module

First, we have to fetch the asynchronous module which is named 'asyncio'.

```
import asyncio
```

# Asynchronous

Let's loook at the following code.

```
print("Hello")
print("World")
```

The code print("Hello") run first then print("World") runs.

Python waits till the first one finishes and moves on to the second one.

However, if the first code takes a long time, it is very inefficient for Python to wait till it finishes.

Furthermore, the user will not be able to interact with the page if a long task is still running.

This is wehre asyncio module comes in and let us run other functions first while running the function that is slow at the background.

