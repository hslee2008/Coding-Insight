# What is __name_\_?

The __name_\_ variable let's us know whether the specific code is running as a module or directly.

We can also use __name_\_ for figuring out the module name.

# `__name__` == `__main__`

Let's look at the following examples.

file1.py

```
print("Hi")
```

file2.py

```
import file1

print("Hi")
```

If we run the code inside file2.py, "Hi" is printed twice.

Let's try changing the contents inside file1.py.

file1.py

```
if __name__ == '__main__':
  print("Hi")
```

Know, if we run the code inside file2.py, the only thing we get is one "Hi" instead of two.
