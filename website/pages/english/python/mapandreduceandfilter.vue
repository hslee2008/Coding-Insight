<template>
  <div>
    <div>
      <div>
        <h2>Beginner's code</h2>
        <p>
          Beginnrs usually makes a code like the following when they are asked
          to create a program that iterates through a list and raise by 2.<br /><br />

          <code v-highlight class="python">
            mainList = [1, 2, 3]<br />
            newList = []<br /><br />

            for i in mainList:<br />
            &nbsp;newList.append(i**2)
          </code>

          This method used for loop which can be very slow sometimes. In this
          Computer Science Lab, we will learn about the alternatives.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}0be5e6efb5`"
        height="356"
      />
    </div>

    <Header type="Python" num="64" title="map, reduce, filter" />

    <div>
      <div>
        <h2>Using map()</h2>
        <p>
          Let's first look at an example of map().<br /><br />

          <code v-highlight class="python">
            mainList = [1, 2, 3]<br />
            newList = list(map(square, mainList))
          </code>

          map() function has two parameters of function to run on each element
          and the iterator.<br /><br />

          map() will inject every item of the list into square() function and
          get the return value.<br /><br />

          The return value will replace the olde ones in the previous list.<br /><br />

          If you want to make your own function, use the lambda(anonymous
          function) and make 1 parameter and 1 returning value.<br /><br />

          <code v-highlight class="python">
            mainList = [1, 2, 3]<br />
            newList = list(map(lambda n: n * 2, mainList))
          </code>

          When each items of mainList is injected int our lamnbda, it will be
          multipled by 2 and replaced by twice of itself.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}0b62993bad`"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Using filter()</h2>
        <p>
          Filtering means to remove specific datas that matches a statement.<br /><br />

          For example, let's try removing any numbers that is below 0.<br /><br />

          <code v-highlight class="python">
            mainList = [1, 2, 3, -1, -2, 5]<br />
            newList = filter(lambda number: number &lt; 0, mainList)
          </code>
          In the exaple above, each value of mainList will be inected into
          lambda and if lambda returns True, the item is removed.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}9eb9345774`"
      height="356"
      loading="lazy"
    >
    </iframe>

    <QuadSpace />

    <div>
      <div>
        <h2>Using reduce()</h2>
        <p>
          If you want to get outcome of every item in list, you can use the
          reduce() method.<br /><br />

          For example, you can merge all strings together in a list.<br /><br />

          <code v-highlight class="python">
            from functools import reduce<br /><br />

            mainList = ["Hello", " ", "World", "."]<br />
            newList = reduce(lambda x, y: x + y, mainList)<br /><br />

            print(newList)
          </code>

          Every item in mainList will be injected into lambda and the outcome
          will be all combined.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}294b66f2c5`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="logging" aft="zlib" />
  </div>
</template>

<script>
  export default {
    page: 'MapAndReduceAndFilterPage',
    head: () => ({
      title: 'Map, Reduce, Filter',
    }),
  };
</script>
