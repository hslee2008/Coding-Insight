# Numbers

```py
age = 12
print(age)
```

Note that there are no quotes sourrounding the variable value (the number).

## Arithmetic

Arithmetic is exactly the same as we write it.

Except multiplication and division are written as `*` and `/` respectively.

```py
age = 12

print(age + 1)
print(age - 1)
print(age * 2)
print(age / 2)
```

## The difference between `'13'` and `13`

These values are different.

Though they both represent numbers to humans, it is not the same for computers.

Computers think all `'13'` are strings and treat them as such.

So, number methods will not work on `'13'` nor will string methods work on `13`.

Simply, put a `'13'` in quotes to make it a string.

```py
age = '13'
print(age + '1')
```

The code above will print `131` because the string is treated as a string.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/81191f5590"
  height="400"
/>

The code above will print the types of the variables.

```py
age = '13'
print(type(age))

age = 13
print(type(age))
```

## Changing to numbers

Note that `input()` returns a string.

```py
a = input("")
b = input("")
print(a + b)
```

The values are not added, but concated together.

```py
a = input("")
b = input("")
print(int(a) + int(b))
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/4b9cfba68b"
  height="400"
/>
