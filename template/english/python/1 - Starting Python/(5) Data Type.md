# What is data and data type?

In programming, symbols such as numbers and alphabets are called data.

Data Types are types of different data.

For example, one of the most used data types in the human world is text(otherwise known as strings). In Python, put texts inside '' or "".

The example below is a way to declare srings in Python.

```
weather = "a bit rainy"
```

# Know the data type in Python

To find the data type of a variable or anything in Python, use the type() code.

Simply put any variables inside to see the data type.

```
a = "Hello"

print(type(a))
```

The code above prints &lt;class 'str'>. str stands for string.

# Check data type in Python

To check whethre a data is a certain type in Python, use isinstance() code.

Put the name of variable or data then insert the data type name to check whether the type of data matches the given type.

The code will return either True or False. These are called Boolean.

```
weather = "sunny"
print(isinstance(weather, str))
```

The code above prins True because "sunny" is a string.
