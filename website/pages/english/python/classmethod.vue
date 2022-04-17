<template>
  <div>
    <div>
      <h2>Inheritence</h2>
      <p>
        Inheritence means to pass down something from above.<br /><br />

        In Python, inheritence is when a class inherit the variables and
        functions from another class.
      </p>
    </div>

    <Header type="Python" num="47" title="Class Method" />

    <div>
      <div>
        <h2>Python Inheritence</h2>
        <p>
          To get the content of a class, put (classname) after the class
          name.<br /><br />

          However, we can only get functions and variables inside class, not the
          variables inside self.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}e0b362c25c`" height="356" loading="lazy" />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Solve the problem</h2>
          <p>
            To get the self variables, use Person.__init__(self, name, age,
            gender).
          </p>
        </div>
        <iframe :src="`${trinket}8e1797ce82`" height="356" loading="lazy" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>super()</h2>
        <p>
          Everything above can be solved with one single line of code:
          super().__init__().
        </p>
      </div>
      <iframe :src="`${trinket}e9f98d6de4`" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>attribute</h2>
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
    <iframe :src="`${trinket}45cfee23ee`" height="356" loading="lazy" />

    <Navigation bef="class" aft="math" />
  </div>
</template>
