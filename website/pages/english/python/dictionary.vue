<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>What is dictionary?</h2>
        <p>
          Dictionary is a book that contains a word and an explanation for
          it.<br /><br />

          For example, if we search up the word 'Python' in the dictionary we
          find the following explanation "a high-level general-purpose
          programming language".<br /><br />

          Here, Python is the 'key' and the explanation is the 'value'.<br /><br />

          In Python, dictionary is a data type which contains pairs of keys and
          values.
        </p>
      </div>
    </div>

    <Header type="Python" num="21" title="Dictionary" />

    <div>
      <div>
        <h2>Get the keys</h2>
        <p>
          To get a list of keys, use the keys() method.<br /><br />

          <code>
            mainDict = {<br />
            "member1": "John",<br />
            "member2": "Sam",<br />
            "member3": "Maria"<br />
            }<br /><br />

            print(list(mainDict.keys())) #dict_keys(["member1", "member2",
            "member3"])
          </code>

          Running mainDict.keys() will return dict_keys instead of lists.<br /><br />

          If you want to do operation on the keys, dict_keys is not the data
          type you are looking for.<br /><br />

          We have to use list(mainDict.keys()) to make them into lists.
        </p>
      </div>
      <iframe :src="`${trinket}1e671b6947`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Get the values</h2>
        <p>
          Similar to keys() method, we can also use values() to get all the
          values of dictionary.<br /><br />

          <code>
            mainDict = {<br />
            "member1": "John",<br />
            "member2": "Sam",<br />
            "member3": "Maria"<br />
            }<br /><br />

            print(mainDict.values()) #dict_values("John", "Sam", "Maria")
          </code>

          This method also returns dict_values so use list() to make them into
          lists.
        </p>
      </div>
      <iframe :src="`${trinket}1e671b6947`" width="100%" height="356" />
    </div>

    <Navigation bef="contact" aft="dictionarymethod" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>
          What is printed to the console when running: print({"1": "a", "2":
          "b"}.keys())
        </h3>

        <div>
          <input
            type="radio"
            id="question-2-answers-A"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> ["a", "b"] </label>
        </div>

        <div>
          <input
            type="radio"
            value="B"
            id="question-2-answers-B"
            name="question-2-answers"
          />
          <label for="question-2-answers-B"> dict_keys(["a", "b"]) </label>
        </div>

        <div>
          <input
            type="radio"
            id="question-2-answers-C"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> keys(["a", "b"]) </label>
        </div>

        <div>
          <input
            type="radio"
            id="question-2-answers-D"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> ["b", "a"] </label>
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
    name: 'DictionaryPage',
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
