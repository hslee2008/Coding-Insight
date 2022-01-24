<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto;">
        <h1>딕셔너리란?</h1>
        <p>
          딕셔너리(DICTIONARY)는 한국어로 '사전'을 뜻합니다.<br /><br />

          일상생활에서의 사전은 단어와 그 단어에 대한 설명으로 이루어져
          있습니다.<br /><br />

          코딩에서도 파이썬 딕셔너리는
          <mark>키(key)와 값(value)의 한쌍이 여러개로 이루어진 데이터 형태</mark
          >를 뜻합니다.<br /><br />

          예를 들어 보겠습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/ba9dc3b4ac"
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

    <br /><br />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LmDFgFK4mFA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <br /><br />

    <Header num="21" title="딕셔너리"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>딕셔너리 만드는 방법</h1>
        <p>
          딕셔너리는 Key와 Value로 이루어져 있습니다.<br /><br />

          기본적인 형태는 다음과 같습니다. Key와 Value의 쌍은 하나의 딕셔너리
          안에 저장할 수 있습니다.<br /><br />

          <code>
            {<br />
            Key1:Value1,<br />
            Key2:Value2,<br />
            Key3:Value3<br />
            }
          </code>

          딕셔너리 예를 살펴보겠습니다.<br /><br />

          옆의 예시에서 Key는 phonenumber, age, bestfriend이고 이 Key에 해당하는
          Value는 "010-1234-5678", 14, "James"입니다.<br /><br />

          딕셔너리에서는 Key와 Value에는 정수, 문자열 등 모든 데이터를 넣을 수
          있습니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/534b32664d"
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
        <h1>딕셔너리 Key 찾기</h1>
        <p>
          딕셔너리에서 모든 Key의 값을 찾기 위해서 keys()를 사용할 수
          있습니다.<br /><br />

          keys()를 사용하고 그 정보를 출력하면 dict_keys([keys])의 형태로 출력이
          됩니다.<br /><br />

          keys()는 <NuxtLink to="./for">for 반복문</NuxtLink>에서 더 유용하게
          사용할 수 있는 예시를 들겠습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/1e671b6947"
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
        <h1>딕셔너리 Value 찾기</h1>
        <p>
          Key의 값을 모두 찾는 것처럼 Value의 모든 값을 찾을 수 있습니다.<br /><br />

          values()를 사용하면 dict_values([values]) 형태로 value가 출력이
          됩니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/05de91d4c2"
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

    <BeforeNextButton flink="listmethod2" slink="dictionarymethod" />

    <QuadSpace />

    <div class="quiz">
      <h1>퀴즈 풀기!</h1>

      <hr />

      <br /><br />

      <h3>print({"1": "a", "2": "b"}.keys()) 코드를 실행하면?</h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) ["a", "b"] </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) dict_keys(["a", "b"]) </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) keys(["a", "b"]) </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) ["b", "a"] </label>
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
  name: 'DictionaryPage',
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
