<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>이스케이프 문자란?</h2>
        <p>
          이스케이프는 탈출하다를 뜻합니다. 이스케이프 문자는 에러를 피하는 것을
          도와줍니다.<br /><br />

          옆에 있는 예시를 보겠습니다.<br /><br />

          이 코드를 실행하면 에러가 생깁니다. 그 이유는 파이썬은 첫 번째 ""이
          페어이고 다음의 " 문자란..."이 또 다른 문자라고 인식합니다.<br /><br />

          모든 이스케이프는 다 \와 원하는 문자를 사용합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/cb2f50d77b"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/X3D4VTMiLL4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="11" title="이스케이프 문자" />

    <div>
      <div class="ma-auto">
        <h2>\'와 \"</h2>
        <p>
          \'와 \"는 각각 ', "와 충돌하지 않게 도와주는 문자입니다.<br /><br />

          \'는 '의 이스케이프 문자로 다릅니다.<br /><br />

          그래서 '' 안에 에러 없이 \'를 사용할 수 있습니다.<br /><br />

          \"도 "" 안에서 문제 없이 사용이 가능합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/5d4e5680b4"
        width="60%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <br />참고할 내용: 컴퓨터에 따라 W와 선이 그어진 모양으로 보일 수 있고 /
    옆으로 뒤집어진 모양으로 보일 수도 있습니다.

    <QuadSpace />

    <div>
      <div class="ma-auto">
        <h2>\n</h2>
        <p>
          영어로 새로운 줄은 newline이라고 합니다. \n는 엔터와 같습니다.<br /><br />

          ""와 ''안에는 항상 한 줄 안에만 값이 있어야 합니다.<br /><br />

          """ """ 또는 ''' '''를 사용하지 않고 \n를 사용하여 새로운 줄을 만들 수
          있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/c420acd5f8"
        width="60%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>\r</h2>
        <p>
          return은 "돌려주다"라는 뜻입니다. 다시 말해, \r를 사용하면 \r 전에
          있는 문자가 없어집니다.<br /><br />

          더 흔한 사용은 저번에 있는 문자를 지우고 새로운 문자를 넣는
          방법입니다.<br /><br />

          옆에서 이 코드를 실행할 수 없습니다. 기 이유는 end를 사용할 수 없기
          때문입니다.<br /><br />

          가능하면 컴퓨터 VSCode에서 실행하세요.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/e24eef8879"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>\t</h2>
        <p>
          탭은 스페이스바를 4번 누른 것과 같습니다. 탭은 우리 자판에서 tab
          버튼을 누르면 됩니다.<br /><br />

          <code>
            essay = "안녕하세요.\t저는 파이썬을 코딩할 줄 알아요..."
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>r'문자' 형태</h2>
        <p>
          파이썬에서 문자인데 이스케이프 문자를 사용하지 않는 문자를 만들고
          싶다면 어떻게 할까요?<br /><br />

          문자 ''(따움표) 앞에 'r'을 붙이면 됩니다. r은 rawstring의 약자로
          이스케이프 문자를 사용하지 않겠다고 선언하는 역할을 합니다.<br /><br />

          옆에 있는 예시를 보면 \n은 새로운 줄로 출력되지 않고 그냥 \n로
          출력됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/6366397170"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="password" aft="ascii" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>새로운 줄을 ""와 ''에 넣을 수 있는 방법은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> \n </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> \a </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> \r </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> \t </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn text :aria-label="albutt" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'EscapeChar',
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
