# Error messge in try - except

We can get the error message(what the error is about) in Python using the 'as' keyword after 'except'.

```
try:
  a()
except NameError as ERR:
  print(ERR)
```

# Making your own error

In Python, it is very easy to make our own errors.

Running 'raise Exception()' and putting error message inside parenthesis will raise a new error.

This method is best with 'try - except' clause.

```
x = -1

if x < 0:
  raise Exception("Hmmm... 🐛 exists. X should not be smaller than 0.")
```

If you want to make a specific error, put the name of the error instead of 'Exception'.

# Remake errors

Simply put 'from variable' after exception which will re-make or re-raise the error.

```
try:
  a()
except NameError as ERR:
  raise Exception("hmmm...") from ERR
```
