<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h2>What is variable?</h2>
        <p>
          A variable in programming language is a place where you can store
          information.<br /><br />

          For example, think of a box. It can contain anything that fits into
          it.<br /><br />

          A variable is very similar to a box.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://mblogthumb-phinf.pstatic.net/20140319_89/leedahee111_1395209827273qETWy_JPEG/lights-cubes-3D--1573013-1920x1080.jpg?type=w2"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="5" title="Variable"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>Declare variable</h2>
        <p>
          To declare a variable in Python, we can use the following syntax.<br /><br />

          <code> NAME = DATA </code>

          In the syntax above, NAME is the name of the variable and DATA is the
          value of the variable.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/a5d980683b"
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
        <h2>Using variable</h2>
        <p>
          You can use the value of the variable by using the name of it without
          "".<br /><br />

          <code>
            name = "John"<br /><br />
            print(name)
          </code>

          In Python, the lower and uppercase of the variable name matters. NAME
          and name is different.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Variable name rules</h2>
        <p>
          There are three rules in variable names.<br /><br />

          1. Only alphabets, numbers and _ is allowed<br />
          2. The first letter of variable name should not be a number<br />
          3. You cannot use certain names like (yield, return) - this group is
          called keywords
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Change variable value</h2>
        <p>To change the variable's value, simply type in a new value.</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/ddd8867b8c"
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

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://wallpaperaccess.com/full/3279871.jpg"
          max-width="300px"
        />
      </div>
      <div>
        <h2>Delete variable</h2>
        <p>
          We can delete variables to preserve more space.<br /><br />

          Simply use del keyword to delete name.<br /><br />

          <code>
            name = "Coding-Insight"<br />
            del name<br />
            print(name)
          </code>

          If we run the code above, we get an error.<br /><br />

          We are trying to print a variable that does not exist.<br /><br />
        </p>
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>Declare multiple variables at once</h2>
        <p>
          To declare mutiple variable and assign multiple values, use commas to
          seperate names and values left and right side of '='.<br /><br />

          <code>
            a, b, c = 1, 2, 3<br />
            print(a)
          </code>

          To assign single value to multiple variable, line them up and put
          value at the end.<br /><br />

          <code>
            a = b = c = d = e = "alphabet"<br /><br />

            print(a)<br />
            print(b)<br />
            print(c)
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="io" aft="madlib" />

    <QuadSpace />

    <div class="quiz">
      <h2>Solve This Quiz!!</h2>

      <v-divider />

      <br /><br />

      <h3>What is variable?</h3>
      <div>
        <input
          id="question-1-answers-A"
          type="radio"
          name="question-1-answers"
          value="A"
        />
        <label for="question-1-answers-A"
          >A) A) A place where you can store data
        </label>
      </div>
      <div>
        <input
          id="question-1-answers-B"
          type="radio"
          name="question-1-answers"
          value="B"
        />
        <label for="question-1-answers-B"
          >B) Input and Output combined is called a variable
        </label>
      </div>
      <div>
        <input
          id="question-1-answers-C"
          type="radio"
          name="question-1-answers"
          value="C"
        />
        <label for="question-1-answers-C">C) Changing number </label>
      </div>
      <div>
        <input
          id="question-1-answers-D"
          type="radio"
          name="question-1-answers"
          value="D"
        />
        <label for="question-1-answers-D">D) Other </label>
      </div>
      <br /><br />
      <h3>How do we declare variable in Python?</h3>
      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) value = variable name </label>
      </div>
      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) value == variable name </label>
      </div>
      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) variable name == value </label>
      </div>
      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) variable name = value </label>
      </div>
      <br /><br />
      <h3>Which one goes against the rule of variable names in Python?</h3>
      <div>
        <input
          id="question-3-answers-A"
          type="radio"
          name="question-3-answers"
          value="A"
        />
        <label for="question-3-answers-A">A) hello </label>
      </div>
      <div>
        <input
          id="question-3-answers-B"
          type="radio"
          name="question-3-answers"
          value="B"
        />
        <label for="question-3-answers-B">B) hello! </label>
      </div>
      <div>
        <input
          id="question-3-answers-C"
          type="radio"
          name="question-3-answers"
          value="C"
        />
        <label for="question-3-answers-C">C) hello_world </label>
      </div>
      <div>
        <input
          id="question-3-answers-D"
          type="radio"
          name="question-3-answers"
          value="D"
        />
        <label for="question-3-answers-D">D) hello123 </label>
      </div>
      <br /><br />
      <h3>How do we change variable's value in Python?</h3>
      <div>
        <input
          id="question-4-answers-A"
          type="radio"
          name="question-4-answers"
          value="A"
        />
        <label for="question-4-answers-A">A) variable name = value </label>
      </div>
      <div>
        <input
          id="question-4-answers-B"
          type="radio"
          name="question-4-answers"
          value="B"
        />
        <label for="question-4-answers-B">B) variable name == value </label>
      </div>
      <div>
        <input
          id="question-4-answers-C"
          type="radio"
          name="question-4-answers"
          value="C"
        />
        <label for="question-4-answers-C">C) value = variable name </label>
      </div>
      <div>
        <input
          id="question-4-answers-D"
          type="radio"
          name="question-4-answers"
          value="D"
        />
        <label for="question-4-answers-D">D) value == variable name </label>
      </div>
      <br /><br />
      <h3>How do we delete variables?</h3>
      <div>
        <input
          id="question-5-answers-A"
          type="radio"
          name="question-5-answers"
          value="A"
        />
        <label for="question-5-answers-A">A) del </label>
      </div>
      <div>
        <input
          id="question-5-answers-B"
          type="radio"
          name="question-5-answers"
          value="B"
        />
        <label for="question-5-answers-B">B) del() </label>
      </div>
      <div>
        <input
          id="question-5-answers-C"
          type="radio"
          name="question-5-answers"
          value="C"
        />
        <label for="question-5-answers-C">C) delete </label>
      </div>
      <div>
        <input
          id="question-5-answers-D"
          type="radio"
          name="question-5-answers"
          value="D"
        />
        <label for="question-5-answers-D">D) delete() </label>
      </div>
      <br /><br />
      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>Check Answer
      </v-btn>
    </div>

    <QuadSpace />

  </div>
</template>

<script>
export default {
  name: 'VariablePage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-D').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-B').checked) {
        alert('3 ✔️!');
      } else {
        alert('3 ❌');
      }
      if (document.getElementById('question-4-answers-A').checked) {
        alert('4 ✔️');
      } else {
        alert('4 ❌');
      }
      if (document.getElementById('question-5-answers-A').checked) {
        alert('5 ✔️ :o');
      } else {
        alert('5 ❌');
      }
    },
  },
};
</script>
