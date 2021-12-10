# Array Shapes

We can use the 'shape' property to find the shape of the given array.

Depending on the dimension of array, there will be different number of numbers in tuple.

The first number will be the number of arrays inside array. The second will be the number of items in each array(In 2D).

```
arr = numpy.array([ [1, 2, 3], [4, 5, 6] ])

print(arr.shape)
```

# Change Array Shape

We can also format the array into a new shape using the reshape() method.

```
arr = nmpy.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

newArray = arr.reshape(2, 5)

print(newArray)
```

reshape() will return a newly shaped array.

We should put in the array shape inside reshape().
