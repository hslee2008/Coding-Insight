# What is ASCII?

ASCII is short for American Standard Code for Information Interchange.

In other words, ASCII is for exchanging information with numbers instead of alphabets.

ASCII represents characters in numbers from 0 to 127.

Here is a fun fact. You might think that 'A' is bigger than 'a' in ASCII, but it is not true. 'a' is 97 and 'A' is 65.

# ord()

Using ord(), we can get the ASCII value of a character.

```
print(ord(input("One character: ")))
```

# chr()

On the other hand, chr() prints the character of ASCII code.

```
print(chr(int(input("A number between 0 and 127: "))))
```
