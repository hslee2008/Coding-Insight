<template>
  <div>
    <br />

    <div>
      <div>
        <h1>파일에 쓰기</h1>
        <p>
          파일을 쓰는데는 두 가지 모드가 있습니다.<br /><br />

          'w'는 그 파일 안에 있는 모든 내용을 새로운 텍스트로 바꾸고 'a'는
          새로운 줄에 쓰고자 하는 텍스트를 더합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/890655e828"
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

    <Header num="51" title="파일 쓰기"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>write()</h1>
        <p>write() 메서드를 사용하면 파일에 새로운 내용을 쓸 수 있습니다.</p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>writelines()</h1>
          <p>
            writelines()는 문자로 구성된 리스트의 값들을 결합하고 파일에 씁니다.
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/2fdad67c09"
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

    <NaviBtn bef="filereading" aft="etcfile" />

    <QuadSpace />

    <div class="quiz">
      <h1>퀴즈 풀기</h1>

      <v-divider />

      <br /><br />

      <h3>
        파일 example.txt에는 'Hello'라는 내용이 있습니다. 만일 파일
        example.txt에 ' World'라고 a모드를 사용하여 쓰면 코드 실행 후 파일의
        내용은?
      </h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) "HelloWorld" </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) "Hello, World!" </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) "World" </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) " World" </label>
      </div>

      <QuadSpace />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'FileWritingPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
