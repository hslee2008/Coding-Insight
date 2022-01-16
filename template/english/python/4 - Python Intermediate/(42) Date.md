# How to use datetime module

Let's fetch datetime module first.

```
import datetime
```

# The date and time right now

To get the date and time right now, use the datetime.datetime.now() method.

The format will be: 'yyyy-mm-dd hh:mm:ss'.

```
import datetime

print(datetime.datetime.now())
```

# hour, minute, second and milisecond

To get each of hour, minute, second and milisecond, ues the strftime() method.

```
import datetime

rightNow = datetime.datetime.now()
print(rightNow.strftime("%H")) #Hour in 24 format (0~23)
```

If we put in "%H" in strftime() function, we get the hour in 24-hour format.

If you want 12 hour format, put in '%I'.

Using 12 hour format might be confusing because you do not know whether it is A.M. or P.M. A.M. and P.M. can be found with '%p'.

Minute is '%M', second is '%S' and milisecond is '%f'.

# Week, date, and year

To find the name of today, use '%A'.

The month name such as June and January can be found with '%B'.

Using "%Y", we can find the full year in yyyy format (e.g. 2022).
