<template>
  <div>
    <div>
      <div>
        <h2>수학</h2>
        <p>
          오늘은 C 언어의 math.h 라이브러리 대해서 알아보겠습니다.<br /><br />

          준비:<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br />
            #include &lt;math.h>
          </code>
        </p>
      </div>
    </div>

    <Header type="C/C++" title="math.h 라이브러리" num="46" />

    <div>
      <div>
        <h2>거듭제곱</h2>
        <p>
          pow는 power의 약자로 거듭제곱을 뜻합니다.<br /><br />

          거듭제곱이란 어떤 수(x)를 여러번 곱한 값을 뜻합니다.<br /><br />

          예를 들면, x의 3제곱은 x를 3번 곱하는 것으로 x*x*x입니다.<br /><br />

          pow(a, b) 함수를 사용하면 a의 b제곱을 double 형태로 되돌려 줍니다<br /><br />

          (그래서 printf에서는 %lf를 사용하세요!).<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br />
            #include &lt;math.h><br /><br />

            int main () {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%lf\n", pow(2, 3));<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}4836`" height="300" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>거듭제곱근</h2>
        <p>
          거듭제곱근이란 a를 여러번 곱해서 x가 될 때 x의 거듭제곱근을 a라고
          합니다.<br /><br />

          예를 들면, 8의 3제곱근은 어떤 수를 3번 곱해서 8이 되어야 하니까
          2입니다.<br /><br />

          거듭제곱근은 거듭제곱의 반대이고 pow(2, 3)에서 3 대신 1/3으로 하면
          3제곱근을 계산할 수 있습니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br />
            #include &lt;math.h><br /><br />

            int main () {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%lf\n", pow(8, 1/3));<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}4839`" height="300" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>제곱근</h2>
        <p>
          제곱근은 어떤 수를 2번 곱해서 다른 수가 될 때 어떤 수를 뜻합니다.<br /><br />

          예를 들면, 2의 제곱은 4이고 4의 제곱근은 어떤 수를 2번 곱할 때 그
          수이니까 2입니다.<br /><br />

          제곱근은 sqrt() 함수를 사용해서 쉽고 계산할 수 있습니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br />
            #include &lt;math.h><br /><br />

            int main () {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%lf\n", sqrt(4));<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}483e`" height="300" />
      </div>
    </div>

    <QuadSapce />

    <div>
      <div>
        <h2>절댓값</h2>
        <p>
          x의 절댓값이란 x와 0 사이의 길이입니다.<br /><br />

          다시 말하자면, x가 0보다 작다면 -1을 곱하고 그렇지 않다고 그대로 놓은
          값을 절댓값이라고 합니다.<br /><br />

          예를 들면, -1의 절댓값은 1이고 1의 절댓값은 1입니다.<br /><br />

          C 언어에서 절댓값은 fabs() 함수를 사용해서 찾을 수 있습니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br />
            #include &lt;math.h><br /><br />

            int main () {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a = -1;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;printf("%lf", fabs(a));<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}483i`" height="300" />
      </div>
    </div>

    <Navigation bef="stopprogram" aft="file" />
  </div>
</template>
