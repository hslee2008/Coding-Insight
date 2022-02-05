<template>
  <div>
    <br />

    <div>
      <p>
        C 언어에서 변수를 ++하면 1 증가합니다.<br /><br />

        C 언어에서 1번 진화한 코딩 언어라고 하여 Bjarne Stroustrup가 C++이라는
        이름을 붙였습니다.<br /><br />

        음악에서 #은 저번 음보다 더 높습니다. 그래서 C#이라는 코딩 언어가 C++과
        C언어보다 더 최신이라는 것을 보여줍니다.<br /><br />

        하지만 요즘 개발자들은 대부분 Rust라는 프로그래밍 언어에 관심을 두기
        시작했습니다.<br /><br />

        C 언어는 1973년에 만들어져서 지금 48세입니다.
      </p>
    </div>

    <QuadSpace />

    <Header title="C++" num="1" />

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>C 다음에는?</h2>
        <p>
          C 언어를 공부했다면 알고리즘을 배우면 좋지만 이를 배우기 전에 C++
          언어를 공부하면 좋습니다.<br /><br />

          C++은 C 언어를 한 번 더 발전시켰습니다.<br /><br />

          더 새롭게 추가된 기능이 있습니다.<br /><br />

          이를 차근차근 알아보겠습니다!
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="https://img.icons8.com/ios/452/c-plus-plus-logo.png"
          max-width="250px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>C++과 C 언어 중요한 차이</h2>
      </div>
      <div>
        <p>
          1. C 언어에 새로운 기능을 추가합니다 (객체 기능 - class)<br />
          2. C 언어는 키워드 32개를 가지고 있지만 C++은 63개입니다.<br />
          3. C는 malloc, calloc, free를 사용하지만 C++은 new, delete을
          사용합니다.<br /><br />

          C 언어보다 더 재미있을 것 같습니다! 전반적으로 C언어를 더 확장한
          프로그래밍 언어입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <NuxtLink aria-label="Go to Coding Insight Page" to="./io-cpp" style="text-decoration: none; float: right">
        <v-btn aria-label="Coding Insight Button" class="ma-2" outlined>
          Next<v-icon right> mdi-arrow-right-circle-outline </v-icon>
        </v-btn>
      </NuxtLink>
    </div>

    <QuadSpace />
  </div>
</template>
