<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>Mastering Thread</h2>
        <p>
          Let's try looking into a much more complex thread.<br /><br />

          <code>
            import threading, time<br /><br />

            def thread1():<br />
            &nbsp;print("Hello")<br />
            &nbsp;time.sleep(1)<br />
            &nbsp;print("Done")<br />
            &nbsp;time.sleep(0.9)<br />
            &nbsp;print("Now It is Really Done!")<br /><br />

            mainThread = threading.Thread(target=thread1)<br />
            mainThread.start()<br />
            print(threading.active_count())<br />
            time.sleep(0.95)<br />
            print("Finally")
          </code>

          If we run the code above, things happen this way:<br /><br />

          1. Firstly, mainThread is made.<br />
          2. Then, thread1 starts.<br />
          3. "Hello" is printed to the console.<br />
          4. Next, threading.active_count() runs (Becuase there is 1 second
          left).<br />
          5. Python moves on to printing "Finally" because 0.95 is smaller than
          1.<br />
          6. Now, Python moves on to "Done" and waits 0.9 then prints "Now it is
          Reall Done!"
        </p>
      </div>
      <iframe :src="`${trinket}d14f421fa3`" width="100%" height="356" />
    </div>

    <Header type="Python" num="74" title="Thread (Advanced)" />

    <div>
      <div>
        <h2>join() method</h2>
        <p>
          Similar to 'await' in asyncio, join() method will wait till that
          thread is finished.<br /><br />

          <code>
            import threading, time<br /><br />

            def thread1():<br />
            &nbsp;print("Hello")<br />
            &nbsp;time.sleep(1)<br />
            &nbsp;print("Done")<br />
            &nbsp;time.sleep(0.9)<br />
            &nbsp;print("Now It is Really Done!")<br /><br />

            mainThread = threading.Thread(target=thread1)<br />
            mainThread.start()<br />
            print(threading.active_count())<br /><br />

            mainThread.join()<br /><br />

            time.sleep(0.95)<br />
            print("Finally")
          </code>

          1. Firstly, mainThread is made.<br />
          2. Then, thread1 starts.<br />
          3. "Hello" is printed to the console.<br />
          4. Next, threading.active_count() runs (Becuase there is 1 second
          left).<br />
          5. Since there is join() method, "Done!" and "Now It is Really Done!"
          is printed.<br />
          6. Then, "Finally!" is printed.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}4b10ddd953`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <Navigation bef="thread" aft="threadmethod" />
  </div>
</template>
