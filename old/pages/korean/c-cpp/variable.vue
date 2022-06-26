<template>
  <div>
    <div>
      <div>
        <h2>변수란?</h2>
        <p>
          상자에 다양한 물건을 담을 수 있습니다.<br /><br />

          휴지, 머리핀 등을 상자 안에 넣은 후 나중에 쉽게 상자 안에 있는
          아이템을 꺼내서 사용할 수 있습니다.<br /><br />

          변수란 상자와 비슷하게 나중에 쉽게 바꾸고, 삭제하고, 사용하게
          만들어주는 저장소를 뜻합니다.
        </p>
      </div>
      <div>
        <GlobalImage
          src="https://mblogthumb-phinf.pstatic.net/20140319_89/leedahee111_1395209827273qETWy_JPEG/lights-cubes-3D--1573013-1920x1080.jpg?type=w2"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="C/C++" title="변수 - 기본" num="5" />

    <div>
      <div>
        <h2>변수 선언하기</h2>
        <p>
          변수는 다음과 같은 방법으로 선언합니다.<br /><br />

          <code v-highlight class="cpp"
            >DATA_TYPE VARIABLE_NAME = VARIABLE_VALUE</code
          >

          DATA_TYPE은 데이터 형태로 나중에 배울 내용이지만 어떤 형태의 물건이
          들어갈 수 있는지 알려주는 부분입니다.<br /><br />

          VARIABLE_NAME은 변수의 이름입니다. 상자의 이름 또는 번호를 요구하면 그
          안에 있는 아이템을 가지고 올 수 있습니다.<br /><br />

          이와 비슷하게 변수의 이름을 사용하면 변수의 값을 알 수 있습니다.<br /><br />

          VARIABLE_VALUE는 변수의 값입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 예시</h2>
        <p>
          예를 들어, 정수 a에 숫자 6을 저장하겠습니다.<br /><br />

          <code v-highlight class="cpp">int a = 6;</code>

          위에서 int가 정수, a가 변수 이름, 6이 변수 값입니다.
        </p>
      </div>
      <div>
        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3VTB`"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 사용하기</h2>
        <p>
          변수를 선언한 후 변수의 값은 그 변수의 이름을 사용하여 알 수
          있습니다.<br /><br />

          하지만 출력을 할 떄에는 '%'를 사용해야 합니다. 출력에서 배운 '%d'는
          정수(integer)을 출력하고 싶을 때 사용해야 하는 문자입니다.<br /><br />

          <mark
            >참고로 변수의 이름은 "" 없이 사용해야 합니다. 그렇지 않으면 변수의
            값 대신 "VARIABLE_NAME"(변수 이름)이 출력됩니다.</mark
          >
          <br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;int a = 6;<br />
            &nbsp;printf("%d", a);<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3VTC`"
          height="500"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div class="ma-auto">
        <h2>변수 이름을 만들때 규칙</h2>
        <p>
          변수를 만들 때 매우 다양한 규칙이 있습니다.<br /><br />

          1. 영문자 (대문자, 소문자), 숫자, 언더바 (_) 만 사용할 수 있습니다.<br /><br />
          2. 변수의 이름의 첫 자리는 숫자이면 안됩니다.<br /><br />
          3. 파이썬 키워드는 변수의 이름으로 사용할 수 없습니다 (키워드에 대한
          더 자세한 내용은 조금 뒤에 배우겠습니다)
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fI89ddpqwH_V2tcKZx4VijN0SjNXKPIo7Q&usqp=CAU"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 값 바꾸기</h2>
        <p>
          변수에 저장된 값을 바꾸기 위하여 저희는 먼저 변수를 선언하겠습니다.<br /><br />

          변수를 만들었다면 이제 변수의 값을 새로운 데이터로 바꾸어
          보겠습니다.<br /><br />

          변수를 만들었을 때와 같이 '변수 이름 = 값' 코드를 실행하면 됩니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;int a = 6;<br />
            &nbsp;a = 5;<br />
            &nbsp;printf("%d", a);<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3VTE`"
          height="300px"
        />
      </div>
    </div>

    <Navigation bef="print" aft="variableadvance" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>변수란?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
          />
          <label for="question-1-answers-A"> 데이터를 저장할 수 있는 곳 </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B"
            >출력과 입력을 통틀어서 변수라고 합니다
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
          />
          <label for="question-1-answers-C"> 변하는 수 </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
          />
          <label for="question-1-answers-D"> 다른 정답 </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn :aria-label="albutt" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'VariablePage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-A').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
      },
    },
  };
</script>
