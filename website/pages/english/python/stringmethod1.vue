<template>
  <div>
    <Header-en type="Python" num="9" title="String Method 1"></Header-en>

    <div>
      <div>
        <h2>Get length of string</h2>
        <p>
          To get the length of a certain string, we can use the len() code.<br /><br />

          Simply put a string inside len() and it will return a number.<br /><br />

          <code>
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"<br />
            print(len(a)) #26 is printed
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/4963fa9c31"
        width="60%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Check whether substring is inside string</h2>
        <p>
          Substring means a part of a string.<br /><br />

          To check whether a substring is inside a string, we can use the 'in'
          keyword.<br /><br />

          'Teddy Bear' in 'this box'. Similar to this syntax, put substring
          first and string later with 'in' seperating.<br /><br />

          <code> print('abc' in 'abcdef') </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/cf4311e167"
        width="60%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Uppercase and Lowercase in string</h2>
        <p>
          Python has lots of useful tools for handling upper and lowercase.<br /><br />

          <code>
            a = "hello world"<br />
            b = "HELLO WORLD Ω"<br /><br />

            print(a.capitalize()) #Hello world is printed<br />
            print(a.title()) #Hello, World! printed<br />
            print(a.upper()) #HELLO WORLD is printed<br />
            print(b.lower()) #hello world Ω is printed<br />
            print(b.isupper()) #True<br />
            print(b.islower()) #False<br />
            print(a.istitle()) #False
          </code>

          capitalize() makes the first alphabet of the sentence capitalized.<br /><br />

          title() makes the string into a title format (books).<br /><br />

          upper() makes every single alphabet into an upper case letter.<br /><br />

          lower() on the other hand, makes everything into lower case.<br /><br />

          isupper() and is islower() checks whether the string is in all upper
          or lower case. Guess which is which.<br /><br />

          istitle() returns either True or False depending whether the string is
          in title format.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/75c4671dd7"
        width="100%"
        height="300"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div class="mx-auto my-auto">
        <h2>문자에서 문자의 인덱스</h2>
        <p>
          index() 메서드를 사용하여 문자 안에 또 다른 문자가 존재하는지 알 수
          있습니다.<br /><br />
          <code> print('abcdef'.index('abc')) </code>
          만일 문자열이 문자 안에 없다면 에러가 생깁니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://cdn.shopify.com/s/files/1/0952/3604/products/indexbk2_9f2cbceb-31fb-4c4f-968b-2b9b7679152a.jpg?v=1593185298"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div class="mx-auto my-auto">
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
          문자를 센터할 문자입니다.<br /><br />
          <code>
            txt = "Hello, World!"<br />
            x = txt.center(50, '|')<br />
            print(x)
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="string" aft="stringmethod2" />

    <v-card>
      <v-card-title>퀴즈 풀기!</v-card-title>

      <v-card-text
        ><v-divider />

        <br /><br />

        <h3>파이썬에서 문자의 길이를 찾는 방법은?</h3>
        <div>
          <input
            id="question-1-answers-A"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-A"> len </label>
        </div>
        <div>
          <input
            id="question-1-answers-B"
            type="radio"
            name="question-1-answers"
            value="B"
          />
          <label for="question-1-answers-B"> len() </label>
        </div>
        <div>
          <input
            id="question-1-answers-C"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-C"> length </label>
        </div>
        <div>
          <input
            id="question-1-answers-D"
            type="radio"
            name="question-1-answers"
          />
          <label for="question-1-answers-D"> length() </label>
        </div>
        <br /><br />
        <h3>문자 안에 부분문자열이 존재하는지 확인하는 방법은?</h3>
        <div>
          <input
            id="question-2-answers-A"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-A"> == </label>
        </div>
        <div>
          <input
            id="question-2-answers-B"
            type="radio"
            name="question-2-answers"
            value="B"
          />
          <label for="question-2-answers-B"> += </label>
        </div>
        <div>
          <input
            id="question-2-answers-C"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-C"> in </label>
        </div>
        <div>
          <input
            id="question-2-answers-D"
            type="radio"
            name="question-2-answers"
          />
          <label for="question-2-answers-D"> &lt; </label>
        </div>
        <br /><br />
        <h3>어떤 값의 인덱스를 찾는 방법은?</h3>
        <div>
          <input
            id="question-3-answers-A"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-A"> in </label>
        </div>
        <div>
          <input
            id="question-3-answers-B"
            type="radio"
            name="question-3-answers"
            value="B"
          />
          <label for="question-3-answers-B"> in() </label>
        </div>
        <div>
          <input
            id="question-3-answers-C"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-C"> index() </label>
        </div>
        <div>
          <input
            id="question-3-answers-D"
            type="radio"
            name="question-3-answers"
          />
          <label for="question-3-answers-D"> index </label>
        </div>
        <br /><br />
        <h3>문자를 대문자로 전환하는 방법과 소문자로 전환하는 방법은?</h3>
        <div>
          <input
            id="question-4-answers-A"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-A"> upper(), lower() </label>
        </div>
        <div>
          <input
            id="question-4-answers-B"
            type="radio"
            name="question-4-answers"
            value="B"
          />
          <label for="question-4-answers-B"
            >toUpperCase(), toLowerCase()
          </label>
        </div>
        <div>
          <input
            id="question-4-answers-C"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-C"> toU(), toL() </label>
        </div>
        <div>
          <input
            id="question-4-answers-D"
            type="radio"
            name="question-4-answers"
          />
          <label for="question-4-answers-D"> u(), l() </label>
        </div>
        <br /><br />
        <h3>파이썬 문자 센터링하는 방법은?</h3>
        <div>
          <input
            id="question-5-answers-A"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-A"> center() </label>
        </div>
        <div>
          <input
            id="question-5-answers-B"
            type="radio"
            name="question-5-answers"
            value="B"
          />
          <label for="question-5-answers-B"> middle() </label>
        </div>
        <div>
          <input
            id="question-5-answers-C"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-C"> toCenter() </label>
        </div>
        <div>
          <input
            id="question-5-answers-D"
            type="radio"
            name="question-5-answers"
          />
          <label for="question-5-answers-D"> toMiddle() </label>
        </div>
        <QuadSpace
      /></v-card-text>

      <v-card-actions>
        <v-btn text aria-label="Coding Insight Button" @click="checkAnswer">
          <v-icon left>mdi-check-decagram</v-icon>정답 확인
        </v-btn></v-card-actions
      >
    </v-card>
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
