# Multiprocessing

Multiprocessing module helps us run two functions at once.

```
import multiprocessing
```

# Example

```
import multiprocessing

def twoTime(num):
    print(num * 2)

def threTime(num):
    print(num * 3)

if __name__ =="__main__":
    p1 = multiprocessing.Process(target=threTime, args=(10, ))
    p2 = multiprocessing.Process(target=twoTime, args=(10, ))

    p1.start()
    p2.start()

    print("Done!")
```

## Please be aware of this

Know that using `if __name__ == "__main__"` when making multiprocessing and running should be present.

## Order

1. p1 multiprocess is made
2. p2 multiprocess is made
3. p1 multiprocess starts
4. p2 multiprocess starts
5. Done! is printed and p1 and p2 runs

# daemon, name

daemon and name key is same as threads.

# terminate()

Terminate will stop the multiprocess  

```
p1 = multiprocessing.Process(target=threTime, args=(10, ))

p1.start()
p1.terminate()
```
