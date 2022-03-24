<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          style="margin: auto"
          max-width="200px"
          src="data:image/png;base64,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"
        />
      </div>
      <div class="mx-auto my-auto">
        <p>
          시험을 보고 나면 선생님들은 성적을 시험지에 적은 후 부모님에게 사인을
          받고 내일 종이를 학교로 가지고 오라고 합니다.<br /><br />

          다양하게 시험 점수를 표현하는 방법이 있지만, 알파벳으로 100 - 90이면
          A, 80~89면 B, 70~79면 C로 표현하는 방식도 있습니다.<br /><br />

          그렇다면 이름이 C 언어여서 전체 코딩 언어에서 3등으로 좋은 언어일까요?
          그렇지는 않습니다.<br /><br />

          C언어는 B 언어보다 더 성공적이어서 B 다음 알파벳인 C를 선택했다고
          합니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="C 언어 정의" num="1" />

    <div>
      <div>
        <h1>코딩 언어란?</h1>
        <p>
          2진수를 아시나요? 2진수는 0과 1입니다.<br /><br />

          컴퓨터는 에러의 확률을 최소화하기 위하여 2개 숫자만 이용하여 모든
          정보를 나타내고 인식합니다.<br /><br />

          2진수는 매우 복잡하고 알파벳, 자음, 모음, 숫자 등 모든 정보를 0과
          1로만 표시하기 때문에 하나하나 배우기도 어렵습니다. 또한 알파벳을
          나타내는데 많은 0과 1을 사용합니다.<br /><br />

          예를 들면, 알파벳 A는 01100001입니다.<br /><br />

          하지만 이렇게 많은 2진수를 백 개 이상 배워야 합니다.<br /><br />

          2진수를 배우는 것이 거의 불가능하여 '코딩 언어'를 만들었습니다.<br /><br />

          '코딩 언어'란 컴퓨터와 사람이 둘 다 이해할 수 있는 언어를 뜻합니다.
          컴퓨터는 영어를 못하고 사람은 2진수를 모르니 두 언어 사이에 있는 또
          다른 언어를 만들었습니다.<br /><br />

          영어 형태에 2진수보다 더 가까우면 사람이 배우기 쉽고 그렇지 않으면
          어렵습니다. 하지만 2진수에 더 가까우면 더 효율적이고 매우 작은
          로봇에서도 쉽고 빠르게 실행이 가능합니다.<br /><br />

          C 언어는 세상에서 2번째로 2진수에 가까운 코딩 언어입니다. 그래서
          배우기가 몹시 어렵습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>C 언어의 단점과 장점</h1>
          <p>
            C 언어는 2진수에 가까워 매우 효율적입니다.<br /><br />

            예를 들면, 화성에 보내진 탐사선은 C 언어 25000000 줄로 구성된 코드를
            가지고 달에서 탐사하고 있습니다.<br /><br />

            그렇다면 어떻게 25000000 코드를 빠르고 효율적이게 실행할까요? C
            언어는 2진수에 가까워 빠르기 때문입니다.<br /><br />

            하지만 장점만 있는 것은 아닙니다.<br /><br />

            C 언어는 2진수에 가까워 사람이 이해하기 매우 어렵습니다. 또한,
            코드를 실행할 때 설정을 꼭 해야하는 것들을 개발자가 다
            해야합니다.<br /><br />

            예를 들면, 파이썬은 바로 코드를 실행할 수 있지만 C 언어에서는
            #include와 main() 함수를 만들고 main() 함수에서 0을 return해야지만
            코드가 준비가 될 것입니다.
          </p>
        </div>
      </div>
      <div class="text-center m-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          height="auto"
          width="300px"
          id="programming-pick"
        />
      </div>
    </div>

    <QuadSpace />

    <div
      class="d-flex justify-content-center align-items-center w-100"
      style="height: 70px"
    >
      <h1>C 언어를 알면?</h1>
    </div>
    <div>
      <p>
        C 언어를 왜 배워야 할까요? 이해하기도 힘들고 더 쉬운 언어는 많은데.<br /><br />

        그 이유는 C 언어를 배우면 다른 언어에서 배우거나 할 수 없는 것들이 있기
        때문입니다.<br /><br />

        1. C 언어를 안다면 모든 언어의 원리를 공부할 수 있습니다. 파이썬은 C
        언어로 쓰여 있기 때문에 C를 안다면 파이썬에 있는 다양한 기능의 원리를 알
        수 있습니다.<br />
        2. C 언어를 공부한다면 기계의 원리를 배울 수 있습니다.<br />
        3. C 언어는 지금 집에 있는 기계 중 90%를 구성하고 있기 때문입니다.<br />
        4. C 언어에는 다른 코딩 언어와 달리 편리하게 사용할 수 있는 기능이 많이
        없습니다. 그래서 저희만의 기능을 만들면서 알고리즘을 배울 수 있습니다.
      </p>
    </div>

    <QuadSpace />

    <QuadSpace />

    <div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="200px"
        />
      </div>
      <div class="mx-auto my-auto">
        <h1>이 사이트에서 C 언어 배우기</h1>
        <p>
          이 사이트는 C 언어를 설명합니다.<br /><br />

          저희는 C 언어를 VSCode에서 공부할 것입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="" aft="install" :single="true" />
  </div>
</template>
