# Counter

## Example and Explanation

Inside collection module, there is a class named Counter() that let's us get information about iterables.

For example, let's try to find the number of each items using the Counter() fuction.

```
from collections import Counter

print(Counter(["A", "A", "B"])) #{"A": 2, "B": 1}
```

## Global Counter

We can set the counter as a global variable and update it by using update() method every time we want to count a new iterable.

If we update the original counter, a new iterable will be added to it.

```
from collections import Counter

countGlobe = Counter()

countGlobe.update(["A", "B", "A", "C"])
print(countGlobe)

countGlobe.update(["A", "C", "D", "D", "B", "A", "C"])
print(countGlobe)
```

## elements() method

Every time we update, the counter's elements changes.

To get the complete list of the counter's elements, use the elements() method.

```
from collections import Counter

countGlobe = Counter()

countGlobe.update(["A", "B", "A", "C"])
print(countGlobe)

countGlobe.update(["A", "C", "D", "D", "B", "A", "C"])
print(countGlobe)

print(countGlobe.elements())
```

## most_common() method

To get the xth most common element in a counter, use the most_common() method and put x inside as a parameter.

```
a = Counter(["A", "B", "B", "C", "D", "A", "D"]).most_common(2)
print(a)
```

`[("A", 2), ("B", 2), ("C", 2)]` is printed.

### Subtracting

We can subtract two counters and get a new one.

If the number gets below zero, Python will keep it that way even though having -1 items does not make sense.

```
a = Counter(a = 4, b = 5)
b = Counter(a = 6, b = 9)

print(a.subtract(b))
```
