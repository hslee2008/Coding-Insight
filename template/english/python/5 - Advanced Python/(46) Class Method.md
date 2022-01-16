# Inheritence

Inheritence means to pass down something from above.

In Python, inheritence is when a class inherit the variables and functions from another class.

# Python Inheritence

To get the content of a class, put (classname) after the class name.

```
class Person:
  def __init__(self, name, age, gender):
    self.name = name
    self.age = age
    self.gender = gender

  def printTheName(self):
    print(self.name)

class Student(Person):
  def __init__(self, grade):
    self.grade = grade

  def printTheGrade(self):
    print(self.grade)
```

However, we can only get functions and variables inside class, not the variables inside self.

# Solve the problem

To get the self variables, use `Person.__init__(self, name, age, gender)`.

```
class Person:
  def __init__(self, name, age, gender):
    self.name = name
    self.age = age
    self.gender = gender

  def printTheName(self):
    print(self.name)

class Student(Person):
  def __init__(self, grade, name, age, gender): #also put inside init in Student
    Person.__init__(self, name, age, gender)
    self.grade = grade

  def printTheGrade(self):
    print(self.grade)
```

# super()

Everything above can be solved with one single line of code: super().__init_\_().

```
class Student(Person):
  def __init__(self, grade, name, age, gender):
    super().__init__(self, name, age, gender)
    self.grade = grade

  def printTheGrade(self):
    print(self.grade)
```

# attribute

Here are ways to make, change, or delete self variabels outside of class.

setattr(classvariable, selfvariable, newvalue) changes the attribute.

hasattr(classvariable, selfvariable) checks whether classvariable has selfvariable.

delattr(classvariable, selfvariable) will erase the self variable.

```
class Person:
  def __init__(self, name):
    self.name = name

me = Person("Hyunseung")
print(me.name)

setattr(me, 'name', "Lee")
print(getattr(me, 'name'))
print(hasatr(me, 'name'))
delattr(me, 'name')
```
