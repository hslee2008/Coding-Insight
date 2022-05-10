<template>
  <div>
    <Header type="Python" num="79" title="Request Method" />

    <div>
      <div>
        <h2>Status</h2>
        <p>
          Using the status_code property, we can figure out the status of our
          request.<br /><br />

          <code v-highlight class="python"> print(a.status_code) </code>

          If 200 is printed, the request is a success.<br /><br />

          Note that all the status code can be read on
          <a
            :aria-label="allink"
            href="https://www.restapitutorial.com/httpstatuscodes.html"
            >Status Code</a
          >
          <br /><br />

          To check whether the request succeeded or not, use the 'ok' property
          and check whether it is True or False.<br /><br />

          <code v-highlight class="python"> print(a.ok) </code>
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}ae32425775`"
      height="356"
      loading="lazy"
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
      title="Trinket Python"
      :src="`${trinket}30fb5ba090`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="request" aft="dundermethod" />
  </div>
</template>

<script>
  export default {
    page: 'RequestMethodPage',
  };
</script>
