# Declare number variable

We use numbers all the time.

In Python, numbers are used as much as it is in human world.

To declare numbers, assign the number without quotation marks to the variable.

```
age = 12
print(age)
```

# Basic Calculation

In elementary school, we learned how to add, subtract, multiply, and divide.

Adding and subtracting is same in Python. Use + and -.

On the other hand, multiplying and dividing is a bit different. Instead of using the normal operators, Python uses \* and /.

```
x = 2
b = 5

print("x+b=", x+b)
print("x-b=", x-b)
print("x*b=", x*b)
print("x/b=", x/b)
```

# The difference between number and 'number'

There are two ways you can define a number variable.

One way is to define it as a string, inside the quotation mark.

The other way is to simply define them as a number without the quotation mark.

```
firstNumber = "1"
secondNumber = 1
```

Is there a different? Yes.

```
print(type(firstNumber))
print(type(secondNumber))
```

If we look at the example above, we can see that &lt;class 'str'> is printed.

Then, &lt;class 'int'> is printed.

This is because Python interprets anything inside quotation mark as a string no matter what.

# input() value to number

input() always returns string.

```
firstNumber = input("Number 1: ")
secondNumber = input("Number 2: ")

print(firstNumber + secondNumber)
```

Let's run the example code above.

Typing in 1 and 1 should give us 2.

Wait. What? It gave us 11.

This is because 1 and 1 is a string and using + will merge them.

To do the calculation correctly, we first have to make the string number to number.

Use int() to make string into a number.
