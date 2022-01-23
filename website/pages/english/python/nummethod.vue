<template>
  <div>
    <br />

    <Header title="Number Method" num="17"></Header>

    <QuadSpace />

    <div class="header-div bg-black text-white">
      <div>
        <h1>Absolute Value</h1>
        <p>
          The absolute value of a is equal to the distance from a to 0.<br /><br />

          It means that if a is a negative number, turn it into positive and if
          it is positive, leave it alone.<br /><br />

          For example, the absolute value of -4 is euqal to 4.<br /><br />

          <code>
            num = int(input("Number: "))<br />
            absVal = abs(num)<br /><br />

            print(absVal)
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/f74cbaa5c3"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="calc" slink="list" />

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!!</h1>

      <hr />

      <br /><br />

      <h3>How do we find the absolute value of -1 in Python?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) abs("-1") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) abs(-1) </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) absolute("-1") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) absolute(-1) </label>
      </div>

      <br /><br />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'NumberMethodPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
