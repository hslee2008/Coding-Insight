# What is Boolean?

Boolean is a type of data that has only True and False.

Let's try to make a program that prints whether the number user typed in is bigger than 5.

```
userNumber = int(input("Number: "))

print(userNumber > 5) #whether userNumber is bigger than 5
```

We can also store boolean values in variables.

```
a = 5 > 6
```

# Something to be careful

In Python, incorrect is False and correct is True.

I did not made the first alphabet of False and True uppercase on purpose.

Python uses False and True with UPPERCASE letters.

# not keyword

Using not, we can switch from true to false and vice versa.

```
isPretty = True

print(isPretty)
print(not isPretty)
```

# Assert

Let's look at the following example.

```
assert 2 > 1
print("YES. 2 is bigger than 1")
```

The example above will make an error if 2 is not bigger than 1.

Otherwise, it will continue on and print "Yes. 2 is bigger than 1."

We can also make your own message.

```
assert 1 > 2, "Hmmm... 🐛🐛🐛(bug) found in code."
```

# all()

All means everything.

We have not yet learned this yet but if everything inside list is True, all() prints True and prints False if otherwise.

```
print(all([True, False, True, True]))
```

# any()

any() prints True if any of the items in list is True and False if all of them are False.

```
print(any([True, True, True, True]))
```
