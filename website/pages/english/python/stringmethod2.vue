<template>
  <div>
    <br />

    <Header-en num="10" title="String Method 2"></Header-en>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>Adding Text</h1>
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
        class="embed-responsive-item"
        src="https://trinket.io/embed/python/54f740c487"
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
        <h1>Information About Text</h1>
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
            txt = "Hello World 123456789"<br />
            print(txt.isalnum()) #True is output
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python/9da1796e91"
        width="100%"
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
        <h1>Python Character Trim</h1>
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
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/3e76b01efc"
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

    <BeforeNextButton flink="stringmethod1" slink="password" />

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!</h1>

      <hr />

      <br /><br />

      <h3>How do we add two strings together in Python?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) + </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) - </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) ++ </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) == </label>
      </div>

      <br /><br />

      <h3>How do we get x times of a string?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) a = "string" * x </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) a = "string" - x </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) a = "string" $ x </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) a = "string" @ x </label>
      </div>
      <br /><br />

      <h3>How do we cut string in Python?</h3>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-A"
          value="A"
        />
        <label for="question-3-answers-A">A) "string".partition("") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-B"
          value="B"
        />
        <label for="question-3-answers-B">B) "string".cut("") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-C"
          value="C"
        />
        <label for="question-3-answers-C">C) "string".apply("") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-D"
          value="D"
        />
        <label for="question-3-answers-D">D) "string" / "string" </label>
      </div>

      <br /><br />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace />
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
