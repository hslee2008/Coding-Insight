<template>
  <div>
    <br />

    <div>
      <Header-en num="37" title="While Loop"></Header-en>

      <QuadSpace />

      <div>
        <div>
          <h2>What is while loop?</h2>
          <p>
            Simply put, while loops is a loop that repeats the code inside if a
            certain statement is true.<br /><br />

            If that statement becomes false, while loop stops.<br /><br />

            However, you have to be careful with while loops because you can
            create an infinite loop accidently.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/496fc82d74"
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
          <div>
            <h2>Using While Loop</h2>
            <p>
              The following is an example of while loop.<br /><br />

              <code>
                a = 5<br /><br />

                while a != 0: #if a is not 0<br />
                &nbsp;print(a) #print the value of a<br />
                &nbsp;a -= 1 #minus one from a
              </code>

              Because while loops are statements, you have to indent the code
              that will belong inside while loop.<br /><br />

              Becareful because you do not want to create a loop like the
              following.<br /><br />

              <code>
                a = 5<br /><br />

                while a != 0: #if a is not 0<br />
                &nbsp;print(a) #print the value of a<br />
                &nbsp;a += 1 # add one from a
              </code>

              If you actually ran this in the Python runner box or your
              computer, press <kbd>ctrl+c</kbd> to stop.
            </p>
          </div>
        </div>

        <iframe
          class="embed-responsive-item"
          src="https://trinket.io/embed/python3/9aef21b34d"
          width="50%"
          height="500"
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
          <h2>break 문</h2>
          <p>
            break statement BREAKS the while or for loop and end it immediately.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/d35c515f41"
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
          <h2>for v.s. while</h2>
          <p>
            In Python, using <mark>for loops</mark> are better thhat while loops
            in most occasions.<br /><br />

            1. Only use while loops if you don't know when to end the loop.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="forfunction" aft="oneliner" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'WhilePage',
};
</script>
