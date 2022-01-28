<template>
  <div>
    <br /><br />

    <div>
      <div>
        <div>
          <h1>튜플이란?</h1>
          <p>
            튜플이란 리스트와 같지만 안에 있는 값을 바꿀 수 없는 데이터의 형태를
            뜻합니다.<br /><br />

            리스트에서는 인덱싱을 사용하여 새로운 값으로 바꿀 수 있지만
            튜플에서는 못합니다.<br /><br />

            그래서 파이썬 프로그램을 짜는데 절대로 사용자가 바꾸면 안 되는
            데이터들(예: 점수, 시험 성적, ...)을 튜플 안에 저장할 수
            있습니다.<br /><br />

            튜플에서는 대괄호[] 대신 소괄호()를 사용합니다. CODE1에서
            확인하겠습니다.<br /><br />

            CODE2와 같이 강제로 바꾸려 한다면 에러가 출력됩니다.<br /><br />

            CODE3와 같이 파이썬에서 신기하게도 () 없이도 튜플이라고 인식할 수
            있는 기능이 있습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/069924886e"
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

      <br /><br />

      <div class="text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iIUhChzGajA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <br /><br />

      <Header title="튜플" num="24"></Header>

      <br /><br />

      <div>
        <div>
          <h1>튜플 풀기</h1>
          <p>CODE1과 같이 튜플을 만들고 상자같이 풀 수 있습니다.</p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/8c81ff1498"
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
          <h1>튜플 길이 지정하기</h1>
          <p>
            파이썬에서는 튜플의 길이를 미리 지정하여 나중에 실수로 값을 더하는
            행위를 막을 수 있습니다.<br /><br />

            마지막에 ','를 넣어 다시는 값을 원하지 않는다고 파이썬에게 알려주는
            것이 가능합니다.<br /><br />

            <code>
              a = 1, 2,<br />
              b = 3,
            </code>
          </p>
          <iframe
            src="https://trinket.io/embed/python3/0cc2f9e56d"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
          />
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <h1>zip()</h1>
          <p>
            zip이란 우리가 지퍼를 올려서 닫는 것을 뜻합니다.<br /><br />

            파이썬에서 튜플을 지퍼처럼 서로 묶을 수 있습니다.<br /><br />

            zipped 함수를 사용했지만 실제로 튜플을 보기 위하여 tuple() 함수를
            사용해야 합니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/1af130ab47"
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

      <NaviBtn bef="zipping" aft="set" />

      <QuadSpace />

      <div class="quiz">
        <h1>퀴즈 풀기!</h1>

        <v-divider />

        <br /><br />

        <h3>
          print( zip( (1, 2, 3), ("1", "2", "3") ) ) 코드를 실행하면 출력되는
          값은?
        </h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
            value="A"
          />
          <label for="question-2-answers-A"
            >A) ((1, '1'), (2, '2'), (3, '3'))
          </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"
            >B) (('1', 1), ('2', 2), ('3', 3))
          </label>
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
          <label for="question-2-answers-D">D) 다른 정답 </label>
        </div>

        <br /><br />

        <v-btn @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn>
      </div>

      <QuadSpace />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuplePage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-2-answers-D').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
    },
  },
};
</script>
