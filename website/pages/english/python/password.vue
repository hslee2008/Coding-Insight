<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>Making a login program</h2>
        <p>
          Let's make a login program that prompts the user for password!<br /><br />

          Note that you need to know about
          <NuxtLink aria-label="Go to Coding Insight Page" to="./if"
            >If Statements</NuxtLink
          >
          before you move on. It will all be explained shortly in this page, but
          use the link for future reference.
        </p>
      </div>

      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          max-width="100px"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="Proj: 2" title="Password Program"></Header-en>

    <QuadSpace />

    <div>
      <h2>Program Explanation</h2>
      <p>
        1. We first ask the users for a password<br />
        2. If the input is a real password, we login and we do not otherwise
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>Code Explanation</h2>
      <div>
        1) We ask for the password.<br /><br />
        <code>guess = input("Password Guess: ")</code>
        2. Is it really the real "password"?<br /><br />
        <code>if (guess == "password")</code>
        3. If it is, print "login" and print "not password" otherwise<br /><br />
        <code>
          if guess == "password":<br />
          &nbsp;&nbsp;print("login")<br />
          else:<br />
          &nbsp;&nbsp;print("not password")
        </code>
      </div>
    </div>

    <QuadSpace />

    <h2>Check out the program</h2>
    <iframe
      src="https://trinket.io/embed/python3/78247d771c"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
    />

    <QuadSpace />

    <NaviBtn bef="stringmethod2" aft="escapechar" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'PasswordPage',
};
</script>
`
