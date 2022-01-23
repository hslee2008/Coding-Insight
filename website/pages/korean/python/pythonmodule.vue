<template>
  <div>
    <br />

    <Header num="42" title="파이썬 모듈"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>TIME 모듈 - sleep()</h1>
        <p>
          파이썬 코드를 3초 멈추게 하기 위해 'time.sleep(3)' 메서드를 사용할 수 있습니다.
        </p>
      </div>
      <iframe
src="https://trinket.io/embed/python3/cf2c9fad50" width="100%" height="358" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div style="padding: 10px;">
          <h1>OS</h1>
          <p>
          <h2>OS란?</h2>
          OS는 컴퓨터의 소프트웨어 이름을 뜻합니다.<br /><br />
          우리의 컴퓨터를 원하는 만큼 제어를 할 수 있습니다.<br /><br />
          <code>import os</code>
          <h2>OS - 파이썬 터미널 깨끗이 만들기</h2>
          가끔 파이썬 코드를 실행하며 많이 더러워지고 스크린에 너무 많은 정보가 쌓일 수 있습니다.<br /><br />
          이때, 터미널에 있는 모든 내용을 다 깨끗이 없애겠습니다.<br /><br />
          컴퓨터에 따라서 clear 또는 cls 일 수도 있습니다.
          </p>
        </div>
        <iframe
src="https://trinket.io/embed/python3/63f69099ff" width="100%" height="356" frameborder="0"
          marginwidth="0" marginheight="0" allowfullscreen loading="lazy"
          style="margin: auto;"></iframe>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton flink="hacking" slink="date" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'PythonModulePage',
}
</script>
