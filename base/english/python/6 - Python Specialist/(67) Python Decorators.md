# @property

Let's try making a 'Teacher' class.

```
class Teacher:
  def __init__(self, name, subjectTeaching):
    self.name = name
    self.subjectTeaching = subjectTeaching

  def name(self):
    return self.name
```

To access the teacher's name, we have to run the name() function.

However, if we add @property decorator to the name, the name() function can be used with name(sort of like variable) instead.

```
@property
def name(self):
    return self.name
```

Furthermore, we can make a function that sets the self value using @selfvariable.setter property.

```
@name.setter #set name variable to something new
def name(self, val):
  self.name = val
```

Finally, we can make a function that deletes a specific self variable by using @selfvariable.deleter decorator.

```
@name.deleter
def name(self, val):
  print('삭제하겠습니다….)

  del self.name
```

# @classmethod

A property can also become a class method when surrounded by @classmethod decorator.

```
class Teacher:
  def __init__(self, age, name):
    self.age = age
    self.name = name

  @classmethod
  def getName(self):
    print(self.name)
```

# @staticmethod

When @staticmethod decorator is added, the function can only be used inside the class.

```
class Teacher:
  def __init__(self, age, name):
    self.age = age
    self.name = name

  @staticmethod
  def getName(self):
    print(self.name)
```
