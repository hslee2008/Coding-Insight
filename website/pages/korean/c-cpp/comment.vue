<template>
  <div>
    <br /><br />

    <div>
      <h2>주석이란?</h2>
      <p>
        C 언어에서 주석은 프로그램에서 사용된 코드를 이해하기 쉽게 만들어준
        노트입니다.<br /><br />

        예를 들면, printf() 코드가 어떤 기능을 하는지 설명할 때 주석을 사용하여
        나중에 이해하는데 많은 도움을 줄 수 있습니다.
      </p>
    </div>

    <Header type="C/C++" title="주석" num="12" />

    <div>
      <div>
        <h2>주석 - 한 줄</h2>
        <p>
          코드 옆에 노트를 적을 때는 //를 사용합니다.<br /><br />

          // 다음에 있는 모든 문자들은 다 주석 안에 포함이 되고 코드를 실행할 때
          C 언어는 그것을 무시합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;printf("abc"); //prints stuff<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZz"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>주석 - 여러 줄</h2>
        <p>
          //를 사용할 때 그 줄에 있고 // 다음에 있는 문자들만 주석입니다.<br /><br />

          그래서 한 줄 이상이 필요할 때에는 /*와 */를 사용하여 주석을 감싸면
          됩니다.<br /><br />

          /**/ 안에 있는 모든 문자들은 주석입니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;printf("abc");<br /><br />

            &nbsp;/*<br />
            &nbsp;prints stuff<br />
            &nbsp;abc를 출력한다<br />
            &nbsp;...<br />
            &nbsp;*/<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZB"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="operator" aft="grammar" />
  </div>
</template>
