<template>
  <div>
    <br /><br />
    <div>
      <div class="header-div text-white">
        <div>
          <h2>What is printing?</h2>
          <p>
            Many people think of 'printing' as showing information on page.
            However, there is a new definition of 'printing' that you might not
            be aware of.<br /><br />

            In programming language, printing is when a computer displays
            information on screen. The box in which the computer prints is
            called 'console'.<br /><br />

            To print information to the console, use the following code.
          </p>
        </div>
        <code>
          print("Hello, World!")<br />
          print("안녕하세요")<br />
          print("5")<br />
          print("!@#$")
        </code>
      </div>

      <br /><br />

      <Header-en type="Python" num="4" title="Input & Output" />

      <QuadSpace />

      <div class="norm-div bg-black text-white">
        <div>
          <h2>print() but with end</h2>
          <p>
            We can print a text next to another one by using 'end'.<br /><br />

            Most programming languages by default print the text itself to the
            console. However, Python prints a new line after the original
            text.<br /><br />

            Somtimes we want two prints to be on the same line. This is an
            example of a situation where we need to use 'end'.<br /><br />

            For example, if we want to print "Hello, World!"(without "") and
            then a period, we can use end to store '.'.<br /><br />

            <code> print("Hello, World!", end=".") </code>
          </p>
        </div>

        <iframe
          src="https://trinket.io/embed/python3/62e887bbca"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>print() with sep</h2>
          <p />
          <p>
            If we print "Hello, World!", Python prints "Hello, World!".<br /><br />

            Another way of doing this is by putting multiple texts seperated by
            commans inside print(). Python will automatically squish the texts
            with spaces between them.<br /><br />

            <code>
              print("Hello, World!")<br />
              print("Hello", "World")
            </code>

            The example above uses spaces to squish words. What if we want to
            choose our own character to squish with? For example, we might want
            to squish the texts together with a space and a comma.<br /><br />

            We can use 'sep' to store the character inside<br /><br />

            <code> print("Hello", "World", sep=" ,") </code>
          </p>
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>Input</h2>
          <p>
            The task of getting information from the user is called 'input'.<br /><br />

            In human terms, we call this 'asking'.<br /><br />

            For example, let's build a simple login program using Python.<br /><br />

            1. First, get the typed in password.<br />
            2. Second, compare it to the set password<br />
            3. If the two password is the same, login otherwise stay logged
            out.<br /><br />

            <code>
              if 'password' == input("Password:"):<br />
              &emsp;print("Login")
            </code>

            We have not learned about 'if' yet. To put it simply, if(in this
            case) is used to compare the input and 'password' to see if they
            match.<br /><br />

            Make sure you put an indent before 'print("Login")'.
          </p>
        </div>

        <iframe
          src="https://trinket.io/embed/python/5b6a7a8b2b"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>

      <QuadSpace />

      <Navigation bef="vscode" aft="variable" />

      <QuadSpace />

      <v-card>
        <v-card-title>Solve This Quiz!</v-card-title>

        <v-card-text
          ><v-divider />

          <br /><br />

          <h3>What is printing in programming?</h3>
          <div>
            <input
              id="question-1-answers-A"
              type="radio"
              name="question-1-answers"
            />
            <label for="question-1-answers-A"
              >A) Show information in paper
            </label>
          </div>

          <div>
            <input
              id="question-1-answers-B"
              type="radio"
              name="question-1-answers"
              value="B"
            />
            <label for="question-1-answers-B"
              >Store given information in variable
            </label>
          </div>

          <div>
            <input
              id="question-1-answers-C"
              type="radio"
              name="question-1-answers"
            />
            <label for="question-1-answers-C"
              >C) Store given information in variable
            </label>
          </div>

          <div>
            <input
              id="question-1-answers-D"
              type="radio"
              name="question-1-answers"
            />
            <label for="question-1-answers-D"> None of the above </label>
          </div>

          <br /><br />

          <h3>How do we print information in Python?</h3>

          <div>
            <input
              id="question-2-answers-A"
              type="radio"
              name="question-2-answers"
            />
            <label for="question-2-answers-A"> print "info" </label>
          </div>

          <div>
            <input
              id="question-2-answers-B"
              type="radio"
              name="question-2-answers"
              value="B"
            />
            <label for="question-2-answers-B"> puts("info") </label>
          </div>

          <div>
            <input
              id="question-2-answers-C"
              type="radio"
              name="question-2-answers"
            />
            <label for="question-2-answers-C"> console.log("info") </label>
          </div>

          <div>
            <input
              id="question-2-answers-D"
              type="radio"
              name="question-2-answers"
            />
            <label for="question-2-answers-D"> print("info") </label>
          </div>

          <br /><br />

          <h3>
            How do we put extra characters at the end of information using
            print() and end?
          </h3>

          <div>
            <input
              id="question-3-answers-A"
              type="radio"
              name="question-3-answers"
            />
            <label for="question-3-answers-A"> print("info", end="") </label>
          </div>

          <div>
            <input
              id="question-3-answers-B"
              type="radio"
              name="question-3-answers"
              value="B"
            />
            <label for="question-3-answers-B"> puts("info", end="") </label>
          </div>

          <div>
            <input
              id="question-3-answers-C"
              type="radio"
              name="question-3-answers"
            />
            <label for="question-3-answers-C"> print("info", end="") </label>
          </div>
          <div>
            <input
              id="question-3-answers-D"
              type="radio"
              name="question-3-answers"
            />
            <label for="question-3-answers-D"> print("info", theEnd="") </label>
          </div>

          <br /><br />

          <h3>How do we get user input?</h3>

          <div>
            <input
              id="question-5-answers-A"
              type="radio"
              name="question-5-answers"
            />
            <label for="question-5-answers-A"> input() </label>
          </div>

          <div>
            <input
              id="question-5-answers-B"
              type="radio"
              name="question-5-answers"
              value="B"
            />
            <label for="question-5-answers-B"> print() </label>
          </div>

          <div>
            <input
              id="question-5-answers-C"
              type="radio"
              name="question-5-answers"
            />
            <label for="question-5-answers-C"> end() </label>
          </div>

          <div>
            <input
              id="question-5-answers-D"
              type="radio"
              name="question-5-answers"
            />
            <label for="question-5-answers-D"> in() </label>
          </div>

          <br /><br />
        </v-card-text>

        <v-card-actions>
          <v-btn text aria-label="Coding Insight Button" @click="checkAnswer">
            <v-icon left>mdi-check-decagram</v-icon>Check Answer
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputOutputPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 is correct!!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-D').checked) {
        alert('2 is correct!');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-A').checked) {
        alert('3 is correct!!');
      } else {
        alert('3 틀렸습니다');
      }
      if (document.getElementById('question-4-answers-B').checked) {
        alert('4 is correct!');
      } else {
        alert('4 ❌');
      }
      if (document.getElementById('question-5-answers-A').checked) {
        alert('5 is correct! :o');
      } else {
        alert('5 ❌');
      }
    },
  },
};
</script>
