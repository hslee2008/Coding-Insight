<template>
  <div>
    <QuadSpace />

    <Header type="파이썬" num="62" title="에러" />

    <QuadSpace />

    <div>
      <div>
        <h2>에러 메시지</h2>
        <p>except에서 에러의 메시지를 알 수 있습니다.</p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/92021ab319"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>나만의 에러</h2>
        <p>
          파이썬에서 우리만의 에러를 만들 수 있습니다.<br /><br />

          'raise Exception()' 코드를 실행하면 됩니다.<br /><br />

          괄호 안에 에러 설명을 넣을 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/bc5786961c"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>에러 처리 다시 만들기</h2>
        <p>
          에러를 다시 만드는 것은 에러를 except로 잡았을 때 그 안에서 다른
          에러를 만드는 작업을 뜻합니다.<br /><br />

          raise Exception() 다음에 from ERR를 붙이면 됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/dbdf0c2a5e"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn bef="error" aft="logging" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'Error2Page',
};
</script>
