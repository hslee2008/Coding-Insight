<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>What is madlibs?</h1>
        <p>
          Madlibs is a simple game.<br /><br />

          Make a paragraph with few blank spaces for other people to write in
          themselves without knowing the full story.<br /><br />

          Overall, the story will be funny because it wion't make senes.<br /><br />

          Let's make this game using Python!
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="Proj - 1" title="Madlibs Game"></Header-en>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>How?</h1>
        <p>
          These are the steps to create madlibs game using python.<br /><br />

          1. Make a paragraph with few blank spaces (ex. Roses are ___)<br />>
          2. Using input() we will get the word user chooses<br />
          3. Next, we will insert the new words into the sentence.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://images.saymedia-content.com/.image/t_share/MTc0MjMxNzE1MTE0Mzk1MTMy/thanksgiving-games-for-kids.png"
          max-width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Let's make this game</h1>
        <div style="display: flex; padding: 5px" class="img-div">
          <div style="margin: 5px">
            <h2>1. Making the parapgraph with blank spaces</h2>
            In <var>sentence</var>, we will put in the following sentence:
            "Roses are ?. Violets are ?. And I like ?."<br /><br />

            <code>
              sentence = "Roses are {}. Violets are {}. And I like {}."
            </code>

            {} is the blank space. We will fill in, later.<br /><br />

            <h2>2. Get input</h2>
            We will get total of 3 inputs from user.<br /><br />

            <code>
              fw = input("Adjective: ")<br />
              sw = input("Adjective: ")<br />
              tw = input("Person name: ")
            </code>
          </div>
          <div style="margin: 5px">
            <h2>3. Fill in the blank</h2>
            The format() method will put in the blank space swith the inputs we
            got from user ony by one from left to right.<br /><br />

            <code> finish = sentence.format(fw, sw, tw) </code>

            Now, the sentence will be "Roses are {first word here}. Violets are
            {second word here}. And I like {third word here}." <br /><br />

            <h2>4. Printing the output</h2>
            Now, print <var>finish</var> variable which contains our final
            output<br /><br />

            <code> print(finish) </code>
          </div>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Check out the code</h1>

        <iframe
          src="https://trinket.io/embed/python3/af48f9c529"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="variable" slink="datatype" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MadLibPage',
};
</script>
