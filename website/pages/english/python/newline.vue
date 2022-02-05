<template>
  <div>
    <br />

    <div>
      <div>
        <h2>Problem</h2>
        <p>
          If we open up Python IDLE and try to type in an if statement, it is
          very hard.<br /><br />

          This is because we have to think about indentation.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header num="69" title="New Line"></Header>

    <QuadSpace />

    <div>
      <div>
        <h2>\</h2>
        <p>
          So, if we put a backslash after boolean statement, the next line
          automatically goes inside the if statement.<br /><br />

          <code>
            if 1 == 1:\<br />
            print("1 is equal to 1")
          </code>

          If indentation is difficult and hard to follow, simply use '\'.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/b6c75a2237"
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

    <NaviBtn bef="pythondecorator" aft="asynchronous" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'NewLinePage',
};
</script>
