<template>
  <div>
    <Header-en type="Python" num="42" title="Python Module"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>TIME</h2>
        The time module helps us with operations that has to do with times in
        Python.<br /><br />

        <kbd>import time</kbd>
        <h2>sleep()</h2>

        Using time.sleep(x), we can stop the code for 'x' seconds.
      </div>
      <iframe
        src="https://trinket.io/embed/python3/cf2c9fad50"
        width="100%"
        height="358"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div style="padding: 10px">
          <h2>OS</h2>
          <h2>OS란?</h2>
          OS means the computer software.<br /><br />

          Using this module, we can control our system.<br /><br />

          <kbd>import os</kbd>

          <h2>OS - clear the terminal</h2>
          If there are a lot of outputs in Python program, it can get very
          messy.<br /><br />

          os.system("cls") helps us clear our terminal.<br /><br />

          Note that depending on your terminal and system, it can be either
          'cls' or 'clear'.<br /><br />

          <code>
            import os<br /><br />

            os.system("cls")
          </code>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/63f69099ff"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="modulemaster" aft="hacking" />
  </div>
</template>

<script>
export default {
  page: 'PythonModulePage',
};
</script>
