# List

List is an ordered collection of items.

You could make a list for a shopping cart, or a list of friends.

```python
list = [1, 2, 3, 4, 5]
```

## List Declaration

List is declared with square brackets `[]`.

```python
list = [1, 2, 3, 4, 5]
```

There are commas between each item in the list.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/59634d0a4b"
  height="400"
/>

## List Indexing

Similar to strings, you can find the value of an item in a list using the index.

```python
list = [1, 2, 3, 4, 5]
print(list[0])
print(list[1])
```

Note that the index starts at 0.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/46f7771805"
  height="400"
/>

## Change values using indexing

You can replace an item existing in a list using the index.

```python
list = [1, 2, 3, 4, 5]
list[0] = 0
print(list)
```

You can also replace a range of items in a list.

```python
list = [1, 2, 3, 4, 5]
list[0:2] = [0, 0]
print(list)
```

Note that this can also be done in strings, too.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/a413df3b12"
  height="400"
/>
