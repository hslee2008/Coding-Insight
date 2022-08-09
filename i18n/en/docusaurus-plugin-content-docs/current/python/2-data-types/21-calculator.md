# Calculator

We will create a basic addition calculator.

## Code explanation

1. Save numbers into `num1` and `num2`.
2. We will change to a float number `float()`.
3. We will add `num1` and `num2`.

Since `int()` only works for integers, we will use `float()` to convert the result to a float number.

Note that adding to integers with `float()` will result in numbers with `.0` at the end.

## Making the calculator

Input the numbers into the input fields.

```py
num1 = input("Number 1: ")
num2 = input("Number 2: ")
```

`float()` converts the input to a float number.

```py
addnum = float(num1) + float(num2)
```

Print the added number.

```py
print(addnum)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/2a317b1dba"
  height="400"
/>
