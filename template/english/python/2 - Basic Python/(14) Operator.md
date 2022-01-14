# What is operator?

Operators are symbols that does operation on numbers.

For example, + and - calculates the addition and subtraction between two numbers.

In this CSL, we will be learning about different types of operator in Python.

# Arithmetic Operator

+, -, \*, / are addition, subtraction, multiplication and division operators.

** is the power operator. 3 ** 3 is equal to 3 times 3 times 3.

// calculates the number of times B could go inside A. For example, 4 // 3 is euqal to 1 because 3 can go inside 4 only once.

% calculates the remainder of B divided by A. For example, 4 % 3 is eqal to 1 because 3 can go into 4 once and the rest is 1.

# Assignment Operator

Assign operators are operators that assign the outcome of operation.

Arithmetic operator does not change the variable it does operation on. For example, a \* 3 does not change a.

Assignment operators, on the other hand, first does operator on variable then assigns the result to the original variable. For example, a += 1 is euqal to a = a + 1.

### +=

+= adds a number to variable and assigns the value to the variable.

```
a = 1

a += 2

print(a) #3
```

### -=, \*=, /=, \*\*=, %=, //=

-= subtracts and assign.
\*= multiplies and assgin and so on.

```
a += 4, a = a+3
a -= 4, a = a-3
a *= 4, a = a*3
a /= 4, a = a/3
a **= 4, a = a**3
a %= 4, a = a%3
a //= 4, a = a//3
```

# Compare Operator

Compare operators compares two values.

```
a = 3
b = 3

print(a == b)
```

== returns boolean whether the two values are euqal to each other.

> returns True if left is bigger and False otherwise.
> = returns True if left is bigger or equal to right and False otherwise.
> < returns True if right is bigger and False otherwise.
> <= returns True if right is bigger or equal to left and False otherwise.
