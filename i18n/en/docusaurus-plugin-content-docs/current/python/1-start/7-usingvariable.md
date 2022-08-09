# Using Variables

Let's learn abut how to use variables in Python.

## Changing Variable Value

Similar to making a new variable, you can change the value of an existing variables the same way.

Python automatically understands whether a variable already exists or not.

:::note
If the variable does not exist, it will be created.

If the variable does exist, it will be changed.
:::

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/a95ad0ea6f"
  height="400"
/>

## Deleting Variables

If variables are no longer needed or needed for a different purpose, you can delete them.

It can be done with the `del` keyword.

```py
name = 'Coding-Insight'
del name
```

However, if we run the following code, it gives an error.

```py
print(name)
```

The variable `name` no longer exists.

## Declaring Multiple Variables

To declare multiple variables, list out all the variable names on the left side of the assignment operator.

And put in all the values on the right.

```py
a, b, c = 1, 2, 3
print(a, b, c)
```

The example above prints `1 2 3` because a is `1`, b is `2`, and c is `3`.

If we want to declare all the variables with the same value, we can use the `=` while linking all the variabels and putting the value on the vary right.

```py
a = b = c = d = e = 'alphabet'
print(a, b, c, d, e)
```
