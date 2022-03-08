<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>집합이란?</h2>
        <p>
          집합이란 어떤 객관적인 조건에 따라 나뉘어진 목록이라고 할 수
          있습니다.<br /><br />

          객관적이란 분명한 기준을 뜻합니다. 예를 들어 키 큰 사람은 집합이 될 수
          없습니다.<br /><br />

          그 이유는 사람마다 키가 크다는 기준이 다르기 때문입니다.<br /><br />

          예를 들어 우리반에서 서울에 사는 친구들의 집합을 만들어 보겠습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/17ff96c784"
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

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D3sZWUlvDuY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="24" title="집합" />

    <div>
      <div>
        <h2>집합의 특징</h2>
        <p>집합에는 순서가 없습니다.</p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>집합에 값 더하고 빼기</h2>
          <p>
            집합 끝 부분에 값을 더하기 위하여 우리는 'add'라는 함수를 사용해
            보겠습니다. CODE1 예시를 확인하세요.<br /><br />

            집합을 붙이기 위하여 'update()'을 사용할 수 있습니다. CODE2에서
            확인할 수 있습니다.<br /><br />

            참고로 집합에서는 순서가 없기 때문에 항상 코드를 실행할 때 마다
            집합에 있는 값들의 순서는 항상 바뀝니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/1c4e61a04e"
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
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>집합 값 제거</h2>
        <p>
          colorSet이라는 집합에 있는 값 중에서 'red'라는 아이템을 remove()를
          사용해서 제거해 보겠습니다.<br /><br />

          remove()라는 메서드를 사용하는데 만일 'red'라는 아이템이 집합 안에
          존재하지 않다면 에러가 생깁니다.<br /><br />

          에러가 생기지 않는 것을 원한다면 discard 메서드를 사용하세요.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/62528e1b44"
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

    <NaviBtn bef="tuple" aft="setmethod" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>
        a = {"a", "b", "c", "d", "e"}<br />a.remove("f")<br />print(a)<br /><br />
        코드를 실행하면 출력되는 값은?
      </h3>

      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) {"a", "b", "c", "d", "e"} </label>
      </div>

      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B"
          >B) {"a", "b", "c", "d", "e", "f"}
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
        <label for="question-2-answers-D">D) 에러 </label>
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
  name: 'SetPage',
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
