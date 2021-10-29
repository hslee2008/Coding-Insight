# The definition of random

We hear the word 'random' or 'in random' often in our life.

The words mean to do something without any patterns.

Using a module named random, we can do operations randomly.

# Random module

Let's fetch random module first.

```
import random as R
```

# random()

To get a random float betweeen 0 and 1(till 15th place), simply use the random() function from the module.

```
import random as R
print(R.random())
```

# Random natural number between two numebrs

To get any natural numbers between 'a' and 'b' randomly, use the uniform() function.

```
import random as R
print(R.uniform(1, 10))
```

Similar to uniform(), randint() gets random natural numbers between 'a' and 'b'.

```
import random as R
print(R.randint(1, 6))
```

randrange() is very similar to uniform() and randint() but it has start, end, and step.

```
import random as R
print(R.randrange(1, 7, 2)) #select from 1, 3, 5 and 7
```

Lastly, we have trianglular() function. This function lets us select randomly between two numbers.

The third number is the number that should have the highest possibilty of being selected.

```
import random as R
print(R.triangular(1, 6, 3)) #1~6 is selected randomly but numbers closest to 3 are more likely to get selected
```

# Select randomly from list

choice() function will select random items from iterables and return them.

```
import random as R
li = ["Python", "JavaScript", "C/C++"]
print(R.choice(li))
```

# Shuffle lists

"Please shuffle the deck!"

Shuffling means to randomly reorder a group of items.

In Python, use shuffle() method to randomly reorder from a list.

```
import random as R
li = ["C", "C++", "C#"]
print(R.shuffle(li))
```
