<template>
  <div>
    <br />

    <div style="display: flex; justify-content: center" class="img-div">
      <div class="mx-auto">
        <h1>Making a simple addition calculator</h1>
        <p>
          Let's try making our own calculator using the methdos we learned in
          the previous page.<br /><br />

          Make sure to read
          <NuxtLink to="number" style="color: dodgerblue">Number</NuxtLink>,
          <NuxtLink to="operator" style="color: dodgerblue">Operator</NuxtLink>,
          <NuxtLink to="numtype" style="color: dodgerblue"
            >Number Types</NuxtLink
          >
          before you move on.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en title="Making a calculator" num="Proj: 3"></Header-en>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h1>Explanation</h1>
        <p>
          How do we make a calculator using Python?<br /><br />

          1. We will get 2 user number inputs<br />
          2. To make sure we can add integer and float, we will have to use
          float() method.<br />
          3. Add and print<br /><br />
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb1a_2sCkKU_ZFxGvyla48iA8hMAjnsmbaA&usqp=CAU"
          width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Let's make a calculator</h1>
        <p>
          We will get input from two numbers<br /><br />

          <code>
            num1 = input("Num1: ")<br />
            num2 = input("Num2: ")
          </code>

          Using the float() method, we will convert the number into float and
          add them together<br /><br />

          <code> addnum = float(num1) + float(num2) </code>

          We print <var>addnum</var> variable<br /><br />

          <code> print(addnum) </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/6fd6aa9b5a"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="numtype" aft="nummethod" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'CalcPage',
};
</script>
