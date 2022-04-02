<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>Pandas</h2>
        <p>
          Pandas is a library that can read and analyze data efficiently.<br /><br />

          Python does not have Pandas installed by default, so we will install
          it right now in the terminal.<br /><br />

          <code> pip install pandas </code>
        </p>
      </div>
      <GlobalImage
        class="img-fluid"
        src="data:image/png;base64,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"
      />
    </div>

    <Header type="Python" num="91" title="Pandas" />

    <div>
      <div>
        <h2>Series</h2>
        <p>
          In Pandas, if given an iterable, we can convert that into a table
          humans can easily understand using Series() class.<br /><br />

          First, we have to import pandas first.<br /><br />

          <code>
            import pandas as pd<br /><br />

            s = pd.Series(["A", "B", "C"])<br />
            print(s)
          </code>

          If we run the code above, the following text appears in the
          console.<br /><br />

          <code>
            0 A<br />
            1 B<br />
            2 C<br />
            dtype: object
          </code>

          Furthermore, we can set our own values for index(the numbers appearing
          before each value).<br /><br />

          <code>
            import pandas as pd<br /><br />

            s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third:
            "])<br />
            print(s)
          </code>

          Finally, we can access each value assigned to index using [].<br /><br />

          <code>
            import pandas as pd<br /><br />

            s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third:
            "])<br />
            print(s["First: "])
          </code>
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}ad2ac39772`" width="100%" height="356" />

    <QuadSpace />

    <div>
      <div>
        <h2>DataFrame()</h2>
        <p>
          Using Panda's DataFrame() class, we can make a data of iterable into a
          frame of table.<br /><br />

          In DataFrame(), put in the iterable, column values.
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}f3002f6946`" width="100%" height="356" />

    <QuadSpace />

    <v-row>
      <div>
        <h2>Clipboard</h2>
        <p>
          Cliboard is a place where you store all the copied
          <kbd>ctrl + c</kbd> data.<br /><br />

          By default, Clipboard is turned off in windows.<br /><br />

          1. Press windows+v and click on 'Turn on' to turn on clipboard
          feature.<br />
          2. Next, copy some random words.<br />

          Now, let's try making a code that analyze data from clipboard.<br /><br />

          We can do that easily by using the read_clipboard() method.<br /><br />

          <code>
            import pandas as pd<br /><br />

            print(pd.read_clipboard())
          </code>

          Using to_clipbaord(), we can push our own data to the clipboard.<br /><br />

          <code>
            import pandas as pd<br /><br />

            df = pd.DataFrame([1, 2, 3], [4, 5, 6], columns=['A', 'B', 'C'])<br />
            df.to_clipboard(index = False)
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://t1.daumcdn.net/cfile/tistory/9916724E5D3CD66B19"
          width="300px"
        />
      </div>
    </v-row>
    <iframe :src="`${trinket}f3002f6946`" width="100%" height="356" />

    <QuadSpace />

    <div>
      <div>
        <h2>CSV</h2>
        <p>
          CSV is short for Comma-Seperated Value and it contains datas seperated
          by commas.<br /><br />

          Using Microsoft EXCEL, let's try making our CSV file and printing that
          to the console.<br /><br />

          Simply put in the file path in read_csv().<br /><br />

          <code>
            import pandas as pd<br /><br />

            df = pd.read_csv('data.csv')<br /><br />

            print(df)
          </code>

          When we run the code above, some datas might be shortened out due to
          the length.<br /><br />

          Use the to_string() method to print every single data.<br /><br />

          <code>
            import pandas as pd<br /><br />

            df = pd.read_csv('data.csv')<br /><br />

            print(df.to_string())
          </code>
        </p>
      </div>
      <GlobalImage
        class="img-fluid"
        src="https://image-loader-coding-insight.web.app/py-en/img/csv.jpg"
        max-width="500px"
      />
    </div>

    <iframe :src="`${trinket}7640f07850`" width="100%" height="356" />

    <Navigation bef="turtle" aft="gtts" />
  </div>
</template>

<script>
  export default {
    page: 'PandasPage',
  };
</script>
