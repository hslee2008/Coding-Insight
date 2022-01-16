# If Statement

If statement is a statement that contains the meaning 'if'.

For example, "If you get 100 in your test, I will give you a candy".

The sentence above has the same meaning: If your score is equal to 100, get an hour of playing games.

In Python, we can try that statement out with something called if statement.

```
a = input("Score:")

if a == "100":
  print("play game")
```

Depending on the statement a == "100", either "play game" is printed or nothing.

If a is 100, print "play game" and nothing if otherwise.

Note to put ':' after statement and indent the code you want to run if statement is true.

# if - else

If - else statement is very similar to if statement above.

However, we will be adding a new code to run if the statment is false.

```
a = input("Score:")

if a == "100":
  print("candy")
else:
  print("nothing")
```

"candy" is printed if a is 100 and "nothing" is printed if a does not equal to 100.

# if - elif

To put it simply, if - elif is equal to if - else but with another if inside else.

The code inside elif will run when the statement inside if is False and another statement inside elif is True.

```
a = input("Score:")

if a == "100":
  print("candy")
elif int(a) < 20:
  print("no video games for a month!")
```

If a is 100, print candy. If a is not 100 and is lower than 20, print "no video games for a month!".

Note that you can put in as many elif statements as you want as long as there is an if statement first.

# if - elif - else

If - elif - else is a combination of statements we just learned.

If all the satements inside if and elif is False, Python will run the code inside else.

```
a = input("Score:")

if a == "100":
  print("candy")
elif int(a) < 20:
  print("no video games for a month!")
else:
  print("no video games for a year!")
```

# and operator

'and' operator is used to put two statements inside on if satement.

When using the 'and' operator, the code inside if statement will run when the two statements is True.

For example, the code inside if a == 1 and a > 0 will run if a is equal to 1 and bigger than 0.

``a = input("Score:")

if a == "100":
  print("candy")
elif int(a) < 20:
  print("no video games for a month!")
elif a == "1":
  print("no video games for a year!")`
```
