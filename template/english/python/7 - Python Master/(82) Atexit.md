# Python Function register

Using the atexit module, we can register a function to role when the Python program ends.

Atexit module is mostly used for functions for wrapping up the program.

# register()

Let's try making a file editor using Python.

```
with open(input("Full path: "), "w") as f:
  f.write(input("New Content: "))
```

If we press ctrl+c and stop the program, the file might not close properly.

What should we do?

We can use the atexit.register() method to register a specific function to run when program ends.

```
import atexit

def informAbort(f):
  with open(f, "w") as file:
    file.write("User aborted. ERROR")

pathFile = input("Full path:")
atexit.register(informAbort, f=pathFile)

with open(pathFile, "w") as f:
  f.write(input("New Content: "))
```

Or we can use the decorator to decorae a function to run when program ends.

```
import atexit

@atexit.register
def informAbort(f):
  print("User aborted. High chance error will occur")

with open(pathFile, "w") as f:
  f.write(input("New Content: "))
```
