# File Reading

Let's make a file named text.txt that has 'Python is fantastic' message inside.

Now, let's try to read the text inside that file using Python.

In open() function, we first have to put in the full path of text.txt and the mode we are going to open it with.

The mode should be 'r' which is short for 'reading'.

# read()

read() method gives us ALL the text inside that file.

```
mainFile = open(r"C:\text.txt", "r")

print(mainFile.read()) #Python is fantastic
print(mainFile.read(6))
```

Note that the 'r' before the path means it is raw and that there will be no escape character present.

# readline()

Readline reads the lines one by one.

Using for loop, we can read each line.

```
mainFile = open(r"C:\text.txt", "r")

print(mainFile.readline()) #Python is fantastic

for i in mainFile:
  print(i)
```

# readlines()

readline() is very similar to readlines().

However, readlines read the nth line while readline() reads the current line one by one.

```
mainFile = open(r"C:\text.txt", "r")
print(mainFiles.readlines(4))
```

# readable()

To check whether our file can be read using Python, we can use readable() method.

If the file is readable, return True and False if otherwise.

```
mainFile = open(r"C:\text.txt", "r")

print(mainFile.readable())

mainFile.close()
```
