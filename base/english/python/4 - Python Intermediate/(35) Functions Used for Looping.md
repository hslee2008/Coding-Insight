# iter() and __next_\_()

Using iter() function, we can make an iteration object.

Using __next__() method, we are going to get each item in order.

```
i = iter(["One", "Two", "Three", "Four"])

print(i.__next__())
```

Note that when there is no more items left and you run __next__(), it will return an error.

# More about range()

range() is very useful when used with for loops.

range() simply returns a data type that can be iterated.

There are three parameters: start, stop, and step.

start is the number that Python should start counting on
stop is the end number.
step is the distance between the first number and second number, second number and third number and so on.

```
for i in range(1, 10, 2):
  print(i, end=" ")
```
