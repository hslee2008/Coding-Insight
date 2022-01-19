<template>
  <div>
    <br />
    <div style="display: flex; margin: auto" class="img-div">
      <div>
        <h1>주석이란?</h1>
        <p>
          온라인 수업시간에 '주석 달기'라는 버튼을 사용해 보신적이 있나요?<br /><br />

          줌 시간에서 '주석을 달다'라는 뜻은 노트에 쓰는 것을 뜻합니다.<br /><br />

          비슷하게 프로그래밍에서 우리의
          <mark>코드를 이해하는 것을 도와주기 위한 설명</mark>을 넣을 수
          있습니다.<br /><br />
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <br /><br />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/nJg2uCjwKa4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <br /><br />

    <Header num="7" title="주석"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <h1>주석을 사용해야 하는 상황</h1>
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
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>한 줄 주석</h1>
        <p>
          파이썬에서는 주석을 달기 위하여 '#'를 사용합니다.<br /><br />

          '#' 다음에 나오는 문자들은 파이썬을 실행할 때
          <mark>영향을 주지 않습니다</mark>. 그 이유는 노트이기 때문에
          파이썬에서는 실행되지 않기 때문입니다.<br /><br />

          다음은 주석의 예시입니다.<br /><br />
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/5f18131ec9"
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

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>한 줄 이상 주석</h1>
        <p>
          주석을 많이 작성하거나 하나 이상 줄을 만들고 싶다면 다음과 같은 방법을
          사용할 수 있습니다.<br /><br />

          ''' '''와 """ """ 둘다 한 줄 이상 주석을 다는데 사용할 수 있습니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/ab2de5f9f6"
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

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="datatype" slink="string"></BeforeNextButton>

    <QuadSpace></QuadSpace>

    <div class="quiz">
      <h1>퀴즈 풀기!</h1>

      <hr />

      <br /><br />

      <h3>파이썬에서 한 줄 주석을 다는 방법은?</h3>
      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-A"
          value="A"
        />
        <label for="question-1-answers-A">A) # </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-B"
          value="B"
        />
        <label for="question-1-answers-B">B) ! </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-C"
          value="C"
        />
        <label for="question-1-answers-C">C) ~ </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-1-answers"
          id="question-1-answers-D"
          value="D"
        />
        <label for="question-1-answers-D">D) & </label>
      </div>

      <br /><br />

      <h3>한 줄 이상 주석 다는 방법은?</h3>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-A"
          value="A"
        />
        <label for="question-2-answers-A">A) """ """ </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-B"
          value="B"
        />
        <label for="question-2-answers-B">B) " " </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-C"
          value="C"
        />
        <label for="question-2-answers-C">C) ( ) </label>
      </div>

      <div>
        <input
          type="radio"
          name="question-2-answers"
          id="question-2-answers-D"
          value="D"
        />
        <label for="question-2-answers-D">D) ([{ }]) </label>
      </div>

      <br /><br />

      <v-btn v-on:click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  name: 'CommentPage',
  methods: {
    checkAnwer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1번 맞았습니다!')
      } else {
        alert('1번 틀렸습니다')
      }
      if (document.getElementById('question-2-answers-A').checked) {
        alert('2번 맞았습니다 :)')
      } else {
        alert('2번 틀렸습니다')
      }
    },
  },
}
</script>
