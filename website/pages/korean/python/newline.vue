<template>
  <div>
    <br />

    <div>
      <div>
        <h1>문제</h1>
        <p>
          터미널에서 파이썬이라고 치면 IDLE 프로그램이 작동합니다. 하지만
          IDLE에서는 조건문을 사용하기 어렵습니다.<br /><br />
          이 상황에서는 \라는 캐릭터를 사용할 수 있습니다.
        </p>
      </div>
    </div>

    <br /><br />

    <Header num="69" title="새로운 줄"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>\</h1>
        <p>
          \를 사용하면 계속 코드를 작성하겠다는 뜻이 됍니다. \를 IDLE에서
          사용하지 않고 VSCode 파이썬에서 사용한다면 들여쓰기를 하지 않아도
          됩니다!<br /><br />
          들여쓰기가 불편하신 분들은 \를 끝에 붙이면 들여쓰기는 신경 안 쓰셔도
          됩니다. 0이어도 되고 100이어도 됩니다.<br /><br />
          만일 조건문 안에 한줄 이상 코드를 사용하고 싶다면 ; 를 사용할 수
          있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/b6c75a2237"
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

    <BeforeNextButton flink="pythondecorator" slink="beedongee"></BeforeNextButton>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'NewLinePage',
}
</script>
