<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is request?</h2>
        <p>
          "I requested a cup of water to the waiter"<br /><br />

          request is a module that brings us information about a specific
          site.<br /><br />

          We can fetch anything from oneline using this module.
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxLF2l2sITXnde-o9OyhTjoPeWHCWLrC2Ry2-FlQVH-aDSQPE1kh02OMA1yT_Yeui3LM&usqp=CAU"
        />
      </div>
    </div>

    <Header-en type="Python" num="78" title="Request" />

    <div>
      <div>
        <h2>Requesting</h2>
        <p>
          Let's try fetching `https://api.github.com/events` data.<br /><br />

          <code>
            import requests<br /><br />

            a = requests.get('https://api.github.com/events')<br /><br />

            print(a)
          </code>

          The get method will fetch the information from the site.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a8fbf8fda2"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>PARAMS</h2>
        <p>
          When logging in to gmail, we use the following link.<br /><br />

          <code>
            https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
          </code>

          Inisde accounts.google.com/signin/v2/indentifier? link, continue is
          https%3A%2F%2Fmail.google.com%2Fmail%2F, service is mail and sacu is
          1, ripe is 1, flowName is GlifWebSignIn, and flowEntry is
          ServiceLogin.<br /><br />

          We can express the link after identifier? into a dictionary.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/3f896f4b27"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Response</h2>
        Response is the return value from the request.<br /><br />

        Let's learn how to handle these responses.

        <h2>TEXT</h2>
        To get the text version of the request, use the 'text' property in
        response.

        <h2>ENCODING</h2>
        We can set the encoding or print the encoding using the 'encoding'
        property.

        <h2>JSON</h2>
        To print in JSON format, use the json() method.
      </div>
      <iframe
        src="https://trinket.io/embed/python3/4751110c8f"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="counter" aft="requestmethod" />
  </div>
</template>

<script>
  export default {
    page: 'RequestPage',
  };
</script>
