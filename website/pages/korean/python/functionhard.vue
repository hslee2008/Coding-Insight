<template>
  <div>
    <div>
      <Header type="파이썬" num="30" title="함수 (자세히)" />

      <QuadSpace />

      <div>
        <div>
          <h2>키워드 매개변수</h2>
          <p>
            함수를 실행할 때 매개변수의 순서에 따라 각 변수 안에 값을 넣을 수
            있습니다.<br /><br />

            하지만 이 방법을 사용하면 순서 상관 없이 매개변수에 값을 입력할 수
            있습니다(매개변수 = 값 형태로 변수 선언하는 형태와 같습니다).<br /><br />

            리스트와 같이 무한의 매개변수를 딕셔너리에 저장해서 나중에 한
            아이템만 선택할 수 있습니다. 매개변수 앞에 **를 붙이면 됩니다.<br /><br />

            딕셔너리의 이름은 매개변수의 이름이고 키의 이름은 사용자가 입력한
            매개변수의 이름입니다.
          </p>
        </div>
        <iframe
          title="Trinket Python"
          :src="`${trinket}901f63378a`"
          height="356"
          loading="lazy"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>매개변수 기본값 지정하는 방법</h2>
            <p>
              가끔 우리가 프로그래밍에서 함수를 사용할 때 매개변수에 값을
              입력하는 것을 잊어버리기도 합니다.<br /><br />

              이때 우리는 만일 변수의 값이 None이 되는 것을 막기 위하여 기본값을
              정할 수 있습니다.
            </p>
          </div>
          <iframe
            title="Trinket Python"
            :src="`${trinket}095fe5cab9`"
            height="356"
            loading="lazy"
          />
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>return 키워드</h2>
          <p>
            함수를 실행하면 어떤 값을 반환하기 위해서 'return'이라는 키워드를
            사용할 수 있습니다.<br /><br />

            그래서 우리가 이 함수에서 나오는 값을 변수 안에 저장할 수
            있습니다.<br /><br />

            'return' 키워드 다음에 나오는 코드는 다 무시됩니다. 그 이유는
            'return' 키워드를 실행하면 함수가 바로 종료합니다.<br /><br />

            <iframe
              title="Trinket Python"
              :src="`${trinket}981bc3174e`"
              height="356"
              loading="lazy"
            />

            <br /><br />return 키워드에서 하나 이상 변수를 되돌려주는 방법이
            있습니다. 파이썬에서만 존재하는 기능입니다.<br /><br />

            <iframe
              title="Trinket Python"
              :src="`${trinket}aa6a155d5a`"
              height="356"
              loading="lazy"
            />
          </p>
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>pass 키워드</h2>
          <p>
            만일 아무것도 하지 않은 함수를 만들고 싶다면 'pass'라는 키워드를
            사용할 수 있습니다.
          </p>
        </div>
        <iframe
          title="Trinket Python"
          :src="`${trinket}80ed8ae473`"
          height="356"
          loading="lazy"
        />
      </div>
    </div>

    <Navigation bef="function" aft="specialvariable" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>
          doThis() 함수 안에 pass라는 코드가 있다고 가정을 해보겠습니다.
          doThis()를 100번 실행하면 출력되는 값은?
        </h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> pass가 100번 출력된다 </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> pass가 50번 출력된다 </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"
            >C) 아무것도 출력이 되지 않는다
          </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> 에러가 발생한다 </label>
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
    name: 'FunctionHardPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-2-answers-C').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
      },
    },
  };
</script>
