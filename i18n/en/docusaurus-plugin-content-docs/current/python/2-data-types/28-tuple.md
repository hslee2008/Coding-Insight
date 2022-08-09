# Tuple

Tuple is a data type that cannot be changed after declaration.

Other than this difference, tuples are similar to lists.

Tuples are declared with parentheses.

```py
t = (1, 2, 3)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/069924886e"
  height="400"
/>

## Decompressing Tuples

We can decompress the data by lining variables on the left that is assigned to each item in tuple.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/8c81ff1498"
  height="400"
/>

## Limiting tuple length

We can limit the length of a tuple by using the `,` after the last element.

```python
t = (1, 2, 3, 4, 5)
t = (1, 2, 3, 4, 5,)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/0cc2f9e56d"
  height="400"
/>

## `zip()`

This method is used to create a list of tuples from two or more iterables.

```py
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]
d = [10, 11, 12]

print(zip(a, b, c, d)) # <zip object at SomethingHere(Memory Address)>
```

Basically, it makes a zipped data.

Note that you have to run `tuple()` after `zip()` to make it a tuple.

```py
print(tuple(zip(a, b, c, d))) # ((1, 4, 7, 10), (2, 5, 8, 11), (3, 6, 9, 12))
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/8fd2dc081e"
  height="400"
/>
