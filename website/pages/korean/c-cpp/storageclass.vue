<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>스토리지 클래스란?</h2>
        <p>
          C 언어에서 스토리지 클래스는 일반 변수, 함수, 그리고 매개변수에 추가
          기능을 더합니다.<br /><br />

          일반 변수는 항상 값을 바꿀 수 있지만 스토리지 클래스의 한 종류인
          const를 사용하면 값이 상수(일정하게 된다)가 됩니다.<br /><br />

          C 언어에서 static, const 대해 알아보겠습니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="스토리지 클래스" num="30" />

    <div>
      <div>
        <h2>const</h2>
        <p>
          constant는 한국어로 상수를 뜻합니다.<br /><br />

          상수란 절대로 변하지 않는 값입니다.<br /><br />

          코딩 언어에서도 비슷하게 절대로 값의 변함을 허용하지 않는 변수를
          선언할 때 앞에 붙이는 키워드입니다.<br /><br />

          모르고 값을 바꾸거나 절대로 변함이 없을 변수는 앞에 'const'를
          붙이세요!<br /><br />

          <code> const int a = 0; </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44kK"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <v-alert color="blue-grey" dark dense icon="mdi-school" prominent>
      <h2>지역 변수 & 전역 변수</h2>
      지역 변수는 그 지억(함수)에서만 사용할 수 있는 변수입니다.<br />
      지역 변수는 쉽게 main() 또는 다른 함수 안에서 선언하면 그 함수에서만
      사용이 가능합니다.<br /><br />

      전역 변수는 파일 전체에서 사용할 수 있는 변수입니다.<br />
      전역 변수를 선언하는 방법은 #include 바로 밑에 변수들을 만들면 모든 곳에서
      사용이 가능합니다.
    </v-alert>

    <QuadSpace />

    <div>
      <div>
        <h2>static</h2>
        <p>
          static을 사용하면 함수에서 지역 변수를 사용할 때 전에 있는 값을
          유지하게 만들 수 있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            void doThis() {<br />
            &nbsp;&nbsp;int a = 0;<br />
            &nbsp;&nbsp;a++;<br />
            &nbsp;&nbsp;printf("%d", a);<br />
            }<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;for (int i = 0; i &lt; 5; i++) doThis();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          위의 코드에서는 다 1이 출력됩니다.<br /><br />

          그 이유는 a가 1늘어나도 함수를 다시 실행하면 0으로 바뀌기
          때문입니다.<br /><br />

          a라는 변수는 지역변수이기 때문에 함수 안에서만 사용하니 다시 새로운
          변수가 저번 변수를 덮고 초기화 시킵니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            void doThis() {<br />
            &nbsp;&nbsp;static int a = 0;<br />
            &nbsp;&nbsp;a++;<br />
            &nbsp;&nbsp;printf("%d", a);<br />
            }<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;for (int i = 0; i &lt; 5; i++) doThis();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          이제 처음 코드 앞에 static을 붙이면 1부터 5까지 출력됩니다.<br /><br />

          그 이유는 지역변수이기 때문에 a를 0으로 선언해도 덮지 않고 저번 값에
          계속 더하기 때문입니다.
        </p>
      </div>
      <div style="display: flex; gap: 10px" class="img-div">
        <div>
          <p style="color: red">static을 사용하지 않으면</p>
          <iframe
            src="https://www.jdoodle.com/embed/v0/44la"
            width="600"
            height="500"
          />
        </div>
        <div>
          <p style="color: red">static을 사용하면</p>
          <iframe
            src="https://www.jdoodle.com/embed/v0/44ll"
            width="600"
            height="500"
          />
        </div>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="mainfunction" aft="typedef" />
  </div>
</template>
