<template>
  <div>

      <br />

      <div class="text-center">
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/D4xUOyss96k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <br /><br />

      <Header num="10" title="문자열 메서드 2"></Header>

      <br /><br /><br /><br />

      <div style="display: flex;" class="img-div">
        <div style="margin: auto;">
          <h1>문자 더하기</h1>
          <p>
            문자를 +를 사용하여 더할 수 있습니다.

            <br /><br />

            하지만 반복되는 패턴을 더하고 싶다면 어떻게 해야 할까요?<br /><br />

            다음과 같은 방법도 있습니다.<br /><br />

            문자 * 숫자는 문자를 숫자만큼 반복하여 되돌려준다는 뜻입니다.<br /><br />

            예를 들어 "Hello" * 2는 "HelloHello"입니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python/54f740c487"
          width="50%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        ></iframe>
      </div>

      <br /><br /><br /><br />

      <div>
        <div>
          <h1>문자에 대한 정보</h1>
          <p>
            파이썬에서 문자가 알파벳과 숫자로만 이루어져 있는지 아는 방법이
            있습니다.<br /><br />

            바로 'isalnum()'이라는 메서드를 이용하면 됩니다.<br /><br />

            또 'isalpha'는 알파벳으로만 되어있는지,<br />

            'isdecimal'은 숫자(0~9)로만 이루어져 있는지,<br />

            'isdigit'은 숫자로만 이루어져 있는지,<br />

            'isidentifier'는 변수 이름 규칙과 일치하는지 알 수 있습니다.<br />

            마지막으로 'isnumeric'은 정수로만 이루어져 있는지, 'isprintable'은
            정보를 출력하는 것이 가능한지, 'isspace'는 스페이스(공백)로만
            이루어져 있는지 알 수 있습니다.<br />
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python/9da1796e91"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        ></iframe>
      </div>

      <br /><br /><br /><br />

      <div>
        <div>
          <h1>파이썬 문자 자르기 - 나쁜말 필터기</h1>
          <p>
            나쁜 단어 필터링하는 프로그램을 만들겠습니다.<br /><br />

            먼저, 나쁜 말을 물어보고 '나는 {나쁜 말}이 아니다'라는 뜻이 있는
            문장을 만들었습니다. 그리고, partition() 메서드를 사용하여 나쁜
            단어를 기준으로 문장을 자르고 그 나쁜 단어 대신 '**'를
            넣었습니다.<br /><br />

            또 다른 예시를 들어보겠습니다.<br /><br

            이 예시에서 name을 기준으로 잘랐습니다. partitionedSentence를
            출력하면 ("Hello. My ", "name", " is Hyunseung")가 터미널에 출력이
            되는 것을 관찰할 수 있습니다. 인덱싱을 사용하여 'name' 전의 문장과
            'name' 후의 문장을 결합했습니다.<br /><br />
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python/d278186aad"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>

      <br /><br />

      <div>
        <a href="stringmethod1" style="text-decoration: none; float: left">
          <v-btn class="ma-2" outlined>
            <v-icon left> mdi-chevron-left </v-icon>Back
          </v-btn>
        </a>

        <a href="escapechar" style="text-decoration: none; float: right">
          <v-btn class="ma-2" outlined>
            Next<v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </a>
      </div>

      <br /><br />

      <div class="quiz">
        <h1>퀴즈 풀기!</h1>

        <hr>

        <br><br>

        <h3>파이썬에서 문자 두 개를 결합하는 방법은?</h3>
        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-A"
            value="A"
          />
          <label for="question-1-answers-A">A) + </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-B"
            value="B"
          />
          <label for="question-1-answers-B">B) - </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-C"
            value="C"
          />
          <label for="question-1-answers-C">C) ++ </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-1-answers"
            id="question-1-answers-D"
            value="D"
          />
          <label for="question-1-answers-D">D) == </label>
        </div>

        <br /><br />

        <h3>파이썬에서 어떤 문자를 x번 반복한 값을 변수에 저장하는 코드는?</h3>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-A"
            value="A"
          />
          <label for="question-2-answers-A">A) a = "문자" * x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-B"
            value="B"
          />
          <label for="question-2-answers-B">B) a = "문자" - x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-C"
            value="C"
          />
          <label for="question-2-answers-C">C) a = "문자" $ x </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-2-answers"
            id="question-2-answers-D"
            value="D"
          />
          <label for="question-2-answers-D">D) a = "문자" @ x </label>
        </div>
        <br /><br />

        <h3>파이썬에서 문자를 자르는 방법은?</h3>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-A"
            value="A"
          />
          <label for="question-3-answers-A">A) "string".partition("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-B"
            value="B"
          />
          <label for="question-3-answers-B">B) "string".cut("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-C"
            value="C"
          />
          <label for="question-3-answers-C">C) "string".apply("") </label>
        </div>

        <div>
          <input
            type="radio"
            name="question-3-answers"
            id="question-3-answers-D"
            value="D"
          />
          <label for="question-3-answers-D">D) "string" / "string" </label>
        </div>

        <br /><br />

        <v-btn
        v-on:click="checkAnswer"
        >
          정답 확인
        </v-btn>
      </div>

      <br /><br />

    </div>
  </div>
</template>

<script>
  export default {
    name: "StringMethod2",
    methods: {
      checkAnswer() {
        if (document.getElementById("question-1-answers-A").checked) {alert("1번 맞았습니다!")} else {alert("1번 틀렸습니다")}; if(document.getElementById("question-2-answers-A").checked) {alert("2번 맞았습니다 :)")} else {alert("2번 틀렸습니다")};if(document.getElementById("question-3-answers-A").checked) {alert("3번 맞았습니다 :)")} else {alert("3번 틀렸습니다")};
      }
    }
  }
</script>
