# Adding Text

Characters can be added using +.

```
a = "Hello "
b = "World"

print (a = b)
```

But what can you do to add a repeating pattern?
Here's another way to do it:

```
a = "+-" * 10

print(a)

```

The letter \* number means that it returns a number of repetitions of the letter.

# Information About Text

There is a way in Python to know if a character consists only of alphanumeric characters. Just use the 'isalnum()' method. Also, you can check whether 'isalpha' consists of only alphabets, 'isdecimal' consists only of numbers (0~9), 'isdigit' consists of only numbers, and 'isidentifier' matches the variable name rules. Also, you can check whether 'isnumeric' consists only of integers, 'isprintable' can print information, and 'isspace' consists only of spaces.
alphabets, 'isdecimal' consists only of numbers (0~9), 'isdigit' consists of only numbers, and 'isidentifier' matches the variable name rules. Also, you can check whether 'isnumeric' consists only of integers, 'isprintable' can print information, and 'isspace' consists only of spaces.

```
txt = "Hello World 123456789"
print(txt.isalnum()) #True is output
```

# Python Character Trim

I'm going to make a program to filter out bad words.

```
badWord = input("Bad word: ")
badSentence = ("I am not " + badWord + ".")
filterBadWord = (badSentence.partition(badWord))

print(filterBadWord[0] + "***" + filterBadWord[2])
```

First, I asked a bad word and made a sentence that means 'I'm not a {bad word}'. Then, using the partition() method, I cut the sentence based on the bad word and put '\*\*' instead of the bad word.

Let's take another example:

```
partitionedSentence = ("Hello. My name is Hyunseung.".partition("name"))

print(partitionedSentence)
```

In this example, truncated by name. If you print partitionedSentence, you can observe that ("Hello. My ", "name", " is Hyunseung") is output to the terminal. You used indexing to combine the sentences before 'name' with the sentences after 'name'.
