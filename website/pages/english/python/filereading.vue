<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>File Reading</h2>
        <p>
          Let's make a file named text.txt that has 'Python is fantastic'
          message inside.<br /><br />

          Now, let's try to read the text inside that file using Python.<br /><br />

          In open() function, we first have to put in the full path of text.txt
          and the mode we are going to open it with.<br /><br />

          The mode should be 'r' which is short for 'reading'.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg"
          width="300px"
        />
      </div>
    </div>

    <Header type="Python" num="50" title="File Reading" />

    <div>
      <div>
        <h2>read()</h2>
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
      :src="`${trinket}3504e68139`"
      width="100%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readline()</h2>
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
      :src="`${trinket}bf9f60d731`"
      width="60%"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readlines()</h2>
        <p>
          readline() is very similar to readlines().<br /><br />

          However, readlines read the nth line while readline() reads the
          current line one by one.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}8d79bcebaa`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readable()</h2>
        <p>
          To check whether our file can be read using Python, we can use
          readable() method.<br /><br />

          If the file is readable, return True and False if otherwise.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}a301fbf34c`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="file" aft="filewriting" />
  </div>
</template>
