<template>
  <div>
    <div>
      <div>
        <h2>Error</h2>
        <p>
          In some instances, we might accidently make an error.<br /><br />

          If that error can be either ignored or removed, we should 'handle'
          them right away without letting them intefere with our program.<br /><br />

          That error is called bug which means 'a part of code that is causing
          the problem'.<br /><br />

          Did you know that an actual first problem in a computer is an actual
          'bug' stuck between gears?
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <Header type="Python" num="61" title="Error Handling" />

    <div>
      <div>
        <h2>try - except</h2>
        <p>
          For example, let's try making a calculator that will divide the number
          2.<br /><br />

          It can be easily done by getting an input then turing them into a
          number and dividing 2 by the outcome.<br /><br />

          However, our code should not end.<br /><br />

          We have to put in a code to tell the users you cannot divide a number
          by 0.<br /><br />

          <code>
            try:<br />
            &nbsp;ur = 2/int(input("Type in a number that will divide 2: "))<br />
            &nbsp;print(ur)<br />
            except:<br />
            &nbsp;print(" Bug! Bug! Bug !🐛🐛🐛x999")<br />
          </code>

          We can make an exception for specific errors.<br /><br />

          Put the name of the error after 'except' keyword.
        </p>
      </div>
    </div>

    <iframe :src="`${trinket}560cfc16f4`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <h2>try - except - else</h2>
        <p>
          If all our code above finishes and no error occured, Python will run
          the code inside 'else' statement.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}fc52c8aa8c`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <h2>try - except - finally</h2>
        <p>
          Though 'else' statement does not run when exception occurs, finally
          clause will run no matter.
        </p>
      </div>
    </div>

    <iframe :src="`${trinket}6394505282`" height="356" loading="lazy" />

    <Navigation bef="array_shape" aft="error2" />
  </div>
</template>

<script>
  export default {
    name: 'ErrorPage',
    head: () => ({
      title: 'Error Handling',
    }),
  };
</script>
