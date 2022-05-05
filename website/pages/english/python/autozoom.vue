<template>
  <div>
    <div>
      <div>
        <h2>Automatic Zoom</h2>
        <p>
          We can use Python to automatically open zoom when it is time.<br /><br />

          Firts, we need few modules. Webbrowser(open zoom), keyboard(for
          typing), and time(timing).<br /><br />

          1. First, download webbhrowser and keyboard by running: `pip install
          keyboard && pip install webbrowser`<br />
          2. Next, make a new file and start riding code<br />
          3. Import webbrowser, keyboard and time<br />
          4. Wait till the time ✔️ and print the waiting time<br />
          5. Then, open zoom link<br />
          6. Wait 5 seconds to load and press left arrow and enter to allow
          zoom<br />
          7. Wait 5 seconds and type in ID and PASSWORD.<br />
          9. Press enter<br />
          10. Finished!
        </p>
      </div>
    </div>

    <Header type="Python" num="86" title="Auto Zoom" />

    <div class="text-center">
      <h2>Code</h2>
    </div>
    <code v-highlight class="python">
      import webbrowser, keyboard, time<br /><br />

      minute = int(input("Time to wait(minute): "))<br /><br />

      print(minute, " waiting.")<br />
      time.sleep(minute)<br /><br />

      webbrowser.open("zoomlink")<br /><br />

      time.sleep(5)<br /><br />

      keyboard.press_and_release("left")<br />
      keyboard.press_and_release("enter")<br /><br />

      time.sleep(5)<br /><br />

      keyboard.write("20221004")<br />
      keyboard.press_and_release("enter")
    </code>

    <Navigation bef="spam" aft="keyboard" />
  </div>
</template>
