<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>Compressing Files</h2>
        Compressing a file will decrease the size it.<br /><br />

        How is this possible?
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="65" title="zlib"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>How compressing files work</h2>
        <p>
          Sometimes, there are tons of repeating words in sentence.<br /><br />

          <code>
            And miles to go before I sleep, and miles to go before I sleep.
          </code>

          miles, to, go, before, I, sleep is repeated twice.<br /><br />

          What would happen if we made a dictionary of these repeating
          digits?<br /><br />

          <code>
            {<br />
            "miles": 0,<br />
            "to": 1,<br />
            "go": 2,<br />
            "before": 3,<br />
            "I": 4,<br />
            "sleep": 5<br />
            }
          </code>

          Using the dictionary above, we can make a new sentenec below that will
          take much less space.<br /><br />

          <code> And 0 1 2 3 4 5, and 0 1 2 3 4 5. </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>Zlib Module</h2>
        <p>
          Zlib module will compress any data you give it into a shorter version
          using dictionary.<br /><br />

          Zlib is short for ZIP COMPRESSION LIBRARY.<br /><br />

          Let's import zlib first.<br /><br />

          <code> import zlib </code>
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="https://en.terminalroot.com.br/assets/img/cppdaily/zlib.png"
          width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>ZLIB - compress string</h2>
        <p>
          Let's try compressing strings.<br /><br />

          <code>
            import zlib<br /><br />

            mainString = b"And miles to go before I sleep, and miles to go
            before I sleep."<br />
            print(len(mainString))<br /><br />

            compressedString = zlib.compress(mainString)<br />
            print(len(comprssedString))
          </code>

          1. Firstly, we imported zlib.<br />
          2. Then, we made our byte string(b should be in front of string) and
          logged the length<br />
          3. Finally, we compressed the string and logged the length again.<br /><br />

          If we run the code above, the number 63 and 44 is printed to the
          console.<br /><br />

          Like this, our string with length of 63 became 44 with one single line
          of code.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/74a9209480"
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
        <h2>ZLIB - set level</h2>
        <p>
          There are 0 to 9 levels in compressing.<br /><br />

          0 - lowest. No compression at all<br />
          1 - almost no compression at all but very fast.<br />
          ...<br />
          9 - almost everything is compressed and a bit slow.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/50ab5d6ef3"
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
        <h2>ZLIB - decompress</h2>
        <p>
          We can use the decompress() method to decompress copressed strings.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/c42b0b500e"
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

    <NaviBtn bef="mapandreduceandfilter" aft="decorator" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'ZLibPage',
};
</script>
