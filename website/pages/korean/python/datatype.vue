<template>
  <div>
    <QuadSpace />
    <div style="display: flex" class="img-div">
      <div>
        <h2>데이터 형태란?</h2>
        <p>
          프로그램에서 다양한 기호(숫자, 문자 등)를 통틀어 데이터라고 합니다.<br /><br />

          그리고 데이터 형태는 데이터의 다양한 종류를 뜻합니다..<br /><br />

          사람이 가장 자주 접하는 데이터 형태인 문자는 ""를 사용하여 변수 안에
          저장할 수 있습니다..<br /><br />

          <code> weather = "대체로 흐림" </code>
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://www.internationaldisabilityalliance.org/sites/default/files/blog/big_data.jpg"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/DDrOcpflWDc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="6" title="데이터 형태" />

    <div style="display: flex" class="img-div">
      <div style="margin: auto; padding-right: 5px">
        <h2>데이터 형태 알기</h2>
        <p>
          저희는 파이썬에서 type() 함수를 사용하여 변수의 데이터 형태를 알 수
          있습니다.<br /><br />

          <code> print(type("안녕")) </code>

          <code>&lt;class 'str'></code>은 "안녕"이 str 데이터 변수(str은
          문자입니다)라는 것을 알려줍니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/1068ac5668"
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
        <h2>데이터 형태 확인</h2>
        <p>
          isinstance()는 변수의 데이터 형태를 확인해주는 함수입니다.<br /><br />

          첫 번째에 변수 이름을 넣고 두 번째에는 데이터 형태 이름을 넣습니다. 이
          코드를 실행하면 True 또는 False가 출력됩니다.<br /><br />

          <iframe
            src="https://trinket.io/embed/python/437398710e"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          />

          <br />

          위의 예시에서는 weather 변수가 str(문자)인지 알려주는 프로그램을
          만들었습니다.<br /><br />

          isinstance(변수, 변수 형태)의 형태를 가지고 있습니다.<br /><br />

          위의 예시는 True를 출력합니다. 그 이유는 "sunny"가 문자(str)이기
          때문입니다.<br /><br />
        </p>
      </div>

      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://www.sas.com/en_us/insights/articles/big-data/big-data-privacy/_jcr_content/par02/image_df5.img.jpg/1601048186486.jpg"
          width="342"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="madlib" aft="comment" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>데이터 형태란?</h3>
      <div>
        <input
          id="question-1-answers-A"
          type="radio"
          name="question-1-answers"
          value="A"
        />
        <label for="question-1-answers-A">A) 데이터를 저장할 수 있는 곳 </label>
      </div>

      <div>
        <input
          id="question-1-answers-B"
          type="radio"
          name="question-1-answers"
          value="B"
        />
        <label for="question-1-answers-B">B) 다양한 기호의 종류 </label>
      </div>

      <div>
        <input
          id="question-1-answers-C"
          type="radio"
          name="question-1-answers"
          value="C"
        />
        <label for="question-1-answers-C">C) 다양한 기호 </label>
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

      <h3>데이터 형태를 찾을 수 있는 코드는?</h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) type() </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) typeof() </label>
      </div>

      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) type </label>
      </div>

      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) typeof </label>
      </div>

      <br /><br />

      <h3>데이터 형태를 확인할 수 있는 방법은?</h3>

      <div>
        <input
          id="question-3-answers-A"
          type="radio"
          name="question-3-answers"
          value="A"
        />
        <label for="question-3-answers-A">A) isinstance() </label>
      </div>

      <div>
        <input
          id="question-3-answers-B"
          type="radio"
          name="question-3-answers"
          value="B"
        />
        <label for="question-3-answers-B">B) instance() </label>
      </div>

      <div>
        <input
          id="question-3-answers-C"
          type="radio"
          name="question-3-answers"
          value="C"
        />
        <label for="question-3-answers-C">C) is() </label>
      </div>

      <div>
        <input
          id="question-3-answers-D"
          type="radio"
          name="question-3-answers"
          value="D"
        />
        <label for="question-3-answers-D">D) isdata() </label>
      </div>

      <br /><br />

      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'DataTypePage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-A').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-A').checked) {
        alert('3 ✔️!');
      } else {
        alert('3 ❌');
      }
    },
  },
};
</script>
