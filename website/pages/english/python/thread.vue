<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>What is thread?</h2>
        <p>
          There are lots of things to explainn.<br /><br />

          Firstly, every computer have CPU inside and CPUs read the command and
          run them.<br /><br />

          Inside CPU, there is something called a core where the actual command
          is read and runs.<br /><br />

          On the core, there are threads attached to it and command goes through
          thread and runs inside core.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="Python" num="73" title="Thread" />

    <div>
      <div>
        <h2>Lots of thread</h2>
        <p>
          What will happen when there are a lot of thread attached to the
          core?<br /><br />

          Core can read only one command at a time.<br /><br />

          However, if there are more than one, the core will read the important
          one first then move on to the next one.<br /><br />

          In Python, the module threading let's us make a thread seperate from
          the original thread(the thread that runs the Python file).<br /><br />

          Let's make two threads.<br /><br />

          <code v-highlight class="python">
            def thread1():<br />
            &nbsp;print("Hello")<br />
            &nbsp;time.sleep(1)<br />
            &nbsp;print("Done")<br /><br />

            def thread2():<br />
            &nbsp;print("World")
          </code>

          If we run thread1 then thread2 as threads, "Hello Done World" is
          printed to the console.<br /><br />

          This is because since we first have to wait once then print "Done",
          core moves on to the second thread and prints "World".
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Python threading</h2>
        <p>
          Let's first import threading and time module.<br /><br />

          <code v-highlight class="python"> import threading, time </code>

          Now, let's make two threads.<br /><br />

          <code v-highlight class="python">
            def thread1():<br />
            &nbsp;print("Hello")<br />
            &nbsp;time.sleep(1)<br />
            &nbsp;print("World")<br /><br />

            def thread2():<br />
            &nbsp;print("DONE")
          </code>

          Now, let's run the thread.<br /><br />

          <code v-highlight class="python">
            mainThread = threading.Thread(target=thread1, args=())
            mainThread.start() print(mainThread.active_count())
          </code>

          threading.Thread will make a new thread. If you do not have any
          parameters inside, make an empty tuple and assign to args argument.<br /><br />

          start() method will run the current thread.<br /><br />

          active_count() will give us the number of active threads.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}a21ef7102c`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="name" aft="complexthread" />
  </div>
</template>

<script>
  export default {
    page: 'ThreadPage',
  };
</script>
