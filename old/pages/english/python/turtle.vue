<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>What is Turtle?</h2>
        <p>We use Turtle for drawing and making simple games.</p>
      </div>
      <div>
        <GlobalImage
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="Python" num="90" title="Turtle" />

    <div>
      <div>
        <h2>Preparing Turtle</h2>
        <p>
          Turtle is a module.<br /><br />

          Let's first fetch the turtle module.<br /><br />

          When you are making Python file, do not name it turtle(because Python
          will import from your file instead of turtle file).<br /><br />

          <code v-highlight class="python"> import turtle as turty </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Get started with Turtle</h2>
        <p>
          Turtle needs to have a screen to move on.<br /><br />

          Use the getscreen() method to show the screen.<br /><br />

          <code v-highlight class="python">
            import turtle as turty<br /><br />

            turty.getscreen()
          </code>

          Now, let's try making a turtle(character) in that window using the
          Turtle() method.<br /><br />

          <code v-highlight class="python">
            import turtle as turty<br /><br />

            mainTurty = turty.Turtle()
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <h2>Moving turtle</h2>
      <div>
        <h2>forward, backward, right, left</h2>

        When we first ran the function Turtle(), a turtle-shaped character
        popped on screen.<br /><br />

        Use the forward() and backward() to move the turtle.<br /><br />

        Furthermore, if you want to turn the turtle, use the right() & left()
        method then put in the degree.<br /><br />

        <code v-highlight class="python">
          import turtle as turty<br /><br />

          mainTurty = turty.Turtle()<br /><br />

          mainTurty.right(90) #Right 90 degrees<br />
          mainTurty.forward(90) #Move front 90 pixel<br />
          mainTurty.left(90) #Left 90 degrees<br />
          mainTurty.backward(90) #Move back 90 pixel
        </code>

        Note that rt() can be used instead of right(), fd() instead of
        forward(), lt() instead of left() and finally, bk() instead of
        backward().<br /><br />

        <h2>x, y coordinate</h2>

        We can use the goto() method to move turtle to a specific x and y
        coordinate.<br /><br />

        <code v-highlight class="python">
          import turtle as turty<br /><br />

          mainTurty = turty.Turtle()<br /><br />

          mainTurty.goto(100, 100)
        </code>

        Furthermore, use the home() methdo to go to the center of you screen.<br /><br />

        Note that you can also use the setpos(), setposition() method to move
        turtle to specific place.<br /><br />

        <code v-highlight class="python">
          import turtle as turty<br /><br />

          mainTurty = turty.Turtle()<br /><br />

          mainTurty.goto(444, 444)<br />
          mainTurty.setpos(444, 444)<br />
          mainTurty.setposition(444, 444)<br /><br />

          mainTurty.home()
        </code>

        Use setx() and sety() function to move turtle to specific x and y
        coordinate.<br /><br />

        <code v-highlight class="python">
          import turtle as turty<br /><br />

          mainTurty = turty.Turtle()<br /><br />

          mainTurty.setx(444)<br />
          mainTurty.sety(444)
        </code>

        <h3>Turtle Direction</h3>

        You can set the angle the turtle will be looking at by using the
        setheading() or seth() method.<br /><br />

        <code v-highlight class="python">
          import turtle as turty<br /><br />

          mainTurty = turty.Turtle()<br /><br />

          mainTurty.setheading(180) #look at 180 degree
        </code>
      </div>
    </div>

    <Navigation bef="mouse" aft="pandas" />
  </div>
</template>

<script>
  export default {
    page: 'TurtlePage',
  };
</script>
