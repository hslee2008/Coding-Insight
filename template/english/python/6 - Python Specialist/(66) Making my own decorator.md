# @mydecorator

We can add additional functions before and after a function using decorator.

```
def mydecorator(functionToRun):
  def mainFunction():
    print("before")
    functionToRun()
    print("after")

  return mainFunction()
```
