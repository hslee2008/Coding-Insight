# What is array?

List is a data type where you can store multiple datas.

Array is very similar to list but there are few differences.

1. Python does not support arrays. So, we have to use array from numpy module.
2. Array can store hug amount of datas efficiently.
3. Arrays are best for storing number datas.

# Making array

We have to import numpy module to use array in Python.

```
import numpy
```

Let's make an array of numbers from 1 to 5.

```
import numpy

arr = numpy.array([1, 2, 3, 4, 5])

print(type(arr))
print(arr)
```

# Array - number operators

In lists, we used for loops to access each item in order to change each item.

In array, the only thing we have to do is use operators on that array and every each item will be effected.

This way, it is much more easier to read.

```
import numpy

mainArray = numpy.array([1, 2, 3])

newArray = mainArray + 3
```

This is why arrays are better at storing huge amount of datas.
