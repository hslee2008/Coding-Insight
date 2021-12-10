# Mastering Thread

Let's try looking into a much more complex thread.

```
import threading, time

def thread1():
  print("Hello")
  time.sleep(1)
  print("Done")
  time.sleep(0.9)
  print("Now It is Really Done!")

mainThread = threading.Thread(target=thread1)
mainThread.start()
print(threading.active_count())
time.sleep(0.95)
print("Finally")
```

If we run the code above, things happen this way:

1. Firstly, mainThread is made.
2. Then, thread1 starts.
3. "Hello" is printed to the console.
4. Next, threading.active_count() runs (Becuase there is 1 second left).
5. Python moves on to printing "Finally" because 0.95 is smaller than 1.
6. Now, Python moves on to "Done" and waits 0.9 then prints "Now it is Reall Done!"

# join() method

Similar to 'await' in asyncio, join() method will wait till that thread is finished.

```
import threading, time

def thread1():
  print("Hello")
  time.sleep(1)
  print("Done")
  time.sleep(0.9)
  print("Now It is Really Done!")

mainThread = threading.Thread(target=thread1)
mainThread.start()
print(threading.active_count())

mainThread.join()

time.sleep(0.95)
print("Finally")
```

1. Firstly, mainThread is made.
2. Then, thread1 starts.
3. "Hello" is printed to the console.
4. Next, threading.active_count() runs (Becuase there is 1 second left).
5. Since there is join() method, "Done!" and "Now It is Really Done!" is printed.
6. Then, "Finally!" is printed.
