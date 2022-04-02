<template>
  <div>
    <Header type="C/C++" title="연산자" num="11" />

    <div>
      <div>
        <h2>기본 연산자</h2>
        <p>
          +, -, *, /를 사용하면 더하기, 빼기, 곱하기, 나누기를 할 수
          있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br /><br />

            &nbsp;printf("%d", 2 + 2);<br />
            &nbsp;printf("%d", 2 - 2);<br />
            &nbsp;printf("%d", 2 * 2);<br />
            &nbsp;printf("%d", 2 / 2);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZw`" width="100%" height="300" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>할당 연산자</h2>
        <p>
          할당 연산자란 어떤 숫자에 연산을 한 후 연산한 값을 그 변수 안에 넣는
          작업입니다.<br /><br />

          원래는 연산을 하면 그 변수는 바뀌지 않지만 할당 연산자는 새로운 값을
          그 변수 안에 저장합니다.<br /><br />

          예를 들면, a += 2는 원래 a 값에 2를 더하고 그 값을 a 안에
          저장합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;int a = 2;<br /><br />

            &nbsp;a += 2;<br />
            &nbsp;a -= 2;<br />
            &nbsp;a *= 2;<br />
            &nbsp;a /= 2;<br /><br />

            &nbsp;printf("%d", a);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZx`" width="100%" height="300px" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>기타 연산자</h2>
        <p>
          ++을 사용하면 1을 증가시키고 --를 사용하면 1이 감소됩니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;int a = 2;<br /><br />

            &nbsp;a++;<br /><br />

            &nbsp;printf("%d", a);<br /><br />

            &nbsp;a--;<br /><br />

            &nbsp;printf("%d", a);<br /><br />

            &nbsp; return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3VZy`" width="100%" height="300px" />
      </div>
    </div>

    <Navigation bef="typecasting" aft="comment" />
  </div>
</template>
