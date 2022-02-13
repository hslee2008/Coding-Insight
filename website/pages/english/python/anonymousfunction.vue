<template>
  <div>
    <QuadSpace />

    <Header-en type="Python" num="33" title="Anonymous Function"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>What is Anonymous Function?</h2>
        <p>
          Anonymous function is a type of function that does not have a name.<br /><br />

          In another word, anonymous functions are created and used right away
          while normal functions are created for later use.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Lambda</h2>
        <p>
          To declare anonymous functions,<br /><br />

          1. type in the 'lambda' keyword<br />
          2. insert parameters with commas<br />
          3. insert ':'<br />
          4. Put in the return value<br /><br />

          <code>
            def runThis(a):<br />
            &nbsp;a(6)<br /><br />

            x = runThis(lambda a: 10*a)<br /><br />

            print(x)
          </code>

          If you have more than 1 parameter, put in ','(Comma) between the
          parameter.<br /><br />

          <code>
            def runThis(a):<br />
            &nbsp;a(6)<br /><br />

            x = runThis(lambda a: 10*a)<br /><br />

            print(x)
          </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/ad432c8141"
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

    <NaviBtn bef="type" aft="for" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'AnonymousFunctionPage',
};
</script>
