<template>
  <div>
    <br />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hnNX6_xr-3E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <br />

    <Header title="리스트 메서드 2" num="20"></Header>

<QuadSpace />

    <div>
      <div>
        <h1>리스트 정리하기</h1>
        <p>
          리스트를 알파벳과 숫자 순서로 정리하기 위해서 'sort' 메서드를 사용할
          수 있습니다 (CODE1)<br /><br />

          리스트에서 알파벳과 숫자 순서를 거꾸로 정리하려면 sort 안에서
          'reverse'의 값에 'True'를 입력하면 됩니다. (CODE2)<br /><br />

          'reverse' 함수를 이용하여 리스트의 순서를 뒤집을 수도 있습니다.
          (CODE3)<br /><br />

          우리가 저희만의 규칙을 정할 수 있습니다. CODE4를 보면 문자에서
          소문자인 것부터 시작하여 대문자로 정리했습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/44f3241dca"
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

    <QuadSpace />

    <div>
      <div>
        <h1>append()</h1>
        <p>
          리스트 끝에 새로운 값을 더하기 위하여 우리는 'append()'를 사용해
          보겠습니다.<br /><br />

          list.append(item) 형태로 list 끝에 새로운 item을 더합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/12cc090a48"
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

    <QuadSpace />

    <div>
      <div>
        <h1>리스트 합치기</h1>
        <p>
          두 리스트를 더하여 새로운 리시트를 만들기 위하여 'extend'를 사용할 수
          있습니다.<br /><br />

          list1.extend(list2) 형태로 list1이 [list1과 list2]에 있는 아이템을
          모두 합친 값을 그 변수 안에 저장하는 메서드입니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/7e53c5b5a9"
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

    <QuadSpace />

    <div>
      <div>
        <h1>리스트 비교하기</h1>
        <p>
          리스트가 만일 모두 다 숫자로만 이루어져 있다면 가장 큰 수와 가장 작은
          수를 max()와 min()을 사용하여 알 수 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/94a4a72417"
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

    <QuadSpace />

    <BeforeNextButton flink="listmethod1" slink="dictionary" />

    <QuadSpace />

    <div class="quiz">
      <h1>퀴즈 풀기!</h1>

      <hr />

      <br /><br />

      <h3>["Hello", "World"].reverse()와 같은 값은?</h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) ["Hello", "World"] </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) ["World", "Hello"] </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) None </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) "Hello World" </label>
      </div>

      <QuadSpace />

      <v-btn @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ListMethod2Page',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-B').checked) {
        alert('1 ✔️!')
      } else {
        alert('1 ❌')
      }
    },
  },
}
</script>
