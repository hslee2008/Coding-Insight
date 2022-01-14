# What is while loop?

Simply put, while loops is a loop that repeats the code inside if a certain statement is true.

If that statement becomes false, while loop stops.

However, you have to be careful with while loops because you can create an infinite loop accidently.

# Using While Loop

The following is an example of while loop.

```
a = 5
while a != 0: #if a is not 0
 print(a) #print the value of a
 a -= 1 #minus one from a
```

Because while loops are statements, you have to indent the code that will belong inside while loop.

Becareful because you do not want to create a loop like the following.

```
a = 5
while a != 0:
    print(a)
    a+=1
```

If you actually ran this in the Python runner box or your computer, press ctrl+c to stop.

# How to make while loops

1. First, make a variable to store your counts or anything (e.g. a = 5)
2. Make a while statement (put while and then a statement such as a >= 0)
3. Either decrease or increase or change the value of the variable (e.g. a += 1, a -= 1)
