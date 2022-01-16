# daemon

Daemon is a thread that runs in the background.

Daemon threads will run till the end even though the main thread(Python file) stops.

Furthermore, it runs the last.

Simply put in 'True' at daemon parameter in threading.Thread() method.

```
mainThread = threading.Thread(target = mainFunc, daemon = True)
```

To find whether a specific thread is daemon or not, use the 'daemon' property.

```
mainThread = threading.Thread(target = mainFunc, daemon = True)
print(mainThread.daemon) # True is printed
```

Finally, we can make a thread that is not a daemon into a daemon if it is not running.

```
mainThread.setDaemon(True)
```
