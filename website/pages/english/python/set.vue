<template>
  <div>
    <br />

    <div>
      <div>
        <h1>What is set?</h1>
        <p>
          Set is a group of items that satisfies one or more than clear
          condition.<br /><br />

          When I mean by clear, I mean a condition where everybody thinks the
          same way.<br /><br />

          For example, "people above 160cm height, please rise" is very easy to
          follow. On the other hand, "people who are tall, please rise" is
          confusing because one might think themself as tall or small.<br /><br />

          For example, let's try creating a set of students who are taller than
          160cm in class.<br /><br />

          <code> people = {"Elvis", "Taylor", "Michael", "John"} </code>

          Note that sets do not have an order.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/08504670a3"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <br /><br />

    <Header num="24" title="Set"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>Set</h1>
        <p>
          There is no order in set. It might get printed differently everytime.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>Adding items and merging sets</h1>
          <p>
            To add a value to the end of a set, we'll use a function called
            'add'.<br /><br />

            <code>
              tallPeople = {"Random Guy", "Hyunseung", "Mrs. Jone"}<br />
              tallPeople.add("3Einstein")
            </code>

            You can use 'update()' to attach a set to the first one.<br /><br />

            <code>
              tallPeople = {"Einstein", "Isaac", "Tesla"}<br />
              shortPeople = {"I.M Short", "Random Guy"}<br />
              tallPeople.update(shortPeople)
            </code>
          </p>
        </div>
        <iframe
          class="embed-responsive-item"
          src="https://trinket.io/embed/python3/9be0ca57a7"
          width="50%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Removing set values</h1>
        <p>
          Let's remove the item 'red' from the values ​​in the set.<br /><br />

          <code>
            colorSet = {"red", "green", "blue", "orange"}<br />
            colorSet.remove('red')<br /><br />

            print(colorSet)
          </code>

          If the remove method is used and the item 'red' does not exist in a
          certain set, an error occurs. If you want no errors, use the discard
          method.<br /><br />

          <code>
            colorSet = {"red", "green", "blue", "orange"}<br />
            colorSet.discard('black') #colorSet set has not changed.<br /><br />

            print(colorset)
          </code>

          You can use the clear method to clear all the items in the set.<br /><br />

          <code>
            colorSet = {"red", "green", "blue", "orange"}<br />
            colorSet.clear()<br /><br />

            print(colorSet)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/62528e1b44"
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

    <BeforeNextButton flink="tuple" slink="setmethod" />

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!!</h1>

      <hr />

      <br /><br />

      <h3>
        a = {"a", "b", "c", "d", "e"}<br />a.remove("f")<br />print(a)<br /><br />
        What is printed to the console when running the script above?
      </h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) {"a", "b", "c", "d", "e"} </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B"
          >B) {"a", "b", "c", "d", "e", "f"}
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) None </label>
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
  name: 'SetPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-D').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
