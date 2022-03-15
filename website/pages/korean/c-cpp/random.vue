<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>랜덤</h2>
        <p>
          랜덤이라는 것은 무작위로 또는 패턴 없이 행동한다는 뜻입니다.<br /><br />

          랜덤 함수는 stdlib.h 라이브러리 안에 있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br />
            #include &lt;stdlib.h><br />
            #include &lt;time.h>
          </code>

          참고로 time.h라이브러리를 추가하세요!
        </p>
      </div>
    </div>

    <Header type="C/C++" title="랜덤" num="43" />

    <div>
      <div>
        <h2>rand()</h2>
        <p>
          rand() 함수는 무작위로 0부터 2147483647(int의 가장 큰 값) 사이의 수를
          선택합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br />
            #include &lt;stdlib.h><br />
            #include &lt;time.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;srand(time(0));<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", rand());<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47C2"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="arrow" aft="ctype" />
  </div>
</template>
