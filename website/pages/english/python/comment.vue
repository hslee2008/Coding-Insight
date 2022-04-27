<template>
  <div>
    <div>
      <h2>What is a comment?</h2>
      <p>
        Below YouTube videos, there are sections in which you can 'comment' on
        the video.<br /><br />

        In programming languages, comments is a method to use for various
        purposes such asexplaining what a code does.
      </p>
    </div>

    <Header type="Python" num="7" title="Comment" />

    <div>
      <h2>When to use comment?</h2>
      <p>
        1. Explaining what a piece of code does<br /><br />
        2. To inform the reader or developer of something<br /><br />
        3. Python compiler ignores comments. Try to 'comment' codes out. It
        removes to code temporarily but we can always restore it.
      </p>
    </div>
    <iframe
      :src="`${trinket2}450cb9ddc1`"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>One - line comment</h2>
        <p>
          One line comment is mostly use beside a code to tell what it does.<br /><br />

          Using '#' symbol, we can make a comment for our code.
        </p>
      </div>

      <iframe :src="`${trinket2}5f18131ec9`" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Multi - line comment</h2>
        <p>
          Multi line comments are used to inform readers and developers.<br /><br />

          We can also use this to remove a code temporarily.<br /><br />

          Multi line comments can start from anywhere to any place while one -
          line comment can only be used in that line.<br /><br />

          We can use """ instead of '''.
        </p>
      </div>

      <iframe :src="`${trinket2}ab2de5f9f6`" height="356" />
    </div>

    <Navigation bef="datatype" aft="string" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>How do we make a one line comment in Python?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
          />
          <label for="question-1-answers-A"> # </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B"> ! </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
          />
          <label for="question-1-answers-C"> ~ </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
          />
          <label for="question-1-answers-D"> & </label>
        </div>

        <br /><br />

        <h3>How do we make multi-line comment in Python?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"> """ """ </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> " " </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> ( ) </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> ([{ }]) </label>
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
    name: 'CommentPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-A').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌...');
        }
        if (document.getElementById('question-2-answers-A').checked) {
          alert('2 ✔️');
        } else {
          alert('2 ❌');
        }
      },
    },
  };
</script>
