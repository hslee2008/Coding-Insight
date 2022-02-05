<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto;">
        <h2>친구 목록 다루기 2</h2>
        <p>파일을 사용해서 친구 목록을 이번에는 저장까지 해보겠습니다</p>
      </div>

      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          max-width="200px"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />

    <Header num="Proj: 8" title="친구 목록 2"></Header>

    <QuadSpace />

    <div>
      <h2>프로그램 설명</h2>
      <p>
        1. 코드는 저번 코드에 추가할 것이기 때문에
        <NuxtLink aria-label="Go to Coding Insight Page" to="./contact">친구 목록</NuxtLink>에서 확인하세요<br /><br />
      </p>
    </div>

    <QuadSpace />

    <h2>코드 확인하기</h2>
    <iframe
      src="https://trinket.io/embed/python3/9e26723d8a"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
    />

    <QuadSpace />

    <NaviBtn
      bef="contextmanager"
      aft="datachange"
     />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'PasswordPage',
};
</script>
`
