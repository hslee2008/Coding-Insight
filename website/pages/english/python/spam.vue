<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>Spam Email</h2>
        <p>
          This project is for spamming your friends and families with Python.
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://www.incimages.com/uploaded_files/image/empty-email_463770.gif"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="85" title="Spam Email"></Header-en>

    <QuadSpace />

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

    <iframe
      class="embed-responsive-item"
      src="https://trinket.io/embed/python3/7747ffbfd7"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
    />

    <QuadSpace />

    <NaviBtn bef="coroutine" aft="autozoom" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'SpamPage',
};
</script>
