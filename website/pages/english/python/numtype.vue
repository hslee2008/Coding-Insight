<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>Python Number Types</h1>
        <p>
          There are three types of number in Python.<br /><br />
          - integer<br />
          - float<br />
          - complex
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200918224427/Number-and-Its-Types.png"
          width="500px"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="16" title="Numer Types"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>int</h1>
        <p>
          int is short for integer.<br /><br />
          Integer is number such as -5, -4, -3, -2, -1, 0, 1, 2, 3, and so on.
          It is a whole number.<br /><br />
          <code>
            a = -1<br />
            b = 123
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/966ab84f00"
        width="70%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>float</h1>
        <p>
          Float is a number between two int that has digits after '.'.<br /><br />

          For example, the number 3.14159 is a float as it is a number between 3
          and 4 with more digits after '.'.<br /><br />

          <code>
            floatNumber = 3.14159265358979323846264<br />
            print(type(floatNumber)) #&lt;class 'float'> is printed
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/e726e404fa"
        width="60%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>complex</h1>
        <p>
          Complex is a number that might be hard to explain and it is not math
          that we will be learning today.<br /><br />

          Try searching up in the internet of ask someone older than you.
        </p>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="operator" slink="calc" />

    <QuadSpace />

  </div>
</template>
<script>
export default {
  page: 'NumberTypePage',
};
</script>
