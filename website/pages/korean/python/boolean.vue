<template>
  <div>
    <br /><br />
    <div>
      <div>
        <h2>불리언란?</h2>
        <p>
          불리언이란 참 또는 거짓입니다.<br /><br />

          불리언에서는 'True'(참) 또는 'False'(거짓)라는 값만 가지고
          있습니다.<br /><br />

          사용자가 어떤 값을 입력하면 숫자 '5'와 비교하는 프로그램을
          만들겠습니다.<br /><br />

          <code>
            userNumber = int(input("숫자를 입력하세요: "))<br /><br />

            print(userNumber > 5) #userNumber가 5보다 큰지 비교하고 결과를
            출력합니다.
          </code>

          불리언 형태로 변수를 선언할 수도 있습니다.<br /><br />

          <code> a = 5 > 6 </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://quizagogo.com/wp-content/uploads/2021/05/True-or-false-1-940x470.jpg"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="파이썬" num="13" title="불리언" />

    <div>
      <div class="mx-auto my-auto">
        <h2>불리언 - 주의할 점</h2>
        <p>
          파이썬에서는 '옳다면 True라고 출력되고 옳지 않다면 False'라고
          출력됩니다.<br /><br />

          기억하세요! True와 False의 앞은
          <strong>대문자</strong>입니다!<br /><br />

          소수로 소문자로 사용하면 다음과 같은 에러가 생깁니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/8500bba20b"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>불리언 - not</h2>
        <p>
          불리언에서 True를 False로 False를 True로 바꾸기 위하여 not을 변수 앞에
          붙이면 그 반대가 출력됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/5fbbc3204c"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>불리언 - assert</h2>
        <p>
          다음과 같은 예시를 보겠습니다.<br /><br />

          CODE1에서 만일 2가 1보다 크면 에러 없이 넘어갑니다. 하지만 만일 assert
          다음에 나오는 불리언이 거짓이라면 에러가 생깁니다.<br /><br />

          에러가 생기는 예시를 관찰하겠습니다. CODE2는 2가 1보다 크지 않기
          때문에 에러가 생깁니다. 파이썬에서 assert의 불리언이 False라면 assert
          에러가 생깁니다. 파이썬 프로그램에서 나만의 메시지를 만들려면 불리언
          뒤에 메시지를 넣으면 됩니다. (CODE3를 확인하세요)
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/b23c21c043"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>불리언 - all()과 any()</h2>
        <p>
          all은 모두를 뜻합니다. all() 함수는 리스트(배울 내용)가 주어지면
          그중에 모두 다 True라면 True를 돌려주고 하나라도 True가 아니면 False를
          돌려줍니다.<br /><br />

          any는 하나라도 True이면 True이고 모두 다 True가 아니면 False를
          출력합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/6d4ae0d672"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="ascii" aft="number" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text
        ><v-divider />

        <br /><br />

        <h3>불리언의 값으로 가능한 것들은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> true, false </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> True, false </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> true, False </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> True, False </label>
        </div>

        <br /><br />

        <h3>
          불리언 not (not (not (not (not (not (False))))))의 값과 같은 것은?
        </h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> False </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> True </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> Null </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> None </label>
        </div>

        <br /><br />

        <h3>any([True, False, False, False, False])의 값은?</h3>

        <div>
          <input
            id="question-3-answers-A"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-A"> False </label>
        </div>

        <div>
          <input
            id="question-3-answers-B"
            type="radio"
            name="question-3-answers"
            value="B"
          />
          <label for="question-3-answers-B"> True </label>
        </div>

        <div>
          <input
            id="question-3-answers-C"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-C"> Null </label>
        </div>

        <div>
          <input
            id="question-3-answers-D"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-D"> None </label>
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
  name: 'BooleanPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-D').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-A').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-B').checked) {
        alert('3 ✔️');
      } else {
        alert('3 ❌');
      }
    },
  },
};
</script>
