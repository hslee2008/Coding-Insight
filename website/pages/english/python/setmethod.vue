<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>Set Operation</h2>
        <p>
          There are 3 types of main set operation you need to know.<br /><br />

          It is union, intersection, and difference.<br /><br />

          Union are items of all in sets. For example, set A(1, 2) and B(2, 3)
          has union of 1, 2, 3 as they are the numbers we cann see from A and
          B.<br /><br />

          Intersection are items that exists in all sets. For example, set A(1,
          2) and B(2, 3) has intersection of 2 because 2 exists in both A and
          B.<br /><br />

          Difference is an item that only exists in one set. For example, the
          difference between A(1, 2) and B(2, 3) is 1 as the only item existing
          in A and not in B is 1.
        </p>
      </div>
    </div>

    <Header type="Python" num="25" title="Set Method" />

    <div>
      <div>
        <h2>Union</h2>
        <p>
          Union means 'as one'.<br /><br />

          In set, the term means all the items that exists in all sets.<br /><br />

          We can find the union of two sets using union() method.<br /><br />

          <code>
            firstColorSet = {"red", "orange", "yellow"}<br />
            secondColorSet = {"green", "blue", "black"}<br /><br />

            oneColorSet = firstColorSet.union(secondColorSet)<br /><br />

            print(oneColorSet)
          </code>

          Note that every time we print the union, the order will be in random
          and this is because set does not have orders.<br /><br />

          If using union() method is complicated, there is an operator |(Press
          the key above enter and shift together) which finds the union of two
          numbers.<br /><br />

          <code>
            A = {1, 2}<br />
            B = {2, 3}<br />
            print(A | B)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/f16d8554a4"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Intersection</h2>
          <p>
            We can use the intersection_update() or intersection() to find the
            intersection of two sets.<br /><br />

            intersection_update() will change the first set and replace the
            original content with the intersection of first and second.<br /><br />

            On the other hand, intersection() will return a new set which can be
            stored inside variable or directly printed.<br /><br />

            intersection_update()<br />
            <code>
              firstColorSet = {"red", "orange", "yellow", "green"}<br />
              secondColorSet = {"green", "blue", "black"}<br /><br />

              firstColorSet.intersection_update(secondColorSet)<br /><br />

              print(firstColorSet)
            </code>

            intersection()<br />
            <code>
              firstColorSet = {"red", "orange", "yellow", "green"}<br />
              secondColorSet = {"green", "blue", "black"}<br /><br />

              print(firstColorSet.intersection(secondColorSet))
            </code>

            If typing the long word 'intersection' is hard, use the operator &
            to find the intersection of two sets.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/bdb3068e9e"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Difference</h2>
        <p>
          Using the symmetric_difference_update() method, we can find the items
          that only exists in the first set.<br /><br />

          symmetric_difference() method exists too and it returns new set while
          symmetric_dffierence_update() will change the first set.<br /><br />

          <code>
            bcl = {"Javascript", "C++", "C", "Python"}<br />
            greatButNotTheBestLCodingLanguage = {"C++", "C", "Python"}<br /><br />

            bcl.symmetric_difference_update(greatButNotThebcl)<br /><br />

            print(bcl)
          </code>

          Tip: use - for much easier operations.<br /><br />

          <code>
            A = {1, 2}<br />
            B = {2, 3}<br />
            print(A - B)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a69bea0190"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="set" aft="if" />
  </div>
</template>

<script>
  export default {
    page: 'SetMethodPage',
  };
</script>
