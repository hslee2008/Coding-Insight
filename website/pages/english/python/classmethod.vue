<template>
  <div>
    <br />

    <div
      style="display: flex; border-radius: 5px"
      class="img-div"
    >
      <div class="mx-auto">
        <h1>Inheritence</h1>
        <p>
          Inheritence means to pass down something from above.<br /><br />

          In Python, inheritence is when a class inherit the variables and
          functions from another class.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://pbs.twimg.com/profile_images/502406972453289985/AKdzcXPi.png"
          width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="47" title="Class Method"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Python Inheritence</h1>
        <p>
          To get the content of a class, put (classname) after the class
          name.<br /><br />

          However, we can only get functions and variables inside class, not the
          variables inside self.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/e0b362c25c"
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
        <div>
          <h1>Solve the problem</h1>
          <p>
            To get the self variables, use Person.__init__(self, name, age,
            gender).
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/8e1797ce82"
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
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>super()</h1>
        <p>
          Everything above can be solved with one single line of code:
          super().__init__().
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/e9f98d6de4"
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
          <h1>attribute</h1>
          <p>
            Here are ways to make, change, or delete self variabels outside of
            class.<br /><br />

            setattr(classvariable, selfvariable, newvalue) changes the
            attribute.<br /><br />

            hasattr(classvariable, selfvariable) checks whether classvariable
            has selfvariable.<br /><br />

            delattr(classvariable, selfvariable) will erase the self variable.
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/45cfee23ee"
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

    <NaviBtn flink="class" slink="math" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ClassMethodPage',
};
</script>
