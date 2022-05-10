<template>
  <div>
    <div>
      <h2>로그인 프로그램</h2>
      <p>
        파이썬을 사용해서 암호 로그인 프로그램을 만들어 보겠습니다!<br /><br />

        먼저 시작하기 전에 조건문의 개념을 알아야 합니다. 이 페이지에서 간단히
        소개하겠지만 더 자세히 알고 싶으면
        <NuxtLink :aria-label="allink" to="./if">조건문 페이지</NuxtLink>를
        확인하세요!
      </p>
    </div>

    <Header type="파이썬" num="Proj: 2" title="암호 프로그램" />

    <div>
      <h2>프로그램 설명</h2>
      <p>
        1. 사용자에게 암호를 물어본다.<br />
        2. 진짜 암호와 사용자가 입력한 암호와 같다면 로그인
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>코드 설명</h2>
      <div>
        1) 사용자에게 암호를 맞추라고 물어봅니다.<br /><br />
        <code v-highlight class="python"
          >guess = input("로그인하기 위한 암호: ")</code
        >
        2. 암호인지 비교하기 (진짜 암호: "password")<br /><br />
        <code v-highlight class="python">if (guess == "password")</code>
        3. 맞으면 login 출력, 아니면 not password 출력<br /><br />
        <code v-highlight class="python">
          if guess == "password":<br />
          &nbsp;&nbsp;print("login")<br />
          else:<br />
          &nbsp;&nbsp;print("not password")
        </code>
      </div>
    </div>

    <QuadSpace />

    <h2>코드 확인하기</h2>
    <iframe title="Trinket Python" :src="`${trinket}0b59c71a2d`" height="356" />

    <Navigation bef="stringmethod2" aft="escapechar" />
  </div>
</template>

`
