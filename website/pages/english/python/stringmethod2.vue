<template>
  <div>
    <Header-en type="Python" num="10" title="String Method 2"></Header-en>

    <div>
      <div class="mx-auto my-auto">
        <h2>Adding Text</h2>
        <p>
          Characters can be added using '+'.<br /><br />

          <code>
            a = "Hello "<br />
            b = "World"<br /><br />

            print (a = b)
          </code>

          But what can you do to add a repeating pattern?<br /><br />

          Here's another way to do it:<br /><br />

          <code>
            a = "+-" * 10<br /><br />

            print(a)
          </code>

          The letter * number means that it returns a number of repetitions of
          the letter.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/54f740c487"
        width="60%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Information About Text</h2>
        <p>
          There is a way in Python to know if a character consists only of
          alphanumeric characters. Just use the 'isalnum()' method.<br /><br />

          Also, you can check whether 'isalpha' consists of only alphabets,
          'isdecimal' consists only of numbers (0~9), 'isdigit' consists of only
          numbers, and 'isidentifier' matches the variable name rules.<br /><br />

          Furthermore, you can check whether 'isnumeric' consists only of
          integers, 'isprintable' can print information, and 'isspace' consists
          only of spaces.<br /><br />

          alphabets, 'isdecimal' consists only of numbers (0~9), 'isdigit'
          consists of only numbers, and 'isidentifier' matches the variable name
          rules.<br /><br />

          Also, you can check whether 'isnumeric' consists only of integers,
          'isprintable' can print information, and 'isspace' consists only of
          spaces.<br /><br />

          <code>
            txt = "Hello, World! 123456789"<br />
            print(txt.isalnum()) #True is output
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/9da1796e91"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Python Character Trim</h2>
        <p>
          I'm going to make a program to filter out bad words.<br /><br />

          <code>
            badWord = input("Bad word: ")<br />
            badSentence = ("I am not " + badWord + ".")<br />
            filterBadWord = (badSentence.partition(badWord))<br /><br />

            print(filterBadWord[0] + "***" + filterBadWord[2])
          </code>

          First, I asked a bad word and made a sentence that means 'I'm not a
          {bad word}'. Then, using the partition() method, I cut the sentence
          based on the bad word and put '**' instead of the bad word.<br /><br />

          Let's take another example:<br /><br />

          <code>
            partitionedSentence = ("Hello. My name is
            Hyunseung.".partition("name"))<br /><br />

            print(partitionedSentence)
          </code>

          In this example, truncated by name. If you print partitionedSentence,
          you can observe that ("Hello. My ", "name", " is Hyunseung") is output
          to the terminal.<br /><br />

          You used indexing to combine the sentences before 'name' with the
          sentences after 'name'.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/3e76b01efc"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <Navigation bef="stringmethod1" aft="password" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text
        ><v-divider />

        <br /><br />

        <h3>How do we add two strings together in Python?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
          />
          <label for="question-1-answers-A"> + </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B"> - </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
          />
          <label for="question-1-answers-C"> ++ </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
          />
          <label for="question-1-answers-D"> == </label>
        </div>

        <br /><br />

        <h3>How do we get x times of a string?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"> a = "string" * x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> a = "string" - x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> a = "string" $ x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> a = "string" @ x </label>
        </div>
        <br /><br />

        <h3>How do we cut string in Python?</h3>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-A"
          />
          <label for="question-3-answers-A"> "string".partition("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-B"
            value="B"
          />
          <label for="question-3-answers-B"> "string".cut("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-C"
          />
          <label for="question-3-answers-C"> "string".apply("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-D"
          />
          <label for="question-3-answers-D"> "string" / "string" </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn text aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn></v-card-actions
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'StringMethod2',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-A').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-A').checked) {
        alert('3 ✔️');
      } else {
        alert('3 ❌');
      }
    },
  },
};
</script>
