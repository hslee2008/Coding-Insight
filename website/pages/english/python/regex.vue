<template>
  <div>
    <br />

    <div
      style="display: flex; border-radius: 5px"
      class="img-div"
    >
      <div class="mx-auto">
        <h1>What is RegEx?</h1>
        <p>
          RegEx is short for Regular Expression.<br /><br />

          Regular Expression means strings with certain patterns.<br /><br />

          For example, without RegEx, we have to check whether a string contains
          either a or b or c and so on ONE by ONE.<br /><br />

          However, we can do this with one method from module.<br /><br />

          <code> import re </code>
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://cmgcode.com/images/portfolio/regexoff-icon.png"
          width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="45" title="Regex"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>Regex - match()</h1>
        <p>
          Using match() method, we can easily find whether a string starts with
          certain patterns.<br /><br />

          <code>
            import re<br /><br />

            pattern = "123"<br />
            string = "123abc"<br /><br />

            print(re.match(pattern, string).group())
          </code>

          If the code above gives us an error, string variable does not start
          with pattern.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/6b78aaf023"
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
        <div>
          <h1>Regex - search()</h1>
          <p>
            While match() matches the start of a string with substring, search()
            searches globally(every where in string).<br /><br />

            <code>
              import re<br /><br />

              pattern = "123"<br />
              string = "123abc"<br /><br />

              print(re.search(pattern, string).group())
            </code>
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/6d2e182407"
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
        <h1>RegEx Character</h1>
        <p>
          To actually use regex, use the following regex characters.<br /><br />

          1. `[a-b]` - alphabet from range a to b<br />
          2. `[abc]`: a, b, or c.<br />
          3. `[^abc]`: except for a, b, and c.<br />
          &nbsp;. -- any character: `"h."` can be ha, hb, hc, ... hz.<br />
          &nbsp;^ -- words starting with: `"^hello"`: whether the word starts
          with 'hello'<br />
          &nbsp;$ -- words ending with: `"$hello"`: whether the word ends with
          'hello'
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="dice" slink="class" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'RegexPage',
};
</script>
