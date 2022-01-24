<template>
  <div>
    <br />

    <div>
      <Header-en num="30" title="Function (Advanced)"></Header-en>

      <QuadSpace />

      <div>
        <div>
          <h1>Keyword Parameter</h1>
          <p>
            We can assign values to each parameter(like a variable) by using
            parameter name.<br /><br />

            Using this format, we do not need to consider the order of the
            parameter.<br /><br />

            <code>
              def subtractThis(firstNumber, secondNumber):<br />
              &nbsp;print(firstNumber - secondNumber)<br /><br />

              subtractThis(secondNumber = 2, firstNumber = 6)<br />
              subtractThis(2, 6)
            </code>

            Similar to dictionaries, we can make a dictionary parameter that
            stores every keyword parameter.<br /><br />

            To access each value, simply fetch the value like dictionary(e.g.
            dictionary[key]).<br /><br />

            <code>
              def addOnlyFirstAndSecond(**numbers):<br />
              &nbsp;print(numbers["firstNumber"] + numbers["secondNumber"])<br /><br />

              addOnlyFirstAndSecond(firstNumber = 1, secondNumber = 2,
              thirdNumberThatDoesNotMatter = 3)
            </code>
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/901f63378a"
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
          <div>
            <h1>Assign default value</h1>
            <p>
              Using the default value, if the user typed in nothing(or the value
              is None), the default value will be assigned the the parameter.<br /><br />

              <code>
                def printMyCountry(country = "South Korea"):<br />
                &nbsp;print("I was born in " + country)<br /><br />

                printMyCountry("U.S.A")<br />
                printMyCountry()<br />
                printMyCountry("France")
              </code>

              The second time the function is called, we did not type in any
              parameter.<br /><br />

              Therefore, "South Korea" is printed.
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/095fe5cab9"
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
      </div>

      <QuadSpace />

      <div>
        <div>
          <h1>return keyword</h1>
          <p>
            The return keyword returns a new value.<br /><br />

            The returned value can be printed, stored in variables and so on.<br /><br />

            Treat a function that returns value as data type itself.<br /><br />

            <iframe
              class="embed-responsive-item"
              src="https://trinket.io/embed/python3/e07973bfc0"
              width="100%"
              height="356"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              allowfullscreen
              loading="lazy"
            ></iframe>

            Note that returning a value will end the function. The code after
            return will be ignored.<br /><br />

            We can return multiple values as tuples. This only exists in
            Python.<br /><br />

            <iframe
              class="embed-responsive-item"
              src="https://trinket.io/embed/python3/6a2291c952"
              width="100%"
              height="356"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              allowfullscreen
              loading="lazy"
            ></iframe>

            TIP: use 'return' without any value after to end the function
            immediately.
          </p>
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h1>pass keyword</h1>
          <p>
            If we do not want to make a function that does nothing, use the
            'pass' keyword.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/80ed8ae473"
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
    </div>

    <QuadSpace />

    <BeforeNextButton flink="function" slink="specialvariable" />

    <QuadSpace />

    <div class="quiz">
      <h1>퀴즈 풀기!</h1>

      <hr />

      <br /><br />

      <h3>
        Assume that the code 'pass' is inside doThis(). What happens when we run
        doThis() 100 times?
      </h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) pass is printed 100 times </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) pass is printed 50 times </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) Nothing is printed </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) Error </label>
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
  name: 'FunctionHardPage',
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
