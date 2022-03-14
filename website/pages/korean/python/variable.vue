<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>변수란?</h2>
        <p>
          프로그래밍에서는 변수라고 하면 어떤 정보를 담을 수 있는 장소를
          뜻합니다. <br /><br />
          예를 들어 상자를 생각해보세요. 상자 안에는 다양한 물건을 담을 수
          있습니다.<br /><br />
          이와 비슷하게 변수도 다양 한 정보를 담을 수 있는 '상자'라고 할 수
          있습니다.<br /><br />
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://mblogthumb-phinf.pstatic.net/20140319_89/leedahee111_1395209827273qETWy_JPEG/lights-cubes-3D--1573013-1920x1080.jpg?type=w2"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/Qu5_eBK6OkI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="5" title="변수" />

    <div>
      <div>
        <h2>변수 선언하기</h2>
        <p>
          변수를 만들려면 다음과 같은 방법을 사용할 수 있습니다. <br /><br />
          <code> NAME = DATA </code>
          에서 NAME은 변수의 이름을 뜻하고 DATA는 값입니다. <br /><br />
          이렇게 하면 변수를 만들 수 있습니다. <br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/a5d980683b"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 사용 방법</h2>
        <p>
          변수를 사용하기 위해서는 변수의 이름을 print()안에 넣으면 변수 이름이
          출력되지 않고 변수의 값이 출력됩니다.<br /><br />
          <code>
            name = "John"<br />
            print(name) #John이 출력됩니다.
          </code>
          파이썬에서 변수의 이름은 대문자 소문자가 구별됩니다. <br /><br />
          NAME과 name은 다릅니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 이름을 만들때 규칙</h2>
        <p>
          변수를 만들 때 매우 다양한 규칙이 있습니다.<br /><br />
          1. 영문자 (대문자, 소문자), 숫자, 언더바 (_) 만 사용할 수 있습니다.<br /><br />
          2. 변수의 이름의 첫 자리는 숫자이면 안됩니다.<br /><br />
          3. 파이썬 키워드는 변수의 이름으로 사용할 수 없습니다 (키워드에 대한
          더 자세한 내용은 조금 뒤에 배우겠습니다)<br /><br />
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 값 바꾸기</h2>
        <p>
          변수에 저장된 값을 바꾸기 위하여 저희는 먼저 변수를 선언하겠습니다.<br /><br />
          변수를 만들었다면 이제 변수의 값을 새로운 데이터로 바꾸어
          보겠습니다.<br /><br />
          변수를 만들었을 때와 같이 '변수 이름 = 값' 코드를 실행하면 됩니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python/4745a3ecb9"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <CIImage
      alt="python-factory-picture"
      src="https://wallpaperaccess.com/full/3279871.jpg"
      max-width="300px"
    />
    <h2>변수 삭제하기</h2>
    <p>
      변수가 더 이상 필요 없고 이 코드가 실행되고 있는 기기에 저장 공간이 많이
      없다면 삭제해도 됩니다.<br /><br />
      삭제는 del 키워드를 사용하고 뒤에 변수 이름을 넣으면 이제 변수를 다시
      사용할 수 없게 됩니다.<QuadSpace />
      <code>
        name = "Coding-Insight"<br /><br />
        del name<br /><br />
        print(name)
      </code>
      이 코드를 실행하면 에러가 생깁니다.<br /><br />
      그 이유는 name이라는 변수가 삭제되어 존재하지 않기 때문입니다.<br /><br />
    </p>

    <QuadSpace />

    <div>
      <div>
        <h2>변수를 한번에 많이 선정하기</h2>
        <p>
          처음에는 원하는 변수들의 이름을 다 쉼표로 나누고 '='를 붙입니다.<br /><br />
          '=' 뒤에 각 변수의 값을 순서대로 나열합니다.<br /><br />
          위의 방법을 따르면 첫 번째 변수에 첫 번째 값이 저장되고 두 번째에는 두
          번째 값이 지정됩니다.<br /><br />

          <code>
            a, b, c = 1, 2, 3<br /><br />

            print(a) #1이 출력된다
          </code>

          변수 5개에 값 "alphabet"을 저장하고 싶다고 가정을 해보겠습니다.<br /><br />
          하지만 name="alphabet" 코드를 5번 실행하려면 시간이 많이 걸립니다.
          그래서 파이썬에서는 변수를 '='로 연결하여 끝에 한 값을 넣어주면 모든
          변수에 그 마지막 값이 저장됩니다.<br /><br />

          <code>
            a = b = c = d = e = "alphabet"<br /><br />

            print(a) #alphabet이 출력된다<br />
            print(b) #alphabet이 출력된다<br />
            print(c) #alphabet이 출력된다
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="io" aft="madlib" />

    <div class="quiz">
      <h2>퀴즈 풀기!</h2>

      <v-divider />

      <br /><br />

      <h3>변수란?</h3>
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
        <label for="question-1-answers-B"
          >B) 출력과 입력을 통틀어서 변수라고 합니다
        </label>
      </div>
      <div>
        <input
          id="question-1-answers-C"
          type="radio"
          name="question-1-answers"
          value="C"
        />
        <label for="question-1-answers-C">C) 변하는 수 </label>
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
      <h3>파이썬에서 변수 선언 방법은?</h3>
      <div>
        <input
          id="question-2-answers-A"
          type="radio"
          name="question-2-answers"
          value="A"
        />
        <label for="question-2-answers-A">A) 값 = 이름 </label>
      </div>
      <div>
        <input
          id="question-2-answers-B"
          type="radio"
          name="question-2-answers"
          value="B"
        />
        <label for="question-2-answers-B">B) 값 == 이름 </label>
      </div>
      <div>
        <input
          id="question-2-answers-C"
          type="radio"
          name="question-2-answers"
          value="C"
        />
        <label for="question-2-answers-C">C) 이름 == 값 </label>
      </div>
      <div>
        <input
          id="question-2-answers-D"
          type="radio"
          name="question-2-answers"
          value="D"
        />
        <label for="question-2-answers-D">D) 이름 = 값 </label>
      </div>
      <br /><br />
      <h3>다음 중 변수의 이름이 될 수 없는 것은?</h3>
      <div>
        <input
          id="question-3-answers-A"
          type="radio"
          name="question-3-answers"
          value="A"
        />
        <label for="question-3-answers-A">A) hello </label>
      </div>
      <div>
        <input
          id="question-3-answers-B"
          type="radio"
          name="question-3-answers"
          value="B"
        />
        <label for="question-3-answers-B">B) hello! </label>
      </div>
      <div>
        <input
          id="question-3-answers-C"
          type="radio"
          name="question-3-answers"
          value="C"
        />
        <label for="question-3-answers-C">C) hello_world </label>
      </div>
      <div>
        <input
          id="question-3-answers-D"
          type="radio"
          name="question-3-answers"
          value="D"
        />
        <label for="question-3-answers-D">D) hello123 </label>
      </div>
      <br /><br />
      <h3>변수의 값을 바꾸는 방법은?</h3>
      <div>
        <input
          id="question-4-answers-A"
          type="radio"
          name="question-4-answers"
          value="A"
        />
        <label for="question-4-answers-A">A) 이름 = 값 </label>
      </div>
      <div>
        <input
          id="question-4-answers-B"
          type="radio"
          name="question-4-answers"
          value="B"
        />
        <label for="question-4-answers-B">B) 이름 == 값 </label>
      </div>
      <div>
        <input
          id="question-4-answers-C"
          type="radio"
          name="question-4-answers"
          value="C"
        />
        <label for="question-4-answers-C">C) 값 = 이름 </label>
      </div>
      <div>
        <input
          id="question-4-answers-D"
          type="radio"
          name="question-4-answers"
          value="D"
        />
        <label for="question-4-answers-D">D) 값 == 이름 </label>
      </div>
      <br /><br />
      <h3>변수를 삭제하는 방법은?</h3>
      <div>
        <input
          id="question-5-answers-A"
          type="radio"
          name="question-5-answers"
          value="A"
        />
        <label for="question-5-answers-A">A) del </label>
      </div>
      <div>
        <input
          id="question-5-answers-B"
          type="radio"
          name="question-5-answers"
          value="B"
        />
        <label for="question-5-answers-B">B) del() </label>
      </div>
      <div>
        <input
          id="question-5-answers-C"
          type="radio"
          name="question-5-answers"
          value="C"
        />
        <label for="question-5-answers-C">C) delete </label>
      </div>
      <div>
        <input
          id="question-5-answers-D"
          type="radio"
          name="question-5-answers"
          value="D"
        />
        <label for="question-5-answers-D">D) delete() </label>
      </div>
      <br /><br />
      <v-btn aria-label="Coding Insight Button" @click="checkAnswer">
        <v-icon left>mdi-check-decagram</v-icon>정답 확인
      </v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VariablePage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1 ✔️!');
      } else {
        alert('1 ❌');
      }
      if (document.getElementById('question-2-answers-D').checked) {
        alert('2 ✔️');
      } else {
        alert('2 ❌');
      }
      if (document.getElementById('question-3-answers-B').checked) {
        alert('3 ✔️!');
      } else {
        alert('3 ❌');
      }
      if (document.getElementById('question-4-answers-A').checked) {
        alert('4 ✔️');
      } else {
        alert('4 ❌');
      }
      if (document.getElementById('question-5-answers-A').checked) {
        alert('5 ✔️ :o');
      } else {
        alert('5 ❌');
      }
    },
  },
};
</script>
