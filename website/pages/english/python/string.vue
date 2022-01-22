<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h1>What is string?</h1>
        <p>
          String all symbols that makes human language.<br /><br />

          For example, 'A' and 'B' is called a string in programming
          language.<br /><br />

          To make a string in Python, put symbols inside '' or "".<br /><br />

          Note that even though numbers are inside '' or "", they are regarded
          as strings.
        </p>
      </div>
    </div>

    <br /><br />

    <Header-en num="8" title="String"></Header-en>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>Multi - line string</h1>
        <p>
          What would you do if there were lots and lots of lines to print?<br /><br />

          Try printing Harry Potter and the Sorcerer's Stone to the console.<br /><br />

          Nightmare.<br /><br />

          <code>
            THE BOY WHO LIVED M r. and Mrs. Dursley, of number four, Privet
            Drive, were proud to say that they were perfectly normal, thank you
            very much. They were the last people you’d expect to be involved in
            anything strange or mysterious, because they just didn’t hold with
            such nonsense.<br />
            Mr. Dursley was the director of a firm called Grunnings, which made
            drills. He was a big, beefy man with hardly any neck, although he
            did have a very large mustache. Mrs. Dursley was thin and blonde and
            had nearly twice the usual amount of neck, which came in very useful
            as she spent so much of her time craning over garden fences, spying
            on the neighbors. The Dursleys had a small son called Dudley and in
            their opinion there was no finer boy anywhere.
          </code>

          However, there is rather very simple solution to this problem. Use
          """""" and ''''''. In """ and ''', we can make new lines. However,
          using '' or "", we cannot.
        </p>
      </div>

      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python/7c86f7328a"
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
        <h1>String indexing</h1>
        <p>
          Indexing is when choosing a specific point in a string.<br /><br />

          For example, we can use the following code to print the first alphabet
          of 'Hello'.<br /><br />

          <iframe
            class="embed-responsive-item"
            src="https://trinket.io/embed/python3/c826f990bd"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          ></iframe
          ><br /><br />

          The number after [] is called index.<br /><br />

          If we look closely, we see that we used '0' instead of '1' to find the
          FIRST index of string.<br /><br />

          First is 0, second is 1, third is 2 and so on.<br /><br />

          This interesting fact will be explained in the 'list' chapter.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>String start backward</h1>
        <p>
          Using -1 starts from backward.<br /><br />

          <code>
            a = "Hello"<br /><br />

            # H E L L O<br />
            # 0 1 2 3 4<br />
            # -5 -4 -3 -2 -1<br /><br />

            print(a[-1])
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/048c09e858"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>String print from x to y</h1>
        <p>
          To print from range x to y, we can use ':' between index. From index x
          (first number) to y - 1 (not include second number) is returned.<br /><br />

          Note that if we do not define first and second index, Python will
          interpret it as 0.<br /><br />

          So, using [:] will print everything.
        </p>

        <iframe
          class="embed-responsive-item"
          src="https://trinket.io/embed/python3/e1cdc9760f"
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
        <h1>Reverse string</h1>
        <p>
          To reverse string, use [::-1].<br /><br />

          ::-1 is short for 0:0:-1.<br /><br />

          The last number is the step of indexing. Step means the distance
          between each index.<br /><br />

          Using -1 means starting backward and moving to forward.<br /><br />

          In other words, it prints the string backward.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/751018529e"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="comment" slink="stringmethod1"></BeforeNextButton>

    <QuadSpace />

    <div class="quiz">
      <h1>Solve This Quiz!!</h1>

      <hr />

      <br /><br />

      <h3>What is not a syntax we can use for declaring strings in Python?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) !string! </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) "string" </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) [string] </label>
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

      <h3>How can we make multi - line string in Pyton?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) ?string? use </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) #string use </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) """ string """ use </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) (string) use </label>
      </div>

      <br /><br />

      <h3>What index can we use to print the third alphabet of "Hello"?</h3>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-A"
          value="A"
        />
        <label for="question-3-answers-A">A) 0 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-B"
          value="B"
        />
        <label for="question-3-answers-B">B) 1 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-C"
          value="C"
        />
        <label for="question-3-answers-C">C) 2 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-3-answers"
          id="question-3-answers-D"
          value="D"
        />
        <label for="question-3-answers-D">D) 3 </label>
      </div>

      <br /><br />

      <h3>In the 4 code bellow, which has the wrong syntax?</h3>

      <div>
        <input
          type="radio"
          name="question-4-answers"
          id="question-4-answers-A"
          value="A"
        />
        <label for="question-4-answers-A">A) a[1:3] </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-4-answers"
          id="question-4-answers-B"
          value="B"
        />
        <label for="question-4-answers-B">B) a[:4] </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-4-answers"
          id="question-4-answers-C"
          value="C"
        />
        <label for="question-4-answers-C">C) a[:] </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-4-answers"
          id="question-4-answers-D"
          value="D"
        />
        <label for="question-4-answers-D">D) a[] </label>
      </div>

      <br /><br />

      <h3>What is the right index to get the last index of string?</h3>

      <div>
        <input
          type="radio"
          name="question-5-answers"
          id="question-5-answers-A"
          value="A"
        />
        <label for="question-5-answers-A">A) 0 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-5-answers"
          id="question-5-answers-B"
          value="B"
        />
        <label for="question-5-answers-B">B) -1 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-5-answers"
          id="question-5-answers-C"
          value="C"
        />
        <label for="question-5-answers-C">C) -2 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-5-answers"
          id="question-5-answers-D"
          value="D"
        />
        <label for="question-5-answers-D">D) -0 </label>
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
  name: 'StringPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-C').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-C').checked) {
        alert('3 ✔️!');
      } else {
        alert('3 ❌');
      }
      if (document.getElementById('question-4-answers-D').checked) {
        alert('4 ✔️');
      } else {
        alert('4 ❌');
      }
      if (document.getElementById('question-5-answers-B').checked) {
        alert('5 ✔️ :o');
      } else {
        alert('5 ❌');
      }
    },
  },
};
</script>
