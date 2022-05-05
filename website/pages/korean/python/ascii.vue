<template>
  <div>
    <div>
      <div style="padding: 5px; margin: auto">
        <h2>ASCII란?</h2>
        <p>
          ASCII는 한국어로 '아스키'라고 발음합니다.<br /><br />

          아스키는 American Standard Code for Information Interchange의
          약자입니다. 한국어로는 "정보 교환을 위한 미국 표준 암호"를
          뜻합니다.<br /><br />

          ASCII는 알파벳의 모든 문자를 0에서 127(자연수)로 나타낸 코드입니다.
          예를 들면, 아무것도 없는 ' '는 0입니다.<br /><br />

          퀴즈! 알파벳을 ASCII로 나타낼 때 a가 클까요? 아니면 A가 클까요? A라고
          하셨나요? 흠… A가 크게 보이지만 ASCII에서는 a가 더 큽니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/YnFUR00gk5s"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="12" title="아스키" />

    <div>
      <div>
        <h2>ord()</h2>
        <p>
          어떤 문자의 ASCII 코드를 알기 위하여 ord() 함수를 사용할 수
          있습니다.<br /><br />

          단, 꼭 <strong>문자</strong>여야 합니다. 알파벳 하나하나만 입력할 수
          있습니다.<br /><br />

          여러 개의 아스키를 찾고 싶으면 for 반복문을 사용해야 하지만 이 내용은
          조금 뒤에 배우겠습니다.
        </p>
      </div>
      <iframe :src="`${trinket}4f4507d894`" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>chr()</h2>
        <p>반대로, chr()은 아스키코드를 알파벳으로 바꾸는 함수입니다.</p>
      </div>
      <iframe :src="`${trinket}2f04cf1944`" height="356" />
    </div>

    <Navigation bef="escapechar" aft="boolean" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>알파벳을 아스키로 바꾸는 방법은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> ord() </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> toORD() </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> ascii() </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> 다른 정답 </label>
        </div>

        <br /><br />

        <h3>숫자를 아스키로 바꾸는 방법은?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> character() </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> charact() </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> char() </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> chr() </label>
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
    name: 'AsciiPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-A').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
        if (document.getElementById('question-2-answers-D').checked) {
          alert('2 ✔️');
        } else {
          alert('2 ❌');
        }
      },
    },
  };
</script>
