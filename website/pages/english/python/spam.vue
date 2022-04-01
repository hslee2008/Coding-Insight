<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>Spam Email</h2>
        <p>
          This project is for spamming your friends and families with Python.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://www.incimages.com/uploaded_files/image/empty-email_463770.gif"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="Python" num="85" title="Spam Email" />

    <div class="text-center">
      <h2>Preparation</h2>
    </div>
    <p>
      We first have to download smtplib and ssl module using PIP to use email
      service.<br /><br />

      <code> pip install smtpllib & pip install ssl </code>

      First, we have to connect our computer to SMTPD server which sends
      email.<br /><br />

      Run the following code.<br /><br />

      <code> python -m smtpd -c DebuggingServer -n localhost:1025 </code>

      We first have to let Python login to our google gmail account.<br /><br />

      Go to Google Account
      <a href="https://myaccount.google.com/lesssecureapps">setting</a>
      and click on allow.<br /><br />

      Make sure you are not using not underage account.
    </p>

    <QuadSpace />

    <iframe :src="`${trinket}7747ffbfd7`" width="100%" height="356" />

    <QuadSpace />

    <Navigation bef="coroutine" aft="autozoom" />
  </div>
</template>

<script>
  export default {
    page: 'SpamPage',
  };
</script>
