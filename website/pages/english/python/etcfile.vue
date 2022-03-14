<template>
  <div>
    <Header-en
      type="Python"
      num="52"
      title="File making, deleting, encoding"
    ></Header-en>


    <div>
      <div>
        <h2>Making Files</h2>
        <p>
          "x" mode will create a file if it does not exist.<br /><br />

          Note that error will occur when the file already exists.<br /><br />

          <code> mainFile = open("example.txt", "x") </code>

          Adding '+' at the end of original mode will let us write and read file
          both at once(It will also create file if it does not exist).
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Removing Files</h2>
          <p>
            To remove files, use the 'os' module we learned before.<br /><br />

            <code>
              import os<br /><br />

              os.remove("example.txt") #using remove() function<br />
              os.rmdir("example.txt") #using rmdir() function (ReMoveDIRectory)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Encoding</h2>
          <p>
            By default, Python will open files and read them with 'ASCII'.<br /><br />

            So, if there is a character that does not exist in ASCII(such as an
            emoji), Python will give us an error.<br /><br />

            In this case, we have to specify encoding which tells Python how to
            understand the file.<br /><br />

            In ASCII, there are limited numebr of characters.<br /><br />

            Use UTF-8 if you have emojis, special characters, or other language
            character inside your file.<br /><br />

            <code>
              mainFile = open("example.txt", "r", encoding="UTF-8")<br /><br />

              mainFile.close()
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="filewriting" aft="contextmanager" />

    <div class="quiz">
      <h2>Solve this quiz!!</h2>

      <v-divider />

      <br /><br />

      <h3>
        There is an emoji in file. What kind of encoding should we use for
        opening that file in Python to not get an error?
      </h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) ASCII </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) UTF-8 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) ABC </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) ENCODING123 </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon> Check Answer
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EtcFilePage',
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
