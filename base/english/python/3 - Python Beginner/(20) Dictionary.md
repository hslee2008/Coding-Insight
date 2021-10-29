# What is dictionary?

Dictionary is a book that contains a word and an explanation for it.

For example, if we search up the word 'Python' in the dictionary we find the following explanation "a high-level general-purpose programming language".

Here, Python is the 'key' and the explanation is the 'value'.

In Python, dictionary is a data type which contains pairs of keys and values.

# How to make dictionary

Dictionary is made up of keys and values seperated by a comma between.

Dictionary has the following syntax.

```
{
  Key1: Value1,
  Key2: Value2,
  Key3: Value3
}
```

Let's try making a dictionary in Python.

```
Tom = {
  "phonenumber": "010-1234-5678",
  "age": 14,
  "bestfriend": "James"
}
```

Tom is the name of the dictionary variable.
phonenumber, age, bestfriend is the key.
010-1234-5678, 14, James is the value.

We can put in any data type inside the key.

# Get the keys

To get a list of keys, use the keys() method.

```
mainDict = {
  "member1": "John",
  "member2": "Sam",
  "member3": "Maria"
}

print(list(mainDict.keys())) #dict_keys(["member1", "member2", "member3"])
```

Running mainDict.keys() will return dict_keys instead of lists.

If you want to do operation on the keys, dict_keys is not the data type you are looking for.

We have to use list(mainDict.keys()) to make them into lists.

# Get the values

Similar to keys() method, we can also use values() to get all the values of dictionary.

```
mainDict = {
  "member1": "John",
  "member2": "Sam",
  "member3": "Maria"
}

print(mainDict.values()) #dict_values("John", "Sam", "Maria")
```

This method also returns dict_values so use list() to make them into lists.
