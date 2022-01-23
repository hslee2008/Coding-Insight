<template>
  <div>
    <br />

    <div>
      <div>
        <h1>프로젝트: 자동으로 줌 열기</h1>
        <p>
          파이썬에서 자동으로 줌을 열 수 있습니다.<br /><br />

          먼저, 파이썬 모듈의 도움이 필요합니다. 줌 링크를 열기 위하여
          webbrowser와, 키보드에서 엔터와 비밀번호를 칠 때, 그리고 로딩하는데
          코드를 멈출 수 있는 time 모듈이 필요합니다.<br /><br />

          1. 먼저, webbrowser와 keyboard 모듈을 설치 해야합니다.<br />
          2. cmd에서 pip install keyboard와 pip install webbrowser를
          실행합니다.<br />
          3. 다음에, 새로운 파이썬 파일을 만들고 안에 코드를 작성합니다.<br />
          4. 파이썬 파일에 webbrowser, keyboard, time 모듈을 가지고 옵니다.
          (import webbrowser, keyboard, time)<br />
          5. 다음에, 몇 분 기다릴지 물어봅니다. minute = int(input("분: "))<br />
          6. 몇 분 기다리는지 출력하고 minute 분 기다립니다<br />
          7. 다음에, 웹브라우저에서 줌 링크를 열게 만듭니다.
          webbrowser.open("zoom link")<br />
          8. 줌이 로딩되는 동안 5초 기다린 후 왼쪽 화살표와 엔터를 누릅니다.<br />
          9. 5초 기다리고 비밀번호 타이핑 후 엔터를 누릅니다.<br /><br />

          10. 끝!
        </p>
      </div>
    </div>

    <br /><br />

    <Header num="86" title="자동 줌"></Header>

    <QuadSpace />

    <div class="text-center">
      <h1>코드</h1>
    </div>
    <code>
      import webbrowser, keyboard, time<br /><br />

      minute = int(input("몇 분 기달리기: "))<br /><br />

      print(minute, " 기다리겠습니다.")<br />
      time.sleep(minute)<br /><br />

      webbrowser.open("zoomlink")<br /><br />

      time.sleep(5)<br /><br />

      keyboard.press_and_release("left")<br />
      keyboard.press_and_release("enter")<br /><br />

      time.sleep(5)<br /><br />

      keyboard.write("20221004")<br />
      keyboard.press_and_release("enter")
    </code>

    <QuadSpace />

    <BeforeNextButton flink="spam" slink="keyboard" />

    <QuadSpace />
  </div>
</template>

<script>
  export default {
    name: "AutoZoomPage"
  }
</script>
