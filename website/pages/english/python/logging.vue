<template>
  <div>
    <br /><br />

    <h2>What is logging?</h2>
    <p>
      If there is a problem with a Pyton program and you might want to know what
      is going on.<br /><br />

      In this situation, you can insert a logging statement which will print the
      value of the variable value to the console.<br /><br />

      Logging can tell us about what is going on with our variables.<br /><br />

      We have to import logging first in order to use special log method.<br /><br />

      But first, we have to set the log file where our loggings will be stored.
    </p>

    <code>
      import logging<br /><br />

      logging.basicConfig(filename="log.log")
    </code>

    <Header type="Python" num="63" title="Logging" />

    <div>
      <div>
        <h2>INFO</h2>
        <p>
          info is short for information.<br /><br />

          logging.ingo() method will print a value to the log file.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}9d4fc4880a`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>WARNING</h2>
        <p>
          logging.warning() method is for warning the devlopers about something.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}6c1c71f7fd`"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>ERROR and EXCEPTION</h2>
        <p>
          logging.error() is for logging error messages if something went
          wrong.<br /><br />

          <code>
            import logging<br /><br />

            logging.error("You are too smart!")
          </code>

          Exception is very similar to error but a bit different.<br /><br />

          Exception is when a variable value went wrong.<br /><br />

          <code>
            import logging<br /><br />

            logging.exception("you cannot use this number because it is not
            allowed.")
          </code>
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}f9687df6a4`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="error2" aft="mapandreduceandfilter" />
  </div>
</template>

<script>
  export default {
    page: 'LoggingPage',
  };
</script>
