<template>
  <div>
    <br /><br />

    <div>
      <div style="padding: 5px; margin: auto">
        <h2>What is ASCII?</h2>
        <p>
          ASCII is short for American Standard Code for Information
          Interchange.<br /><br />

          In other words, ASCII is for exchanging information with numbers
          instead of alphabets.<br /><br />

          ASCII represents characters in numbers from 0 to 127.<br /><br />

          Here is a fun fact. You might think that 'A' is bigger than 'a' in
          ASCII, but it is not true. 'a' is 97 and 'A' is 65.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <Header-en type="Python" num="12" title="ASCII"></Header-en>


    <div>
      <div>
        <h2>ord()</h2>
        <p>
          Using ord(), we can get the ASCII value of a character.<br /><br />

          <code> print(ord(input("One character: "))) </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/4f4507d894"
        width="60%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>chr()</h2>
        <p>
          On the other hand, chr() prints the character of ASCII code.<br /><br />

          <code> print(chr(int(input("A number between 0 and 127: ")))) </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/2f04cf1944"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="escapechar" aft="boolean" />

    <div class="quiz">
      <h2>Solve This Quiz!!</h2>

      <v-divider />

      <br /><br />

      <h3>How do we find the ASCII value of a character?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) ord() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) toORD() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) ascii() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) Other </label>
      </div>

      <br /><br />

      <h3>How do we get the character of ASCII?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) character() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) charact() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) char() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) chr() </label>
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
  name: 'AsciiPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-D').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
    },
  },
};
</script>
