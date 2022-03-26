<template>
  <div>
    <Header-en type="Python" num="31" title="Special Variable" />

    <div>
      <div>
        <h2>Global Variables</h2>
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
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Nonlocal Variables</h2>
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

    <Navigation bef="functionhard" aft="type" />
  </div>
</template>

<script>
export default {
  page: 'SpecialVariablePage',
};
</script>
