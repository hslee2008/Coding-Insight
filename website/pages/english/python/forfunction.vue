<template>
  <div>
    <div>
      <Header type="Python" num="36" title="Iterable Function" />

      <QuadSpace />

      <div>
        <div>
          <h2>iter() and __next__()</h2>
          <p>
            Using iter() function, we can make an iteration object.<br /><br />

            Using __next__() method, we are going to get each item in order.<br /><br />

            <code v-highlight class="python">
              i = iter(["One", "Two", "Three", "Four"])<br /><br />

              print(i.__next__())
            </code>

            Note that when there is no more items left and you run __next__(),
            it will return an error.
          </p>
        </div>
        <iframe
          :src="`${trinket}ba9d86426e`"
          width="60%"
          height="356"
          loading="lazy"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>More about range()</h2>
            <p>
              range() is very useful when used with for loops.<br /><br />

              range() simply returns a data type that can be iterated.<br /><br />

              There are three parameters: start, stop, and step.<br /><br />

              start is the number that Python should start counting on.<br />
              stop is the end number.<br />
              step is the distance between the first number and second number,
              second number and third number and so on.<br /><br />

              <code v-highlight class="python">
                for i in range(1, 10, 2):<br />
                &nbsp;print(i, end=" ")
              </code>
            </p>
          </div>
          <iframe :src="`${trinket}31f75bee24`" height="356" loading="lazy" />
        </div>
      </div>
    </div>

    <Navigation bef="fortype" aft="while" />
  </div>
</template>
