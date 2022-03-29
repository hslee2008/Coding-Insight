<template>
  <div>
    <br /><br />

    <div>
      <h2>What is list?</h2>
      <p>
        List is a menu or listings of items.<br /><br />

        We use list to record information about what we want to buy in the
        grocery.
      </p>
    </div>

    <Header-en type="Python" num="18" title="List" />

    <div>
      <div>
        <h2>Declaring list</h2>
        <p>In Python, use [] to store items seperated by a comma(,).</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/59634d0a4b"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>List index</h2>
        <p>Similar to string index, we can access each item by using index.</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/cc01e5b49a"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <h2>Why Python use 0 as first index</h2>
    <p>
      Humans usually think of first as 1.<br /><br />

      For example, if somebody says "You sitting in the second row and second
      column, rise!". The second person will rise.<br /><br />

      However, computers will make the third person rise.<br /><br />

      This weird fact can be explained through mathematically.<br /><br />

      List in math is a series of number with specific patterns.<br /><br />

      For example, let's think about a list that increases by 2.<br /><br />

      <code> sequence = [1, 3, 5, 7] </code>

      Starting from 1, each items increased by 2.<br /><br />

      We can express the first item like this: 1 + 2*0<br /><br />

      1 is the first number and 2 is the pattern. 0 means that it is increased
      by 0, thus the first number.<br /><br />

      The second number is euqal to 1 + 2*1 and so on.<br /><br />

      As you can see, the number of times patterns are added to the original one
      is euqal to the nth number minus one (n - 1).<br /><br />

      This is why first is 0, second is 1 and so on because of the number of
      times pattern are added.
    </p>

    <QuadSpace />

    <Navigation bef="nummethod" aft="listmethod1" />
  </div>
</template>
