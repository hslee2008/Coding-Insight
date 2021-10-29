# What is logging?

If there is a problem with a Pyton program and you might want to know what is going on.

In this situation, you can insert a logging statement which will print the value of the variable value to the console.

Logging can tell us about what is going on with our variables.

We have to import logging first in order to use special log method.

But first, we have to set the log file where our loggings will be stored.

```
import logging

logging.basicConfig(filename="log.log")
```

# INFO

info is short for information.

logging.ingo() method will print a value to the log file.

```
import logging

for i in range(1, 100):
  if i >= 50:
    logging.info(i)
    pass
  print(i)
```

# WARNING

logging.warning() method is for warning the devlopers about something.

```
import logging

try:
  mainInt = int(input("Number: "))
  secondInt = int(input("Number2: "))

  print(mainInt / secondInt)
except ZeroDivisionError:
  logging.warning("Hmmm... You cannot divide by 0. That is crazy.")
```

# ERROR and EXCEPTION

logging.error() is for logging error messages if something went wrong.

```
import logging

logging.error("You are too smart!")
```

Exception is very similar to error but a bit different.

Exception is when a variable value went wrong.

```
import logging

logging.exception("you cannot use this number because it is not allowed.")
```
