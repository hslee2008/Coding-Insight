# What is printing?

Many people think of 'printing' as showing information on page. However, there is a new definition of 'printing' that you might not be aware of.

In programming language, printing is when a computer displays information on screen. The box in which the computer prints is called 'console'.

To print information to the console, use the following code.

```
print("Hello World")
print("5")
print("!@#$")
```

# Using 'end' in print()

We can print a text next to another one by using 'end'.

Most programming languages by default print the text itself to the console. However, Python prints a new line after the original text.

Somtimes we want two prints to be on the same line. This is an example of a situation where we need to use 'end'.

For example, if we want to print "Hello World"(without "") and then a period, we can use end to store '.'.

```
print("Hello World", end=".")
```

# Using 'sep' in print()

If we print "Hello World", Python prints "Hello World".

Another way of doing this is by putting multiple texts seperated by commans inside print(). Python will automatically squish the texts with spaces between them.

```
print("Hello World")
print("Hello", "World")
```

The example above uses spaces to squish words. What if we want to choose our own character to squish with? For example, we might want to squish the texts together with a space and a comma.

We can use 'sep' to store the character inside

```
print("Hello", "World", sep=" ,")
```

# using 'file' in print()

Using file, we can WRITE anything to a file. The job of handling files in Python is called 'File handling'.

```
print("Hello World", file=open("writing.txt", "w"))
```

open() is a code that opens the file. You have to put two texts in there to make it work.

First, the path of the file you want to write to. The path of the file is similar to the adress of your file on your computer. To copy the path, right click on any file in VSCode and click 'copy path'.

Second, the single character is the mode that we want to open the file with. In this case, we will be writing or appending to the file, so we have to use either 'w' or 'a'. The difference between w and a is that w writes new contents and overwrites anything Previous in file while a adds more contents.

# input

The task of getting information from the user is called 'input'.

In human terms, we call this 'asking'.

For example, let's build a simple login program using Python.

1. First, get the typed in password.
2. Second, compare it to the set password
3. if the two password is the same, login otherwise stay logged out.

```
if 'password' == input("Password:"):
  print("Login")
```

We have not learned about 'if' yet. To put it simply, if(in this case) is used to compare the input and 'password' to see if they match.

Make sure you put an indent before 'print("Login")'.
