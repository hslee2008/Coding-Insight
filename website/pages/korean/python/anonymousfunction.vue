<template>
  <div>
    <br />

    <Header num="33" title="익명함수"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>익명 함수란?</h1>
        <p>
          익명 함수는 함수 중에서 하나의 종류라는 것을 알 수 있습니다. 하지만
          '익명'의 뜻은 무엇일까요?<br /><br />

          '익명'이라는 것은 <mark>이름(명)을 숨기다(익)</mark>이라는 뜻이
          있습니다.<br /><br />

          익명 함수는 이름이 없어서 선언이 되면 바로 사용이 됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/215ca4e0af"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>익명 함수 - Lambda</h1>
        <p>
          파이썬에서 익명 함수를 선언하기 위하여
          <mark>'lambda'라는 키워드</mark>를 사용합니다.<br /><br />

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
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace />

    <BeforeNextButton flink="type" slink="for"></BeforeNextButton>

    <QuadSpace />
  </div>
</template>

<script>
  export default {
    name: "AnonymousFunctionPage"
  }
</script>
