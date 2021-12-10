# Keyword Parameter

We can assign values to each parameter(like a variable) by using parameter name.

Using this format, we do not need to consider the order of the parameter.

```
def subtractThis(firstNumber, secondNumber):
  print(firstNumber - secondNumber)

subtractThis(secondNumber = 2, firstNumber = 6)
subtractThis(2, 6)
```

Similar to dictionaries, we can make a dictionary parameter that stores every keyword parameter.

To access each value, simply fetch the value like dictionary(e.g. dictionary[key]).

```
def addOnlyFirstAndSecond(**numbers):
  print(numbers["firstNumber"] + numbers["secondNumber"])

addOnlyFirstAndSecond(firstNumber = 1, secondNumber = 2, thirdNumberThatDoesNotMatter = 3)
```

# Assign default value

Using the default value, if the user typed in nothing(or the value is None), the default value will be assigned the the parameter.

```
def printMyCountry(country = "South Korea"):
  print("I was born in " + country)

printMyCountry("U.S.A")
printMyCountry()
printMyCountry("France")
```

The second time the function is called, we did not type in any parameter. Therefore, "South Korea" is printed.

# return keyword

The return keyword returns a new value.

The returned value can be printed, stored in variables and so on.

Treat a function that returns value as data type itself.

```
def multiplyBy4(a):
  return a * 4

val = multiplyBy4(3)
print(val) #12 is printed
```

Note that returning a value will end the function. The code after return will be ignored.

We can return multiple values as tuples. This only exists in Python.

```
def allMulti(a, b):
  return a, b

fVal, sVal = allMulti(3, 4)

print(fVal)
print(sVal)
```

TIP: use 'return' without any value after to end the function immediately.

# pass keyword

If we do not want to make a function that does nothing, use the 'pass' keyword.

```
def doNothing():
  pass

doNothing()
doNothing()
```
