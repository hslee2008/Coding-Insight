<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>mathplotlib</h2>
        mathplotlib = math + plot + libarary<br /><br />

        In another word, matplotlib is a library that controls mathematical
        graph.<br /><br />

        Let's first import matplotlib module.<br /><br />

        <code> import matplotlib </code>

        To print matplotlib version, use the __version__ property.<br /><br />

        <code> print(matplotlib.__version__) </code>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/3e28c18725"
        width="60%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <Header type="Python" title="Matplotlib" num="88" />

    <div>
      <div>
        <h2>Drawing Graph</h2>

        In matplotlib, insert two lists of x and y values in plot() method.<br /><br />

        When you run the Pthon file, a graph will be automatically drawn.<br /><br />

        <code>
          import matplotlib.pyplot as plt<br /><br />

          plt.plot([1, 10], [1, 10])<br />
          plt.show()
        </code>

        pyplot is short for python+plot and it is a sub-module of matplotlib
        module.<br /><br />

        You have to use show() method to actually draw the graph.

        <h2>List Dimension</h2>
        linear equation: 2 lists<br />
        quadratic equation: 3 lists<br />
        ...<br />
        nth equation: n+1 list
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/40b5ec6e62"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <h2>Marker</h2>
      <h2>marker</h2>

      Marker is a character that can be put on a part where the graph bends.<br /><br />

      <code> plt.plot([1, 10, 30], [1, 10, 20], marker="x") </code>

      Put in the character inside marker.<br /><br />

      <h2>string fmt</h2>

      fmt is a group of marker shape, line shape, graph color all combined into
      one.<br /><br />

      The first character is the marker shape.<br />
      The second is the graph shape(line shape) : dotted, - solid, --lined, -.
      line/dot)<br />
      The color of graph.<br /><br />

      <code> plt.plot([1, 10, 20], [1, 24, 44], 'o:r') </code>

      <h2>marker size</h2>

      To specify your marker size, use the ms parameter and insert an
      integer.<br /><br />

      <code> plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30) </code>

      <h2>marker border</h2>

      Specify marker boarder color using mec parameter.<br /><br />

      <code>
        plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r')
      </code>

      mec is short for marker + edge + color.<br /><br />

      <h2>marker color</h2>

      Marker color can be colored with using mfc parameter.<br /><br />

      <code>
        plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r', mfc
        = 'g')
      </code>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/6d6b423f37"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Line</h2>
          <h2>Line style</h2>

          We can set our own line style using the linstyle parameter and typing
          in the name type.<br /><br />

          There are dotted, dotted, dashed, None, dashdot, solid method.<br /><br />

          You can also use ls which is the same thing as linestyle.<br /><br />

          <code>
            plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')
          </code>

          <h2>Line width</h2>

          Line width can be set with linewidth or lw parameter.<br /><br />

          <code> plt.plot([1, 4, 5], [1, 4, 6], linewidth = 3.14159) </code>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Label and title</h2>
          <p>
            Using the xlabel and yabel method, we can set the label for x and
            y.<br /><br />

            The label tells the reader what the graph is about and what unit we
            are using.<br /><br />

            <code>
              plt.xlabel("Time (h)")<br />
              plt.ylabel("Money (w)")
            </code>

            We can also set the entire title of the graph by using the title()
            method.<br /><br />

            <code> plt.title("Money spent") </code>

            Use the fontdict method to insert font style of the title.<br /><br />

            <code>
              font1 = {<br />
              'family': "serif",<br />
              'color': "black",<br />
              'size': 30<br />
              }<br /><br />

              plt.title("Money spent", fontdict = font1)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>scatter</h2>
          <p>
            scatter is basically a group of dots scattered all over the
            graph.<br /><br />

            <code>
              plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])<br />
              plt.show()
            </code>

            Here are all the parameters for scatter() method.<br /><br />

            1. color = "color" --- the color of dots<br />
            2. c = ["red", "green"] --- set each color<br />
            3. s = [1, 2, 4] --- size of each dot<br />
            4. alpha = 0.5 --- transparency (0~1)
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>historgrams</h2>
          <p>You can use the hist() method to draw a histogram.</p>
        </div>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/c4218ab83d"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>pie</h2>
          <p>
            Pie grap is a graph that looks like a pie.<br /><br />

            It is good for show us the percentage of each part of a whole.<br /><br />

            Use the pie() method.<br /><br />

            <code>
              import matplotlib.pyplot as plt<br /><br />

              mylabels = ["Oranges", "Bananas", "Cherries", "Apples"]<br /><br />

              plt.pie([30, 10, 50, 10], labels = mylabels)<br />
              plt.show()
            </code>

            Here are all the following parameters for pie() method:<br /><br />

            1. explode = [0.2, 0, 0] --- the length from middle to the part<br />
            2. shadow = True --- shadow<br />
            3. colors = "colorname" --- color<br />
            4. labels = ["Appple", "Banana"] --- explanation<br /><br />

            legend() is a method that sets the pie chart's title.<br /><br />

            <code>
              plt.pie([50, 30, 20], labels = ["Chrome", "Firefox", "Safari"])<br />
              plt.legend(title = "Three most commonly used browsers")
            </code>
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/074b4c95ef"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <Navigation bef="keyboard" aft="mouse" />
  </div>
</template>

<script>
  export default {
    page: 'MatPlotLibPage',
  };
</script>
