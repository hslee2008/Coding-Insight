<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is class?</h2>
        <p>
          Think of a situation where you want to create multiple files with same
          format (e.g. letter writing style format).<br /><br />

          Then, you copy the style containg it and write letters.<br /><br />

          In this example, the origin file can be called 'template' and in
          Python terms, it is a 'class'.<br /><br />

          Class is a template code.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/725e856cf1"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <Header-en type="Python" num="46" title="Class" />

    <div>
      <div>
        <h2>Creating class</h2>
        <p>
          For example, if we are planning on creating multiple dictionaries
          about cars that has same keys, we can make a class instead.<br /><br />

          In dictionaries, you have to make same keys all the time.<br /><br />

          With class, create one class then declare them seperatley.<br /><br />

          <code>
            class MyCar:<br />
            &nbsp;model_name = QWE_123
          </code>

          To make a car, use 'new classname()' code.<br /><br />

          <code>
            myCar = new MyCar()<br />
            print(myCar.model_name) #QWE_123
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>__init__()</h2>
        <p>
          The example above is very similar to a dictionary.<br /><br />

          However, classes are much more than a simple data type for storing
          information.<br /><br />

          To make a real class, declare the __init_\_() function inside
          class.<br /><br />

          In the example above, we need to access variables inside classes like
          dictionaries with keys.<br /><br />

          In the example below, we can put in information between () when
          declaring.<br /><br />

          <code>
            class Person:<br />
            &nbsp;def __init__(self, name, age, gender):<br />
            &nbsp;&nbsp;self.name = name<br />
            &nbsp;&nbsp;self.age = age<br />
            &nbsp;&nbsp;self.gender = gender<br /><br />

            p1 = Person("Hyunseung", 12, "Male")<br /><br />

            print(p1.name)
          </code>

          To use __init_\_(),<br />
          1. Declare __init_\_() function inside the class<br />
          2. Make sure that the first parameter of __init_\_() function is
          'self'<br />
          3. Put in the information you will gather about a person<br />
          4. Put 'self.variable = variable' code inside the function<br />
          5. When declaring a new class, put in the information in order
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Functions inside class</h2>
        <p>
          The difference from class and dictionaries are not simply __init__()
          functions.<br /><br />

          Classes can have functions inside them.<br /><br />

          The best thing is, the function has access to all the previously
          declared self.variables.<br /><br />

          To use the self variable, try 'self.variablename'.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a1a4151531"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>self</h2>
        <p>
          When creating variables inside class, using self as containers will be
          better for management.<br /><br />

          Note that if you want to use self variables inside functions, you have
          to put in 'self' as the first parameter.<br /><br />

          Furthoremore, self does not need to be 'self'. It can be 'abc' or
          'python' or anything as long as all the self is same.<br /><br />

          <code>
            class Person:<br />
            &nbsp;def __init__(abc, name, age, gender):<br />
            &nbsp;&nbsp;abc.name = name<br />
            &nbsp;&nbsp;abc.age = age<br />
            &nbsp;&nbsp;abc.gender = gender<br /><br />

            &nbsp;def printTheName(abc):<br />
            &nbsp;&nbsp;print(abc.name)<br /><br />

            p1 = Person("Hyunseung", 12, "Male")<br /><br />

            p1.printTheName()
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="regex" aft="classmethod" />
  </div>
</template>
