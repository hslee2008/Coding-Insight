<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>장난 이메일</h1>
        <p>
          이 프로젝트에서는 친구 또는 가족에게 장난으로 이메일을 보내는 방법을
          알아보겠습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://www.incimages.com/uploaded_files/image/empty-email_463770.gif"
          max-width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header num="85" title="스펨 이메일"></Header>

    <QuadSpace />

    <div class="text-center">
      <h1>준비</h1>
    </div>
    <p>
      smtplib와 ssl을 설치 해야합니다. 아마도 이미 설치 되어있겠지만 혹시
      모르니까 이 코드를 터미널에서 실행을 하세요.<br /><br />

      <code> pip install smtpllib & pip install ssl </code>

      먼저, 저의 컴퓨터에서 서버를 연결을 해야합니다. 서버란, 이메일을 보내는
      기계라고 할 수 있습니다.<br /><br />

      터미널(VSCode에서 <kbd>ctrl+`</kbd>)에서 다음과 같은 코드를 집어넣고
      엔터를 누르세요.<br /><br />

      <code> python -m smtpd -c DebuggingServer -n localhost:1025 </code>

      계정에서 먼저 파이썬이 로그인을 하는 것을 허락해야합니다.
      <a href="https://myaccount.google.com/lesssecureapps">설정</a>에서 허락을
      누르세요.<br /><br />

      만일 구글이 당신의 계정을 블록킹 했다면 다른 계정으로 하세요. 참고로 그
      계정과 밑에 있는 코드의 계정 이메일이 일치해야합니다.
    </p>

    <br /><br />

    <iframe
      src="https://trinket.io/embed/python3/db9f325b98"
      width="100%"
      height="500vh"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace />

    <BeforeNextButton flink="coroutine" slink="autozoom" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: "SpamPage"
}
</script>
