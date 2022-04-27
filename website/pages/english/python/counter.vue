<template>
  <div>
    <div>
      <div>
        <h2>Example and Explanation</h2>
        <p>
          Inside collection module, there is a class named Counter() that let's
          us get information about iterables.<br /><br />

          For example, let's try to find the number of each items using the
          Counter() fuction.<br /><br />

          <code v-highlight class="python">
            from collections import Counter<br /><br />

            print(Counter(["A", "A", "B"])) #{"A": 2, "B": 1}
          </code>
        </p>
      </div>
      <iframe :src="`${trinket}da3dfe80d1`" height="356" />
    </div>

    <Header type="Python" num="77" title="Counter" />

    <div>
      <div>
        <h2>Global Counter</h2>
        <p>
          We can set the counter as a global variable and update it by using
          update() method every time we want to count a new iterable.<br /><br />

          If we update the original counter, a new iterable will be added to it.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}1784ae1aca`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <h2>elements() method</h2>
        <p>
          Every time we update, the counter's elements changes.<br /><br />

          To get the complete list of the counter's elements, use the elements()
          method.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}6776498f90`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <h2>most_common() method</h2>
        <p>
          To get the xth most common element in a counter, use the most_common()
          method and put x inside as a parameter.<br /><br />

          [("A", 2), ("B", 2), ("C", 2)] is printed.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}f918534c52`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <h2>Subtracting</h2>
        <p>
          We can subtract two counters and get a new one.<br /><br />

          If the number gets below zero, Python will keep it that way even
          though having -1 items does not make sense.<br /><br />

          <code v-highlight class="python">
            a = Counter(a = 4, b = 5)<br />
            b = Counter(a = 6, b = 9)<br /><br />

            print(a.subtract(b))
          </code>
        </p>
      </div>
    </div>

    <Navigation bef="multiprocessing" aft="request" />
  </div>
</template>
