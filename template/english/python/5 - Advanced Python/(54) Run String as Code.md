# Can we run string as code?

In Python, we can run a string like a code.

# eval()

eval() is short for evaluation.

eval() function will either run a single-line code or find the value of an expression.

For example, if we put in '1+1'(as string) inside eval and print the result, it will give us 2.

The example below will get a single-line code and execute it.

```
print(eval(input("Code: ")))
```

# exec()

exec() is short for execute and it runs a Python code.

```
exec(input("Code: "))
```

# compile()

compile() will turn string into binary code and run that.

```
x = compile("print('Hello World')", None, 'eval')

exec(x)
```

1. The first parameter is the code to run
2. The second parameter is the name of the file the string contains (if running directly, put 'None')
3. The third argument is for the mode to compile. 'eval' is when there is expression, 'single' is one single line, 'exec' is multi-line code.
