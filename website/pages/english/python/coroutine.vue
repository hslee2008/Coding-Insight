<template>
  <div>
    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>Making Coroutines</h1>
        <p>
          A long time ago, we learned about yield keyword in for loop.<br /><br />

          Instead of using yield as return, we can use it for making
          couroutines.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://i.pinimg.com/736x/1c/86/84/1c8684b06bc7ad1e1f6b7b0099d87300.jpg"
          max-width="200px"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="84" title="Coroutine"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>yield - coroutine</h1>
        <p>
          1. First, make a couroutine function.<br />2. Next, making a yield
          variable and do operation on it with another variable named x.<br /><br />

          To use couroutine functions,<br />
          1. Make a variable and assign the function to it with the original
          value. <br />
          2. Next, use the next() function.<br />
          3. To use courutine, use the send() method.<br />
          4. Finally, use close().
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/fe3f6eff37"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace />

    <BeforeNextButton flink="atexit" slink="spam" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'CoroutinePage',
};
</script>
