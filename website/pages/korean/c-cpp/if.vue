<template>
  <div>
    <br /><br />

    <div
      style="
        display: flex;
        background-color: #373f46;
        padding: 10px;
        border-radius: 5px;
      "
    >
      <div>
        <h2>조건문이란?</h2>
        <p>
          시험에서 100점 맞으면 아이스크림 사줄게<br /><br />

          이 상황에서 만일 시험 점수가 100점이라면 아이스크림을 사줍니다.<br /><br />

          만일 시험 점수가 100점이면 실행할 코드를 if 문안에 넣을 수 있습니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          width="300px"
        />
      </div>
    </div>

    <Header type="C/C++" title="조건문" num="15" />

    <div>
      <div>
        <h2>조건문 - if</h2>
        <p>
          if (조건) {} 코드의 형태로 만일 조건이 옳다면 (true) {} 안에 있는
          코드들 실행합니다.<br /><br />

          하지만 시험 점수가 100점이 아니면 {} 안에 있는 코드를 실행하지 않고
          넘어갑니다.<br /><br />

          <code>
            #include &lt;stdio.h><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;int score;<br />
            &nbsp;&nbsp;scanf("%d", score);<br /><br />

            &nbsp;&nbsp;if (score == 100) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("ICE CREAM!!!");<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}3VZL`" height="300px" width="100%" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>{} 중괄호 없이 조건문 사용하기</h2>
        <p>
          중괄호 안에 한 줄 코드가 있다면 {} 없이 () 바로 뒤에 붙이는 것도
          가능합니다.<br /><br />

          {}를 생략한다면 복잡한 조건문을 사용할 때 이해하기 더 쉽습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;int score;<br />
            &nbsp;&nbsp;scanf("%d", score);<br /><br />

            &nbsp;&nbsp;if (score == 100) printf("ICE CREAM!!!");<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZO`" height="300px" width="100%" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>조건 수식 연산자</h2>
        <p>
          조건 수식 연산자는 if - else 조건문과 비슷한 형태를 가지고
          있습니다.<br /><br />

          연산자이기 때문에 어떤 변수 안에 조건이 맞다면 특별한 정보를 저장하기
          그렇지 않다면 다른 것을 저장하는 형태를 가지고 있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;int a = (1 == 1) ? 1 : 0;<br /><br />

            &nbsp;&nbsp;printf("%d", a);<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZP`" width="100%" height="300px" />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="escapecharacter" aft="hardif" />
  </div>
</template>
