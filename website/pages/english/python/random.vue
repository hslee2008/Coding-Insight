<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>The definition of random</h2>
        <p>
          We hear the word 'random' or 'in random' often in our life.<br /><br />

          The words mean to do something without any patterns.<br /><br />

          Using a module named random, we can do operations randomly.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXZGVvGnbtF2jLOKPqulX9hEzoHF7BAq69A&usqp=CAU"
          max-width="400px"
        />
      </div>
    </div>

    <Header type="Python" num="44" title="Random" />

    <div>
      <div>
        <h2>Random module</h2>
        <p>
          Let's fetch random module first.<br /><br />

          <code> import random as R </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>random()</h2>
          <p>
            To get a random float betweeen 0 and 1(till 15th place), simply use
            the random() function from the module.<br /><br />

            <code>
              import random as R<br /><br />

              print(R.random())
            </code>
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/71d6fef8dc"
          width="60%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Random natural number between two numebrs</h2>
          <p>
            To get any natural numbers between 'a' and 'b' randomly, use the
            uniform() function.<br /><br />

            <code>
              import random as R<br /><br />

              print(R.uniform(1, 10))
            </code>

            Similar to uniform(), randint() gets random natural numbers between
            'a' and 'b'.<br /><br />

            <code>
              import random as R<br /><br />

              print(R.randint(1, 6))
            </code>

            randrange() is very similar to uniform() and randint() but it has
            start, end, and step.<br /><br />

            <code>
              import random as R<br /><br />

              print(R.randrange(1, 7, 2)) #select from 1, 3, 5 and 7
            </code>

            Lastly, we have trianglular() function. This function lets us select
            randomly between two numbers.<br /><br />

            The third number is the number that should have the highest
            possibilty of being selected.<br /><br />

            <code>
              import random as R<br /><br />

              print(R.triangular(1, 6, 3)) #1~6 is selected randomly but numbers
              closest to 3 are more likely to get selected
            </code>
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/6af330fe9a"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <Navigation bef="date" aft="dice" />
  </div>
</template>

<script>
  export default {
    page: 'RandomPage',
  };
</script>
