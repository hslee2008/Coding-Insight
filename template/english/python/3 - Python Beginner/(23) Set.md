# What is set?

Set is a group of items that satisfies one or more than clear condition.

When I mean by clear, I mean a condition where everybody thinks the same way.

For example, "people above 160cm height, please rise" is very easy to follow. On the other hand, "people who are tall, please rise" is confusing because one might think themself as tall or small.

For example, let's try creating a set of students who are taller than 160cm in class.

```
people = {"Elvis", "Taylor", "Michael", "John"}
```

Note that sets do not have an order.

# Adding items and merging sets

To add a value to the end of a set, we'll use a function called 'add'.

```
tallPeople = {"Mr. Vomit", "I.M Stupid", "Mrs. Dumbhead", ""R.U Crazy ""}
tallPeople.add("3Einstein")
```

You can use 'update()' to attach a set

```
tallPeople = {"Hyunseung Lee", "McPoopFace", "Miss Fart 'N' Burp", "Sir Dog-Dropings"}
shortPeople = {"I.M Short", "Random Guy"}
tallPeople.update(shortPeople)
```

# Removing set values

Let's remove the item 'red' from the values ​​in the set.

```
colorSet = {"red", "green", "blue", "orange"}
colorSet.remove('red')

print(colorSet)
```

If the remove method is used and the item 'red' does not exist in a certain set, an error occurs. If you want no errors, use the discard method.

```
colorSet = {"red", "green", "blue", "orange"}
colorSet.discard('black') #colorSet set has not changed.

print(colorset)
```

You can use the clear method to clear all the items in the set.

```
colorSet = {"red", "green", "blue", "orange"}
colorSet.clear()

print(colorSet)
```

