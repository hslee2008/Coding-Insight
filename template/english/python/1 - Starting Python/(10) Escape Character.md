# What is escape character?

Escape characters and characters that escapes conflicts.

For example, let's look at the following string.

```
""HI" said Clara"
```

To us, we can distinguish that HI is sperate from the entire sentence.

However, computer thinks that the syntax is like the following: "" and HI and " said Clara". In other words, it returns an error.

# \' and \"

\' and \" is an escape character.

It can be used inside ' and " without any conflicts.

```
text = '\'escape character\''
```

# \n

n is short for newline.

\n is same as pressing enter.

```
text = "Hello\nWorld"
```

# \r

\r is similar as pressing backspace.

```
text = "Hello!!\rWorld"
```

We use it often for rendering percantage of a task.

```
import time
for i in range(100):
  time.sleep(2)
  print("\r" + str(i) + " percent", end="")
```

# \t

\t is similar to pressing tab in keyboard. A tab is equal to 4 spaces ' '.

```
essay = "Hello\tWorld"
```

# expandtab

We can set our own tab size using expandtabs.

```
txt = "Hello\tWorld"
print(txt.expandtabs(100))
```
