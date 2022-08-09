# List Methods

There are different methods to handle lists in Python.

Since list is probably one of the most used data types in Python, there are many usefull methods to know.

## Adding Items (List Methods)

### `insert()`

Inserting is when you add an item to a list at a specific index.

```python
list = [1, 2, 3, 4, 5]
list.insert(0, 0)
print(list)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/d50ab693f8"
  height="400"
/>

### `append()`

Appending is when you add an item to the end of a list.

```python
list = [1, 2, 3, 4, 5]
list.append(6)
print(list)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/12cc090a48"
  height="400"
/>

## Removing Items (List Methods)

### `remove()`

Remove is used to remove specific values from a list.

```python
list = [1, 2, 3, 4, 5]
list.remove(3)
del list[-1]
print(list)
```

You can also use the `del` keyword to remove an item from a list.

### `pop()`

Popping means removing the last item from a list.

```python
list = [1, 2, 3, 4, 5]
list.pop()
print(list)
```

### `clear()`

Clear is used to remove all items from a list.

```python
list = [1, 2, 3, 4, 5]
list.clear()
print(list)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/8ea821b7b4"
  height="400"
/>

## Getting info about each items

### `index()`

`index()` is used to find the index of a value in a list.

```python
list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
print(list.index(1))
print(list.index(2))
print(list.index(3))
```

### `count()`

`count()` is used to count the number of times a value appears in a list.

```python
list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
print(list.count(1))
print(list.count(2))
print(list.count(3))
```

## Number List Methods

There are methods that only work in lists of numbers.

### `sum()`

`sum()` is used to find the sum of all values in a list.

```python
list = [1, 2, 3, 4, 5]
print(sum(list))
```

### `max()` and `min()`

`max()` is used to find the largest value in a list.

`min()` is used to find the smallest value in a list.

```python
list = [1, 2, 3, 4, 5]
print(max(list))
print(min(list))
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/7fdd2b43c1"
  height="400"
/>

## Sorting Lists

### `sort()`

`sort()` is used to sort a list in ascending order.

```python
list = [5, 4, 3, 2, 1]
list.sort()
print(list)
```

### `reverse()`

`reverse()` is used to reverse a list.

```python
list = [5, 4, 3, 2, 1]
list.reverse()
print(list)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/44f3241dca"
  height="400"
/>

## Combining Lists

### `extend`

`extend()` is used to combine two lists.

```python
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
list1.extend(list2)
print(list1)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/7e53c5b5a9"
  height="400"
/>
