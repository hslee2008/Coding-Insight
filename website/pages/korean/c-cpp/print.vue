<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>출력하기</h2>
        <p>
          출력한다는 것은 정보를 기계 스크린에 보여주는 작업을 뜻합니다.<br /><br />

          왜 출력이 필요한가요?<br /><br />

          출력을 사용하면 정보에 대하여 많은 것을 알 수 있기 때문에 코드에서의
          문제, 정보, 에러 등 프로그램을 작성할 때 많은 도움이 됩니다.<br /><br />

          옆에 있는 이미지에서 printf()는 터미널에 어떤 문자열을 나타나게
          합니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VrZ"
          height="300px"
          width="100%"
        />
      </div>
    </div>

    <Header type="C/C++" title="출력" num="4" />

    <div>
      <div>
        <h2>printf()</h2>
        <h2>텍스트 출력하기</h2>

        C 언어에서는 printf()를 사용하여 정보를 출력합니다.<br /><br />

        영어, 한글 등 텍스트를 출력하기 위하여 printf()를 사용해 보겠습니다.<br /><br />

        <code>
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;printf("Hello, World!");<br />
          &nbsp;return 0;<br />
          }
        </code>

        <h2>숫자 출력하기</h2>

        숫자를 출력하는 방법은 2가지 있습니다.<br /><br />

        먼저, 텍스트와 비슷하게 "" 안에 넣어서 출력할 수 있습니다.<br />
        두 번째는 숫자를 포멧하여 출력하는 방법이 있습니다.<br /><br />

        <code>
          printf("숫자: 314");<br />
          printf("숫자: %d", 3);
        </code>

        두 번째 예시에서 %d 대신 3을 넣습니다. 하지만 위에 이렇게 쉽고 간단한
        방법이 있는데 왜 %d를 사용했을까요?<br /><br />

        간단히 설명하자면, %d 대신 다른 숫자를 집어 넣기 위해서 이런 방법을
        사용했습니다.<br /><br />

        그 이유는 '변수' 부분에서 배우겠습니다.<br /><br />
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3Vs1"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>putchar()</h2>

        <p>
          char는 조금 뒤에 배우겠습니다. 간단히 말하지만, char는 한
          알파벳입니다.<br /><br />

          알파벳 하나를 출력하기 위해서 putchar()를 사용할 수 있습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;putchar('H');<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3Vs3"
          width="100% "
          height="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>puts()</h2>

        <p>
          puts()는 printf()와 비슷하지만 문자와 양의 정수만 출력이 가능하고 항상
          끝에 새로운 줄을 붙입니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;puts("Learning C is fun");<br />
            &nbsp;puts("Yeah");<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3Vs5"
          width="100%"
          height="500px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="vscode" aft="variable" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>출력이란?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) 종이에 프린트하기 </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B"
          >B) 정보를 콘솔에 나타나게 만들기
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C"
          >C) 사용자가 정보를 입력하면 변수에 저장하기
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) 다른 정답 </label>
      </div>

      <br /><br />

      <h3>C 언어에서 프린트를 어떻게 할까요?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) print "정보" </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) puts("정보") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) print("정보") </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) printf("정보") </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PrintPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-D').checked) {
        alert('2 ✔️ :)');
      } else {
        alert('2 ❌');
      }
    },
  },
};
</script>
