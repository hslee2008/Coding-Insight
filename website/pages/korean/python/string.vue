<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>문자란?</h2>
        <p>
          문자란 언어를 구성하는 기호를 뜻합니다.<br /><br />

          예를 들어 영어에서는 'A', 'B', 'C' 등을 문자라고 합니다.<br /><br />

          파이썬에서 문자란 '' 또는 "" 안에 넣은 데이터 형태를 뜻합니다. 그래서
          숫자가 따옴표 안에 있어도 문자라고 여겨집니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/NT0qINEacEo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="8" title="문자열" />

    <div>
      <div class="ma-auto">
        <h2>파이썬에서 문자 만들기</h2>
        <p>
          문자는 항상 '' 또는 "" 안에 값이 있어야 합니다.<br /><br />
          하지만 ''와 "" 안의 값은 항상 한 줄 안에 있어야 합니다.<br /><br />
          옆에 있는 예시를 보면 Hello와 World가 한 줄에 없어서 에러가 생긴
          것입니다.<br />
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/7c86f7328a"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자 - 여러 줄</h2>
        <p>
          만일 문자와 문자 사이에 많은 줄이 있는 형태로 데이터를 출력하고 싶다면
          어떻게 할까요? <br /><br />

          예를 들어<br /><br />

          <code>
            hello<br />
            world
          </code>

          를 출력하는 방법은 있을까요?<br /><br />

          다양한 방법이 있겠지만 3개 예시를 보겠습니다. <br /><br />

          4번째 방법을 보면 ''' '''를 사용했습니다.<br /><br />

          이 기호 안에 저희는 새로운 줄(enter)을 넣어서 사용할 수 있습니다.
          하지만 ''와 ""에서는 새로운 줄을 사용할 수 없습니다.<br /><br />

          ''' ''' 대신 """ """를 사용해도 됩니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/c420acd5f8"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자 인덱싱 - x 번째 값 구하기</h2>
        <p>
          문자에서 선택하고 싶은 한 장소의 정보를 찾아내는 작업을 인덱싱이라고
          하고 그 장소를 인덱스라고 합니다.<br /><br />

          예를 들어 Hello에서 첫 번째 문자를 출력하기 위해서 인덱스 0을 사용할
          수 있습니다.<br /><br />

          <code>
            a = "Hello"<br />
            print(a[0])
          </code>

          문자 다음에 나오는 [] (대괄호) 안에 있는 숫자는 문자의
          인덱스입니다.<br /><br />

          일상생활에서 '처음'이라고 하면 보통 1을 생각합니다.<br /><br />

          하지만 배열(문자열, 리스트 등)에서 첫 번째 인덱스를 출력하기 위해서
          0을 사용합니다. 2번째는 1이고 3번째는 2입니다.<br /><br />

          이 이유는 조금 뒤에 설명하겠습니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python3/e1cdc9760f"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div style="margin: 20px">
        <h2>문자 인덱싱 - x 부터 y까지 값</h2>
        <p>
          문자에서 어떤 범위의 부분 문자를 구하기 위하여 다음과 같은 방법을
          사용할 수 있습니다.<br /><br />

          [] 안에 ':'를 사용하여 ':' 전에 나오는 인덱스를 포함하고 ':' 다음에
          나오는 인덱스는 제외하고 출력이 됩니다.<br /><br />

          만일 0이 없이 '' 만 있어도 파이썬은 0이라고 인식합니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/47c742b3bd"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>거꾸로 문자 뒤집기</h2>
        <p>
          문자를 거꾸로 바꾸기 위하여 인덱싱을 사용할 수도 있습니다.<br /><br />

          옆의 예시에서 ::-1은 0:0:-1을 생략한 코드입니다.<br /><br />

          마지막 숫자는 스텝을 뜻합니다. 스텝은 문자 인덱싱을 셀때 단위입니다.
          예를 들면, 단위를 2로 정하면 2 문자 중 하나씩만 출력됩니다.<br /><br />

          스텝을 -1로 입력하면 거꾸로 바꿀 수 있습니다.
        </p>
      </div>

      <iframe
        src="https://trinket.io/embed/python/4e95210044"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="comment" aft="stringmethod1" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text>
        <hr />

        <br /><br />

        <h3>문자를 만들 수 있는데 사용하는 것은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> !문자! </label>
        </div>

        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> "문자" </label>
        </div>

        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> [문자] </label>
        </div>

        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> 다른 정답 </label>
        </div>

        <br /><br />

        <h3>한 개 이상 줄을 문자 안에 넣을 수 있는 방법은?</h3>

        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> ?문자? 사용 </label>
        </div>

        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> #문자 사용 </label>
        </div>

        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> """ 문자 """ 사용 </label>
        </div>

        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> (문자) 사용 </label>
        </div>

        <br /><br />

        <h3>문자에서 3 번째 인덱스를 찾아내는데 사용할 숫자로 알맞은 것은?</h3>

        <div>
          <input
            id="question-3-answers-A"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-A"> 0 </label>
        </div>

        <div>
          <input
            id="question-3-answers-B"
            type="radio"
            name="question-3-answers"
            value="B"
          />
          <label for="question-3-answers-B"> 1 </label>
        </div>

        <div>
          <input
            id="question-3-answers-C"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-C"> 2 </label>
        </div>

        <div>
          <input
            id="question-3-answers-D"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-D"> 3 </label>
        </div>

        <br /><br />

        <h3>다음 중 형태가 틀린 것은?</h3>

        <div>
          <input
            id="question-4-answers-A"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-A"> a[1:3] </label>
        </div>

        <div>
          <input
            id="question-4-answers-B"
            type="radio"
            name="question-4-answers"
            value="B"
          />
          <label for="question-4-answers-B"> a[:4] </label>
        </div>

        <div>
          <input
            id="question-4-answers-C"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-C"> a[:] </label>
        </div>

        <div>
          <input
            id="question-4-answers-D"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-D"> a[] </label>
        </div>

        <br /><br />

        <h3>마지막 인덱스를 찾는데 알맞은 숫자는?</h3>

        <div>
          <input
            id="question-5-answers-A"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-A"> 0 </label>
        </div>

        <div>
          <input
            id="question-5-answers-B"
            type="radio"
            name="question-5-answers"
            value="B"
          />
          <label for="question-5-answers-B"> -1 </label>
        </div>

        <div>
          <input
            id="question-5-answers-C"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-C"> -2 </label>
        </div>

        <div>
          <input
            id="question-5-answers-D"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-D"> 0 </label>
        </div>

        <br /><br />
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
    name: 'StringPage',
    methods: {
      checkAnswer() {
        if (document.getElementById('question-1-answers-B').checked) {
          alert('1 ✔️!');
        } else {
          alert('1 ❌');
        }
        if (document.getElementById('question-2-answers-C').checked) {
          alert('2 ✔️');
        } else {
          alert('2 ❌');
        }
        if (document.getElementById('question-3-answers-C').checked) {
          alert('3 ✔️!');
        } else {
          alert('3 ❌');
        }
        if (document.getElementById('question-4-answers-D').checked) {
          alert('4 ✔️');
        } else {
          alert('4 ❌');
        }
        if (document.getElementById('question-5-answers-B').checked) {
          alert('5 ✔️ :o');
        } else {
          alert('5 ❌');
        }
      },
    },
  };
</script>
