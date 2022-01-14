# What is thread?

There are lots of things to explainn.

Firstly, every computer have CPU inside and CPUs read the command and run them.

Inside CPU, there is something called a core where the actual command is read and runs.

On the core, there are threads attached to it and command goes through thread and runs inside core.

# Lots of thread

What will happen when there are a lot of thread attached to the core?

Core can read only one command at a time.

However, if there are more than one, the core will read the important one first then move on to the next one.

In Python, the module threading let's us make a thread seperate from the original thread(the thread that runs the Python file).

Let's make two threads.

```
def thread1():
  print("Hello")
  time.sleep(1)
  print("Done")

def thread2():
  print("World")
```

If we run thread1 then thread2 as threads, "Hello Done World" is printed to the console.

This is because since we first have to wait once then print "Done", core moves on to the second thread and prints "World".

# Python threading

Let's first import threading and time module.

```
import threading, time
```

Now, let's make two threads.

```
def thread1():
  print("Hello")
  time.sleep(1)
  print("World")

def thread2():
  print("DONE")
```

Now, let's run the thread.

```
mainThread = threading.Thread(target=thread1, args=())
mainThread.start()
print(mainThread.active_count())
```

threading.Thread will make a new thread. If you do not have any parameters inside, make an empty tuple and assign to args argument.

start() method will run the current thread.

active_count() will give us the number of active threads.
