# What is list?

List is a menu or listings of items.

We use list to record information about what we want to buy in the grocery.

# Declaring list

In Python, use [] to store items seperated by a comma(,).

```
programmingLanguages = ["Javascript", "Python", "C", "C++", "Perl"]
print(programmingLanguages)
```

# List index

Similar to string index, we can access each item by using index.

```
bestProgrammingLanguages = ["Javascript", "HTML", "Python", "Perl", "C", "C++"]
print(bestProgrammingLanguages[0]) # print the best programming language
```

# Why Python use 0 as first index

Humans usually think of first as 1.

or example, if somebody says "Please. The person from the 2 row and column rise!", the second person will rise. However, computers will make the third person rise.

This weird fact can be explained through mathematically.

List in math is a series of number with specific patterns.

For example, let's think about a list that increases by 2.

```
sequence = [1, 3, 5, 7]
```

Starting from 1, each items increased by 2.

We can express the first item like this: 1 + 2\*0

1 is the first number and 2 is the pattern. 0 means that it is increased by 0, thus the first number.

The second number is euqal to 1 + 2\*1 and so on.

As you can see, the number of times patterns are added to the original one is euqal to the nth number minus one (n - 1).

This is why first is 0, second is 1 and so on because of the number of times pattern are added.
