<template>
  <div>
    <br /><br />

    <div>
      <Header-en type="Python" num="32" title="타입 지정" />

      <QuadSpace />

      <div>
        <div>
          <h2>Type Assignment</h2>
          <p>
            We can decide what kind of data type the user should use. Put ':'
            and data type name after variable name.<br /><br />

            To decide the return value, put '-> str' after the parenthesis so
            that the developer does not return the wrong kind of format.<br /><br />

            <code>
              def wowAnd(nextToWow: str) -> str:<br />
              &nbsp;return "wow " + nextToWow
            </code>

            When running this function, we are certain that parameter nextToWow
            will be a string and that the return value is a string.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/215ca4e0af"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>Is it callable?</h2>
          <p>
            Sometimes, we might get confused with variable names and function
            names.<br /><br />

            Use callable() function and put in either variable name or function
            name to see whether they are callable.<br /><br />

            Callable means we can reference them and run the code inside.<br /><br />

            <code>
              def testing():<br />
              &nbsp;print("hello world")<br /><br />

              test = "test"<br /><br />

              print(callable(testing)) #True<br />
              print(callable(test)) #False
            </code>

            We can use callable to prevent silly errors such as mistaking a
            function name for variable name and vice versa.<br /><br />

            <code>
              def testing():<br />
              &nbsp;print("hello world")<br /><br />

              test = "test"<br /><br />

              test()
            </code>
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/a5ed372467"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="specialvariable" aft="lambda" />
  </div>
</template>

<script>
  export default {
    page: 'TypePage',
  };
</script>
