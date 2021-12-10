# Type Assignment

We can decide what kind of data type the user should use. Put ':' and data type name after variable name.

To decide the return value, put '--> str' after the parenthesis so that the developer does not return the wrong kind of format.

```
def wowAnd(nextToWow: str) -> str:
  return "wow " + nextToWow
```

When running this function, we are certain that parameter nextToWow will be a string and that the return value is a string.

# Is it callable?

Sometimes, we might get confused with variable names and function names.

Use callable() function and put in either variable name or function name to see whether they are callable.

Callable means we can reference them and run the code inside.

```
def testing():
  print("hello world")

test = "test"

print(callable(testing)) #True
print(callable(test)) #False
```

We can use callable to prevent silly errors such as mistaking a function name for variable name and vice versa.

```
def testing():
  print("hello world")

test = "test"

test()
```
