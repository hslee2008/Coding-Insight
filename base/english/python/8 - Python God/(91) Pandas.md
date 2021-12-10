# Pandas
Pandas is a library that can read and analyze data efficiently.

Python does not have Pandas installed by default, so we will install it right now in the terminal.

```
pip install pandas
```

# Series
In Pandas, if given an iterable, we can convert that into a table humans can easily understand using Series() class.

First, we have to import pandas first.

```
import pandas as pd

s = pd.Series(["A", "B", "C"])
print(s)
```

If we run the code above, the following text appears in the console.

```
0    A
1    B
2    C
dtype: object
```

Furthermore, we can set our own values for index(the numbers appearing before each value).

```
import pandas as pd

s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third: "])
print(s)
```

Finally, we can access each value assigned to index using [].

```
import pandas as pd

s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third: "])
print(s["First: "])
```

# DataFrame()
Using Panda's DataFrame() class, we can make a data of iterable into a frame of table.

In DataFrame(), put in the iterable, column values.

```
import pandas as pd
data = [['Hyunseung',10],['Bob',12],['Clarke',13]]
df = pd.DataFrame(data,columns=['Name','Age'])
print(df)
```

# Clipboard
Cliboard is a place where you store all the copied(ctrl + c) data.

By default, Clipboard is turned off in windows.

Press windows+v and clickc on 'Turn on' to turn on clipboard feature.

https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/09/windows-key-v-turnon-button.jpg?itok=ZV9pLnok

Next, copy some random words.

Now, let's try making a code that analyze data from clipboard.

We can do that easily by using the read_clipboard() method.

```
import pandas as pd

print(pd.read_clipboard())
```

Using to_clipbaord(), we can push our own data to the clipboard.

```
import pandas as pd

df = pd.DataFrame([1, 2, 3], [4, 5, 6], columns=['A', 'B', 'C'])
df.to_clipboard(index = False)
```

# CSV
CSV is short for Comma-Seperated Value and it contains datas seperated by commas.

Using Microsoft EXCEL, let's try making our CSV file and printing that to the console.

img/csv.jpg

Simply put in the file path in read_csv().

```
import pandas as pd

df = pd.read_csv('data.csv')

print(df)
```

When we run the code above, some datas might be shortened out due to the length.

Use the to_string() method to print every single data.

```
import pandas as pd

df = pd.read_csv('data.csv')

print(df.to_string())
```
