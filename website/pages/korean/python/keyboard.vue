<template>
  <div>
    <div>
      <h2>키보드</h2>
      <p>
        키보드를 제어해보겠습니다.<br /><br />

        먼저 키보드 모듈을 설치하겠습니다.<br /><br />

        <code v-highlight class="python">pip install keyboard</code>
      </p>
    </div>

    <Header type="파이썬" num="87" title="키보드" />

    <div class="text-center">
      <h2>키보드로 문자 쓰기</h2>
    </div>
    키보드를 이용하여 'Python keyboard control'을 써보겠습니다.<br /><br />

    <code v-highlight class="python">
      import keyboard as key<br /><br />

      key.write("Python keyboard control")
    </code>

    <div class="text-center">
      <h2>키보드 누르기</h2>
    </div>
    키보드에서 shift(쉬프트), alt(알트), 그리고 ctrl(컨트롤) 키를 이용하기
    위하여 press_and_release() 메서드를 사용할 수 있습니다.<br /><br />

    <code v-highlight class="python">
      import keyboard as key<br /><br />

      key.press_and_relase("ctrl+alt+delete")
    </code>

    <Navigation bef="autozoom" aft="matplotlib" />
  </div>
</template>

<script>
  export default {
    page: 'KeyboardPage',
  };
</script>
