<template>
  <div>
    <br />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/BO5mVol4FOY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <br />

    <Header title="숫자 메서드" num="17"></Header>

<QuadSpace />

    <div class="header-div bg-black text-white">
      <div>
        <h2>절댓값</h2>
        <p>
          a의 절댓값은 a와 0의 거리를 뜻합니다.<br /><br />

          예를 들면, a가 -10 또는 10이면 0과 거리가 10입니다. 그래서 a의
          절댓값은 10입니다.<br /><br />

          a가 음수면 양수로 양수면 똑같이 양수로 바꾼 값이 a의 절댓값입니다.<br /><br />

          영어로 절댓값은 absolute value이고 파이썬에서 줄여서 abs()라고
          합니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/db269c0e84"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="calc" aft="list" />

    <QuadSpace />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>-1의 절댓값을 찾는 파이썬 코드는?</h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) abs("-1") </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) abs(-1) </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) absolute("-1") </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) absolute(-1) </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'NumberMethodPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 ✔️!')
      } else {
        alert('1 ❌')
      }
    },
  },
}
</script>
