<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>How to use datetime module</h2>
        <p>
          Let's fetch datetime module first.<br /><br />

          <code> import datetime </code>
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://i.pinimg.com/736x/2e/91/54/2e9154e47f8ee83671518361c96fc1d4.jpg"
          max-width="200px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="43" title="Date"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>The date and time right now</h2>
        <p>
          To get the date and time right now, use the datetime.datetime.now()
          method.<br /><br />

          The format will be: 'yyyy-mm-dd hh:mm:ss'.<br /><br />

          <code>
            import datetime<br /><br />

            print(datetime.datetime.now())
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/437df64da8"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>hour, minute, second and milisecond</h2>
        <p>
          To get each of hour, minute, second and milisecond, ues the strftime()
          method.<br /><br />

          <code>
            import datetime<br /><br />

            rightNow = datetime.datetime.now()<br />
            print(rightNow.strftime("%H")) #Hour in 24 format (0~23)
          </code>

          If we put in "%H" in strftime() function, we get the hour in 24-hour
          format.<br /><br />

          If you want 12 hour format, put in '%I'.<br /><br />

          Using 12 hour format might be confusing because you do not know
          whether it is A.M. or P.M. A.M. and P.M. can be found with '%p'.<br /><br />

          Minute is '%M', second is '%S' and milisecond is '%f'.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/d0f4e3cc48"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Week, date, and year</h2>
        <p>
          To find the name of today, use '%A'.<br /><br />

          The month name such as June and January can be found with '%B'.<br /><br />

          Using "%Y", we can find the full year in yyyy format (e.g. 2022).
        </p>
      </div>
    </div>

<QuadSpace />

    <NaviBtn bef="hacking" aft="random" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'DatePage',
};
</script>
