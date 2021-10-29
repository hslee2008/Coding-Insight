# What is RegEx?

RegEx is short for Regular Expression.

Regular Expression means strings with certain patterns.

For example, without RegEx, we have to check whether a string contains either a or b or c and so on ONE by ONE.

However, we can do this with one method from module.

```
import re
```

# Regex - match()

Using match() method, we can easily find whether a string starts with certain patterns.

```
import re

pattern = "123"
string = "123abc"

print(re.match(pattern, string).group())
```

If the code above gives us an error, string variable does not start with pattern.

# Regex - search()

While match() matches the start of a string with substring, search() searches globally(every where in string).

```
import re

pattern = "123"
string = "123abc"

print(re.search(pattern, string).group())
```

# Regex character

To actually use regex, use the following regex characters.

1. `[a-b]` - alphabet from range a to b
2. `[abc]`: a, b, or c.
3. `[^abc]`: except for a, b, and c.
   . -- any character: `"h."` can be ha, hb, hc, ... hz.
   ^ -- words starting with: `"^hello"`: whether the word starts with 'hello'
   $ -- words ending with: `"$hello"`: whether the word ends with 'hello'
