<template>
  <div>
    <br />

    <Header num="31" title="특별한 변수"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>Global 변수</h1>
        <p>
          파이썬에서는 함수 안에 변수를 선언한다면 다른 곳에서 그것을 사용하지
          못합니다.<br /><br />

          그 이유는 함수 안에서 선언된 변수는 그 함수만 특별히 가진 변수이기
          때문입니다.<br /><br />

          하지만 우리는 global 키워드를 이용할 수 있습니다.<br /><br />

          global 다음에 변수 이름을 사용하고 변수 이름에 값을 선언하면 모든
          코드에서 사용할 수 있는 코드로 변합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/db03626a7c"
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
        <div>
          <h1>Nonlocal 변수</h1>
          <p>
            NONLOCAL은 GLOBAL의 반대입니다.<br /><br />

            GLOBAL은 그 파일 안에서 변수를 사용할 수 있지만 NONLOCAL은 그 함수,
            루프, 클래스 안에서만 사용할 수 있습니다.<br /><br />

            다시 말해, NONLOCAL은 그 들여쓰기가 된 부분에서만 사용할 수
            있습니다.<br /><br />

            <code>
              def testing():<br />
              &nbsp;&nbsp;nonlocal message<br />
              &nbsp;&nbsp;message = "Hello World"<br />
              &nbsp;&nbsp;print(message)<br /><br />

              print(message)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="functionhard" slink="type" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: "SpecialVariablePage"
}
</script>
