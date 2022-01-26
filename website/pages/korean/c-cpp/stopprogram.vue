<template>
  <div>
    <br />

    <div>
      <div>
        <h1>프로그램 멈추기</h1>
        <p>
          C 언어에서는 프로그램을 멈추는 방법이 매우 간단합니다.<br /><br />

          exit()과 abort()를 사용할 수 있습니다.
        </p>
      </div>
    </div>

    <br /><br />

    <Header title="프로그램 중단" num="43" />

    <QuadSpace />

    <div>
      <div>
        <h1>exit()</h1>
        <p>
          exit() 함수를 사용하면 바로 프로그램을 멈출 수 있습니다.<br /><br />

          꼭 0이라는 숫자를 exit() 안에 넣어주세요.<br /><br />

          참고로 exit()는 stdlib.h라이브러리 안에 있습니다.<br /><br />

          <code>
            int a;<br />
            scanf("%d", &a);<br /><br />

            if (a == 0) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;exit(0);<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", a);<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47ZW"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <br /><br />

    <div>
      <div>
        <h1>abort()</h1>
        <p>
          abort()는 stdlib.h 라이브러리 함수입니다.<br /><br />

          abort()는 exit()과 비슷하지만 abort()는 바로 그 자리에서 프로그램을
          중단합니다.<br /><br />

          exit()은 프로그램을 정리하고 끝냅니다.<br /><br />

          <code>
            int a;<br />
            scanf("%d", &a);<br /><br />

            if (a == 0) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;abort();<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", a);<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/480F"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="ctype" slink="math" />

    <QuadSpace />
  </div>
</template>
