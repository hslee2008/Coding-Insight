<template>
  <div>
    <br />

    <div class="d-flex img-div" style="padding: 10px; border-radius: 5px">
      <div>
        <h1>Can we run string as code?</h1>
        <p>In Python, we can run a string like a code.</p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          max-width="400px"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="55" title="String as code"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>eval()</h1>
        <p>
          eval() is short for evaluation.<br /><br />

          eval() function will either run a single-line code or find the value
          of an expression.<br /><br />

          For example, if we put in '1+1'(as string) inside eval and print the
          result, it will give us 2.<br /><br />

          The example below will get a single-line code and execute it.<br /><br />

          <code> print(eval(input("Code: "))) </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/c09ee5878e"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>exec()</h1>
        <p>
          exec() is short for execute and it runs a Python code.<br /><br />

          <code> exec(input("Code: ")) </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/91ca5b24b6"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>compile()</h1>
        <p>
          compile() will turn string into binary code and run that.<br /><br />

          <code>
            x = compile("print('Hello World')", None, 'eval')<br /><br />

            exec(x)
          </code>

          1. The first parameter is the code to run<br />
          2. The second parameter is the name of the file the string contains
          (if running directly, put 'None')<br />
          3. The third argument is for the mode to compile. 'eval' is when there
          is expression, 'single' is one single line, 'exec' is multi-line code.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/4b5e8cc791"
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

    <QuadSpace />

    <div id="idlepython">
      <h1>PROJECT (PROJ: 9): My Own Python IDLE</h1>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/fa7de26cef"
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

    <QuadSpace />

    <NaviBtn flink="datachange" slink="pip" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'StringAsCodePage',
};
</script>
