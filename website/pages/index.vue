<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" class="img-div" style="margin: 10px">
      <div style="margin: auto">
        <h1>
          Welcome to<br />
          <span class="titleforcodinginsight">Coding-Insight</span>
        </h1>
        <h2 style="color: grey">Learn, Practice, Build and Deploy</h2>
        <br />
        <v-btn to="/courses" color="rgb(0, 232, 219)" class="to-hide"
          >지금 배우기 <v-icon right>mdi-arrow-right-thin</v-icon></v-btn
        >
        <v-btn to="/index-en" class="to-hide"
          >In English<v-icon right>mdi-book-alphabet</v-icon></v-btn
        >
      </div>
    </v-row>

    <QuadSpace />

    <v-divider></v-divider>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h3>블록코딩을 넘어서 파이썬으로!</h3>

        <p>
          엔트리라고 들어보신적 있으신가요? 엔트리는 블록코딩의 한
          종류입니다.<br /><br />

          블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록 형식으로
          구성된 코딩 종류를 뜻합니다.<br /><br />

          사실 블록코딩으로는 직업을 가질 수 없고 이로 만들 수 있는 것은 매우
          재한적이기 때문에 텍스트 기반 프로그래밍 언어를 꼭 배워야 합니다.<br /><br />

          저희 사이트에는 파이썬, C, C++, 그리고 Rust 내용이 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <h3>모든 강좌 확인하기</h3>
    <br />
    <v-container>
      <v-row flex style="gap: 10px">
        <v-card class="mx-auto" max-width="350" min-width="100">
          <v-img
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

<style scoped>
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

.titleforcodinginsight {
  background: linear-gradient(45deg, #009dbf, #f8b622);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: no-wrap;
}

h1 {
  font-size: 60px;
}

@media screen and (max-width: 451px) {
  h1 {
    font-size: 40px;
  }
}
@media screen and (max-width: 313px) {
  h1 {
    font-size: 30px;
  }
}
@media screen and (max-width: 285px) {
  p,
  div {
    font-size: 10px;
  }
}
@media screen and (max-width: 247px) {
  h1 {
    font-size: 20px;
  }
}
</style>
