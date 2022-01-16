# What is function?

Function is a group of code in programming language.

Note that declaring a function will not do anything as you are only saying this code run that group of code.

You have to run the function itself to see the outcome of the group of code.

For example, you might want to print "Hello World" and store that inside a function.

# Declaring functions and running them

To declare functions in Python, use the 'def' keyword and name then '():'.

Then, put the group of code inside the function (indentation!!!).

```
def sayHelloToWorld():
  print("Hello World")
```

if we run the code above, nothing happens.

Print "Hello World" to the console using 'functionname + ()'.

In this case, sayHelloWorld().

```
sayHelloToWorld()
```

# Parameters

Parameters are basically variables we can mention in functions.

For example, if we want to make a function that prints the sum of two numbers, we can make 2 parameters.

```
def addNum(a, b):
  print(a+b)
```

When using the parameter, put each value inside ().

```
addNum(1, 1)
```

# Using apply() to Run Function

We can use the apply() function to run.

```
def printWithEnd(a, b, c=None):
  print(a + b, end = c)

apply(printWithEnd, ("hello", "world"), {'c': ""} )
```

# Importance of function

Using functions, we can simplify our code.

```
whetherCalc = input("Type in calculator mode(y10: addition, y1: addition): ")

if whetherClac=='y10':
  firstNum = int(input("First number: "))
  secondNum = int(input("Second number: "))
  print(firstNum + '+' + secondNum + 'is ' + int(firstNum+secondNum))
elif whetherCalc=='y1':
  firstNum = int(input("First number: "))
  secondNum = int(input("Second number: "))
  print(firstNum + '+' + secondNum + 'is ' + int(firstNum+secondNum))
else:
  print("Wrong answer!!!")
```

We can make a function named addNumbers() and put in code for addition.

Instead of big chuncks of code inside if statement, we need to put in only one line of code: addNumbers()

```
def addNumbers():
  firstNum = int(input("First Number: "))
  secondNum = int(input("Second Number: "))
  print(firstNum + '+' + secondNum + 'is ' + int(firstNum+secondNum))
```
