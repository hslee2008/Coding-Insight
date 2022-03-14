<template>
  <div>
    <Header-en type="Python" num="27" title="If Master"></Header-en>


    <div>
      <div>
        <h2>Simple If Statement</h2>
        <p>
          Sometimes, with all the if, elif, else and indentation, if statement
          can be a bit confusing.<br /><br />

          Howwever, using this syntax, it simplifies if statement into one
          single line.<br /><br />

          <code> if a > b: print("as is greater than b") </code>

          In if-else statement has the following syntax: (statement is True) if
          (satement) else (statement is False).<br /><br />

          <code>
            a = 2<br />
            b = 5<br /><br />

            print("A") if a > b else print("B")
          </code>

          if-elif-else statement just have extra 'else (second if is True) if
          (second if)' line between simple if-else statement.<br /><br />

          <code>
            a = 3320<br />
            b = 312330<br />
            print("A") if a > b else print("=") if a == b else print("B")
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/73c3356df0"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div style="padding: 10px">
          <h2>Switch</h2>
          <p>
            Other programming languages such as JavaScript has unique and useful
            syntax called siwtch.<br /><br />

            We can use switch to compare values. Switch statements are simply if
            statements that uses '==' to compare.<br /><br />

            However, switch statement does not exist in Python.<br /><br />

            Therefore, we have to use another way.<br /><br />

            <code>
              x = input("type in either a or b: ")<br /><br />

              a = {<br />
              "a": "Chose a",<br />
              "b": "Chose b"<br />
              }.get(x, "Wrong")<br /><br />

              print(a)
            </code>

            We will be getting the key from dictionary a.<br /><br />

            If x is equal to "a", the value of dictionary a will be "Chose
            a".<br /><br />

            On the otherhand, if x is "b", "Chose b" will be printed.<br /><br />

            If x does not exist in keys of a, "Wrong" will be printed to the
            console.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/42bf09e347"
          width="100%"
          height="356"
          loading="lazy"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Indentation</h2>
        <p>
          Indentation is when you make an extra space before the first alphabet
          of the parahraph so that the reader will recognize it is the start.<br /><br />

          <code> &nbsp;Start of paragraph. blablablablabla... </code>

          In Python, if you want a code to be inside a syntax (e.g. if
          statement), you HAVE to indent.<br /><br />

          Otherwise, Python will raise an indentation error or think the code is
          outside of if statement.<br /><br />

          <code>
            if 1==1:<br />
            &nbsp;print('testing')<br />
            print("this is not running in if statement")
          </code>

          The second print is not in if statement because it is not indented.
        </p>
      </div>
    </div>

    <br /><br /><br />

    <NaviBtn bef="if" aft="password-safe" />
  </div>
</template>

<script>
export default {
  page: 'IfMasterPage',
};
</script>
