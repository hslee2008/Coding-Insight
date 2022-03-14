<template>
  <div>
    <Header type="파이썬" num="52" title="파일 만들기, 삭제하기, encoding" />

    <div>
      <div>
        <h2>파일 만들기</h2>
        <p>
          파일을 만들기 위해서는 'x' 모드를 사용할 수 있습니다.<br /><br />

          <code> mainFile = open("example.txt", "x")</code>

          만일 example.txt 라는 파일이 이미 존재한다면 에러가 생기게 되고,
          그렇지 않다면 example.txt 파일을 만들 수 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>파일 삭제하기</h2>
          <p>
            파일을 삭제하려면 os라는 모듈을 사용해야 합니다.<br /><br />

            <code>
              import os<br /><br />

              os.remove("example.txt") #첫 번째 방법<br />
              os.rmdir("example.txt") #두 번째 방법 (ReMoveDIRectory)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>인코딩</h2>
          <p>
            키보드에 존재하지 않는 문자나 이모지를 읽기 위해서는 인코딩이라는
            옵션을 사용해야 합니다.<br /><br />

            파이썬은 기본적으로 Ascii Code 형식을 지원하지만 이모지의 경우는
            UTF-8를 사용하기 때문에 인코딩을 사용하여 변환해줘야 합니다.<br /><br />

            <code>
              mainFile = open("example.txt", "r", encoding="UTF-8")<br /><br />

              mainFile.close()
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="filewriting" aft="contextmanager" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>
        파일 안에 이모지가 있습니다. 그 이모지가 들어있는 파일을 열 때
        encoding은 어떤 값으로 넣어야 할까요? 모른다면 밑에 있는 값들 하나하나
        다 실행해 보세요!
      </h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) ASCII </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) UTF-8 </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) ABC </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) ENCODING123 </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon> 정답 확인
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EtcFilePage',
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
