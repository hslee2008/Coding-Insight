<template>
  <div>
    <div>
      <h2>Making a simple addition calculator</h2>
      <p>
        Let's try making our own calculator using the methdos we learned in the
        previous page.<br /><br />

        Make sure to read
        <NuxtLink :aria-label="allink" to="number"> Number </NuxtLink>,
        <NuxtLink :aria-label="allink" to="operator"> Operator </NuxtLink>,
        <NuxtLink :aria-label="allink" to="numtype"> Number Types </NuxtLink>
        before you move on.
      </p>
    </div>

    <Header type="Python" title="Making a calculator" num="Proj: 3" />

    <div>
      <div>
        <h2>Explanation</h2>
        <p>
          How do we make a calculator using Python?<br /><br />

          1. We will get 2 user number inputs<br />
          2. To make sure we can add integer and float, we will have to use
          float() method.<br />
          3. Add and print
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb1a_2sCkKU_ZFxGvyla48iA8hMAjnsmbaA&usqp=CAU"
          width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Let's make a calculator</h2>
        <p>
          We will get input from two numbers<br /><br />

          <code v-highlight class="python">
            num1 = input("Num1: ")<br />
            num2 = input("Num2: ")
          </code>

          Using the float() method, we will convert the number into float and
          add them together<br /><br />

          <code v-highlight class="python"> addnum = float(num1) + float(num2) </code>

          We print <var>addnum</var> variable<br /><br />

          <code v-highlight class="python"> print(addnum) </code>
        </p>
      </div>
      <iframe :src="`${trinket}6fd6aa9b5a`" height="356" />
    </div>

    <Navigation bef="numtype" aft="nummethod" />
  </div>
</template>
