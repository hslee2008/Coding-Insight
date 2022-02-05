<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h2>Asynchronous</h2>
        <p>
          While eating food, we can use fork and spoon at the same time.<br /><br />

          Asynchronous means not happening at the same time.<br /><br />

          In Python, asynchrnous module help us make sure two tasks does not
          collide with each other.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          width="100px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="70" title="Asynchronous"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>Asynchronous module</h2>
        <p>
          First, we have to fetch the asynchronous module which is named
          'asyncio'.<br /><br />

          <code> import asyncio </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Asynchronous</h2>
        <p>
          Let's loook at the following code.<br /><br />

          <code>
            print("Hello")<br />
            print("World")
          </code>

          The code print("Hello") run first then print("World") runs.<br /><br />

          Python waits till the first one finishes and moves on to the second
          one.<br /><br />

          However, if the first code takes a long time, it is very inefficient
          for Python to wait till it finishes.<br /><br />

          Furthermore, the user will not be able to interact with the page if a
          long task is still running.<br /><br />

          This is wehre asyncio module comes in and let us run other functions
          first while running the function that is slow at the background.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="newline" aft="asyncio" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'BeeDongEePage',
};
</script>
