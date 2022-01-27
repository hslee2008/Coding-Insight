<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h1>Mouse</h1>
        <p>
          Python has a module named mouse that can help us control our computer
          mouse!<br /><br />

          Very good for pranking friends.<br /><br />

          Run the following command to install mouse.<br /><br />

          <code>pip install mouse</code>

          Now, let's import mouse.<br /><br />

          <code> import mouse as m </code>
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHLIkf7p2IzoQ91r5W7ki5KJoiD4t0oIQQ&usqp=CAU"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="89" title="Mouse"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Mouse click</h1>
        <p>
          We can use the click() method to click either left, right, or middle
          of mouse.<br /><br />

          The middle is same as pressing <kbd>ctrl</kbd> and clicking right.
          <code>
            m.click("left")<br />
            m.click("right")<br />
            m.click("middle")
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <h1>Mouse position</h1>
      <p>
        To get the x and y coordinate of you mouse, use he get_position()
        method.<br /><br />

        <code> print(m.get_position()) </code>
      </p>
    </div>

    <QuadSpace />

    <div>
      <h1>Dragging</h1>
      <p>
        You can drag by using the drag() method.<br /><br />

        Put in the x and y coordinate of starting place and x&y coordinate of
        end place.<br /><br />

        You can also specify the duration.<br /><br />

        <code> m.drag(0, 0, 200, 200, duration=3.0) </code>

        If we run that command right now in VSCode, the window is dragged to 200
        and 200.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h1>Moving mouse</h1>
      <p>
        Simply use the move() method to move the mouse.<br /><br />

        You will move right and top of your mouse by 100.<br /><br />

        <code> b.move(100, 100, duration=3.0) </code>
      </p>
    </div>

    <QuadSpace />

    <div>
      <h1>Scrolling</h1>
      <p>
        Use the scroll() method to scroll up and down.<br /><br />

        If the number is positive, you will move up and a negative number will
        scroll down.<br /><br />

        <code> m.scroll(-2) </code>
      </p>
    </div>

    <QuadSpace />

    <NaviBtn flink="matplotlib" slink="turtle" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MousePage',
};
</script>
