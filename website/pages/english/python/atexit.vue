<template>
  <div>
    <br /><br />

    <div>
      <h2>Python Function register</h2>
      <p>
        Using the atexit module, we can register a function to role when the
        Python program ends.<br /><br />

        Atexit module is mostly used for functions for wrapping up the program.
      </p>
    </div>

    <Header type="Python" num="83" title="atexit" />

    <div>
      <div>
        <h2>register()</h2>
        <p>
          Let's try making a file editor using Python.<br /><br />

          <code>
            with open(input("Full path: "), "w") as f: &nbsp;f.write(input("New
            Content: "))
          </code>

          If we press <kbd>ctrl+c</kbd> and stop the program, the file might not
          close properly.<br /><br />

          What should we do?<br /><br />

          We can use the atexit.register() method to register a specific
          function to run when program ends.<br />

          <code>
            import atexit<br /><br />

            def informAbort(f):<br />
            &nbsp;with open(f, "w") as file:<br />
            &nbsp;&nbsp;file.write("User aborted. ERROR")<br /><br />

            pathFile = input("Full path:")<br />
            atexit.register(informAbort, f=pathFile)<br /><br />

            with open(pathFile, "w") as f:<br />
            &nbsp;f.write(input("New Content: "))
          </code>
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}2390219212`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>atexit decorator</h2>
        <p>
          Or we can use the decorator to decorae a function to run when program
          ends.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}ee9dc05bf9`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <Navigation bef="etcdundermethod" aft="coroutine" />
  </div>
</template>
