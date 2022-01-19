<template>
  <div>
    <div style="display: flex" class="img-div">
      <div style="display: flex; justify-content: center">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          max-width="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hQGGTvkDEUH9Bgtv9YRcwhjO8mwFpd5tQA&usqp=CAU"
        />
      </div>
      <p style="margin: auto">
        파이썬을 기기에 설치하기<br /><br />
        파이썬이 이진수 (0과 1)로 컴파일이 되어서 기계가 이해하기를 도와주기
        위해서 먼저 공식 사이트에서 컴파일러를 설치해야 합니다.
      </p>
    </div>

    <QuadSpace></QuadSpace>

    <Header num="2" title="설치 & 첫 프로그램"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div style="display: flex" class="img-div">
        <div style="padding: 30px">
          <h1>설치</h1>
          <p>
            1.
            <a
              href="https://www.python.org/downloads/"
              style="color: yellow; text-decoration: none"
              >파이썬 사이트</a
            >
            설치 페이지로 들어가기.<br /><br />
            2. 노란색 버튼 'Download Python 3.10.0' 누르기<br /><br />
            3. 새로운 설치 박스가 브라우저 밑에 생기는데 이를 클릭하기<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/다운로드.jpg"
            /><br /><br />

            4. Add Python to Path 옵션을 클릭<br /><br />
            5. Customize installation 버튼을 누르기<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/installnow.jpg"
            /><br /><br />

            6. 모두 선택하고 Next 버튼을 누르기<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/설치2.jpg"
            /><br /><br />

            7. 1부터 5번째 옵션을 선택하기<br /><br />
            8. Install 버튼 누르기<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/adopt.jpg"
            /><br /><br />

            9. Close 버튼을 눌러주세요.
          </p>
        </div>
        <div style="padding: 30px">
          <h1>사용 방법</h1>
          <p>
            저희는 파이썬의 IDLE이라는 편집기를 사용하겠습니다.<br /><br />

            먼저 파이썬의 IDLE을 이용하려면 앱을 찾고 실행을 해야 합니다.<br /><br />

            <kbd>windows+s</kbd>버튼을 누른 후 'idle'라고 치면 파이썬 IDLE가
            뜹니다. 열기 또는 엔터를 누르세요.<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/idle.jpg"
            /><br /><br />

            파이썬 코드를 실행하기 위해서 >>> 다음에 넣고 엔터를 누르면
            됩니다.<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/idle2.jpg"
            /><br /><br />

            <kbd>print("Hello World")</kbd>라고 친 후 엔터를 누르겠습니다.<br /><br />

            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="/img/printhelloworld.jpg"
            />
          </p>
        </div>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <div
      style="
        display: flex;
        justify-content: center;
        background-color: #2c2c32;
        padding: 10px;
        border-radius: 5px;
      "
      class="img-div"
    >
      <div style="text-align: center; margin: auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="data:image/png;base64,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"
        />
      </div>
      <div style="margin: auto">
        <h1>VSCode란?</h1>
        <p>
          VSCode를 사용해보겠습니다.<br /><br />

          VSCode는 파이썬 코드를 편집하는 과정을 쉽게 만들어주는
          플랫폼입니다.<br /><br />

          지금까지는 IDLE을 사용했지만 VSCode를 사용하면 매우 더 쉬워집니다.<br /><br />

          VSCode 설치 방법과 사용방법은 다음 시간에 설명하겠습니다.
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="index" slink="vscode"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  name: 'InstallPage',
}
</script>
