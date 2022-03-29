<template>
  <div>
    <br /><br />

    <div>
      <h2>Can we run string as code?</h2>
      <p>In Python, we can run a string like a code.</p>
    </div>

    <Header-en type="Python" num="55" title="String as code" />

    <div>
      <div>
        <h2>eval()</h2>
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
        src="https://trinket.io/embed/python3/c09ee5878e"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>exec()</h2>
        <p>
          exec() is short for execute and it runs a Python code.<br /><br />

          <code> exec(input("Code: ")) </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/91ca5b24b6"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>compile()</h2>
        <p>
          compile() will turn string into binary code and run that.<br /><br />

          <code>
            x = compile("print('Hello, World!')", None, 'eval')<br /><br />

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
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div id="idlepython">
      <h2>PROJECT (PROJ: 9): My Own Python IDLE</h2>
      <iframe
        src="https://trinket.io/embed/python3/fa7de26cef"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="datachange" aft="pip" />
  </div>
</template>
