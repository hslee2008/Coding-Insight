<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is Boolean?</h2>
        <p>
          Boolean is a type of data that has only True and False.<br /><br />

          Let's try to make a program that prints whether the number user typed
          in is bigger than 5.<br /><br />

          <code>
            userNumber = int(input("Number: "))<br /><br />

            print(userNumber > 5) #whether userNumber is bigger than 5
          </code>

          We can also store boolean values in variables.<br /><br />

          <code> a = 5 > 6 </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://quizagogo.com/wp-content/uploads/2021/05/True-or-false-1-940x470.jpg"
          max-width="300px"
        />
      </div>
    </div>

    <Header-en type="Python" num="13" title="Boolean"></Header-en>

    <div>
      <div class="mx-auto my-auto">
        <h2>Something to be careful</h2>
        <p>
          In Python, incorrect is False and correct is True.<br /><br />

          I did not made the first alphabet of False and True uppercase on
          purpose.<br /><br />

          Python uses False and True with UPPERCASE letters.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/8500bba20b"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>not keyword</h2>
        <p>Using not, we can switch from true to false and vice versa.</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/5fbbc3204c"
        width="60%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>assert</h2>
        <p>
          Let's look at the following example.<br /><br />

          <code>
            assert 2 > 1<br />
            print("YES. 2 is bigger than 1")
          </code>

          The example above will make an error if 2 is not bigger than 1.<br /><br />

          Otherwise, it will continue on and print "Yes. 2 is bigger than 1."<br /><br />

          We can also make your own message.<br /><br />

          <code> assert 1 > 2, "Hmmm... 🐛🐛🐛(bug) found in code." </code>
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python3/b23c21c043"
        width="60%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>all() and any()</h2>
        <p>
          All means everything. We have not yet learned this yet but if
          everything inside list is True, all() prints True and prints False if
          otherwise.<br /><br />

          any() prints True if any of the items in list is True and False if all
          of them are False.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/6d4ae0d672"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="ascii" aft="number" />

    <div class="quiz">
      <h2>Solve This Quiz!!</h2>

      <v-divider />

      <br /><br />

      <h3>What is the possible values of a Boolean in Python?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) true, false </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) True, false </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) true, False </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) True, False </label>
      </div>

      <br /><br />

      <h3>What is the value of not (not (not (not (not (not (False))))))</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) False </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) True </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) Null </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) None </label>
      </div>

      <br /><br />

      <h3>What is the value of any([True, False, False, False, False])</h3>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-A"
          value="A"
        />
        <label for="question-3-answers-A">A) False </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-B"
          value="B"
        />
        <label for="question-3-answers-B">B) True </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-C"
          value="C"
        />
        <label for="question-3-answers-C">C) Null </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-D"
          value="D"
        />
        <label for="question-3-answers-D">D) None </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooleanPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-D').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-A').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-B').checked) {
        alert('3 ✔️');
      } else {
        alert('3 ❌');
      }
    },
  },
};
</script>
