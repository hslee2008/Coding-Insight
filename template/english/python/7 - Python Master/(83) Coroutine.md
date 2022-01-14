# Making Coroutines

A long time ago, we learned about yield keyword in for loop.

Instead of using yield as return, we can use it for making couroutines.

# Example

```
def testing(a):
  while True:
    x = yield a
    print("Got " + str(a + x))

s = testing(2)
next(s)
s.send(1)
s.send(6)
s.close()
```

1. First, make a couroutine function.
2. Next, making a yield variable and do operation on it with another variable named x.

To use couroutine functions,

1. Make a variable and assign the function to it with the original value.
2. Next, use the next() function.
3. To use courutine, use the send() method.
4. Finally, use close().
