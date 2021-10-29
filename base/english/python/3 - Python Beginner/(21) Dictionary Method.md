# How to add a pair of key and value

Inside a dictionary variable named 'md', let's try adding 'c' value to the '3' key.

```
a[3] = 'c'
```

# How to delete a pair of key and value

Similar to deletig a variable, we can delete a pair of key and value.

We are treating the pair like a single variable.

Use the del keyword.

```
a={1:"A",2:"B",3;"C"}
del a[1]

print(a)
```

if we use del, only the pair will be deleted from the dictionary.

# How to change value of key

To change the value of key, type in the key name inside [] and new value after it.

```
mainDict = {
  "member1": "John",
  "member2": "Sam",
  "member3": "Maria"
}

mainDict["member3"] = "Clara"

print(mainDict)
```

To add the contents of a dictionary to another, use the update() method.

It has the following syntax: dictionary.update(secondDictionary)

If the following key inside secondDictionary already exists in dictionary, it updates it. If the key does not exist in dictionary, it adds new ones.

```
cars = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

cars.update({
  "isFromUnitedStates": true, #new key
  "brand": "Samsung" #brand is updated to Samsung
})

print(cars)
```

# Get dictionary key

To find the value of the key, use the get() method.

If the value does not exist, it will return a default value.

```
mainDict = {
  "member1": "John",
  "member2": "Sam",
  "member3": "Maria"
}

print(mainDict.get("member1", "Hmmm... Not found"))
```

member1 exists so get() returns "John". However, if we put in member4 instead of member1, it will return "Hmmm... Not found".
