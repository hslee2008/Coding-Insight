<template>
  <div>
    <Header type="파이썬" num="33" title="익명함수" />

    <div>
      <div>
        <h2>익명 함수란?</h2>
        <p>
          익명 함수는 함수 중에서 하나의 종류라는 것을 알 수 있습니다. 하지만
          '익명'의 뜻은 무엇일까요?<br /><br />

          '익명'이라는 것은 이름(명)을 숨기다(익)이라는 뜻이 있습니다.<br /><br />

          익명 함수는 이름이 없어서 선언이 되면 바로 사용이 됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/215ca4e0af"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>익명 함수 - Lambda</h2>
        <p>
          파이썬에서 익명 함수를 선언하기 위하여 'lambda'라는 키워드를
          사용합니다.<br /><br />

          'lambda' 뒤에 매개변수가 오고 변환할 값이 매개변수와 ':' 뒤에 있으면
          익명 함수 형태가 완성됩니다.<br /><br />

          1개 이상 매개변수를 사용하고 싶다면 변수 사이에 ','를 삽입하세요.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/ad432c8141"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <NaviBtn bef="type" aft="for" />
  </div>
</template>
