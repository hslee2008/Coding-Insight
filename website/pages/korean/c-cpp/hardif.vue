<template>
  <div>
    <Header type="C/C++" title="조건문 (자세히)" num="16" />

    <div>
      <div>
        <h2>if - else</h2>
        <p>
          else는 만일 if 안에 있는 조건이 옳지 않다면 실행할 코드를 담는
          곳입니다.<br /><br />

          만일 if 안에 있는 조건이 옳다면 else 안에 있는 코드는 실행하지 않을
          것입니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;int score = 100;<br /><br />

            &nbsp;&nbsp;if (score == 100) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("와!!! 100점!!!");<br />
            &nbsp;&nbsp;} else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("흠... 아이스크림 먺지
            못하내...");<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZT`" height="300px" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>else-if</h2>
        <p>
          시험 점수에서 또 다른 조건을 넣겠습니다.<br /><br />

          만일 시험 점수가 100이라면 아이스크림을 먺을 수 있습니다.<br />
          하지만 시험 점수가 100이 아니고 50 이상이면 공부를 더 해야합니다.<br />
          마지막으로 50보다 적으면 게임을 1달동안 못합니다.<br /><br />

          먼저, 점수가 100인지 확인하고 그렇다면 '아이스크림'을
          출력하겠습니다.<br />
          10점이 아니고 50 이상이여야 하니 else 문 안에 또 다른 if 문을
          넣겠습니다.<br />
          마지막으로, else문 안에 있는 if문에 else문을 달아 50보다 적으면
          '게임x'를 출력하겠습니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;int score;<br />
            &nbsp;&nbsp;scanf("%d", &score);<br /><br />

            &nbsp;&nbsp;if (score == 100) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("Ice cream!!!");<br />
            &nbsp;&nbsp;} else {<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;if (score >= 50) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Study more!");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;} else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("No games for a month
            :(");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        이렇게 계속 else문 안에 많은 조건문을 넣다보면 매우 복잡하게 됩니다.<br /><br />

        else 문 안의 if문과 같은 else if 문은 if 문의 조건이 틀렸다면 else if
        문의 조건을 확인합니다.<br /><br />

        <code v-highlight class="cpp">
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;int score;<br />
          &nbsp;&nbsp;scanf("%d", &score);<br /><br />

          &nbsp;&nbsp;if (score == 100) {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("Ice cream!!!");<br />
          &nbsp;&nbsp;} else if (score >= 50) {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("Study more!");<br />
          &nbsp;&nbsp;} else {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("No games for a month :(");<br />
          &nbsp;&nbsp;}<br /><br />

          &nbsp;&nbsp;return 0;<br />
          }
        </code>

        <div class="ma-auto">
          <iframe :src="`${jdoodle}3VZO`" height="300px" />
        </div>
      </div>
    </div>

    <Navigation bef="if" aft="switch" />
  </div>
</template>
