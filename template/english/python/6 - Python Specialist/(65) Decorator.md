# What is decorator?

In our everyday life, decorator is an object that makes another one more beautiful.

In Python, decorators add more functionality to normal functions and make them super-function.

# Decorator examples

Let's try making a function that calculates the square root of a number.

```
def squareRootOf(a):
  return a ** 0.5
```

If we insert 4 in that function, 2 comes out.

However, what will happen when we try putting in a negative number?

We can try to make an if statement and tell the users that it is not possible to find the square root of negative numbers.

Using if statement can get very messy and hard to read.

Let's try doing it in a little bit differently.

```
def minusDecorator(mainFunction):
  def mainFunc():
    func = mainFunction() #now, func do the same thing as mainFunction
    toAbsVal = abs(func) #get the absolute value

    return toAbsVal #return that

  return mainFunc # return newe func
```

Now, if we put in a function that returns negative number, the absolute value of that number will be given instead.

```
def returnVal():
  return -4
```

The minusDecorator() function above is an example of a decorator.

Now, let's try using them.

```
decorate = minusDecorator(returnVal())print(squareRootOf(decorate()))
```

Now, instead of inserting negative number to squareRootOf() function, we can insert a function that will return the aboslute value of any negative number given.

However, this method is very hard to understand and complicated.

Let's try using decorators in a different way.

# Using Decorator

We can use the '@' before a function to attach a decorator.

This way, every time we run returnVal() function, we will get an absolute value of -4 instead of getting -4.

```
@minusDecorator
def returnVal():
  return -4
```

# Using more than 2 decorators

We can stack @ on top of each other in order to make multiple decorators attached to our original function.

```
def makeMinus(mainFunction):
  def mainFunc():
    func = mainFunction()
    newFunc = int(func) * (-1)

    return newFunc

  return mainFunc

@minusDecorator
@makeMinus
def returnVal():
  return -4
```

