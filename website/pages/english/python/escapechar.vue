<template>
  <div>
    <br /><br />

    <div>
      <br />

      <div>
        <h2>What is escape character?</h2>
        <p>
          Escape characters and characters that escapes conflicts.<br /><br />

          For example, let's look at the following string.<br /><br />

          <code> ""HI" said Clara" </code>

          To us, we can distinguish that HI is sperate from the entire
          sentence.<br /><br />

          However, computer thinks that the syntax is like the following: "" and
          HI and " said Cara".<br /><br />

          In other words, it returns an error.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/9219317e00"
        width="60%"
        height="356"
        loading="lazy"
      />
    </div>

    <Header-en type="Python" num="11" title="Escacpe Character"></Header-en>


    <div>
      <div class="mx-auto my-auto">
        <h2>\' and \"</h2>
        <p>
          \' and \" are escape characters.<br /><br />

          It can be used inside ' and " without any conflicts.<br /><br />

          <code> text = '\'escape character\'' </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/5d4e5680b4"
        width="60%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <br />Note that depending on your computer, it might look like a big W or a
    slash.

    <QuadSpace />

    <div>
      <div class="mx-auto my-auto">
        <h2>\n</h2>
        <p>
          n is short for newline.<br /><br />

          \n is same as pressing enter.<br /><br />

          <code> text = "Hello\nWorld" </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/9c8ca944b5"
        width="60%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>\r</h2>
        <p>
          Though this character is a bit different depending on your system, \r
          is usually similar as pressing backspace.<br /><br />

          <code> text = "Hello!!\rWorld" </code>
        </p>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>\t</h2>
          <p>
            \t is similar to pressing tab in keyboard. A tab is equal to 4
            spaces ' '.
            <br /><br />

            <code> essay = "Hello\tWorld" </code>

            We can set our own tab size using expandtabs.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/82e2765c4e"
          width="100%"
          height="356"
          loading="lazy"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>r'string' syntax</h2>
          <p>
            Sometimes, we might want to make a string that does not contain any
            raw strings.<br /><br />

            To do this, we have to put r before the quotation mark.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python/6366397170"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>

      <QuadSpace />

      <NaviBtn bef="password" aft="ascii" />

      <QuadSpace />

      <div class="quiz">
        <h2>Solve This Quiz!!</h2>

        <v-divider />

        <br /><br />
        <h3>How can we put new lines in ''?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
            value="A"
          />
          <label for="question-1-answers-A">A) \n </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B">B) \a </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
            value="C"
          />
          <label for="question-1-answers-C">C) \r </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
            value="D"
          />
          <label for="question-1-answers-D">D) \t </label>
        </div>

        <br /><br />

        <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>Check Answer
        </v-btn>
      </div>
      <QuadSpace />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EscapeChar',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
