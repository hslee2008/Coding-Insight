# Organizing your list

You can use the 'sort' method to sort the list in alphabetical and numeric order.

```
synonymOfGreat = ["Fantastic", "Awesome", "Great", "Good"]
synonymOfGreat.sort()
```

# rearranging the list

To reverse the alphanumeric order in the list, enter 'True' for the value of 'reverse' in sort.

```
alphabet = ["a", "b", "c"]
alphabet.sort(reverse = True)
```

# Reverse()

You can also reverse the order of the list using the 'reverse' function.

```
alphabet = ["a", "b", "c"]
print(alphabet.reverse())

print(reversed(alphabet))
```

We can make our own rules. Let's start with the lowercase letters in the letter and sort them into uppercase.

```
alphabet = ["a", "A", "b", "B"]
print(alphabet.sort(key = str.lower))
```

# Adding value to the end of the list

To append a new value to the end of the list, we'll use 'append()'.

```
badCodingLanguages = ["Entry", "Scratch"]
badCodingLanguages.append("Assembly")
```

# Merging list

You can use 'extend' to add two lists to create a new sheet.

```
goodProgrammingLanguage = ["Javascript"]
secondGreatProgrammingLanguage = ["Python"]
print(goodProgrammingLanguage.extend(secondGreatProgrammingLanguage)) #["Javascript", "Python"]is printed
```

# Comparing list values

If the list is all numbers, you can find the largest and smallest numbers using max() and min().

```
lists = [1, 2, 3]

print(max(lists)) #3
print(min(lists)) #1
```
