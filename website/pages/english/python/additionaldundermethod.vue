<template>
  <div>
    <br />

    <Header-en num="81" title="Additional Dunder Method"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>__call__() and __mul__()</h1>
        <p>
          Class cannot be ran like a function.<br /><br />

          However, using the __call__() dunder method, we can specify the code
          we want to run.<br /><br />

          The __mul__() dunder method can make us do multiplcation operation on
          that class.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/f57619f30e"
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
        <h1>__len__()</h1>
        <p>
          When the len() function runs on a class, we can specify the code to
          run or value to return.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/686326e052"
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
        <h1>_ & __ difference</h1>
        <p>
          Let's try making a simple class.<br /><br />

          There will be three self variable inside the class, but the second and
          third one will have _ and __ before attached.<br /><br />

          <code>
            clas Person:<br />
            &nbsp;def __init__(self):<br />
            &nbsp;&nbsp;self.test1 = 1<br />
            &nbsp;&nbsp;self._test2 = 2<br />
            &nbsp;&nbsp;self.__test3 = 3
          </code>

          If we have __ before the variable, using the dir() function on that
          class will not show it. Instead, another variable named _Person__test3
          will show(fake variable!). Instead of using __test3, we can use
          _Person__test3. Having '_' before variable will simply hide it without
          changing it's name.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/3b038ad255"
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

    <NaviBtn bef="dundermethod" aft="etcdundermethod" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'AdditionaDunderMethodPage',
};
</script>
