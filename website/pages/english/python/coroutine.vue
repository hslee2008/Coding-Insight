<template>
  <div>
    <br /><br />

    <div>
      <h2>Making Coroutines</h2>
      <p>
        A long time ago, we learned about yield keyword in for loop.<br /><br />

        Instead of using yield as return, we can use it for making couroutines.
      </p>
    </div>

    <Header type="Python" num="84" title="Coroutine" />

    <div>
      <div>
        <h2>yield - coroutine</h2>
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
      :src="`${trinket}fe3f6eff37`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="atexit" aft="spam" />
  </div>
</template>
