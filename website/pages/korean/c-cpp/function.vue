<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>함수란?</h2>
        <p>
          함수란 코드의 모음입니다.<br /><br />

          예를 들어보겠습니다.<br /><br />

          A는 반복적인 작업입니다. A를 doThis() 코드 안에 모아 doThis() 만
          실행하면 바로 A 작업을 한 번에 실행할 수 있습니다.<br /><br />

          이 상황에서 doThis()는 함수입니다.<br /><br />

          함수란 어떤 반복적인 작업을 한 코드 안에 모아 개발자가 그 코드를
          반복하여 쓰지 않아도 될 수 있게 만들어 주는 도구입니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://cdn3.iconfinder.com/data/icons/smashicons-development-retro/60/6_-HTML_Functions-_development_coding_code_programming-512.png"
          max-width="200px"
        />
      </div>
    </div>

    <Header type="C/C++" title="함수" num="28" />

    <div>
      <div>
        <h2>함수 선언</h2>
        <p>
          1. 먼저, 함수가 되돌리는 값의 데이터 형태를 입력합니다.<br />
          2. 함수의 이름과 소괄호()를 넣어 {}를 사용합니다.<br />
          3. {} 안에 반복적인 작업 코드를 넣습니다.<br /><br />

          함수를 실행하기 위해서는 함수 이름과 소괄호()를 같이 사용하면
          됩니다.<br /><br />

          밑에 있는 예시는 숫자 '5'를 되돌려 줍니다.<br /><br />

          <code>
            int returnFive() {<br />
            &nbsp;&nbsp;return 5;<br />
            }<br /><br />

            int main() {<br />
            &nbsp;&nbsp;printf("%d", returnFive());<br />
            }
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gu"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div
      style="
        padding: 30px;
        border-radius: 5px;
        display: flex;
        background-color: #55c5d9;
        color: black;
      "
    >
      <div>
        <h2>return 키워드</h2>
        <p>
          return은 함수가 실행되었을 때 결과를 되돌려주는 역할을 맡습니다.<br /><br />

          위의 예시에서와 같이 return 5 코드를 함수 안에 넣으면 함수를 실행한
          결과를 변수 안에 저장하거나 바로 출력이 가능합니다.<br /><br />

          return 키워드는 다른 역할이 있습니다.<br /><br />

          이 키워드를 사용하면 함수는 바로 종료합니다.<br /><br />

          다음에 나오는 코드는 있으나 없으나 상관 없습니다.<br /><br />

          return을 사용하여 함수를 끝내는 것도 가능합니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>매개변수</h2>
        <p>
          매개변수란 함수를 실행할 때 입력할 값을 뜻합니다.<br /><br />

          예를 들면, 기계에서 2를 입력할 때 항상 그 값의 2배를 출력한다면 이 때
          함수에 입력된 값 2는 매개변수이다.<br /><br />

          매개변수는 함수를 선언할 때 소괄호() 안에 넣고 항상 '자료형 이름'
          형태를 사용합니다.<br /><br />

          그 입력된 값은 일반 변수와 같이 '이름'을 사용하면 됩니다.<br /><br />

          <code>
            int returnDouble(int a) {<br />
            &nbsp;&nbsp;return 2 * a;<br />
            }<br /><br />

            int main() {<br />
            &nbsp;&nbsp;printf("%d", returnDouble(2));<br />
            }
          </code>

          만일 2개 이상 매개변수가 존재한다면 ','를 사용하여 분리하면 됩니다.<br /><br />

          함수를 호출할 때 매개변수는 소괄호() 안에 값만 집어 넣으면 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>함수원형</h2>
        <p>
          함수를 사용하려면 먼저 선언을 해야합니다.<br /><br />

          main 함수에서 doThis()를 먼저 선언하지 않는 이상 사용할 수
          없습니다.<br /><br />

          하지만 함수의 원형을 먼저 선언하고 나중에 코드를 입력하면 main 함수
          다음에 doThis() 함수가 있어도 에러가 발생하지 않습니다.<br /><br />

          <code>
            int returnTriple(int a);<br /><br />

            int main() {<br />
            &nbsp;&nbsp;int ma;<br />
            &nbsp;&nbsp;ma = returnTriple(3);<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }<br /><br />

            int returnTriple(int a) {<br />
            &nbsp;&nbsp;return 3 * a;<br />
            }
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gA"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="2darr" aft="mainfunction" />
  </div>
</template>
