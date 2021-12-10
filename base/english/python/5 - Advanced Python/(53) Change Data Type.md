# To List

To change any kind of data into a list, use the list() function and split() method.

While list() function can be used for any type of data, we can only use split() for strings.

```
a = "abcdefghijklmnop"
print(list(a))
```

The split() method will split the string into multiple pieces according to the given character.

```
a = "HelloAWorld."
print(a.split("A"))
```

# To Tuple

Using tuple(), we can change anything to a tuple.

If you want to convert a string into tuple, make sure to use split() method first then to turn that into a tuple.

```
a = "Hello! World! My! name! is! Hyunseung"
print(tuple(a.split("!")))
```

# To Number

To convert to each type of number(int, float, complex), use int(), float() and complex() method.

```
a = "32"

print(int(a))
```

Know that if you have a string that contains digits other than numbers(e.g. alphabets), running int(), float() or complex() will return NaN.

> NaN

NaN is short for Not a Number.

# To Set

Use set() function to turn a data type into a set.

```
print(set("abcdefg"))
```

# To Boolean

The only data type boolean can convert is integer.

bool() function will turn the number into either True or False.

```
a = 0

print(bool(a))
```

0 is False and the rest of the number is True.
