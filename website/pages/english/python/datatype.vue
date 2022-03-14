<template>
  <div>
    <br /><br />
    <div>
      <div>
        <h2>What is data and data type?</h2>
        <p>
          In programming, symbols such as numbers and alphabets are called
          data.<br /><br />

          Data Types are types of different data.<br /><br />

          For example, one of the most used data types in the human world is
          text(otherwise known as strings). In Python, put texts inside '' or
          "".<br /><br />

          The example below is a way to declare srings in Python.<br /><br />

          <code> weather = "a bit rainy" </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://www.internationaldisabilityalliance.org/sites/default/files/blog/big_data.jpg"
          max-width="300px"
        />
      </div>
    </div>

    <Header-en type="Python" num="6" title="Data Type"></Header-en>


    <div>
      <div style="margin: auto; padding-right: 5px">
        <h2>Know the data type in Python</h2>
        <p>
          To find the data type of a variable or anything in Python, use the
          type() code.<br /><br />

          Simply put any variables inside to see the data type.<br /><br />

          <code>
            a = "Hello"<br /><br />

            print(type(a))
          </code>

          The code above prints &lt;class 'str'>. str stands for string.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/109be31855"
        width="70%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Check data type in Python</h2>
        <p>
          To check wether a data is a certain type in Python, use isinstance()
          code.<br /><br />

          Put the name of variable or data then insert the data type name to
          check whether the type of data matches the given type.<br /><br />

          The code will return either True or False. These are called
          Boolean.<br /><br />

          <code>
            weather = "sunny"<br />
            print(isinstance(weather, str))
          </code>

          The code above prins True because "sunny" is a string.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="madlib" aft="comment" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>What is data type?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A"
          >A) A place where you can store data
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) Types of data </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) Various symbols </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) Other </label>
      </div>

      <br /><br />

      <h3>What is the correct code to find data type?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) type() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) typeof() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) type </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) typeof </label>
      </div>

      <br /><br />

      <h3>How can we check whether the data's type match given data?</h3>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-A"
          value="A"
        />
        <label for="question-3-answers-A">A) isinstance() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-B"
          value="B"
        />
        <label for="question-3-answers-B">B) instance() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-C"
          value="C"
        />
        <label for="question-3-answers-C">C) is() </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-D"
          value="D"
        />
        <label for="question-3-answers-D">D) isdata() </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DataTypePage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
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
        alert('3 ✔️!');
      } else {
        alert('3 ❌');
      }
    },
  },
};
</script>
