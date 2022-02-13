<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" class="img-div" style="margin: 10px">
      <div style="margin: auto">
        <h1>Welcome to Coding-Insight</h1>
        <h2 style="font-size: 15px">
          프로그래밍을 배우고, 연습하고, 직접 프로젝트를 만들 수 있는 곳.
        </h2>
        <br />
        <v-btn aria-label="learn now" to="/courses" class="to-hide"
          >지금 프로그래밍 배우기</v-btn
        >
      </div>
      <div style="margin: auto">
        <v-img
          lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="/favicon.ico"
          max-width="200px"
        />
      </div>
    </v-row>

    <QuadSpace />

    <v-divider></v-divider>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h3>블록코딩을 넘어서 파이썬으로!</h3>

        엔트리라고 들어보신적 있으신가요? 엔트리는 블록코딩의 한 종류입니다.<br /><br />

        블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록 형식으로
        구성된 코딩 종류를 뜻합니다.<br /><br />

        사실 블록코딩으로는 직업을 가질 수 없고 이로 만들 수 있는 것은 매우
        재한적이기 때문에 텍스트 기반 프로그래밍 언어를 꼭 배워야 합니다.<br /><br />

        저희 사이트에는 파이썬, C, C++, 그리고 Rust 내용이 있습니다.
      </div>
    </div>

    <QuadSpace />

    <h3>모든 강좌 확인하기</h3>
    <br />
    <v-container>
      <v-row flex style="gap: 10px">
        <v-card class="mx-auto" max-width="350" min-width="100">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            class="white--text align-end"
            height="200px"
            src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
          >
            <v-card-title><h4>파이썬 프로그래밍 언어</h4></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            <h5 style="font-size: 15px">Python</h5></v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>
              파이썬은 대부분 초보자들이 처음으로 배우는 코딩 언어입니다. 매우
              배우기 쉽습니다! 파이썬으로 대부분 웹사이트를 만들거나 해킹을 주로
              합니다.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              class="ma-2"
              color="primary"
              dark
              to="/korean/python/"
            >
              <h5 style="font-size: 15px">파이썬</h5>
              <v-icon dark right> mdi-language-python </v-icon>
            </v-btn>
            <v-btn
              aria-label="Coding Insight Button"
              class="ma-2 to-hide"
              color="primary"
              dark
              to="/korean/python/quiz"
            >
              <h5 style="font-size: 15px">퀴즈</h5>
              <v-icon dark right> mdi-chat-question </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" min-width="100" max-width="350">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            class="white--text align-end"
            height="200px"
            src="https://i.stack.imgur.com/mWPIq.png"
          >
            <v-card-title><h4>C/C++ 프로그래밍 언어</h4></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            <h5 style="font-size: 15px">C/C++</h5></v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>
              C/C++는 매우 좋지 않는 환경에서도 잘 실행이 될 수 있는 매우 빠른
              코딩 언어입니다. 화성으로 올라간 로봇도 C언어로 코드되어 있습니다.
            </div>
          </v-card-text>

          <v-card-actions>
            <NuxtLink
              aria-label="Go to Coding Insight Page"
              to="/korean/c-cpp/"
            >
              <v-btn
                aria-label="Coding Insight Button"
                class="ma-2"
                color="primary"
                dark
              >
                <v-icon dark> mdi-language-c </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink
              aria-label="Go to Coding Insight Page"
              to="/korean/c-cpp/cpp"
            >
              <v-btn
                aria-label="Coding Insight Button"
                class="ma-2"
                color="primary"
                dark
              >
                <v-icon dark> mdi-language-cpp </v-icon></v-btn
              >
            </NuxtLink>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" min-width="100" max-width="350">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            class="white--text align-end"
            height="200px"
            src="https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1"
          >
            <v-card-title><h4>Rust 프로그래밍 언어</h4></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            <h5 style="font-size: 15px">Learn Rust</h5></v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>
              Rust 프로그래밍 언어는 매우 안정적이면서 C 언어처럼 빠릅니다!
              Mcirosoft, 아마존, 구글, 모질라 등 매우 큰 회사들은 다 기본 코딩
              언어를 C/C++에서 Rust로 전환하고 있습니다.
            </div>
          </v-card-text>

          <v-card-actions>
            <a href="/korean/rust/">
              <v-btn
                aria-label="Coding Insight Button"
                class="ma-2"
                color="primary"
                dark
              >
                <h5 style="font-size: 15px">Rust</h5>
                <v-icon dark right> mdi-language-rust </v-icon>
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>폰과 컴퓨터 앱 설치</h2>

        Coding-Insight 웹사이트를 오피라인에서도 활용하고 더 많이 배우기 위해서
        폰앱과 컴퓨터앱을 다운로드 받으세요!<br /><br />

        폰앱은 Flutter로 컴퓨터앱은 Progressive Web App으로 만들었습니다.<br /><br />

        <v-btn aria-label="Coding Insight Button" to="/app"
          ><v-icon>mdi-apps</v-icon> 앱 다운로드</v-btn
        >

        <br />
        <br />
      </div>
      <div style="margin: auto">
        <v-img
          lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: () => ({
    title: '홈페이지',
  }),
};
</script>

<style>
.titleDiv {
  background-image: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwY29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
  margin: 0 !important;
  padding: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  display: flex;
  align-content: center;
}

@media screen and (max-width: 390px) {
  .to-hide {
    display: none;
  }
}
</style>
