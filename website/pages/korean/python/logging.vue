<template>
  <div>
    <br /><br />

    <div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
        />
      </div>
      <div style="margin: auto; padding: 50px">
        <p></p>
        <h2>로깅이란?</h2>
        파이썬 프로그램에서 문제가 발생하여 그 문제를 확인하고 싶을 때 값을
        콘솔에 프린트하는 행위를 로깅이라고 합니다.<br /><br />
        파이썬에서는 따로 로깅 메서드가 없으므로 logging 모듈을
        사용해야합니다.<br /><br />
        그 로그 파일을 만드려면 basicConfig() 메서드를 먼저 사용해서 파일 이름을
        넣으세요!<br /><br />
        <code>
          import logging<br /><br />
          logging.basicConfig(filename="log.log")
        </code>
      </div>
    </div>

    <Header type="파이썬" num="63" title="로깅" />

    <div>
      <div>
        <h2>INFO</h2>
        <p>
          INFO는 INFORMATION의 약자이고 정보를 뜻합니다.<br /><br />
          파이썬 코드를 테스트할 때 정보를 얻고 싶다면(예: 어떨 때의 값)
          logging.info() 메서드를 사용할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/9d4fc4880a"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <div>
      <div style="padding: 10px">
        <h2>WARNING</h2>
        <p>warning은 사용자에게 에러가 났다는 사실을 경고하는 코드입니다.</p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/784c0fc5a6"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>ERROR와 EXCEPTION</h2>
        <p>
          ERROR은 에러를 발생시키는 메서드입니다.<br /><br />
          EXCEPTION은 예외를 뜻합니다. 위에서 설명한 ERROR 메서드와 비슷합니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/f9687df6a4"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <Navigation bef="error2" aft="mapandreduceandfilter" />
  </div>
</template>

<script>
export default {
  page: 'LoggingPage',
};
</script>
