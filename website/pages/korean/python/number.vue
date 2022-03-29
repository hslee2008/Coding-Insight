<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>변수 - 숫자 선언 방법</h2>
        <p>
          숫자는 우리가 항상 사용하는 것입니다. '사과 2개', '책 3권' 등 다양한
          상황에서 숫자는 중요한 역할을 합니다.<br /><br />

          컴퓨터에서도 항상 사용되는 데이터의 형태입니다. 다음과 같이 데이터를
          선언하고 사용할 수 있습니다.<br /><br />

          <code>
            age = 12<br />
            print(age)
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://blog.shabda.co/wp-content/uploads/2015/10/numbers-truth-morality.png"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="파이썬" num="14" title="숫자" />

    <div>
      <div>
        <h2>숫자 - 간단한 계산</h2>
        <p>
          숫자를 가지고 계산을 하겠습니다.<br /><br />

          옆에서 CODE1 예시는 숫자를 더하고, 빼고, 곱하고, 나누는 방법입니다.<br /><br />

          컴퓨터는 사람과 다르게 곱하기는 '*'를 사용하고 나누기는 '/'를
          사용합니다.<br /><br /><br />

          CODE2에서는 조금 더 복잡한 계산을 할 수 있는 연산자의 예시입니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python3/e6f77e0d9a"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>숫자와 '숫자'의 차이</h2>
        <p>
          파이썬에서는 숫자를 2가지 방법으로 선언할 수 있습니다.<br /><br />

          하나는 ''안에 숫자를 쓰는 것('숫자')이고 다른 하나는 '' 없이 숫자만
          선언하는 방법입니다.<br /><br /><br />

          차이가 있을까요? 네, 차이가 있습니다.<br /><br />

          처음에는 &lt;class 'str'>이 출력되었습니다. 그 이유는 파이썬에서 ''
          안에 있는 것은 무조건 문자입니다. 아무리 숫자가 '' 안에 있어도
          문자입니다.<br /><br />

          하지만 두 번째는 &lt;class 'int'>이 출력되었습니다. 그 이유는 숫자는
          '' 없이 선언해야만 숫자라고 인식이 되기 때문입니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python3/81191f5590"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>input()을 숫자로</h2>
        <p>
          이제 사용자로부터 숫자 2개를 받아 더하기를 해보겠습니다.<br /><br />

          이제 1과 1을 입력하세요. 그러면 짜잔! 2가 나옵니다...?<br /><br />

          흠... 왜 11이 나올까요? 1+1은 2가 아닌가요? 우리의 코드에는 문제가
          있습니다.<br /><br /><br />

          그것은 input() 함수가 돌려주는 정보, 다시 말해 firstNumber와
          secondNumber에 저장된 데이터 형태는 문자입니다.<br /><br />

          그래서 파이썬 프로그램에서 먼저 숫자로 전환을 하고 계산을 해야 합니다.
          int(input())을 사용하면 됩니다.<br /><br />

          참고로 문자와 문자를 '+'하면 서로 붙어서 출력이 됩니다. 그래서 문자
          1과 문자 1을 더하면 문자 11이 나옵니다.<br /><br />

          옆에 있는 코드를 int()를 사용해서 고쳐보세요!
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python3/4b9cfba68b"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="boolean" aft="operator" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>print(type('1'))을 실행하면 출력되는 값은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> &lt;class 'str'> </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> &lt;class 'int'> </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> None </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> 에러가 생깁니다. </label>
        </div>

        <br /><br />

        <h3>'1'을 1(숫자로)로 바꾸는 방법은?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> int("1") </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> toInt("1") </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> toInteger("1") </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> integer("1") </label>
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
    name: 'NumberPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-A').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
        if (document.getElementById('question-2-answers-A').checked) {
          alert('2 ✔️');
        } else {
          alert('2 ❌');
        }
      },
    },
  };
</script>
