<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>string.h</h2>
        <p>
          string.h는 라이브러리 이름입니다.<br /><br />

          라이브러리란 특별한 기능을 담고 있는 파일을 뜻합니다.<br /><br />

          그 라이브러리의 파일 안에서 특별한 함수를 가지고 와서 사용할 수
          있습니다.<br /><br />

          가지고 오려면 #include &lt;>를 사용해서 &lt;> 안에 라이브러리 이름을
          넣습니다.<br /><br />

          <code>#include &lt;string.h></code>
        </p>
      </div>
      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="C/C++" title="문자열 라이브러리" num="26" />

    <div>
      <div>
        <h2>문자열 붙이기</h2>
        <h3>strcat()</h3>

        문자열 a에 문자열 b를 붙이기 위해서 strcat() 함수를 사용할 수
        있습니다.<br /><br />

        strcat(string, secondString) 형태로 string 변수의 값 뒤에 secondString
        변수의 값을 붙입니다.<br /><br />

        secondString은 변수가 아닌 문자열이어도 됩니다.<br /><br />

        <code>
          char str[99];<br /><br />

          strcpy(str, "Hello, World!");<br /><br />

          puts(str);
        </code>

        <h3>strncat()</h3>

        strncat은 strcat()과 비슷하지만 한 변수에 다른 변수의 문자열(길이가
        제한되어 있습니다)을 붙입니다.<br /><br />

        strncat(string, secondString, x) 형태로 string에 secondString의
        x번째에서 끊어서 붙입니다.<br /><br />

        <code>
          char strs[99] = "Hello ";<br />
          char secStr[99] = "World";<br /><br />

          strncat(strs, secStr, 5);<br /><br />

          puts(strs);
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gl"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자열 길이 구하기</h2>
        <p>
          strlen(string) 형태로 string 문자열의 길이를 알 수 있습니다.<br /><br />

          <code> printf("%d", strlen("C is awsome")); </code>

          참고로 공백 포함입니다.
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gm"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="string" aft="2darr" />
  </div>
</template>
