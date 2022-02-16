<template>
  <div>
    <QuadSpace />
    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/4_uGNu9IlCU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <QuadSpace />

    <Header type="파이썬" num="9" title="문자열 메서드 1" />

    <QuadSpace />

    <div>
      <div>
        <h2>문자의 길이 구하기</h2>
        <p>
          가끔 파이썬에서 문자의 길이를 알아야 할 때가 있습니다.<br /><br />
          예를 들어 사용자가 새로운 암호를 input() 함수 안에 입력하고 있을 때,
          파이썬 프로그램은 암호가 짧아서 조금 더 긴 암호를 넣으라고 물어 볼 수
          있습니다.<br /><br />
          문자의 길이를 구하기 위해서 len() 함수를 사용할 수 있습니다.<br /><br />
          len은 영어로 '길이'를 뜻하는 length의 줄임말입니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/41e9ea9617"
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
        <h2>문자 안에 부분문자열이 존재하는지 확인</h2>
        <p>
          부분문자열은 문자 안의 문자입니다.<br /><br />
          예를 들어 문자 'abc'에는 부분문자열 'a','b'등이 존재합니다.<br /><br />
          문자 안에 부분문자열이 존재하는지 알기 위하여 우리는 'in'이라는
          키워드를 사용할 수 있습니다.<br /><br />
          'in'은 한국어로 '안'이라는 뜻으로 "abc가 abcdef 안에 있나요?"라고
          파이썬에게 물어보는 것과 같습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/a26965d6fd"
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

    <div class="header-div bg-black text-white">
      <div>
        <h2>문자의 대소문자</h2>
        <p>
          파이썬에서 대문자를 소문자로, 소문자를 대문자로 바꿀 수 있는 방법이
          있습니다.<br /><br />
          title()은 책 제목 형식(책 제목 형식은 첫 번째 단어의 첫 번째 알파벳이
          대문자인 형태)으로 바꿉니다.<br /><br />
          upper()은 모든 알파벳을 대문자로 전환합니다.<br /><br />
          lower()은 모든 알파벳을 소문자로 전환합니다.<br /><br />
          casefold()는 모든 알파벳을 소문자로 전환합니다. lower()와 조금 달리
          영어가 아닌 문자도 소문자로 전환합니다.<br /><br />
          isupper()은 모든 알파벳이 대문자인지 알려줍니다.<br /><br />
          islower()은 모든 알파벳이 소문자인지 알려줍니다.<br /><br />
          istitle()은 책 제목 형식인지 알려주는 역할을 합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/75c4671dd7"
        width="100%"
        height="300"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>문자에서 문자의 인덱스</h2>
        <p>
          index() 메서드를 사용하여 문자 안에 또 다른 문자가 존재하는지 알 수
          있습니다.<br /><br />
          <code> print('abcdef'.index('abc')) </code>
          만일 문자열이 문자 안에 없다면 에러가 생깁니다.
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://cdn.shopify.com/s/files/1/0952/3604/products/indexbk2_9f2cbceb-31fb-4c4f-968b-2b9b7679152a.jpg?v=1593185298"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>파이썬 문자 센터링</h2>
        <p>
          파이썬에서 센터링이란 문자를 ' '로 둘러싸는 것을 뜻합니다. ' '로
          둘러싸여 있지만 가운데에 있는 것처럼 보입니다.<br /><br />
          <code>
            txt = "Hello, World!"<br />
            x = txt.center(50)<br />
            print(x)
          </code>
          center에서 첫 번째 숫자는 문자를 센터하는 ' '의 수이고 두 번째는
          문자를 센터할 캐릭터입니다.<br /><br />
          <code>
            txt = "Hello, World!"<br />
            x = txt.center(50, '|')<br />
            print(x)
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="string" aft="stringmethod2" />

    <QuadSpace />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>파이썬에서 문자의 길이를 찾는 방법은?</h3>
      <div>
        <input
          id="question-1-answers-A"
          type="radio"
          name="question-1-answers"
          value="A"
        />
        <label for="question-1-answers-A">A) len </label>
      </div>
      <div>
        <input
          id="question-1-answers-B"
          type="radio"
          name="question-1-answers"
          value="B"
        />
        <label for="question-1-answers-B">B) len() </label>
      </div>
      <div>
        <input
          id="question-1-answers-C"
          type="radio"
          name="question-1-answers"
          value="C"
        />
        <label for="question-1-answers-C">C) length </label>
      </div>
      <div>
        <input
          id="question-1-answers-D"
          type="radio"
          name="question-1-answers"
          value="D"
        />
        <label for="question-1-answers-D">D) length() </label>
      </div>
      <br /><br />
      <h3>문자 안에 부분문자열이 존재하는지 확인하는 방법은?</h3>
      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) == </label>
      </div>
      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) += </label>
      </div>
      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) in </label>
      </div>
      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) &lt; </label>
      </div>
      <br /><br />
      <h3>어떤 값의 인덱스를 찾는 방법은?</h3>
      <div>
        <input
          id="question-3-answers-A"
          type="radio"
          name="question-3-answers"
          value="A"
        />
        <label for="question-3-answers-A">A) in </label>
      </div>
      <div>
        <input
          id="question-3-answers-B"
          type="radio"
          name="question-3-answers"
          value="B"
        />
        <label for="question-3-answers-B">B) in() </label>
      </div>
      <div>
        <input
          id="question-3-answers-C"
          type="radio"
          name="question-3-answers"
          value="C"
        />
        <label for="question-3-answers-C">C) index() </label>
      </div>
      <div>
        <input
          id="question-3-answers-D"
          type="radio"
          name="question-3-answers"
          value="D"
        />
        <label for="question-3-answers-D">D) index </label>
      </div>
      <br /><br />
      <h3>문자를 대문자로 전환하는 방법과 소문자로 전환하는 방법은?</h3>
      <div>
        <input
          id="question-4-answers-A"
          type="radio"
          name="question-4-answers"
          value="A"
        />
        <label for="question-4-answers-A">A) upper(), lower() </label>
      </div>
      <div>
        <input
          id="question-4-answers-B"
          type="radio"
          name="question-4-answers"
          value="B"
        />
        <label for="question-4-answers-B"
          >B) toUpperCase(), toLowerCase()
        </label>
      </div>
      <div>
        <input
          id="question-4-answers-C"
          type="radio"
          name="question-4-answers"
          value="C"
        />
        <label for="question-4-answers-C">C) toU(), toL() </label>
      </div>
      <div>
        <input
          id="question-4-answers-D"
          type="radio"
          name="question-4-answers"
          value="D"
        />
        <label for="question-4-answers-D">D) u(), l() </label>
      </div>
      <br /><br />
      <h3>파이썬 문자 센터링하는 방법은?</h3>
      <div>
        <input
          id="question-5-answers-A"
          type="radio"
          name="question-5-answers"
          value="A"
        />
        <label for="question-5-answers-A">A) center() </label>
      </div>
      <div>
        <input
          id="question-5-answers-B"
          type="radio"
          name="question-5-answers"
          value="B"
        />
        <label for="question-5-answers-B">B) middle() </label>
      </div>
      <div>
        <input
          id="question-5-answers-C"
          type="radio"
          name="question-5-answers"
          value="C"
        />
        <label for="question-5-answers-C">C) toCenter() </label>
      </div>
      <div>
        <input
          id="question-5-answers-D"
          type="radio"
          name="question-5-answers"
          value="D"
        />
        <label for="question-5-answers-D">D) toMiddle() </label>
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
  name: 'StringMethod1Page',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1 ✔️!');
      } else {
        alert('1번      틀렸습니다');
      }
      if (document.getElementById('question-3-answers-C').checked) {
        alert('3 ✔️');
      } else {
        alert('3 ❌');
      }
      if (document.getElementById('question-4-answers-A').checked) {
        alert('4 ✔️');
      } else {
        alert('4 ❌');
      }
      if (document.getElementById('question-5-answers-A').checked) {
        alert('5 ✔️');
      } else {
        alert('5 ❌');
      }
    },
  },
};
</script>
