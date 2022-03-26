<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is context manager(with 'with')</h2>
        <p>
          In Python, it is required that you close the file using close() method
          after working with it.<br /><br />

          However, it very hard to always close the file if there are multiples
          of them open. Furthermore, you might forget to close the file because
          the code got too complicated.<br /><br />

          In these situations, we can use the 'with' keyword to create a
          context.<br /><br />

          Context manager will automatically close the file after running the
          code inside the statement.
        </p>
      </div>
    </div>

    <Header-en type="Python" num="53" title="Context Manager" />

    <div>
      <div>
        <h2>Context Manager Example</h2>
        <p>
          1. First, type in 'with'.<br />
          2. Then, using the open() function, put in the file data type.<br />
          3. Next, put in 'as variable'. The variable will be the name of the
          variable you will be storing your file in.<br />
          4. Put in your code inside the context manager.<br /><br />

          <code>
            with open("example.txt", "w") as mainFile:<br />
            &nbsp;mainFile.write("testing123")
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/f10313f544"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Making your own context manager</h2>
          <p>
            We learned about classes before.<br /><br />

            We can use classes to create our very own context manager.<br /><br />

            <kbd>Look at the example below/beside</kbd><br /><br />

            It is required that you create __enter__() function inside your file
            manager and put in the code that will open the file.<br /><br />

            __exit__() is for closing the file. Put the code for closing.<br /><br />

            Note that the two special function we learned above can be used for
            anything other than context manager.<br /><br />

            Anything that needs extra code before running and after running can
            have a context manager with __enter__() and __exit__().
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/adcdf0d2c3"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="contact2" aft="datachange" />
  </div>
</template>
