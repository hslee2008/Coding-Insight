# Automatic Zoom

We can use Python to automatically open zoom when it is time.

Firts, we need few modules. Webbrowser(open zoom), keyboard(for typing), and time(timing).

1. First, download webbhrowser and keyboard by running: `pip install keyboard && pip install webbrowser`
2. Next, make a new file and start riding code
3. Import webbrowser, keyboard and time
4. Wait till the time ✔️ and print the waiting time
5. Then, open zoom link
6. Wait 5 seconds to load and press left arrow and enter to allow zoom
7. Wait 5 seconds and type in ID and PASSWORD.
9. Press enter
10. Finished!

```
import webbrowser, keyboard, timeminute = int(input("Time to wait(minute): "))

print(minute, " waiting.")
time.sleep(minute)

webbrowser.open("https://zoom.us/j/9532494938?pwd=MndLUXlLZjlDMStVSWFIUUo3ZWQwZz09")

time.sleep(5)

keyboard.press_and_release("left")
keyboard.press_and_release("enter")

time.sleep(5)

keyboard.write("20221004")
keyboard.press_and_release("enter")
```

Now, you do not need to wake up early!!!
