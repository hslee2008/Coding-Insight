# Making Your Very Own Module!

Let's try making our own modules that has two functions which will calculate whether a number is odd or even.

Our file name will be 'OEM'(Odd, Even Module).

File OEM.py
```
def isEven(num):
  return num%2==0

def isOdd(num):
  return num%2==1
```

Now, let's make the main file named main and import functions from OEM.py.

File main.py
```
from OEM import isEven

print(isEven(3)) #False is printed
```

We made our own module!

# Using *

However, there is a big problem.

If we want to fetch all the variables and functions, we have to type in one by one.

We can use '*'(asterik) to import every single thing.

```
from OEM import *

print(OEM.isEven(3)) #False
print(OEM.isOdd(5)) #True
```

However, this method is not recommanded. Use `import OEM` instead.

# Publishing

We can publish our own module to PyPi.

If we publish our pacakge, everybody in the entire world can run the command `pip install` and download our code.

To publish, simply run the following command:

> python filename.py register -r

# Module - `__import__()`

Similar to 'import' we can fetch modules using a function rather than a keyword.

```
os = __import__("os")
```

If you want to fetch your own file, type in the whole path of it.

We will learn about whole path later in 'handling files' page.

```
myMod = __import__(r"C:\main.py")
```

To copy whole path, right click on file and click on 'Copy Path'.

# Module limits

Everything is great about modules!

However, we cannot use modules outside of the folder containing our module.
