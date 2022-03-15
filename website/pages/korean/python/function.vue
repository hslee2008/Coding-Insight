<template>
  <div>
    <br /><br />

    <v-row>
      <div class="mx-auto my-auto">
        <h2>함수란?</h2>
        <p>
          코딩에서 함수의 정의란 코드의 모음을 뜻합니다. 함수를 사용하면 매우
          길고 실행하는데 오래 걸리는 코드를 한 줄 안에 쉽게 실행할 수 있게
          해주는 도구입니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
        />
      </div>
    </v-row>

    <Header type="파이썬" num="29" title="함수" />

    <div>
      <div>
        <h2>함수 선언과 실행</h2>
        <p>
          함수를 선언하기 위하여 'def' 키워드 다음에 함수 이름과 소괄호()와
          ':'를 넣고 코드를 안에 넣습니다.<br /><br />

          이 코드를 실행하면 출력이 되는 값이 없습니다.<br /><br />

          그 이유는 함수는 선언(변수처럼)만 되었지 실행이 되지 않았기
          때문입니다.<br /><br />

          함수를 실행하기 위하여 '함수 이름 + ()'를 사용할 수 있습니다
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/6de0abee4a"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>매개변수</h2>
          <p>
            매개변수는 변수인데 '매개변수'의 정의는 무엇일까요?<br /><br />

            매개변수라는 것은 우리가 함수 안에서 함수를 실행할 때 사용할 수 있는
            변수를 뜻합니다.<br /><br />

            그래서 다음과 같은 함수 addNum에서 a와 b를 매개변수라고 하고 항상
            우리가 이 코드를 실행할 때 우리가 원하는 수로 바꿀 수 있습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/3a2f78ef6b"
          width="100%"
          height="356"
          loading="lazy"
          class="mx-auto my-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>apply()를 이용한 함수 실행</h2>
        <p>
          또는 apply() 함수를 이용하여 또 다른 함수를 실행하는 것도
          가능합니다.<br /><br />

          <code>
            def printWithEnd(a, b, c=None):<br />
            &nbsp;&nbsp;print(a + b, end = c)<br /><br />

            apply(printWithEnd, ("hello", "world"), {'c': ""} )
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>함수의 중요성</h2>
        <p>
          함수는 우리의 코드를 매우 효율적이게 만들 수 있습니다.<br /><br />

          예를 들어 우리가 사용자에게 두 수의 덧셈을 10번 물어보고 출력하기
          위하여 다음과 코드를 실행하면 (옆에 있는 예시를 참고하세요!!!)<br /><br />

          매우 복잡하지 않나요? 다음 코드를 'addNumbers'라는 함수를 만들어
          효율적으로 만들 수 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/7e46f0a592"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="none" aft="functionhard" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text
        ><v-divider />

        <br /><br />

        <h3>함수를 선언할 떄 쓰는 키워드는?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> function </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> func </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> def </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> fun </label>
        </div>

        <QuadSpace />
      </v-card-text>

      <v-card-actions>
        <v-btn text aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn></v-card-actions
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FunctionPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-C').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
