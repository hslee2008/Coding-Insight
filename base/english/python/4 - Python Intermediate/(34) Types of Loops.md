# Iterable

Using for loop, we can access each items in list.

A data type that can be accessed through indexing in loops are called iterables.

The following is an example of how we can use iterables inside loops.

```
for i in [1, 2, 3]:
  print(i)
```

The following code is an example of a simple way to store iterables generated from for loops.

```
myList = [x * x for x in range(3)]

for i in myList:
  print(i)
```

It has `storedValue for var in iterable` format and stores the result of the for loop inside a variable (myList).

However, using iterables are not very good if you are handling a lot of datas.

This is where generator comes in.

# Generator

Generators are similar to iterables. The only difference is that the datas are deleted after running.

This is why generators are better at handling big dats than iterables.

Using generators preserve more space.

```
myList = (x * x for x in range(3))

for i in myList:
  print(i)
```

# YIELD

Yield has the same function as return.

```
def myGenerator():
  myList = range(3)
  for i in myList:
    yield i + 1

myGenerator = myGenerator()

for i in myGenerator:
  print(i)
```

1. Firstly, make a generator function
2. Next, make an iterable and for loop
3. Use yield to return a value which will be stored inside iterable variable
4. Make a for loop that access each item inside generator function
