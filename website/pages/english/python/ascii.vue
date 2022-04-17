<template>
  <div>
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
    </div>

    <Header type="Python" num="12" title="ASCII" />

    <div>
      <div>
        <h2>ord()</h2>
        <p>
          Using ord(), we can get the ASCII value of a character.<br /><br />

          <code> print(ord(input("One character: "))) </code>
        </p>
      </div>
      <iframe :src="`${trinket}4f4507d894`" width="60%" height="356" />
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
      <iframe :src="`${trinket}2f04cf1944`" height="356" />
    </div>

    <Navigation bef="escapechar" aft="boolean" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>How do we find the ASCII value of a character?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
          />
          <label for="question-1-answers-A"> ord() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B"> toORD() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
          />
          <label for="question-1-answers-C"> ascii() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
          />
          <label for="question-1-answers-D"> Other </label>
        </div>

        <br /><br />

        <h3>How do we get the character of ASCII?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"> character() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> charact() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> char() </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> chr() </label>
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
