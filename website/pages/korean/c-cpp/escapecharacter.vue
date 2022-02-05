<template>
  <div>
    <br />

    <div>
      <h2>이스케이프 문자란?</h2>
      <p>
        이스케이프 문자란 C 언어에서 특별한 기능을 가진 문자들을 그 기능 없이 그
        문자만 출력하고 싶을 때 사용합니다.
      </p>
    </div>

    <QuadSpace />

    <Header title="이스케이프 문자" num="14" />

    <QuadSpace />

    <div>
      <div>
        <h2>%출력하기</h2>
        <p>
          %는 타입을 알려주는데 사용합니다. %만 사용하여 출력하면 에러가
          생깁니다.<br /><br />

          %를 출력하고 싶다면 %%를 "" 안에 넣으면 출력은 %가 됩니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;printf("%%");<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZC"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>\ 출력하기</h2>
        <p>
          \는 이스케이프 문자에서 자주 사용됩니다.<br /><br />

          그래서 \는 특별한 기능을 가지고 있어 다른 방법을 사용해서 출력해야
          합니다.<br /><br />

          \\는 \를 출력합니다.<br /><br />

          참고로 가끔 \ 또는 옆에 있는 그림처럼 보일 때가 있습니다. 둘다
          같습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>새로운 줄 \n</h2>
        <p>
          \n은 새로운 줄을 대신 넣습니다.<br /><br />

          예를 들면, "Hello\nWorld"는 "Hello(새로운 줄)World"와 같습니다.
        </p>
        <code>
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;printf("Hello\nWorld");<br />
          }
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZG"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="grammar" aft="if" />

    <QuadSpace />
  </div>
</template>
