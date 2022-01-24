<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>What is GTTS?</h1>
        <p>
          GTTS is a module that let's us record an audio file containing the
          words the computer spoke.<br /><br />

          Let's try to make the computer speak whatever we want!<br /><br />

          First, let's install gtts by running the following command.<br /><br />

          <code> pip install gtts </code>
        </p>
      </div>

      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="92" title="gTTS"></Header-en>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>gTTs Command</h1>
        <p>
          Open a new terminal and run the following command.<br /><br />

          <code> gtts-cli 'hello' --output hello.mp3 </code>

          If we run the command above, a new file named hello.mp3 will be
          made.<br /><br />

          Now, let's run hello.mp3 file and you will hear the computer say
          'hello'.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3KdHlOrP57mvh0acecpA8XLZeSJSWODuxg&usqp=CAU"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Python</h1>
        <p>
          Now, let's try making computer speak in Python file.<br /><br />

          <code>
            from gtts import gTTS<br /><br />

            tts = gTTS('Python is awsome', lang="en")<br />
            tts.save("hello.mp3")
          </code>

          We made an audio file using gTTS() and saved it in our computer using
          tts.save().
        </p>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="pandas" slink="finished" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'GttsPage',
};
</script>
