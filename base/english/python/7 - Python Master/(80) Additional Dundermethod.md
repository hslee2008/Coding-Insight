# `__call__()` and __mul__()

Class cannot be ran like a function.

However, using the __call__() dunder method, we can specify the code we want to run.

The __mul__() dunder method can make us do multiplcation operation on that class.

```
class Person:
  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return self.name

  def __mul__(self, x):
    if type(x) is not int:
      raise Exception("Should be an integer...")

    self.name *= x

  def __call__(self):
    print(self.name)me = Person("Hyunseung")
me * 5
me()
```

# `__len__()`

When the len() function runs on a class, we can specify the code to run or value to return.

```
class Person:
  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return self.name

  def __mul__(self, x):
    if type(x) is not int:
      raise Exception("Should be an integer...")

    self.name *= x

  def __call__(self):
    print(self.name)

  def __len__(self):
    return len(self.name)me = Person("Hyunseung")
me * 5
me()
print(len(me))
```

# \_ & \_\_ difference

Let's try making a simple class.

There will be three self variable inside the class, but the second and third one will have _ and __ before attached.

```
clas Person:
  def __init__(self):
    self.test1 = 1
    self._test2 = 2
    self.__test3 = 3
```

If we have __ before the variable, using the dir() function on that class will not show it.

Instead, another variable named _Person__test3 will show(fake variable!).

Instead of using __test3, we can use _Person__test3.

Having '_' before variable will simply hide it without changing it's name.
