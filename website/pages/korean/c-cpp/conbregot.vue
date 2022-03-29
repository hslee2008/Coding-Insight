<template>
  <div>
    <Header type="C/C++" title="Continue, Break, Goto" num="23" />

    <div>
      <div class="ma-auto">
        <h2>break</h2>
        <p>
          break란 반복문에서 빠져 나오는 코드입니다.<br /><br />

          언제 정확히 어디에서 코드를 끊을지 설정할 수 있는 키워드르 매우
          유용합니다.<br /><br />

          예를 들면, 0에서 9까지 반복하며 그 값을 출력할 것입니다. 하지만
          저번과는 조금 다르게 5에서 끊겠습니다.
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3YMb"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>continue</h2>
        <p>
          continue라는 제어문은 다음 값으로 변수를 넘어가게 만듭니다.<br /><br />

          예를 들면, 0에서 9까지 반복하고 4번은 출력하지 않겠습니다.
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3YMd"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>goto</h2>
        <p>
          goto라는 키워드는 어떤 코드를 만들고 반복문에서 바로 그 코드로
          넘어가는 키워드입니다.<br /><br />

          하지만 이 키워드를 사용한다면 C의 반복문을 복잡하게 하거나 망칠 수
          있으니 break를 사용하세요.<br /><br />

          예를 들면, a의 값이 15라면 바로 넘어가겠습니다.
        </p>
      </div>
      <iframe
        src="https://www.jdoodle.com/embed/v0/3YMe"
        width="100%"
        height="400px"
      />
    </div>

    <QuadSpace />

    <Navigation bef="inffor" aft="array" />
  </div>
</template>
