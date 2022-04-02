<template>
  <div>
    <Header num="62" title="Error" />

    <div>
      <div>
        <h2>Error messge in try - except</h2>
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
      :src="`${trinket}92021ab319`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>Making your own error</h2>
        <p>
          In Python, it is very easy to make our own errors.<br /><br />

          Running 'raise Exception()' and putting error message inside
          parenthesis will raise a new error.<br /><br />

          This method is best with 'try - except' clause.<br /><br />

          <code>
            x = -1<br /><br />

            if x &lt; 0:<br />
            &nbsp;raise Exception("Hmmm... 🐛 exists. X should not be smaller
            than 0.")
          </code>

          If you want to make a specific error, put the name of the error
          instead of 'Exception' .
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}3b349d82a6`"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>Remake errors</h2>
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
      :src="`${trinket}dbdf0c2a5e`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="error" aft="logging" />
  </div>
</template>
