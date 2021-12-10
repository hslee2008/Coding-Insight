# What is a for loop?

For is a code that you can used with an iterable.

Iterable are simpley a group of data types that can be accessed with indexing (e.g. lists).

```
a = [1,2,3,4,5]
for i in a:
	print(i)
```

If we run the code above, numbers from 1 to 5 is printed.

# for + range()

range() function gives us a range data type between two numbers.

```
for i in range(10): #i will be from 0 to 9
	print(i)
```

# for - else 문

Simlar to else statement in if statements, we can use this with for loops.

If the loop finishes, it runs additional code.

```
for i in range(10):
	print(i)
else:
	print(">")
```

# Stop looping

Using the keyword 'break', we can stop the loop instantly right where it is.

The for loop will stop so other values of i will not be considered.

```
for i in range(10):
	if i == 5:
		break
	else:
		print(i)
```

Tip: use break as often (but not too much) as the for loop is stopped faster than without it.

# Another Tip!

Sometimes, for loops can take a long long long time to finish.

For this ocassions, we have to know how to make for loops faster even for a little bit.

The best way to do is by first storing the iteration data types (range) inside a variable and use it in for loops.

```
for i in range(10):
	print("*" * i)

a = range(10)

for i in a:
	print("*" * i)
```
