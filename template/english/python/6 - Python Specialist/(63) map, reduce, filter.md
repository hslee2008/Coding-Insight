# Beginner's code

Beginnrs usually makes a code like the following when they are asked to create a program that iterates through a list and raise by 2.

```
mainList = [1, 2, 3]
newList = []

for i in mainList:
  newList.append(i**2)
```

This method used for loop which can be very slow sometimes.

In this Computer Science Lab, we will learn about the alternatives.

# Using map()

Let's first look at an example of map().

```
mainList = [1, 2, 3]
newList = list(map(square, mainList))
```

map() function has two parameters of function to run on each element and the iterator.

map() will inject every item of the list into square() function and get the return value.

The return value will replace the olde ones in the previous list

If you want to make your own function, use the lambda(anonymous function) and make 1 parameter and 1 returning value.

```
mainList = [1, 2, 3]
newList = list(map(lambda n: n * 2, mainList))
```

When each items of mainList is injected int our lamnbda, it will be multipled by 2 and replaced by twice of itself.

# Using filter()

Filtering means to remove specific datas that matches a statement.

For example, let's try removing any numbers that is below 0.

```
mainList = [1, 2, 3, -1, -2, 5]
newList = filter(lambda number: number < 0, mainList)
```

In the exaple above, each value of mainList will be inected into lambda and if lambda returns True, the item is removed.

# Using reduce()

If you want to get outcome of every item in list, you can use the reduce() method.

For example, you can merge all strings together in a list.

```
from functools import reduce

mainList = ["Hello", " ", "World", "."]
newList = reduce(lambda x, y: x + y, mainList)

print(newList)
```

Every item in mainList will be injected into lambda and the outcome will be all combined.
