# Compression Program

There are many compression programs available for Python.

But, you can build your own.

## How it works

1. Find repetitive sequences of characters in a string.
2. Replace it with smaller sized sequence of characters.
3. Repeat until the string is compressed.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/2cf09d6f55"
  height="400"
/>

## Actual algorithm

### ZLIB module

There is a module called ZLIB that can be used to compress and decompress data.

```sh
pip install zlib
```

Run the command above in a terminal.

Run the code below in python file.

```py
import zlib
```

### Compressing

1. Importing ZLIB module.
2. Turning it into bytes (putting b in front of the string).
3. Compressing the data.

The length is shortened by 19 bytes.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/74a9209480"
  height="400"
/>

### Decompressing

`decompress()` method can be used to decompress the data.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/c42b0b500e"
  height="400"
/>
