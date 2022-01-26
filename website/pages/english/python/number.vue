<template>
  <div>
    <br />
    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>Declare number variable</h1>
        <p>
          We use numbers all the time.<br /><br />

          In Python, numbers are used as much as it is in human world.<br /><br />

          To declare numbers, assign the number without quotation marks to the
          variable.<br /><br />

          <code>
            age = 12<br />
            print(age)
          </code>
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://blog.shabda.co/wp-content/uploads/2015/10/numbers-truth-morality.png"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="14" title="Number"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Basic Calculation</h1>
        <p>
          In elementary school, we learned how to add, subtract, multiply, and
          divide.<br /><br />

          Adding and subtracting is same in Python. Use + and -.<br /><br />

          On the other hand, multiplying and dividing is a bit different.
          Instead of using the normal operators, Python uses * and /.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/75d1cbc8dd"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>The difference between number and 'number'</h1>
        <p>
          There are two ways you can define a number variable.<br /><br />

          One way is to define it as a string, inside the quotation mark.<br /><br />

          The other way is to simply define them as a number without the
          quotation mark.<br /><br />

          <code>
            firstNumber = "1"<br />
            secondNumber = 1
          </code>

          Is there a different? Yes.<br /><br />

          <code>
            print(type(firstNumber))<br />
            print(type(secondNumber))
          </code>

          If we look at the example above, we can see that &lt;class 'str'> is
          printed.<br /><br />

          Then, &lt;class 'int'> is printed.<br /><br />

          This is because Python interprets anything inside quotation mark as a
          string no matter what.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/81191f5590"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>input() value to number</h1>
        <p>
          input() always returns string.<br /><br />

          <code>
            firstNumber = input("Number 1: ")<br />
            secondNumber = input("Number 2: ")<br /><br />

            print(firstNumber + secondNumber)
          </code>

          Let's run the example code above.<br /><br />

          Typing in 1 and 1 should give us 2.<br /><br />

          Wait. What? It gave us 11.<br /><br />

          This is because 1 and 1 is a string and using + will merge them.<br /><br />

          To do the calculation correctly, we first have to make the string
          number to number.<br /><br />

          Use int() to make string into a number.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/4b9cfba68b"
        width="50%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn flink="boolean" slink="operator" />

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!!</h1>

      <v-divider />

      <br /><br />

      <h3>
        What is printed when running the following code?: print(type('1'))
      </h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) &lt;class 'str'> </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) &lt;class 'int'> </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) None </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) Error occurs. </label>
      </div>

      <br /><br />

      <h3>How do we change '1'(str) to 1(int)?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) int("1") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) toInt("1") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) toInteger("1") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) integer("1") </label>
      </div>

      <br /><br />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>
    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'NumberPage',
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
    },
  },
};
</script>
