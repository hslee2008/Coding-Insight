<template>
  <div>
    <QuadSpace />

    <Header-en type="Python" num="79" title="Request Method"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>Status</h2>
        <p>
          Using the status_code property, we can figure out the status of our
          request.<br /><br />

          <code> print(a.status_code) </code>

          If 200 is printed, the request is a success.<br /><br />

          Note that all the status code can be read on
          <a href="https://www.restapitutorial.com/httpstatuscodes.html"
            >Status Code</a
          ><br /><br />

          To check whether the request succeeded or not, use the 'ok' property
          and check whether it is True or False.<br /><br />

          <code> print(a.ok) </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/ae32425775"
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
        <h2>Header</h2>
        <p>
          Header is explanation for the request. You can make your own header
          during the request.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/30fb5ba090"
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

    <NaviBtn bef="request" aft="dundermethod" />
  </div>
</template>

<script>
export default {
  page: 'RequestMethodPage',
};
</script>
