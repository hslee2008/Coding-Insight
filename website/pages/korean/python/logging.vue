<template>
  <div>
    <br /><br />

    <div>
      <h2>로깅이란?</h2>
      <p>
        파이썬 프로그램에서 문제가 발생하여 그 문제를 확인하고 싶을 때 값을
        콘솔에 프린트하는 행위를 로깅이라고 합니다.<br /><br />

        파이썬에서는 따로 로깅 메서드가 없으므로 logging 모듈을
        사용해야합니다.<br /><br />

        그 로그 파일을 만드려면 basicConfig() 메서드를 먼저 사용해서 파일 이름을
        넣으세요!
      </p>

      <code>
        import logging<br /><br />
        logging.basicConfig(filename="log.log")
      </code>
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
      :src="`${trinket}9d4fc4880a`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>WARNING</h2>
        <p>warning은 사용자에게 에러가 났다는 사실을 경고하는 코드입니다.</p>
      </div>
    </div>
    <iframe
      :src="`${trinket}784c0fc5a6`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
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
      :src="`${trinket}f9687df6a4`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="error2" aft="mapandreduceandfilter" />
  </div>
</template>

<script>
  export default {
    page: 'LoggingPage',
  };
</script>
