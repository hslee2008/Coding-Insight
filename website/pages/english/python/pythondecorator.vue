<template>
  <div>
    <Header num="68" title="Python Decorator" />

    <div>
      <div>
        <h2>@mydecorator</h2>
        <p>
          Let's try making a 'Teacher' class.<br /><br />

          <code>
            class Teacher:<br />
            &nbsp;def __init__(self, name, subjectTeaching):<br />
            &nbsp;&nbsp;self.name = name<br />
            &nbsp;&nbsp;self.subjectTeaching = subjectTeaching<br /><br />

            &nbsp;def name(self):<br />
            &nbsp;&nbsp;return self.name
          </code>

          To access the teacher's name, we have to run the name() function.<br /><br />

          However, if we add @property decorator to the name, the name()
          function can be used with name(sort of like variable) instead.<br /><br />

          <code>
            @property<br />
            &nbsp;def name(self):<br />
            &nbsp;&nbsp;return self.name
          </code>

          Furthermore, we can make a function that sets the self value using
          @selfvariable.setter property.<br /><br />

          <code>
            @name.setter #set name variable to something new<br />
            &nbsp;def name(self, val):<br />
            &nbsp;&nbsp;self.name = val
          </code>

          Finally, we can make a function that deletes a specific self variable
          by using @selfvariable.deleter decorator.<br /><br />

          <code>
            @name.deleter<br />
            def name(self, val):<br />
            &nbsp;print('삭제하겠습니다….)<br /><br />
            &nbsp;del self.name
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>@classmethod</h2>
        <p>
          A property can also become a class method when surrounded by
          @classmethod decorator.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/9e90d8b9d3"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>@staticmethod</h2>
        <p>
          When @staticmethod decorator is added, the function can only be used
          inside the class.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/d00208b10a"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <Navigation bef="mydecorator" aft="newline" />
  </div>
</template>

<script>
  export default {
    page: 'PythonDecoratorPage',
  };
</script>
