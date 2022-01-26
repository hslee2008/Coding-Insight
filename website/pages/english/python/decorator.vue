<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
        />
      </div>
      <div class="mx-auto">
        <h1>What is decorator?</h1>
        <p>
          In our everyday life, decorator is an object that makes another one
          more beautiful.<br /><br />

          In Python, decorators add more functionality to normal functions and
          make them super-function.
        </p>
      </div>
    </div>

    <br /><br />

    <Header-en num="66" title="Decorator"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Decorator examples</h1>
        <p>
          Let's try making a function that calculates the square root of a
          number.<br /><br />

          <code>
            def squareRootOf(a):<br />
            &nbsp;return a ** 0.5
          </code>

          If we insert 4 in that function, 2 comes out.<br /><br />

          However, what will happen when we try putting in a negative number?<br /><br />

          We can try to make an if statement and tell the users that it is not
          possible to find the square root of negative numbers.<br /><br />

          Using if statement can get very messy and hard to read.<br /><br />

          Let's try doing it in a little bit differently.<br /><br />

          <code>
            def minusDecorator(mainFunction):<br />
            &nbsp;def mainFunc():<br />
            &nbsp;&nbsp;func = mainFunction() #now, func do the same thing as
            mainFunction<br />
            &nbsp;&nbsp;toAbsVal = abs(func) #get the absolute value<br />
            &nbsp;&nbsp;return toAbsVal #return that<br /><br />

            &nbsp;return mainFunc # return newe func
          </code>

          Now, if we put in a function that returns negative number, the
          absolute value of that number will be given instead.<br /><br />

          <code>
            def returnVal():<br />
            &nbsp;return -4
          </code>

          The minusDecorator() function above is an example of a decorator.<br /><br />

          Now, let's try using them.<br /><br />

          <code>
            decorate = minusDecorator(returnVal())<br /><br />

            print(squareRootOf(decorate()))
          </code>

          Now, instead of inserting negative number to squareRootOf() function,
          we can insert a function that will return the aboslute value of any
          negative number given.<br /><br />

          However, this method is very hard to understand and complicated.<br /><br />

          Let's try using decorators in a different way.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/867aac4aa9"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>Using Decorator</h1>
        <p>
          We can use the '@' before a function to attach a decorator.<br /><br />

          This way, every time we run returnVal() function, we will get an
          absolute value of -4 instead of getting -4.<br /><br />

          <code>
            @minusDecorator<br />
            def returnVal():<br />
            &nbsp;return -4
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Using more than 2 decorators</h1>
        <p>
          We can stack @ on top of each other in order to make multiple
          decorators attached to our original function.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/659cf1cdb5"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn flink="mapandreduceandfilter" slink="mydecorator" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'DecoratorPage',
};
</script>
