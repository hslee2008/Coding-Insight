# mathplotlib

mathplotlib = math + plot + libarary

In another word, matplotlib is a library that controls mathematical graph.

Let's first import matplotlib module.

```
import matplotlib
```

To print matplotlib version, use the __version__ property.

```
print(matplotlib.__version__)
```

# Drawing Graph

In matplotlib, insert two lists of x and y values in plot() method.

When you run the Pthon file, a graph will be automatically drawn.

```
import matplotlib.pyplot as plt

plt.plot([1, 10], [1, 10])
plt.show()
```

pyplot is short for python+plot and it is a sub-module of matplotlib module.

You have to use show() method to actually draw the graph.

## List Dimension

linear equation: 2 lists
quadratic equation: 3 lists
...
nth equation: n+1 list

# Marker

### marker

Marker is a character that can be put on a part where the graph bends.

```
plt.plot([1, 10, 30], [1, 10, 20], marker="x")
```

Put in the character inside marker.

### string fmt

fmt is a group of marker shape, line shape, graph color all combined into one.

The first character is the marker shape.
The second is the graph shape(line shape) : dotted, - solid, --lined, -. line/dot)
The color of graph.

```
plt.plot([1, 10, 20], [1, 24, 44], 'o:r')
```

### marker size

To specify your marker size, use the ms parameter and insert an integer.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30)
```

### marker border

Specify marker boarder color using mec parameter.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r')
```

mec is short for marker + edge + color.

### marker color

Marker color can be colored with using mfc parameter.

```
plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r', mfc = 'g')
```

# Line

### Line style

We can set our own line style using the linstyle parameter and typing in the name type.

There are dotted, dotted, dashed, None, dashdot, solid method.

You can also use ls which is the same thing as linestyle.

```
plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')
```

### Line width

Line width can be set with linewidth or lw parameter.

```
plt.plot([1, 4, 5], [1, 4, 6], linewidth = 3.14159)
```

# Label and title

Using the xlabel and yabel method, we can set the label for x and y.

The label tells the reader what the graph is about and what unit we are using.

```
plt.xlabel("Time (h)")
plt.ylabel("Money (w)")
```

We can also set the entire title of the graph by using the title() method.

```
plt.title("Money spent")
```

Use the fontdict method to insert font style of the title.

```
font1 = {
  'family': "serif",
  'color': "black",
  'size': 30
}

plt.title("Money spent", fontdict = font1)
```

# scatter

scatter is basically a group of dots scattered all over the graph.

```
plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])
plt.show()
```

Here are all the parameters for scatter() method.

1. color = "color" --- the color of dots
2. c = ["red", "green"] --- set each color
3. s = [1, 2, 4] --- size of each dot
4. alpha = 0.5 --- transparency (0~1)

# historgrams

You can use the hist() method to draw a histogram.

```
import matplotlib.pyplot as plt

plt.hist(30, 40, 40, 43)
plt.show()
```

# pie graph

Pie grap is a graph that looks like a pie.

It is good for show us the percentage of each part of a whole.

Use the pie() method.

```
import matplotlib.pyplot as plt

mylabels = ["Oranges", "Bananas", "Cherries", "Apples"]

plt.pie([30, 10, 50, 10], labels = mylabels)
plt.show()
```

Here are all the following parameters for pie() method:

1. explode = [0.2, 0, 0] --- the length from middle to the part
2. shadow = True --- shadow
3. colors = "colorname" --- color
4. labels = ["Appple", "Banana"] --- explanation

legend() is a method that sets the pie chart's title.

```
plt.pie([50, 30, 20], labels = ["Chrome", "Firefox", "Safari"])
plt.legend(title = "Three most commonly used browsers")
```
