# Compressing Files

Compressing a file will decrease the size it.

How is this possible?

# How compressing files work

Sometimes, there are tons of repeating words in sentence.

```
And miles to go before I sleep, and miles to go before I sleep.
```

miles, to, go, before, I, sleep is repeated twice.

What would happen if we made a dictionary of these repeating digits?

```
{
  "miles": 0,
  "to": 1,
  "go": 2,
  "before": 3,
  "I": 4,
  "sleep": 5
}
```

Using the dictionary above, we can make a new sentenec below that will take much less space.

```
And 0 1 2 3 4 5, and 0 1 2 3 4 5.
```

# ZLIB module

Zlib module will compress any data you give it into a shorter version using dictionary.

Zlib is short for ZIP COMPRESSION LIBRARY.

Let's import zlib first.

```
import zlib
```

# ZLIB - Compress string

Let's try compressing strings.

```
import zlib

mainString = b"And miles to go before I sleep, and miles to go before I sleep."
print(len(mainString))

compressedString = zlib.compress(mainString)
print(len(comprssedString))
```

1. Firstly, we imported zlib.
2. Then, we made our byte string(b should be in front of string) and logged the length
3. Finally, we compressed the string and logged the length again.

If we run the code above, the number 63 and 44 is printed to the console.

Like this, our string with length of 63 became 44 with one single line of code.

# ZLIB - set level

There are 0 to 9 levels in compressing.

0 - lowest. No compression at all
1 - almost no compression at all but very fast.
...
9 - almost everything is compressed and a bit slow.

```
import zlib

mainString = b"And miles to go before I sleep, and miles to go before I sleep."
print(len(mainString))

compressedString = zlib.compress(mainString, level = 9)
print(len(comprssedString))
```

If we run the code above, no difference is made from this code and the code above (ZLIB - compress string part).

This is because the string is too small.

Try long strings.

# ZLIB - decompress

We can use the decompress() method to decompress copressed strings.

```
import zlib

mainString = '''
It's the thought of being young
When your heart's just like a drum
Beating louder with no way to guard it
When it all seems like it's wrong
Just sing along to Elton John
And to that feeling, we're just getting started
'''

compressedString = zlib.compress(mainString)

print(compressedString)
print(zlib.decompress(compressedString))
```
