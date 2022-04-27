<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>GTTS란?</h2>
        <p>
          GTTS는 문자를 컴퓨터가 말하게 만들 수 있는 기능을 가지고 있습니다.<br /><br />

          이번 시간에는 컴퓨터에서 컴퓨터가 말하게 만들어 보겠습니다!<br /><br />

          먼저, GTTS를 설치하기 위해서 다음 코드를 실행하세요.<br /><br />

          <code v-highlight class="python"> pip install gtts </code>
        </p>
      </div>

      <div class="ma-auto">
        <GlobalImage
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <Header type="파이썬" num="92" title="gTTS" />

    <div>
      <div class="ma-auto">
        <h2>GTTS 커맨드</h2>
        <p>
          터미널을 키고 다음 코드를 실행하세요.<br /><br />

          <code v-highlight class="python"> gtts-cli 'hello' --output hello.mp3 </code>

          위의 코드를 실행하면 hellp.mp3라는 새로운 파일이 만들어 집니다.<br /><br />

          hello.mp3를 실행하면 컴퓨터 목소리가 'hello'를 말하는 것을 들을 수
          있습니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3KdHlOrP57mvh0acecpA8XLZeSJSWODuxg&usqp=CAU"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>파이썬</h2>
        <p>
          파이썬에서 GTTS를 사용하겠습니다.<br /><br />

          <code v-highlight class="python">
            from gtts import gTTS<br /><br />

            tts = gTTS('Python is awsome', lang="en")<br />
            tts.save("hello.mp3")
          </code>

          gTTS()를 사용해서 컴퓨터가 말하는 오디오를 만들었습니다.<br /><br />

          tts.save()를 실행해서 mp3 파일 안에 저장했고 그 파일을 실행하면
          컴퓨터가 'Python is awsome'을 말하는 것을 들을 수 있습니다.
        </p>
      </div>
    </div>

    <Navigation bef="pandas" aft="finished" />
  </div>
</template>
