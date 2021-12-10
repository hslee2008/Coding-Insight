# Writing to files

There are two modes in writing files.

'w' mode replaces the entire file content with new one.
'a' mode adds(appends) to the end of the file.

Using the write() method, we can write to the file.

```
mainFile = open("example.txt", "a")
mainFile.write("Now the file has more content!")
mainFile.close()
```

While the top example added the text to the content, the example below will change the content entirely.

```
mainFile = open("example.txt", "w")
mainFile.write("new content")
mainFile.close()
```

# writelines()

writelines() will write each items in iterable in one line in a file.

```
mainfile = open("example.txt", "w")
print(mainfile.writelines(["1", "2", "3", "4"]))
mainfile.close()
```
