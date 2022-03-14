<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>Writing to files</h2>
        <p>
          There are two modes in writing files.<br /><br />

          'w' mode replaces the entire file content with new one.<br />
          'a' mode adds(appends) to the end of the file.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/890655e828"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <Header-en type="Python" num="51" title="File Writing"></Header-en>


    <div>
      <div>
        <h2>write()</h2>
        <p>
          Using the write() method, we can write to the file.<br /><br />

          <code>
            mainFile = open("example.txt", "a")<br />
            mainFile.write("Now the file has more content!")<br />
            mainFile.close()
          </code>

          While the top example added the text to the content, the example below
          will change the content entirely.<br /><br />

          <code>
            mainFile = open("example.txt", "w")<br />
            mainFile.write("new content")<br />
            mainFile.close()
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>writelines()</h2>
          <p>
            writelines() will write each items in iterable in one line in a
            file.<br /><br />

            <code>
              mainfile = open("example.txt", "w")<br />
              print(mainfile.writelines(["1", "2", "3", "4"]))<br />
              mainfile.close()
            </code>
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/2fdad67c09"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="filereading" aft="etcfile" />

    <div class="quiz">
      <h2>Solve This Quiz!!</h2>

      <v-divider />

      <br /><br />

      <h3>
        There is 'Hello' in example.txt. What is the content of the file going
        to be when we use write() method to write ' World' with 'a' mode?
      </h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) "HelloWorld" </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) "Hello, World!" </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) "World" </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) " World" </label>
      </div>

      <QuadSpace />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FileWritingPage',
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
