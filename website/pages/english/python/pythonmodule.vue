<template>
  <div>
    <Header type="Python" num="42" title="Module" />

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
        title="Trinket Python"
        :src="`${trinket}cf2c9fad50`"
        height="358"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
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

          <code v-highlight class="python">
            import os<br /><br />

            os.system("cls")
          </code>
        </div>
        <iframe
          title="Trinket Python"
          :src="`${trinket}63f69099ff`"
          height="356"
          loading="lazy"
        />
      </div>
    </div>

    <Navigation bef="modulemaster" aft="hacking" />
  </div>
</template>

<script>
  export default {
    page: 'PythonModulePage',
  };
</script>
