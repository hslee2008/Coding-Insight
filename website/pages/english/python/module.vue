<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>Definition of Module</h2>
        <p>
          Modules are a group of functions, variables, and classes to be used in
          other files.<br /><br />

          We can fetch functions, variables, and classes from other files and
          use it outside of the file.
        </p>
      </div>
    </div>

    <Header type="Python" num="40" title="Module" />

    <div>
      <div>
        <h2>import - Import Module</h2>
        <p>
          We have to fetch the module to use functions and variables inside
          it.<br /><br />

          To do this, run the code 'import filename'.<br /><br />

          Do not put '.py'(extension) at the end, only the file name.<br /><br />

          <code> import math </code>

          We use math for mathematical operation.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>dir(module) - Look at all functions and variables</h2>
        <p>
          When we use dir(), we can see all the available functions and
          variables.<br /><br />

          <code>
            import math<br /><br />

            print(dir(math))
          </code>

          If we run the code above, we can see an item named 'sqrt' inside the
          list.<br /><br />

          sqrt is short for Square Root and it is used for finding square root
          of a number.<br /><br />

          <code>
            import math<br /><br />

            print(math.sqrt(4))
          </code>
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}170c0ea7f7`"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>'as' keyword</h2>
        <p>
          Let's assume there is a file named abcdefgjijklmnopqrstuvwxyz.py.<br /><br />

          We want to import the file as a module to use the function abc().<br /><br />

          However, typing abcdefghijklmnopqrstuvwxyz every time is very
          annoying.<br /><br />

          There are two ways we can achieve this.<br /><br />

          1. Store all information on a variable<br /><br />

          <code>
            import abcdefghijklmnopqrstuvwxyz<br /><br />

            alphabet = abcdefghijklmnopqrstuvwxyz<br /><br />

            alphabet.abc()<br />
            abcdefghibjkmnopqrstuvwxyz.abc() #Sames as the code above
          </code>

          2. Using as keyword<br /><br />

          <code>
            import abcdefghijklmnopqrstuvwxyz as alphabet<br /><br />

            alphabet.abc()
          </code>

          To conclude, 'as' keyword makes long module names shorter.
        </p>
      </div>
    </div>

    <Navigation bef="etcfunction" aft="modulemaster" />
  </div>
</template>

<script>
  export default {
    page: 'ModulePage',
  };
</script>
