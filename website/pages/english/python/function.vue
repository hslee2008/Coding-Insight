<template>
  <div>
    <br /><br />

    <h2>What is function?</h2>
    <p>
      Function is a group of code in programming language.<br /><br />

      Note that declaring a function will not do anything as you are only saying
      this code run that group of code.<br /><br />

      You have to run the function itself to see the outcome of the group of
      code.
    </p>

    <Header type="Python" num="29" title="Function" />

    <div>
      <div>
        <h2>Declaring functions and running them</h2>
        <p>
          To declare functions in Python, use the 'def' keyword and name then
          '():'.<br /><br />

          Then, put the group of code inside the function (indentation!!!).<br /><br />

          <code>
            def sayHelloToWorld():<br />
            &nbsp;print("Hello, World!")
          </code>

          If we run the code above, nothing happens.<br /><br />

          Print "Hello, World!" to the console using 'functionname + ()'.<br /><br />

          In this case, sayHelloWorld().<br /><br />

          <code> sayHelloToWorld() </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/221bb999f6"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Parameters</h2>
          <p>
            Parameters are basically variables we can mention in functions.<br /><br />

            For example, if we want to make a function that prints the sum of
            two numbers, we can make 2 parameters.<br /><br />

            <code>
              def addNum(a, b):<br />
              &nbsp;print(a+b)
            </code>

            When using the parameter, put each value inside ().<br /><br />

            <code> addNum(1, 1) </code>
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/3a2f78ef6b"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Using apply() to Run Function</h2>
        <p>
          We can use the apply() function to run.<br /><br />

          <code>
            def printWithEnd(a, b, c=None):<br />
            &nbsp;print(a + b, end = c)<br /><br />

            apply(printWithEnd, ("hello", "world"), {'c': ""} )
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Importance of function</h2>
        <p>
          Using functions, we can simplify our code.<br /><br />

          Check out the example below/next.<br /><br />

          We can make a function named addNumbers() and put in code for
          addition.<br /><br />

          Instead of big chuncks of code inside if statement, we need to put in
          only one line of code: addNumbers()<br /><br />

          <code>
            def addNumbers():<br />
            &nbsp;firstNum = int(input("First Number: "))<br />
            &nbsp;secondNum = int(input("Second Number: "))<br />
            &nbsp;print(firstNum + '+' + secondNum + 'is ' +
            int(firstNum+secondNum))
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/18e0db3387"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <Navigation bef="none" aft="functionhard" />

    <v-card>
      <v-card-title>Solve This Quiz!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>What keyword is used for declaring functions?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
          />
          <label for="question-2-answers-A"> function </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B"> func </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
          />
          <label for="question-2-answers-C"> def </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
          />
          <label for="question-2-answers-D"> fun </label>
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
    name: 'FunctionPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-2-answers-C').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
      },
    },
  };
</script>
