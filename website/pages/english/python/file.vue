<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>What is File Handling?</h2>
        <p>
          In Python, it is very easy to read, write, append, create and delete
          files.<br /><br />

          In input & output Python page, we learned how to write to files using
          the print() function.<br /><br />

          However, there are much more to it than simply writing to files.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg"
          width="300px"
        />
      </div>
    </div>

    <Header-en type="Python" num="49" title="File" />

    <div>
      <div class="ma-auto">
        <h2>File Path</h2>
        <p>
          File path is the adress of your file in your computer.<br /><br />

          To copy your file path, go to VSCode and click right of your mouse on
          a file and click the button 'copy path'.
        </p>
      </div>
      <GlobalImage
        alt="python-factory-picture"
        class="img-fluid"
        src="https://image-loader-coding-insight.web.app/py-en/img/filepath.jpg"
        max-width="400px"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Opening and Closing Files</h2>
          <p>
            We can use open() function to open our files.<br /><br />

            Then, we will handle that file.<br /><br />

            Finally, we always have to close the file by running close()
            method.<br /><br />

            Otherwise, errors might occur.
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/5755f85207"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="math" aft="filereading" />
  </div>
</template>

<script>
  export default {
    name: 'FilePage',
    head: () => ({
      title: 'File',
    }),
  };
</script>
