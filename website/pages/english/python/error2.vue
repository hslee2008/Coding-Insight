<template>
  <div>
    <br />

    <Header num="62" title="Error"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>Error messge in try - except</h1>
        <p>
          We can get the error message(what the error is about) in Python using
          the 'as' keyword after 'except'.<br /><br />

          <code>
            try:<br />
            &nbsp;a()<br />
            except NameError as ERR:<br />
            &nbsp;print(ERR)
          </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/92021ab319"
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
        <h1>Making your own error</h1>
        <p>
          In Python, it is very easy to make our own errors.<br /><br />

          Running 'raise Exception()' and putting error message inside
          parenthesis will raise a new error.<br /><br />

          This method is best with 'try - except' clause.<br /><br />

          <code>
            x = -1<br /><br />

            if x < 0:<br />
            &nbsp;raise Exception("Hmmm... 🐛 exists. X should not be smaller
            than 0.")
          </code>

          If you want to make a specific error, put the name of the error
          instead of 'Exception' .
        </p>
      </div>
    </div>
    <iframe
      class="embed-responsive-item"
      src="https://trinket.io/embed/python3/3b349d82a6"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>Remake errors</h1>
        <p>
          Simply put 'from variable' after exception which will re-make or
          re-raise the error.<br /><br />

          <code>
            try:<br />
            &nbsp;a()<br />
            except NameError as ERR:<br />
            &nbsp;raise Exception("hmmm...") from ERR
          </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/dbdf0c2a5e"
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

    <NaviBtn flink="error" slink="logging" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'Error2Page',
};
</script>
