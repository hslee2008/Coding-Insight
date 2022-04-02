<template>
  <div>
    <br /><br />

    <div>
      <h2>문자를 코드처럼 실행할 수 있을까요?</h2>
      <p>
        파이썬에서는 문자를 코드처럼 실행하는 것이 가능합니다.<br /><br />

        문자를 코드처럼 실행한다면 다양한 것을 할 수 있습니다.<br /><br />

        예를 들면, 사용자가 터미널에 입력한 문자를 코드처럼 실행이 가능합니다.
      </p>
    </div>

    <Header type="파이썬" num="55" title="문자열을 코드로" />

    <div>
      <div>
        <h2>eval()</h2>
        <p>
          eval()은 evaluation의 약자로 어떤 코드를 계산하거나 한 줄 코드를
          실행합니다.<br /><br />

          사용자가 파이썬 코드 값을 넣으면 그 값을 계산하여 출력하는
          메서드입니다.<br /><br />

          예를 들면, 1+1을 입력하면 2가 나오게 할 수 있습니다.<br /><br />

          eval()을 이용하여 다음 예제를 따라해 보세요.<br /><br /><br />

          또한, eval() 메서드를 사용할 때 미리 변수를 정하여 딕셔너리로 만든 후
          실행도 가능합니다.
        </p>
      </div>
      <iframe :src="`${trinket}9025f99628`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>exec()</h2>
        <p>
          exec는 execute의 약자로 eval과 비슷하지만 사용자가 입력한 코드를
          실행합니다.
        </p>
      </div>
      <iframe :src="`${trinket}9ca04d8e1f`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>compile()</h2>
        <p>
          compile() 함수는 문자를 코드로 컴파일을 합니다.<br /><br />

          1. 먼저, 첫 번째 매개변수는 코드를 실행할 문자입니다.<br />

          2. 두 번째는 파일 이름입니다. 만일 파일 이름이 없다면 원하는 값을 넣을
          수 있습니다.<br />

          3. 세 번째는 코드를 컴파일할 모드입니다. eval은 하나의 수학 식일 때,
          single은 한 코드일 때, exec은 여러 코드일 때 사용할 수 있습니다.
        </p>
      </div>
      <iframe :src="`${trinket}4b5e8cc791`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div id="idlepython">
      <h2>나만의 파이썬 IDLE</h2>
      <iframe :src="`${trinket}fa7de26cef`" width="100%" height="356" />
    </div>

    <Navigation bef="datachange" aft="pip" />
  </div>
</template>
