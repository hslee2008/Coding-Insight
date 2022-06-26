<template>
  <div>
    <div>
      <h2>반복문</h2>
      <p>
        여러분, 0부터 9까지 가장 빠르게 출력하는 방법이 있을까요?<br /><br />

        - 0부터 9까지 하나하나 다 출력합니다.<br />
        - 0부터 9까지 변수를 만들어서 출력합니다.<br />
        - 0에서 시작하는 변수를 만들어서 하나씩 늘려가며 9까지 출력합니다.<br /><br />

        "반복문을 이용합니다!!!"<br /><br />

        (정답!)<br /><br />

        일정한 규칙을 가지게 되는 작업은 반복문을 사용하면 효율적이고 쉽게 다룰
        수 있습니다.
      </p>
    </div>

    <Header type="C/C++" title="FOR 반복문" num="18" />

    <div>
      <div class="ma-auto">
        <h2>for 반복문의 원리</h2>
        <p>
          1. 변수를 만든다.<br /><br />
          2. 변수의 값이 일정한 범위 내에 있는지 확인하고 그렇지 않다면
          넘어간다.<br /><br />
          3. 만일 변수의 값이 일정한 조건에 해당된다면 for 반복문 안에 있는
          코드를 실행합니다.<br /><br />
          4. 변수의 값을 크게 만들거나 작게 만든다.<br /><br />
          5. (1)로 돌아가고 작업을 계속 반복합니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-for-Loop.png"
          max-width="400px"
          style="border-radius: 5px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>for 반복문 기본 형태</h2>
        <p>
          for (변수; 조건; 변수 바뀌는 양) {}의 형태입니다.<br /><br />

          변수 - 이 부분에는 변수를 선언합니다. 변수는 사용할 패턴입니다 (예:
          int i = 0)<br /><br />
          조건 - 이 부분에는 어디까지 변수가 늘어나거나 줄어들어야 하는지
          입력하는 부분입니다. (예: i &lt; 10)<br /><br />
          변수 바뀌는 양 - 얼머나 변수가 바뀔 것인지 입력합니다. 조심하세요!
          잘못하다 무한 반복문을 만들 수 있습니다. (예: i++ - for 반복문 안의
          코드를 실행하고 1씩 증가)<br /><br />
          그리고 변수, 조건, 바뀌는 양은 항상 ';' 를 사이에 두어야 합니다.
          (마지막에는 넣으면 안됩니다!)<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;for (int i = 0; i &lt; 10; i++) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d\n", i);<br />
            &nbsp;&nbsp;}<br /><br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3YLR`"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수를 미리 선언하기</h2>
        <p>
          for 반복문은 매우 효율적이고 사람이 읽기도 편합니다. 하지만 많이 느릴
          수 있습니다.<br /><br />

          그 이유는 상황에 따라 반복하는 양이 다르기 때문에 많으면 많을수록 더
          시간이 오래 걸립니다.<br /><br />

          이에 대하여 우리가 할 수 있는 것은 변수를 미리 선언하는 방법입니다.<br /><br />

          미리 선언하면 for 반복문을 처음 시작할 때 만들지 않아도 되니 조금 더
          빠릅니다.<br /><br />

          그리고 i의 값을 for반복문 전에 지정하면 처음(변수 부분)은 없애도
          됩니다. ';'만 사용하세요.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int i;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;for (i = 0; i &lt; 10; i++) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d\n", i);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;int k = 0;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;for (; k &lt; 10; k++){<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d\n", i);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3YLS`"
          height="300px"
        />
      </div>
    </div>

    <Navigation bef="switch" aft="while" />
  </div>
</template>
