<template>
  <div>
    <Header type="Python" num="33" title="Anonymous Function" />

    <div>
      <div>
        <h2>What is Anonymous Function?</h2>
        <p>
          Anonymous function is a type of function that does not have a name.<br /><br />

          In another word, anonymous functions are created and used right away
          while normal functions are created for later use.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Lambda</h2>
        <p>
          To declare anonymous functions,<br /><br />

          1. type in the 'lambda' keyword<br />
          2. insert parameters with commas<br />
          3. insert ':'<br />
          4. Put in the return value<br /><br />

          <code v-highlight class="python">
            def runThis(a):<br />
            &nbsp;a(6)<br /><br />

            x = runThis(lambda a: 10*a)<br /><br />

            print(x)
          </code>

          If you have more than 1 parameter, put in ','(Comma) between the
          parameter.<br /><br />

          <code v-highlight class="python">
            def runThis(a):<br />
            &nbsp;a(6)<br /><br />

            x = runThis(lambda a: 10*a)<br /><br />

            print(x)
          </code>
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}ad432c8141`" height="356" loading="lazy" />

    <Navigation bef="type" aft="for" />
  </div>
</template>
