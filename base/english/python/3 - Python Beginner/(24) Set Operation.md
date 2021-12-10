# Set Operation

There are 3 types of main set operation you need to know.

It is union, intersection, and difference.

Union are items of all in sets. For example, set A(1, 2) and B(2, 3) has union of 1, 2, 3 as they are the numbers we cann see from A and B.

Intersection are items that exists in all sets. For example, set A(1, 2) and B(2, 3) has intersection of 2 because 2 exists in both A and B.

Difference is an item that only exists in one set. For example, the difference between A(1, 2) and B(2, 3) is 1 as the only item existing in A and not in B is 1.

# Union

Union means 'as one'.

In set, the term means all the items that exists in all sets.

We can find the union of two sets using union() method.

```
firstColorSet = {"red", "orange", "yellow"}
secondColorSet = {"green", "blue", "black"}

oneColorSet = firstColorSet.union(secondColorSet)

print(oneColorSet)
```

Note that every time we print the union, the order will be in random  and this is because set does not have orders.

If using union() method is complicated, there is an operator |(Press the key above enter and shift together) which finds the union of two numbers.

```
A = {1, 2}
B = {2, 3}
print(A | B)
```

# Intersection

We can use the intersection_update() or intersection() to find the intersection of two sets.

intersection_update() will change the first set and replace the original content with the intersection of first and second.

On the other hand, intersection() will return a new set which can be stored inside variable or directly printed.

intersection_update()
```
firstColorSet = {"red", "orange", "yellow", "green"}
secondColorSet = {"green", "blue", "black"}

firstColorSet.intersection_update(secondColorSet)

print(firstColorSet)
```

intersection()
```
firstColorSet = {"red", "orange", "yellow", "green"}
secondColorSet = {"green", "blue", "black"}

print(firstColorSet.intersection(secondColorSet))
```

If typing the long word 'intersection' is hard, use the operator & to find the intersection of two sets.

# Difference

Using the symmetric_difference_update() method, we can find the items that only exists in the first set.

symmetric_difference() method exists too and it returns new set while symmetric_dffierence_update() will change the first set.


```
bestCodingLanguage = {"Javascript", "C++", "C", "Python"}
greatButNotTheBestLCodingLanguage = {"C++", "C", "Python"}

bestCodingLanguage.symmetric_difference_update(greatButNotTheBestCodingLanguage)

print(bestCodingLanguage)
```

Tip: use - for much easier operations.

```
A = {1, 2}
B = {2, 3}
print(A - B)
```
