# Array dimensions

In Python, array dimensions mean the dept of the array.

In other words, array dimensions mean how many arrays are inside the original array.

### Scalars - 0D

0D is only 1 item.

It is also called Scalars.

```
arr = numpy.array(44)
```

### uni-dimension - 1D

1D means 1 array and each items inside.

We also call it an uni-dimension.

```
arr = numpy.array([4, 44, 444])
```

### 2-D and x-D

2D means there is an array inside an array.

```
arr = numpy.array([   [4, 44, 444], [3, 3, 444]   ])
```

Note that there could be as many arrays inside arrays you want.

### ndim

To get the dimension of the array, use the 'ndim' property.

```
print(arr.ndim)
```

If we want, we can format a specific array with specific type.

```
arr = numpy.array([4, 44, 444, 4444], ndmin=1000)
```

# Indexing

### 1-D

In uni-dimension array, simply select each element by putting an index inside.

```
import numpy

arr = numpy.array([0, 1, 2, 3, 4, 5])

print(arr[1])
```

### 2-D

2D arrays have arrays inside array so we should have an index of that array and select an item from that array.

```
arr = numpy.array([ [4, 44, 444, 4444], [3, 33, 333, 3333]  ])

print(arr[0, 0]) #1st item in 1st array of the 'arr'
```

x-dimension array requires x number of index to access each item.
