<template>
  <div>
    <div>
      <h2>주석이란?</h2>
      <p>
        온라인 수업시간에 '주석 달기'라는 버튼을 사용해 보신적이 있나요?<br /><br />

        줌 시간에서 '주석을 달다'라는 뜻은 노트에 쓰는 것을 뜻합니다.<br /><br />

        비슷하게 프로그래밍에서 우리의 코드를 이해하는 것을 도와주기 위한 설명을
        넣을 수 있습니다.
      </p>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/nJg2uCjwKa4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="7" title="주석" />

    <div>
      <h2>주석을 사용해야 하는 상황</h2>
      <p>
        1. 팀으로 일할 때 코드의 부분의 기능을 설명할 때<br /><br />
        2. 프린트 코드에서 어떤 값이 출력하는지 알려줄 때<br /><br />
        3. 주석은 실행이 되지 않는다. 그래서 코드를 주석으로 만들면 전체 코드를
        삭제하지 않고 그 코드가 없을 때 어떻게 프로그램이 실행되는지 확인이
        가능하다.
      </p>
    </div>
    <iframe
      src="https://trinket.io/embed/python/450cb9ddc1"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>한 줄 주석</h2>
        <p>
          파이썬에서는 주석을 달기 위하여 '#'를 사용합니다.<br /><br />

          '#' 다음에 나오는 문자들은 파이썬을 실행할 때 영향을 주지 않습니다. 그
          이유는 노트이기 때문에 파이썬에서는 실행되지 않기 때문입니다.<br /><br />

          다음은 주석의 예시입니다.
        </p>
      </div>

      <iframe src="https://trinket.io/embed/python/5f18131ec9" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>한 줄 이상 주석</h2>
        <p>
          주석을 많이 작성하거나 하나 이상 줄을 만들고 싶다면 다음과 같은 방법을
          사용할 수 있습니다.<br /><br />

          ''' '''와 """ """ 둘다 한 줄 이상 주석을 다는데 사용할 수 있습니다.
        </p>
      </div>

      <iframe src="https://trinket.io/embed/python/ab2de5f9f6" height="356" />
    </div>

    <Navigation bef="datatype" aft="string" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <v-divider />

        <br /><br />

        <h3>파이썬에서 한 줄 주석을 다는 방법은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> # </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> ! </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> ~ </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> & </label>
        </div>

        <br /><br />

        <h3>한 줄 이상 주석 다는 방법은?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> """ """ </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> " " </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> ( ) </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> ([{ }]) </label>
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
    name: 'CommentPage',
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
