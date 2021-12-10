# Simple If Statement

Sometimes, with all the if, elif, else and indentation, if statement can be a bit confusing.

Howwever, using this syntax, it simplifies if statement into one single line.

```
if a > b: print("as is greater than b")
```

In if-else statement has the following syntax: (statement is True) if (satement) else (statement is False).

```
a = 2
b = 5

print("A") if a > b else print("B")
```

if-elif-else statement just have extra 'else (second if is True) if (second if)' line between simple if-else statement.

```
a = 3320
b = 312330
print("A") if a > b else print("=") if a == b else print("B")
```

# Switch statement

Other programming languages such as JavaScript has unique and useful syntax called siwtch.

We can use switch to compare values. Switch statements are simply if statements that uses '==' to compare.

However, switch statement does not exist in Python.

Therefore, we have to use another way.

```
x = input("type in either a or b: ")

a = {
	"a": "Chose a",
	"b": "Chose b"
}.get(x, "Wrong")

print(a)
```

We will be getting the key from dictionary a.

If x is equal to "a", the value of dictionary a will be "Chose a".

On the otherhand, if x is "b", "Chose b" will be printed.

If x does not exist in keys of a, "Wrong" will be printed to the console.

# Indentation

Indentation is when you make an extra space before the first alphabet of the parahraph so that the reader will recognize it is the start.

```
  Start of paragraph. blablablablabla...
```

In Python, if you want a code to be inside a syntax (e.g. if statement), you HAVE to indent.

Otherwise, Python will raise an indentation error or think the code is outside of if statement.

```
if 1==1:
  print('testing')
print("this is not running in if statement")
```

The second print is not in if statement because it is not indented.
