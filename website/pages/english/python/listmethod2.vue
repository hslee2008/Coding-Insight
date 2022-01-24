<template>
  <div>
    <br />

    <Header-en title="List Method 2" num="20"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Organizing and rearranging your list</h1>
        <p>
          You can use the 'sort' method to sort the list in alphabetical and
          numeric order.<br /><br />

          To reverse the alphanumeric order in the list, enter 'True' for the
          value of 'reverse' in sort.<br /><br />

          You can also reverse the order of the list using the 'reverse'
          function.<br /><br />

          We can make our own rules. Let's start with the lowercase letters in
          the letter and sort them into uppercase.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/44f3241dca"
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
        <h1>append()</h1>
        <p>
          To append a new value to the end of the list, we'll use 'append()'.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/12cc090a48"
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
        <h1>Merging list</h1>
        <p>You can use 'extend' to add two lists to create a new sheet.</p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/7e53c5b5a9"
        width="70%"
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
        <h1>Comparing list values</h1>
        <p>
          If the list is all numbers, you can find the largest and smallest
          numbers using max() and min().
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/94a4a72417"
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

    <BeforeNextButton flink="listmethod1" slink="dictionary" />

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!!</h1>

      <hr />

      <br /><br />

      <h3>What is equal to ["Hello", "World"].reverse()?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          value="A"
          id="question-2-answers-A"
        />
        <label for="question-2-answers-A">A) ["Hello", "World"] </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          value="B"
          id="question-2-answers-B"
        />
        <label for="question-2-answers-B">B) ["World", "Hello"] </label>
      </div>

      <div>
        <input type="radio" name="question-2-answers" value="C" />
        <label for="question-2-answers-C">C) None </label>
      </div>

      <div>
        <input type="radio" name="question-2-answers" value="D" />
        <label for="question-2-answers-D">D) "Hello World" </label>
      </div>

      <QuadSpace />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ListMethod2Page',
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
