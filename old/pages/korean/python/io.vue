<template>
  <div>
    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/QXtsTPcvuqk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>

    <br /><br />

    <Header type="파이썬" num="4" title="입출력" />

    <h2>출력이란?</h2>
    <p>
      대부분의 사람들은 '출력하다'라는 단어를 들으면 '프린트하다'를
      생각합니다.<br /><br />

      하지만 프로그래밍 언어에서의 '출력'이라는 용어는 특정한 정보를 디스플레이
      장치에 보여주는 작업입니다.<br /><br />

      파이썬에서
      <code v-highlight class="python ic">'Hello, World!'</code>라는 데이터를
      출력하는 코드를 작성하고 실행하면, 콘솔에 그 단어가 똑같이 나타납니다.<br /><br />

      <code
        v-highlight
        class="python"
        v-html="
          `print('Hello, World!')\nprint('안녕하세요')\nprint('5')\nprint('!@#$')`
        "
      ></code>
    </p>

    <QuadSpace />

    <h2>입력</h2>
    <p>
      프로그래밍에서 정보를 입력한다는 것은 사용자가 특정한 정보를 콘솔에 넣고
      그것을 저장하는 작업을 뜻합니다.<br /><br />

      <code v-highlight class="python" v-html="`print(input('>>>'))`"> </code>

      <v-code v-highlight class="python">>>></v-code> 다음에 입력할 수 있습니다.
    </p>

    <Navigation bef="vscode" aft="variable" />

    <QuadSpace />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>출력이란?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> 종이에 프린트하기 </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"
            >정보를 콘솔에 나타나게 만들기
          </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"
            >C) 사용자가 정보를 입력하면 변수에 저장하기
          </label>
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

        <h3>파이썬에서 프린트를 어떻게 할까요?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> print '정보' </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> puts('정보') </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> console.log('정보') </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> print('정보') </label>
        </div>

        <br /><br />

        <h3>파이썬에서 입력을 어떻게 받을까요?</h3>

        <div>
          <input
            id="question-5-answers-A"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-A"> input() </label>
        </div>

        <div>
          <input
            id="question-5-answers-B"
            type="radio"
            name="question-5-answers"
            value="B"
          />
          <label for="question-5-answers-B"> print() </label>
        </div>

        <div>
          <input
            id="question-5-answers-C"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-C"> end() </label>
        </div>

        <div>
          <input
            id="question-5-answers-D"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-D"> in() </label>
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
    name: 'InputOutputPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-B').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
        if (document.getElementById('question-2-answers-D').checked) {
          alert('2 ✔️');
        } else {
          alert('2 ❌');
        }
        if (document.getElementById('question-4-answers-B').checked) {
          alert('4 ✔️');
        } else {
          alert('4 ❌');
        }
        if (document.getElementById('question-5-answers-A').checked) {
          alert('5 ✔️ :o');
        } else {
          alert('5 ❌');
        }
      },
    },
  };
</script>
