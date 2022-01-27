<template>
  <div>
    <br />

    <div>
      <div>
        <h1>Why should we put codes in one line?</h1>
        <p>
          Some computers are very slow.<br /><br />

          It might be necessary to care about performance of your program/app.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header-en num="38" title="Code in oneline"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>; Semicolon</h1>
        <p>
          In other programming languages such as JavaScript, there is
          ';'(semicolon) to seperate code.<br /><br />

          It exists in Python, but it is uncommon.<br /><br />

          For example, let's look at the code below.<br /><br />

          <code>
            print("Hello", end=" ")<br />
            print("World")
          </code>

          The code above is equal to the code below.<br /><br />

          <code> print("Hello", end=" "); print("World") </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/724bf9a522"
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
        <div>
          <h1>More explanation</h1>
          <p>
            In Python, semicolons are purely optional.<br /><br />

            You can use it and not use it.<br /><br />

            It does not make a single difference.<br /><br />

            Note: you can also put semicolons after each code.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/ca6f756679"
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
    </div>

    <QuadSpace />

    <NaviBtn flink="while" slink="etcfunction" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'OnelinerPage',
};
</script>
