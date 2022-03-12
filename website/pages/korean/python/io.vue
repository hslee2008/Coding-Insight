<template>
  <div>
    <QuadSpace />

    <div>
      <div class="header-div text-white">
        <div>
          <h2>출력이란?</h2>
          <p>
            대부분의 사람들은 '출력하다'라는 단어를 들으면 '프린트하다'를
            생각합니다.<br /><br />

            하지만 프로그래밍 언어에서의 '출력'이라는 용어는 특정한 정보를
            디스플레이 장치에 보여주는 작업입니다.<br /><br />

            파이썬에서 'Hello, World!'라는 데이터를 출력하는 코드를 작성하고
            실행하면, 콘솔에 그 단어가 똑같이 나타납니다.<br /><br />
          </p>
        </div>
        <code>
          print("Hello, World!")<br />
          print("안녕하세요")<br />
          print("5")<br />
          print("!@#$")
        </code>
        <highlightjs autodetect code="print('Hello, World!')" />
      </div>

      <br />

      <div class="text-center">
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/QXtsTPcvuqk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <br /><br />

      <Header type="파이썬" num="4" title="입출력" />

      <QuadSpace />

      <div class="norm-div bg-black text-white">
        <div>
          <h2>출력 end</h2>
          <p>
            파이썬은 print() 함수로 프린트를 하고 난 후, 괄호 안에 있는 데이터
            값 끝에는 무엇을 추가로 넣을지 정할 수 있습니다.
          </p>

          <p>
            예를 들면, print("Hello, World!")에서 출력된 데이터 끝에 '.'을
            붙여서 콘솔에 "Hello, World!."이 나타나게 할 수 있습니다.
          </p>

          <p>옆에있는 코드를 바꾸고 삼각형 버튼을 눌러서 코드를 실행하세요!</p>
        </div>

        <iframe
          src="https://trinket.io/embed/python3/62e887bbca"
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

      <div>
        <div>
          <h2>출력 sep</h2>
          <p>
            print() 안에 'Hello, World!'를 입력하면 똑같은 값이 콘솔에
            출력됩니다. 다른 방법은 'Hello'와 'World'를 입력해서 'Hello,
            World!'를 나타나게 해 볼 수 있습니다.
          </p>
          <br />

          <code>
            print("Hello, World!")<br />
            print("Hello", "World") # 'Hello, World!'가 출력됩니다.
          </code>

          <p>
            만일 단어들 사이에 빈 칸 대신 다른 문자를 넣고 싶다면 매개변수인
            sep="" 안에 그 문자를 입력하면 됩니다.
          </p>
          <br />

          <p>
            예를 들어 print("Hello", "World")에서 "Hello|World"가 출력되게 하기
            위하여 print("Hello", "World", sep="|")를 실행하면 됩니다.
          </p>
          <br />

          <code>
            print("Hello", "World", sep="|") # Hello|World가 출력됩니다.
          </code>
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>입력</h2>
          <p>
            프로그래밍에서 정보를 입력한다는 것은 사용자가 특정한 정보를 콘솔에
            넣고 그것을 저장하는 작업을 뜻합니다.
          </p>

          <p>
            예를 들면, 프로그램이 암호를 요구하여 사용자가 암호를 입력하면, 그
            값을 먼저 프로그램이 변수에 저장합니다. 그 저장된 값이 계정의 암호와
            일치하면 로그인이 가능해지고, 그렇지 않다면 프로그램이 다시 암호를
            물어봅니다.
          </p>

          <code>
            if 'password' == input("암호: "): print("로그인이 되었습니다.")
          </code>

          <p>위의 코드에서 if는 배울 내용입니다.</p>

          <code> print(input(">>>")) </code>

          <p>
            프로그램이 위의 코드에서 '>>>' 다음에 입력된 값을 콘솔에 출력합니다.
          </p>
        </div>

        <iframe
          src="https://trinket.io/embed/python/5b6a7a8b2b"
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

      <NaviBtn bef="vscode" aft="variable" />

      <QuadSpace />

      <div class="quiz">
        <h2>퀴즈 풀기!</h2>

        <v-divider />

        <br /><br />

        <h3>출력이란?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
            value="A"
          />
          <label for="question-1-answers-A">A) 종이에 프린트하기 </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"
            >B) 정보를 콘솔에 나타나게 만들기
          </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
            value="C"
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
            value="D"
          />
          <label for="question-1-answers-D">D) 다른 정답 </label>
        </div>

        <br /><br />

        <h3>파이썬에서 프린트를 어떻게 할까요?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
            value="A"
          />
          <label for="question-2-answers-A">A) print "정보" </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B">B) puts("정보") </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
            value="C"
          />
          <label for="question-2-answers-C">C) console.log("정보") </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
            value="D"
          />
          <label for="question-2-answers-D">D) print("정보") </label>
        </div>

        <br /><br />

        <h3>프린트 끝에 다른 데이터를 붙여서 어떻게 출력 할까요?</h3>

        <div>
          <input
            id="question-3-answers-A"
            type="radio"
            name="question-3-answers"
            value="A"
          />
          <label for="question-3-answers-A">A) print("정보", end="") </label>
        </div>

        <div>
          <input
            id="question-3-answers-B"
            type="radio"
            name="question-3-answers"
            value="B"
          />
          <label for="question-3-answers-B">B) puts("정보", end="") </label>
        </div>

        <div>
          <input
            id="question-3-answers-C"
            type="radio"
            name="question-3-answers"
            value="C"
          />
          <label for="question-3-answers-C">C) print("정보", end="") </label>
        </div>
        <div>
          <input
            id="question-3-answers-D"
            type="radio"
            name="question-3-answers"
            value="D"
          />
          <label for="question-3-answers-D">D) print("정보", theEnd="") </label>
        </div>

        <br /><br />

        <h3>파이썬에서 입력을 어떻게 받을까요?</h3>

        <div>
          <input
            id="question-5-answers-A"
            type="radio"
            name="question-5-answers"
            value="A"
          />
          <label for="question-5-answers-A">A) input() </label>
        </div>

        <div>
          <input
            id="question-5-answers-B"
            type="radio"
            name="question-5-answers"
            value="B"
          />
          <label for="question-5-answers-B">B) print() </label>
        </div>

        <div>
          <input
            id="question-5-answers-C"
            type="radio"
            name="question-5-answers"
            value="C"
          />
          <label for="question-5-answers-C">C) end() </label>
        </div>

        <div>
          <input
            id="question-5-answers-D"
            type="radio"
            name="question-5-answers"
            value="D"
          />
          <label for="question-5-answers-D">D) in() </label>
        </div>

        <br /><br />

        <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn>
      </div>
    </div>

    <QuadSpace />
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
      if (document.getElementById('question-3-answers-A').checked) {
        alert('3 ✔️!');
      } else {
        alert('3 틀렸습니다');
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
