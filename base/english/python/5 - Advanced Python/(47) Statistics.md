# What is statistics?

Statistics is an operation where you get information from datas.

For example, when we get the average score of my English test[100, 99, 98, 95, 97], we are studying statistics.

In Python, statistics module help us get mean, median, and mode easily.

# Average

## mean()

Average means the middle data from numbers.

For example, the average of 100 and 50 is 75.

We can calculate average like below:

```
dataList = input().split(",")
print(sum(dataList)/len(dataList))
```

(This is because average is average is calculated by: sum of datas divided by number of data)

Using statistics module, we should be able to get the average from a list.

```
import statistics

print(statistics.mean([100, 99, 88, 95, 97]))
```

Note that the method above is called 'mean' not 'average'.

Mean and average means the same thing.

## harmonic_mean()

harmonic_mean() is very similar to mean().

harmonic_mean() basically flips the fraction upside down when there are even numbers of datas.

# median

### median()

Average is the middle VALUE of datas.

Median is the middle ITEM from list.

Note that median will calculate the average of two middle number if there are odd numbers of data.

```
import statistics

print(statistics.median([1, 2, 3]))
```

# mode

Mode calculates the most item appearing in list.

```
import statistics

print(statistics.mode(["a", "b", "a", "b", "c", "a"]))
```
