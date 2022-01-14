# Error

In some instances, we might accidently make an error.

If that error can be either ignored or removed, we should 'handle' them right away without letting them intefere with our program.

That error is called bug which means 'a part of code that is causing the problem'.

# try - except

For example, let's try making a calculator that will divide the number 2.

It can be easily done by getting an input then turing them into a number and dividing 2 by the outcome.

However, our code should not end.

We have to put in a code to tell the users you cannot divide a number by 0.

```
try:
  ur = 2/int(input("Type in a number that will divide 2: "))
  print(ur)
except:
  print(" Bug! Bug! Bug !🐛🐛🐛x999")
```

We can make an exception for specific errors.

Put the name of the error after 'except' keyword.

```
try:
  ur = 2/int(input("Type in a number that will divide 2: "))
  print(ur)
except ZeroDivisionError:
  print("Bug! Bug! Bug! 🐛🐛🐛x999. You cannot divide a number by 0. That is impossible. 🐛🐛🐛")
```

# try - except - else

If all our code above finishes and no error occured, Python will run the code inside 'else' statement.

```
try:
  ur = 2/int(input("Type in a number that will divide 2: "))
  print(ur)
except ZeroDivisionError:
  print("Bug! Bug! Bug! 🐛🐛🐛x999. Cannot divide by 0. 🐛🐛🐛")
else:
  print('No error :)')
```

# try - except - finally

Though 'else' statement does not run when exception occurs, finally clause will run no matter.

```
try:
  ur = 2/int(input("Type in a number that will divide 2: "))
  print(ur)
except ZeroDivisionError:
  print("Bug! Bug! Bug! 🐛🐛🐛x999. Cannot divide by 0. 🐛🐛🐛")
finally:
  print('Finishing code!')
```
