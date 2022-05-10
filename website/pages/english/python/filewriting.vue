<template>
  <div>
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
        title="Trinket Python"
        :src="`${trinket}890655e828`"
        height="356"
      />
    </div>

    <Header type="Python" num="51" title="File Writing" />

    <div>
      <div>
        <h2>write()</h2>
        <p>
          Using the write() method, we can write to the file.<br /><br />

          <code v-highlight class="python">
            mainFile = open("example.txt", "a")<br />
            mainFile.write("Now the file has more content!")<br />
            mainFile.close()
          </code>

          While the top example added the text to the content, the example below
          will change the content entirely.<br /><br />

          <code v-highlight class="python">
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

            <code v-highlight class="python">
              mainfile = open("example.txt", "w")<br />
              print(mainfile.writelines(["1", "2", "3", "4"]))<br />
              mainfile.close()
            </code>
          </p>
        </div>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}2fdad67c09`"
        height="356"
      />
    </div>

    <Navigation bef="filereading" aft="etcfile" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text>
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
          />
          <label for="question-2-answers-A"> "HelloWorld" </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> "Hello, World!" </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> "World" </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> " World" </label>
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
