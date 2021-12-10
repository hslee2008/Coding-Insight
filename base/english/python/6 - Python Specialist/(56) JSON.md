# JSON

JSON is short for JavaScript Object Notation and it is a type of data.

JSON is very similar to dictionaries but they are a littble bit different.

Almost every new programming language in the world supports JSON.

Note that JSON should always have ""(Double) surrounding key and the value can only be string, dictionary, list, tuple, number, and None.

```
import json

someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}'
```

# JSON to Dictionary

json.loads() converts JSON to dictionary.

This way, you can access each key.

```
import json
someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}'

print(json.loads(someJson)["name"]) #Hyunseung Lee is rinted
```

# Dictionary to JSON

json.dumps() method will convert dictionary to JSON.

```
import json
someJson = {"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}

print(json.dumps(someJson))
```

# Formatting JSON

There are a lot of format settings you have in JSON which makes it easier to handle than dictionaries.

### Indentation

We can set the indentation of each pair, making it easier for us to read in the terminal(if we print JSON).

```
print(json.dumps(someJson, indent=2))
```

### Sort JSON

We can sort JSON keys in alphabetical descending order.

```
print(json.dumps(someJson, indent=2, sort_keys=True))
```

### JSON characters

JSON uses ':' to seperate keys and values.

It also uses ',' to seperate each pair.

Using the 'seperator' argument in dumps() method, we can set the character to use instead of ':' and ','.

```
print(json.dumps(someJson, seperator=(". ", "==>")))
```

The example above will print the JSON with '. ' seperating keys and values and '==>' seperating each pair.
