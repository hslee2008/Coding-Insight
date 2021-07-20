
import threading
import time


def thread1():
  print("Hello")
  time.sleep(1)
  print("Done!")
  time.sleep(0.9)
  print("Now It is Really Done!")


mainThread = threading.Thread(target=thread1)
mainThread.start()
print(threading.active_count())
print(threading.main_thread().native_id)
mainThread.join()

time.sleep(0.95)
print("Finally")
