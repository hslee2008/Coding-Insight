<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h1>File Reading</h1>
        <p>
          Let's make a file named text.txt that has 'Python is fantastic'
          message inside.<br /><br />

          Now, let's try to read the text inside that file using Python.<br /><br />

          In open() function, we first have to put in the full path of text.txt
          and the mode we are going to open it with.<br /><br />

          The mode should be 'r' which is short for 'reading'.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg"
          width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="50" title="File Reading"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>read()</h1>
        <p>
          read() method gives us ALL the text inside that file.<br /><br />

          <code>
            mainFile = open("text.txt", "r")<br /><br />

            print(mainFile.read()) #Python is fantastic
          </code>
        </p>
      </div>
    </div>
    <iframe
      class="embed-responsive-item"
      src="https://trinket.io/embed/python3/3504e68139"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>readline()</h1>
        <p>
          Readline reads the lines one by one.<br /><br />

          Using for loop, we can read each line.<br /><br />

          <code>
            mainFile = open("text.txt", "r")<br /><br />

            print(mainFile.readline()) #Python is fantastic
          </code>
        </p>
      </div>
    </div>
    <iframe
      class="embed-responsive-item"
      src="https://trinket.io/embed/python3/bf9f60d731"
      width="60%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>readlines()</h1>
        <p>
          readline() is very similar to readlines().<br /><br />

          However, readlines read the nth line while readline() reads the
          current line one by one.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/8d79bcebaa"
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
        <h1>readable()</h1>
        <p>
          To check whether our file can be read using Python, we can use
          readable() method.<br /><br />

          If the file is readable, return True and False if otherwise.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/a301fbf34c"
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

    <NaviBtn flink="file" slink="filewriting" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'FileReading',
};
</script>
