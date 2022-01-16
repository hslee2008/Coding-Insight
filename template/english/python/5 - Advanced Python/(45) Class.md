# What is class?

Think of a situation where you want to create multiple files with same format (e.g. letter writing style format).

Then, you copy the style containg it and write letters.

In this example, the origin file can be called 'template' and in Python terms, it is a 'class'.

Class is a template code.

# Creating class

For example, if we are planning on creating multiple dictionaries about cars that has same keys, we can make a class instead.

In dictionaries, you have to make same keys all the time.

With class, create one class then declare them seperatley.

```
class MyCar:
  model_name = QWE_123
```

To make a car, use 'new classname()' code.

```
myCar = new MyCar()
print(myCar.model_name) #QWE_123
```

# __init_\_()

The example above is very similar to a dictionary.

However, classes are much more than a simple data type for storing information.

To make a real class, declare the __init_\_() function inside class.

In the example above, we need to access variables inside classes like dictionaries with keys.

In the example below, we can put in information between () when declaring.

```
class Person:
  def __init__(self, name, age, gender):
    self.name = name
    self.age = age
    self.gender = gender

p1 = Person("Hyunseung", 12, "Male")

print(p1.name)
```

To use __init_\_(),
1. Declare __init_\_() function inside the class
2. Make sure that the first parameter of __init_\_() function is 'self'
3. Put in the information you will gather about a person
4. Put 'self.variable = variable' code inside the function
5. When declaring a new class, put in the information in order

# Functions inside class

The difference from class and dictionaries are not simply __init_\_() functions.

Classes can have functions inside them.

The best thing is, the function has access to all the previously declared self.variables.

To use the self variable, try 'self.variablename'.

```
class Person:
  def __init__(self, name, age, gender):
    self.name = name
    self.age = age
    self.gender = gender

  def printTheName(self):
    print(self.name)

p1 = Person("Hyunseung", 12, "Male")

p1.printTheName()
```

# self

When creating variables inside class, using self as containers will be better for management.

Note that if you want to use self variables inside functions, you have to put in 'self' as the first parameter.

Furthoremore, self does not need to be 'self'. It can be 'abc' or 'python' or anything as long as all the self is same.

```
class Person:
  def __init__(abc, name, age, gender):
    abc.name = name
    abc.age = age
    abc.gender = gender

  def printTheName(abc):
    print(abc.name)

p1 = Person("Hyunseung", 12, "Male")

p1.printTheName()
```

