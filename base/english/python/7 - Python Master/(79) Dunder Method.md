# What is dunder?

In Context Manager, we learned about __exit__() and __enter__() method.

These are called dunder method.

Methods that starts with __ and __ is called dunder method (a.k.a. magic method)

# `__str__()` and `__repr__()`

Let's first make a class that does nothing and has nothing.

```
class Person:
  pass

a = Person()
```

Now, let;s try printing 'a' or Person().

```
print(a)
```

We just get a weird string that we cannot understand.

However, when we print this way, we can specify what to return instead of the weird string we saw earlier.

```
class Person:
  def __init__(self, name):
    self.name = name

  def __str__(self):
    return "A person named " + self.name
```

Now, if we make a Person() class and print that, we get 'A person named yourname'.

Furthermore, using repr() on that class will return a specific object inside the __repr__() dunder method.

```
class Person:
  def __init__(self, name):
    self.name = name

  def __str__(self):
    return "__str__"

  def __repr__(self):
    return "__repr__"
```

# `__del__()`

We can even delete the class by using 'del' keyword and when we do that, we can run a specific code.

```
class Person
  def __init__(self, name):
      self.name = name

  def __del__(self):
    print("Data was deleted: " + self.name)

me = Person()
del me
```

# `__new__()`

When a class is amde, we can run a specific code inside __new__().

```
def Testing:
  def __new__():
    print("I am created by you!")

a = Testing()
```

"I am created by you!" is printed.
