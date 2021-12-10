# What is context manager(with 'with')

In Python, it is required that you close the file using close() method after working with it.

However, it very hard to always close the file if there are multiples of them open. Furthermore, you might forget to close the file because the code got too complicated.

In these situations, we can use the 'with' keyword to create a context.

Context manager will automatically close the file after running the code inside the statement.

```
with open("example.txt", "w") as mainFile:
  mainFile.write("testing123")
```

# **enter**와 **exit**

We learned about classes before.

We can use classes to create our very own context manager.

```
class fileManager:
  def __init__(self, fileName):
    self.fileName = fileName

  def __enter__(self):
    self.file = open(self.name, "w", encoding = "UTF-8")
    return self.file

  def __exit__(self, type, value, tb):
    if self.file:
      self.file.close()

with fileManager("hello.txt") as mf:
  mf.write("Hello World")
```

It is required that you create `__enter__()` function inside your file manager and put in the code that will open the file.

`__exit__()` is for closing the file. Put the code for closing.

Note that the two special function we learned above can be used for anything other than context manager.

Anything that needs extra code before running and after running can have a context manager with `__enter__()` and `__exit__()`.
