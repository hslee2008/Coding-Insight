<template>
  <div>
    <Header-en type="Python" title="Number Method" num="17"></Header-en>

    <div class="header-div bg-black text-white">
      <div>
        <h2>Absolute Value</h2>
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
        src="https://trinket.io/embed/python3/f74cbaa5c3"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <Navigation bef="calc" aft="list" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text
        ><v-divider />

        <br /><br />

        <h3>How do we find the absolute value of -1 in Python?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"> abs("-1") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> abs(-1) </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> absolute("-1") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> absolute(-1) </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn text aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>Check Answer
        </v-btn></v-card-actions
      >
    </v-card>
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
