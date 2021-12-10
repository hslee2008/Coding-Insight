# Definition of Module

Modules are a group of functions, variables, and classes to be used in other files.

We can fetch functions, variables, and classes from other files and use it outside of the file.

# import - Import Module

We have to fetch the module to use functions and variables inside it.

To do this, run the code 'import filename'.

Do not put '.py'(extension) at the end, only the file name.

```
import math #math is a tool for handling complex math
```

# dir(module) - Look at all functions and variables

When we use dir(), we can see all the available functions and variables.

```
import math #math is a tool for handling complex math

print(dir(math))
```

If we run the code above, we can see an item named 'sqrt' inside the list.

sqrt is short for Square Root and it is used for finding square root of a number.

```
import math

print(math.sqrt(4))
```

# 'as' keyword

Let's assume there is a file named abcdefgjijklmnopqrstuvwxyz.py.

We want to import the file as a module to use the function abc().

However, typing abcdefghijklmnopqrstuvwxyz every time is very annoying.

There are two ways we can achieve this.

1. Store all information on a variable

```
import abcdefghijklmnopqrstuvwxyz

alphabet = abcdefghijklmnopqrstuvwxyz

alphabet.abc()
abcdefghibjkmnopqrstuvwxyz.abc() #Sames as the code above
```

2. Using as keyword

```
import abcdefghijklmnopqrstuvwxyz as alphabet

alphabet.abc()
```

To conclude, 'as' keyword makes long module names shorter.
