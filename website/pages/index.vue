<template>
  <div>
    <v-row flex justify="center" style="margin: 10px">
      <div class="ma-auto">
        <h1>
          Welcome to<br />
          <span class="titleforcodinginsight">Coding-Insight</span>
        </h1>
        <h2 class="grey--text">Learn, Practice, Build and Deploy</h2>

        <br />

        <v-btn
          :aria-label="albutt"
          block
          to="/courses"
          color="primary"
          class="my-3"
        >
          지금 배우기 <v-icon right>mdi-arrow-right-thin</v-icon>
        </v-btn>
      </div>
    </v-row>

    <QuadSpace />

    <v-divider />

    <QuadSpace />

    <v-card class="ma-auto">
      <v-card-text>
        <h3>블록코딩을 넘어서 파이썬으로!</h3>
        <v-row style="margin: 1px">
          <div class="text--primary">
            엔트리라고 들어보신적 있으신가요? 엔트리는 블록코딩의 한
            종류입니다.<br /><br />

            블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록
            형식으로 구성된 코딩 종류를 뜻합니다.<br /><br />

            사실 블록코딩으로는 직업을 가질 수 없고 이로 만들 수 있는 것은 매우
            재한적이기 때문에 텍스트 기반 프로그래밍 언어를 꼭 배워야 합니다.<br /><br />

            저희 사이트에는 파이썬, C, C++, 그리고 Rust 내용이 있습니다.
          </div>

          <v-avatar style="margin: auto" size="150px">
            <v-img
              src="data:image/png;base64,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"
            />
          </v-avatar>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :aria-label="albutt"
          text
          color="teal accent-4"
          href="https://playentry.org/"
        >
          엔트리 웹사이트
        </v-btn>
      </v-card-actions>
    </v-card>

    <QuadSpace />
    <QuadSpace />

    <h3>모든 강좌 확인하기</h3>
    <br />
    <v-row flex style="gap: 20px">
      <v-card class="ma-auto" max-width="350" min-width="100">
        <v-img
          class="white--text align-end"
          height="200"
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
            :aria-label="albutt"
            color="primary"
            class="ml-2"
            to="/korean/python/"
          >
            <h5 style="font-size: 15px">파이썬</h5>
            <v-icon dark right> mdi-language-python </v-icon>
          </v-btn>
          <v-btn
            :aria-label="albutt"
            color="primary"
            class="ml-2"
            to="/korean/python/quiz"
          >
            <h5 style="font-size: 15px">퀴즈</h5>
            <v-icon dark right> mdi-chat-question </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="ma-auto" min-width="100" max-width="350">
        <v-img
          class="white--text align-end"
          height="200"
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
          <v-btn
            :aria-label="albutt"
            color="primary"
            to="/korean/c-cpp/"
            class="ml-2"
          >
            <v-icon dark> mdi-language-c </v-icon>
          </v-btn>
          <v-btn
            :aria-label="albutt"
            color="primary"
            to="/korean/c-cpp/cpp"
            class="ml-2"
          >
            <v-icon dark> mdi-language-cpp </v-icon></v-btn
          >
        </v-card-actions>
      </v-card>

      <v-card class="ma-auto" min-width="100" max-width="350">
        <v-img
          class="white--text align-end"
          height="200"
          src="https://csiac.org/wp-content/uploads/bb-plugin/cache/Rust-Based-Programming-Language-panorama.png"
        >
          <v-card-title><h4>Rust 프로그래밍 언어</h4></v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          <h5 style="font-size: 15px">Learn Rust</h5></v-card-subtitle
        >

        <v-card-text class="text--primary">
          <div>
            Rust 프로그래밍 언어는 매우 안정적이면서 C 언어처럼 빠릅니다!
            Mcirosoft, 아마존, 구글, 모질라 등 모두 Rust를 사용합니다.
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            :aria-label="albutt"
            color="primary"
            to="/korean/rust/"
            class="ml-2"
          >
            <h5 style="font-size: 15px">Rust</h5>
            <v-icon dark right> mdi-language-rust </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

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
  .titleforcodinginsight {
    background: linear-gradient(45deg, #3770a0, #ffd040);
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
