# Making Files

"x" mode will create a file if it does not exist.

Note that error will occur when the file already exists.

```
mainFile = open("example.txt", "x")
```

Adding '+' at the end of original mode will let us write and read file both at once(It will also create file if it does not exist).

# Removing Files

To remove files, use the 'os' module we learned before.

```
import os

os.remove("example.txt") #using remove() function
os.rmdir("example.txt") #using rmdir() function (ReMoveDIRectory)
```

# Encoding

By default, Python will open files and read them with 'ASCII'.

So, if there is a character that does not exist in ASCII(such as an emoji), Python will give us an error.

In this case, we have to specify encoding which tells Python how to understand the file.

In ASCII, there are limited numebr of characters.

Use UTF-8 if you have emojis, special characters, or other language character inside your file.

```
mainFile = open("example.txt", "r", encoding="UTF-8")

mainFile.close()
```
