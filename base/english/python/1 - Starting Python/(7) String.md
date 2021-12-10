# What is string?

String all symbols that makes human language.

For example, 'A' and 'B' is called a string in programming language.

To make a string in Python, put symbols inside '' or "".

Note that even though numbers are inside '' or "", they are regarded as strings.

# Multi - line string

What would you do if there were lots and lots of lines to print?

Try printing Harry Potter and the Sorcerer's Stone to the console.

Nightmare.

```
THE BOY WHO LIVED
M r. and Mrs. Dursley, of number four, Privet Drive, were proud to say
that they were perfectly normal, thank you very much. They were the last people
you’d expect to be involved in anything strange or mysterious, because they just
didn’t hold with such nonsense.
Mr. Dursley was the director of a firm called Grunnings, which made
drills. He was a big, beefy man with hardly any neck, although he did have a
very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the
usual amount of neck, which came in very useful as she spent so much of her
time craning over garden fences, spying on the neighbors. The Dursleys had a
small son called Dudley and in their opinion there was no finer boy anywhere.
```

However, there is rather very simple solution to this problem.

Use """""" and ''''''.

In """ and ''', we can make new lines. However, using '' or "", we cannot.

# String indexing

Indexing is when choosing a specific point in a string.

For example, we can use the following code to print the first alphabet of 'Hello'.

```
a = "Hello"
print(a[0])
```

The number after [] is called index.

If we look closely, we see that we used '0' instead of '1' to find the FIRST index of string.

First is 0, second is 1, third is 2 and so on.

This interesting fact will be explained in the 'list' chapter.

# String print from x to y

To print from range x to y, we can use ':' between index. From index x (first number) to y - 1 (not include second number) is returned.

Note that if we do not define first and second index, Python will interpret it as 0.

So, using [:] will print everything.

# String start backward

Using -1 starts from backward.

```
a = "Hello"

#    H  E  L  L  O
#    0  1  2  3  4
#   -5 -4 -3 -2 -1

print(a[-1])
```

# Reverse string

To reverse string, use [::-1].

::-1 is short for 0:0:-1.

The last number is the step of indexing. Step means the distance between each index.

Using -1 means starting backward and moving to forward.

In other words, it prints the string backward.
