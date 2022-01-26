<template>
  <div>
    <br />

    <Header num="75" title="스레드 메서드"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>daemon</h1>
        <p>
          Daemon is a thread that runs in the background.<br /><br />

          Daemon threads will run till the end even though the main
          thread(Python file) stops.<br /><br />

          Furthermore, it runs the last.<br /><br />

          Simply put in 'True' at daemon parameter in threading.Thread()
          method.<br /><br />

          <code>
            mainThread = threading.Thread(target = mainFunc, daemon = True)
          </code>

          To find whether a specific thread is daemon or not, use the 'daemon'
          property.<br /><br />

          <code>
            mainThread = threading.Thread(target = mainFunc, daemon = True)<br />
            print(mainThread.daemon) # True is printed
          </code>

          Finally, we can make a thread that is not a daemon into a daemon if it
          is not running.<br /><br />

          <code> mainThread.setDaemon(True) </code>
        </p>
      </div>
    </div>

    <iframe
      class="embed-responsive-item"
      src="https://trinket.io/embed/python3/fee2312fc6"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
    />

    <QuadSpace />

    <NaviBtn flink="complexthread" slink="multiprocessing" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'ThreadMethodPage',
};
</script>
