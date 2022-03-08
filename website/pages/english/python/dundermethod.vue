<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>What is dunder?</h2>
        <p>
          In Context Manager, we learned about __exit__() and __enter__()
          method.<br /><br />

          These are called dunder method.<br /><br />

          Methods that starts with __ and __ is called dunder method (a.k.a.
          magic method)
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://media.istockphoto.com/vectors/magic-wand-line-icon-vector-id1164851035?k=6&m=1164851035&s=612x612&w=0&h=ihapeRsHBDDFTTa7CxId_I5ExnbGrJug8aQEVOOviW4="
          width="300px"
        />
      </div>
    </div>

    <Header-en type="Python" num="80" title="Dunder Method"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>__str__() and __repr__()</h2>
        <p>
          Let's first make a class that does nothing and has nothing.<br /><br />

          <code>
            class Person:<br />
            &nbsp;pass<br /><br />

            a = Person()
          </code>

          Now, let's try printing 'a' or Person().<br /><br />

          <code> print(a) </code>

          We just get a weird string that we cannot understand.<br /><br />

          However, when we print this way, we can specify what to return instead
          of the weird string we saw earlier.<br /><br />

          <code>
            class Person:<br />
            &nbsp;def __init__(self, name):<br />
            &nbsp;&nbsp;self.name = name<br /><br />

            &nbsp;def __str__(self):<br />
            &nbsp;&nbsp;return "A person named " + self.name
          </code>

          Now, if we make a Person() class and print that, we get 'A person
          named yourname'.<br /><br />

          Furthermore, using repr() on that class will return a specific object
          inside the __repr__() dunder method.<br /><br />

          <code>
            class Person:<br />
            &nbsp;def __init__(self, name):<br />
            &nbsp;&nbsp;self.name = name<br /><br />

            &nbsp;def __str__(self):<br />
            &nbsp;&nbsp;return "__str__"<br /><br />

            &nbsp;def __repr__(self):<br />
            &nbsp;&nbsp;return "__repr__"
          </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/f4dfd29f8c"
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
        <h2>__del__()</h2>
        <p>
          We can even delete the class by using 'del' keyword and when we do
          that, we can run a specific code.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/3c64d6b06e"
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
        <h2>__new__()</h2>
        <p>
          When a class is amde, we can run a specific code inside __new__().<br /><br />

          "I am created by you!" is printed.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/5505e2e889"
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

    <NaviBtn bef="requestmethod" aft="additionaldundermethod" />
  </div>
</template>
