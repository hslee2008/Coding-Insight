<template>
  <div>
    <br />

    <div>
      <div>
        <h1>with를 사용한 컨텍스트 매니저</h1>
        <p>
          파이썬에서는 사용한 파일을 닫지 않으면 파일에 이상이 생길 수 있기
          때문에, 파일을 연 후에는 항상 닫아야 합니다.<br /><br />

          이때 close()라는 메서드를 사용하게 되는데, 때로는 close() 메서드를
          반복적으로 사용하기 귀찮을 때가 있습니다.<br /><br />

          또, 코드가 복잡해지다보면 파일을 닫기 전에 에러가 발생할 가능성이
          높아집니다. 에러가 발생했을 경우에는 파일이 닫히지도 않습니다.<br /><br />

          이럴때 "with"라는 키워드를 사용하여 파일을 자동으로 닫는 방법을 사용할
          수 있습니다.<br /><br />

          with 문은 코드를 실행했을 때 에러가 발생하든 안하든 마지막에 close()를
          해주기 때문입니다.<br /><br />

          컨텍스트 매니저란 with문에서 사용하도록 설계된 객체로 아래와 같은
          코드로 진행됩니다.
        </p>
      </div>
    </div>

    <br /><br />

    <Header num="53" title="컨텍스트 매니저"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>컨텍스트 메니저 예시</h1>
        <p>
          컨텍스트 메니저를 사용하면 이제부터 close() 메서드는 더 이상 필요하지
          않습니다!<br /><br />

          컨텍스트 메니저는 처음에 with와 파일을 여는 함수를 넣고 oepn() 함수를
          저장할 변수의 이름을 넣습니다.<br /><br />

          그리고 그 안에는 파일을 다루는 코드만 있으면 됩니다!
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/f10313f544"
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

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <div>
          <h1>나만의 컨택스트 메니저 만들기</h1>
          <p>
            파이썬에서는 open() 함수가 있습니다.<br /><br />

            우리만의 open() 함수를 만들 수도 있습니다.<br /><br />

            클래스 안에 __enter__()와 __exit__() 함수를 만듭니다. __enter__()
            함수 안에서는 파일을 열 때 실행할 코드를 넣습니다. 그리고,
            __exit__() 함수 안에는 파일을 닫을 때 실행할 코드를 입력합니다.
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/adcdf0d2c3"
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

    <br /><br />

    <BeforeNextButton flink="filewriting" slink="contact2"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  name: 'ContextManagerPage',
}
</script>
