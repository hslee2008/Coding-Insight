# Operation Dunder method

```
__neg__()
__pos__()
__abs__()
__invert__() #- or + or ~
__complex__()
__int__()
__float__()
__index__()
__round__()
__trunc__()
__floor__()
__ceil__()
```

The dunder method above helps us do operation on each class such as '-, +, and abs() and so on'.

The first parameter is self and second is the number that operates on class.

# Arithmetic Dunder Method

```
__radd__(self, a) # +
__rsub__(self, a) # -
__rmul__(self, a) # *
__rtruediv__(self, a) # /
__rfloordiv__(self, a) # //
__rmod__(self, a) # %
__rpow__(self, a) # pow()

__iadd__(self, a) # class+=a
__isub__(self, a) # -=
__imul__(self, a) # *=
__itruediv__(self, a) # /=
__ifloordiv__(self, a) # //=
__imod__(self, a) # %=
__ipow__(self, other) # **=

__lt__(self, other) # <=
__ge__(self, other) # >=
```

# Other

```
__contains__(self, ITEM)
__reversed__(self)
__iter__(self)
__missing__(self, key)
__delitem__(self, key) # del dict[key] runs
__dir__(self, key)
__delattr__(self, name)
__setattr__(self, name, value)
__getattribute__(self, name)
__bool__(self)
```

# `__doc__()`

If we make a class or function, we can make an explanation for that.

Simply but a multi-line comment at the begging of class and function.

If you print the __doc__ property of that class or function, the comment you put will be printed.

```
def testingDOC():
  ```this is a test function to test the functionality of __doc__()```
  print("testing123")

print(testingDOC.__doc__)
```

Note that almost every function and class have this explanation and if you want to know what it does, use the __doc__ property.
