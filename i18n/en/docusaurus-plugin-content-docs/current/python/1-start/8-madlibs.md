# Mad Libs Game

Made libs is a game where you create a story by filling in blanks with words.

Let's try making this game in Python.

![Mad Libs](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnR3OVF_3m7noHBoE4X3o7t7id6ONlGD60g&usqp=CAU)

## How it works

1. First, we will make a template for the story with few blanks
2. Next, we will fill in the blank with user input (`input()`)
3. Lastly, we will print that entire sentence

## Making the game in Python

1. Make a template
   - Let's set "Roses are ?. Violets are ?. And I like ?." as the template
   - `{}` is the placeholder for the blanks

```py
sentence = "Roses are {}. Violets are {}. And I like {}."
```

2. Ask the user for the values of the blanks
   - We will use `input()` to get the user's input (`fw`, `sw`, and `tw`)

```py
fw = input("Adjective   : ")
sw = input("Adjective 2 : ")
tw = input("Person's name: ")
```

3. Fill in the blanks in the template
   - Using the `format()` method will replace all the blanks with the user's input

```py
finish = sentence.format(fw, sw, tw)
```

4. Printing
   - We will print the finished story

```py
print(finish)
```

## Checking your work

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/4ddbc052d0" height="400" />
