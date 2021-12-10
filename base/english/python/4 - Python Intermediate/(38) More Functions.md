# quit() and exit()

We can always quit the Python program whenever we want by using either quit() or exit().

```
a == 1
while True:
  if a == 10:
    quit()
  else:
    a += 1
```

quit() and exit() is exactly same.

# help()

In Python, there is an useful program to help developers.

Use the help() function anywhere (even inside your python file!) and the help program will start.

The following text should appear.

```
Welcome to Python 3.9's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.9/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help>
```
