<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>형태 변형이란?</h2>
        <p>
          형태 변형이란 다양한 정보를 다양한 데이터 형태로 나타나게 하는 작업을
          뜻합니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <Header type="C/C++" title="형태 변형" num="10" />

    <div>
      <div>
        <h2>데이터 형태 변형</h2>
        <p>
          데이터 unsigned char 'A'를 char 'A'로 바꾸기 위해<br /><br />

          1. unsigned char 'A' 변수 앞에 (char)을 붙이거나<br />
          2. 다른 변수 char 안에 unsigned char 'A' 변수를 넣는 방법이
          있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;signed char alphabet = 'A';<br />
            &nbsp;char charAlphabet = alphabet;<br /><br />

            &nbsp;printf("%c", (char)alphabet);<br />
            &nbsp;printf("%c", charAlphabet);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}3VZv`" height="300" />
      </div>
    </div>

    <Navigation bef="otherdatatype" aft="operator" />
  </div>
</template>
