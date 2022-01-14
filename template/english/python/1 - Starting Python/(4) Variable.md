# What is variable?

A variable in programming language is a place where you can store information.

For example, think of a box. It can contain anything that fits into it.

A variable is very similar to a box.

# Declare variable

To declare a variable in Python, we can use the following syntax.

```
NAME = DATA
```

In the syntax above, NAME is the name of the variable and DATA is the value of the variable.

# Using variable

You can use the value of the variable by using the name of it without "".

```
name = "John"
print(name)
```

In Python, the lower and uppercase of the variable name matters. NAME and name is different.

# Variable name rules

There are three rules in variable names.

1. Only alphabets, numbers and \_ is allowed
2. The first letter of variable name should not be a number
3. You cannot use certain names like (yield, return) - this group is called keywords

# Change variable value

To change the variable's value, simply type in a new value.

```
name = "Ella"
print(name) # Ella is printed
name = "John"
print(name) # John is printed
```

# Delete variable

We can delete variables to preserve more space.

Simply use del keyword to delete name.

```
name = "Python - Factory"
del name
print(name)
```

If we run the code above, we get an error.

We are trying to print a variable that does not exist.

# Declare multiple variables at once

To declare mutiple variable and assign multiple values, use commas to seperate names andvalues left and right side of '='.

```
a, b, c = 1, 2, 3

print(a)
```

To assign single value to multiple variable, line them up and put value at the end.

```
a = b = c = d = e = "alphabet"

print(a)
print(b)
print(c)
```
