<template>
  <div>
    <br /><br />

    <div>
      <h2>What is madlibs?</h2>
      <p>
        Madlibs is a simple game.<br /><br />

        Make a paragraph with few blank spaces for other people to write in
        themselves without knowing the full story.<br /><br />

        Overall, the story will be funny because it wion't make senes.<br /><br />

        Let's make this game using Python!
      </p>
    </div>

    <Header-en type="Python" num="Proj - 1" title="Madlibs Game" />

    <div>
      <h2>How?</h2>
      <p>
        These are the steps to create madlibs game using python.<br /><br />

        1. Make a paragraph with few blank spaces (ex. Roses are ___)<br />
        2. Using input() we will get the word user chooses<br />
        3. Next, we will insert the new words into the sentence.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>1. Making the parapgraph with blank spaces</h2>
      In <var>sentence</var>, we will put in the following sentence: "Roses are
      ?. Violets are ?. And I like ?."<br /><br />

      <code> sentence = "Roses are {}. Violets are {}. And I like {}." </code>

      {} is the blank space. We will fill in, later.<br /><br />

      <h2>2. Get input</h2>
      We will get total of 3 inputs from user.<br /><br />

      <code>
        fw = input("Adjective: ")<br />
        sw = input("Adjective: ")<br />
        tw = input("Person name: ")
      </code>

      <h2>3. Fill in the blank</h2>
      The format() method will put in the blank space swith the inputs we got
      from user ony by one from left to right.<br /><br />

      <code> finish = sentence.format(fw, sw, tw) </code>

      Now, the sentence will be "Roses are {first word here}. Violets are
      {second word here}. And I like {third word here}." <br /><br />

      <h2>4. Printing the output</h2>
      Now, print <var>finish</var> variable which contains our final output<br /><br />

      <code> print(finish) </code>
    </div>

    <QuadSpace />

    <div>
      <h2>Check out the code</h2>

      <iframe
        src="https://trinket.io/embed/python3/af48f9c529"
        width="100%"
        height="356"
      />
    </div>

    <QuadSpace />

    <Navigation bef="variable" aft="datatype" />
  </div>
</template>
