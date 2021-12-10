# Tuple

Tuple is very similar to lists but we cannot change what is inside tuple.

Using list, we can change each items using indexing but we cannot do so with tuples.

So, we usually tuple for storing menus of values that should not be touched by anyone.

Tuples use () instead of [].

```
bestCodingLangTuple = ("Javascript") #nobody can change this
print(bestCodingLangTuple)

bestCodingLangTyple[0] = "C++" # error
```

# Tuples hacks & tips

We can use tuples like a box to unravel the contents inside.

If we lign the same number of new variable names on left and put the tuple after '='. Variable number should be equal to tuple length.

```
fruits = ("apple", "banana", "cherry")

green, yellow, red = fruits #green = apple, yellow = banana, red = cherry

print(green)
print(yellow)
print(red)
```

If we want to store the REST of values of tuples inside variable, use the \* after variable name.

```
fruits = ("apple", "banana", "cherry", "melon")

(green, yellow, red*) = fruits # same as above but red is euqal to cherry and melon

print(green)
print(yellow)
print(red)
```

# Tuple set length

To set the length of the tuple and tell Python not to allow any more items, use the additional comma.

Now, nobody can add more to it! (Adding is possible though changing is not)

```
a = 1, 2,
```

# zip()

We usually see two sides of the zipper lign up when we zip.

Similar to this, we can zip up (lign up) two tuple's value.

By using zip(), Python will return a zipped data type. Use tuple() or list() to use them.

Looking at the example below, (1, "one"), (2, "two"), and so on is inside a tuple. In other words, double tuple is created which has tuples containing each item of the original tuple.

````
firstTup = (1, 2, 3, 4, 5)
secondTup = ("one", "two", "three", "four", "five")

zipped = zip(firstTup, secondTup)

print(tuple(zipped))
```
````
