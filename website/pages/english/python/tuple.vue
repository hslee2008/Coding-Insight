<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is tuple?</h2>
        <p>
          Tuple is very similar to lists but we cannot change what is inside
          tuple.<br /><br />

          Using list, we can change each items using indexing but we cannot do
          so with tuples.<br /><br />

          So, we usually tuple for storing menus of values that should not be
          touched by anyone.<br /><br />

          Tuples use () instead of [].<br /><br />

          <code>
            bestCodingLangTuple = ("Javascript") #nobody can change this<br />
            print(bestCodingLangTuple)<br /><br />

            bestCodingLangTyple[0] = "C++" # error
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/3b0dada577"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <Header type="Python" title="Tuple" num="24" />

    <div>
      <div>
        <h2>Tuples hacks & tips - unravel</h2>
        <p>
          We can use tuples like a box to unravel the contents inside.<br /><br />

          If we lign the same number of new variable names on left and put the
          tuple after '='. Variable number should be equal to tuple length.<br /><br />

          <code>
            fruits = ("apple", "banana", "cherry")<br /><br />

            green, yellow, red = fruits #green = apple, yellow = banana, red =
            cherry<br /><br />

            print(green)<br />
            print(yellow)<br />
            print(red)
          </code>

          If we want to store the REST of values of tuples inside variable, use
          the * after variable name.<br /><br />

          <code>
            fruits = ("apple", "banana", "cherry", "melon")<br /><br />

            (green, yellow, red*) = fruits # same as above but red is euqal to
            cherry and melon<br /><br />

            print(green)<br />
            print(yellow)<br />
            print(red)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/76cd83a2ae"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Tuple set length</h2>
        <p>
          To set the length of the tuple and tell Python not to allow any more
          items, use the additional comma.<br /><br />

          Now, nobody can add more to it! (Adding is possible though changing is
          not)<br /><br />

          <code>
            a = 1, 2,<br />
            b = 3,
          </code>
        </p>
        <iframe
          src="https://trinket.io/embed/python3/1a3ca85630"
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
        <h2>zip()</h2>
        <p>
          We usually see two sides of the zipper lign up when we zip.<br /><br />

          Similar to this, we can zip up (lign up) two tuple's value.<br /><br />

          By using zip(), Python will return a zipped data type. Use tuple() or
          list() to use them.<br /><br />

          Looking at the example below, (1, "one"), (2, "two"), and so on is
          inside a tuple. In other words, double tuple is created which has
          tuples containing each item of the original tuple.<br /><br />

          <code>
            firstTup = (1, 2, 3, 4, 5)<br />
            secondTup = ("one", "two", "three", "four", "five")<br /><br />

            zipped = zip(firstTup, secondTup)<br /><br />

            print(tuple(zipped))
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/c70ec1ecfe"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <Navigation bef="zipping" aft="set" />

    <v-card>
      <v-card-text>
        <h3>
          what is printed when running: print( zip( (1, 2, 3), ("1", "2", "3") )
          ) ?
        </h3>

        <v-divider />

        <br /><br />

        <h3>
          print( zip( (1, 2, 3), ("1", "2", "3") ) ) 코드를 실행하면 출력되는
          값은?
        </h3>

        <h3>
          what is printed when running: print( zip( (1, 2, 3), ("1", "2", "3") )
          ) ?
        </h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"
            >A) ((1, '1'), (2, '2'), (3, '3'))
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"
            >(('1', 1), ('2', 2), ('3', 3))
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> None </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> Other </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn text :aria-label="albutt" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>Check Answer
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'TuplePage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-2-answers-D').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
      },
    },
  };
</script>
