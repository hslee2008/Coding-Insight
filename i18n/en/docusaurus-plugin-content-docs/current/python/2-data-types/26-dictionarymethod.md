# Dictionary Methods

## Add a pair

Adding a new pair can be done like indexing (like array), but with the key instead of index.

```python
d = {'key': 'value'}
d['new_key'] = 'new_value'
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/04ee6a9b27"
  height="400"
/>

## Remove a pair

Removing can be done like an array, but with the key instead of index.

```python
d = {'key': 'value'}
del d['key']
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/1a3ca85630"
  height="400"
/>

## `update()`

This method can be used to add new pairs or update existing ones.

```python
d = {'key': 'value'}
d.update({'new_key': 'new_value'})
```

If the key already exists, the value will be updated.

If it doesn't, a new pair will be added.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/eef048afb8"
  height="500"
/>

## `get()`

This method is used to get the value of a key.

```python
d = {'key': 'value'}
d.get('key')
```

If the key doesn't exist, it will return `None`.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/c250d6c262"
  height="400"
/>
