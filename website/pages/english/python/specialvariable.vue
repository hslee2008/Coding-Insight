<template>
  <div>
    <br />

    <Header-en num="31" title="Special Variable"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Global Variables</h1>
        <p>
          You might have noticed when using a function that we cannot access the
          variables declared inside a function from outside.<br /><br />

          If we want to make a variable that can be used anywhere in a file, use
          the 'global' keyword in front of a variable name.<br /><br />

          Then, assign the value to it.<br /><br />

          <code>
            def helloWorld():<br />
            &nbsp;global message<br />
            &nbsp;message = "Hello, World!"<br />
            &nbsp;print(message)<br /><br />

            helloWorld()<br /><br />

            print(message)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/db03626a7c"
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

    <div>
      <div>
        <div>
          <h1>Nonlocal Variables</h1>
          <p>
            Nonlocal is the opposite of global as it sets the variable to be
            only allowed inside a function or statement.<br /><br />

            <code>
              def testing():<br />
              &nbsp;nonlocal message<br />
              &nbsp;message = "Hello, World!"<br />
              &nbsp;print(message)<br /><br />

              print(message) #error
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="functionhard" aft="type" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'SpecialVariablePage',
};
</script>
