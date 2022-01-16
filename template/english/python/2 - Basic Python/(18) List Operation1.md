# List - Indexing

You can use indexing to replace the original value of the array with a new one.

```
worstProgrammingLanguages = ["Scratch", "Entry", "R", "PHP", "Assembly"]
worstProgrammingLanguages[0] = "Ruby"
print(worstProgrammingLanguages)
```

We can use indexing to replace the 'x~y's values ​​of the list variable a with a new list.

```
programmingLanguagesTheAuthorsLike = ["Javascript", "Python", "C++"]
programmingLanguagesTheAuthorsLike[1:2] = ["HTML", "Perl"]
print(programmingLanguagesTheAuthorsLike)
```

# insert()

You can insert a new value at the desired position by using the method called insert().

```
worstProgrammingLanguages = ["Ruby", "Scratch", "Entry"]
worstProgrammingLanguages.insert(0, "C#")
print(worstProgrammingLanguages)
```

# Subtracting a value from a list

You can use 'remove' to remove the data 'C' from the list.

```
goodCodingLang = ["Javascript", "Python", "C"]
goodCodingLang.remove("C")
print(goodCodingLang)
```

You can also remove the 'x's value using pop(x) and del keywords.

```
goodCodingLang = ["Javascript", "Python", "C"]

goodCodingLang.pop(2)
del goodCodingLang[1]

print(goodCodingLang)
```

You can use clear() to remove all values, just like throwing a list in the trash.

```
greatings = ["Hello", "Hi"]
greetings.clear()

print(greetings)
```

# Finding the number of occurrences of a value in a list

Let's use 'count()' to find the number of occurrences of the value 'blue' in the list.

```
color = ["red", "orange", "blue"]
print(color.count("blue")) prints #1.
```

# Finding the index of a list value

You can also find the index of a value in a list. Let's find the index of the word 'Poo'.

```
disgustingWords = ["Pee", "Poop", "Vomit", "Burp", "Fart"]
print(disgustingWords.index("Poo"))
```

# Adding all values ​​in a list

You can use the sum() function to find the sum of all numbers in a list.

```
sum = sum([1, 2, 3, 4, 5])

print(sum)
```
