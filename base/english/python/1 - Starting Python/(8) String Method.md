# Get length of string

To get the length of a certain string, we can use the len() code.

Simply put a string inside len() and it will return a number.

```
a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print(len(a)) #26 is printed
```

# Check whether substring is inside string

Substring means a part of a string.

To check whether a substring is inside a string, we can use the 'in' keyword.

'Teddy Bear' in 'this box'. Similar to this syntax, put substring first and string later with 'in' seperating.

```
print('abc' in 'abcdef')
```

# Substring's index in string

To get the index of a substring which is inside string, use the index() method.

Having the format of 'string'.index(string), it prints the index.

Note that if the substring does not exist, the code will cause an error.

```
print('abcdef'.index('abc'))
```

# Uppercase and Lowercase in string

Python has lots of useful tools for handling upper and lowercase.

```
a = "hello world"
b = "HELLO WORLD Ω"

print(a.capitalize()) #Hello world is printed
print(a.title()) #Hello World printed
print(a.upper()) #HELLO WORLD is printed
print(b.lower()) #hello world Ω is printed
print(b.isupper()) #True
print(b.islower()) #False
print(a.istitle()) #False
```

capitalize() makes the first alphabet of the sentence capitalized.

title() makes the string into a title format (books).

upper() makes every single alphabet into an upper case letter.

lower() on the other hand, makes everything into lower case.

isupper() and is islower() checks whether the string is in all upper or lower case. Guess which is which.

istitle() returns either True or False depending whether the string is in title format.

# Centering string

Centering a string means surrounding the original string with new characters.

With ' ' surrounding the string, it will look like it is in the middle.

```
txt = "Hello World"
x = txt.center(50)
print(x)
```

Put the number of characters for each side of original string.

```
txt = "Hello World"
x = txt.center(50, '|')
print(x)
```

You can also specify your own character after the number.
