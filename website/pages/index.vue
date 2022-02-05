<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" class="img-div" style="margin: 10px">
      <div style="margin: auto">
        <h1>안녕하세요</h1>
        <h2>저희는 파이썬 팩토리입니다</h2>
      </div>
      <div style="margin: auto">
        <v-img
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
        <h2>블록코딩을 넘어서 파이썬으로!</h2>
        <p>
          엔트리라고 들어보신적 있으신가요? 엔트리는 블록코딩의 한
          종류입니다.<br /><br />

          블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록 형식으로
          구성된 코딩 종류를 뜻합니다.<br /><br />

          우리의 목적은 블록코딩을 끝내고 텍스트 기반 코딩을 배우고 싶은
          학생들을 위해 가장 쉬은 텍스트 코딩인 파이썬을 설명하는 사이트를
          만들기입니다.<br /><br />

          파이썬을 사용하면 엔트리에서 하지 못한 다양한 기능을 채엄할 수
          있습니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="200px"
        />
      </div>
    </div>

    <QuadSpace /><QuadSpace />

    <v-row flex style="gap: 10px">
      <v-card class="mx-auto" max-width="350" min-width="250">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
        >
          <v-card-title>파이썬 프로그래밍 언어</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Python </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            파이썬은 대부분 초보자들이 처음으로 배우는 코딩 언어입니다. 매우
            배우기 쉽습니다!
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
            파이썬
            <v-icon dark right> mdi-language-python </v-icon>
          </v-btn>
          <v-btn
            aria-label="Coding Insight Button"
            class="ma-2"
            color="primary"
            dark
            to="/korean/python/quiz"
          >
            퀴즈
            <v-icon dark right> mdi-chat-question </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" min-width="250" max-width="350">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://i.stack.imgur.com/mWPIq.png"
        >
          <v-card-title>C/C++ 프로그래밍 언어</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> C/C++ </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            C/C++는 매우 좋지 않는 환경에서도 잘 실행이 될 수 있는 매우 빠른
            코딩 언어입니다.
          </div>
        </v-card-text>

        <v-card-actions>
          <NuxtLink aria-label="Go to Coding Insight Page" to="/korean/c-cpp/">
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

      <v-card class="mx-auto" min-width="250" max-width="350">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1"
        >
          <v-card-title>Rust 프로그래밍 언어</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Rust </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Rust 프로그래밍 언어는 매우 안정적이면서 C 언어처럼 빠릅니다!
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
              Rust
              <v-icon dark right> mdi-language-rust </v-icon>
            </v-btn>
          </a>
        </v-card-actions>
      </v-card>
    </v-row>

    <QuadSpace /><QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>폰과 컴퓨터 앱 설치</h2>
        <p>
          React Native와 Flutter라는 프레임워크를 사용해서 폰 앱도 있습니다!<br /><br />

          파이썬 코딩 언어를 사용해서 컴퓨터 앱도 만들었습니다.<br /><br />

          <v-btn aria-label="Coding Insight Button" to="/app"
            ><v-icon>mdi-apps</v-icon> 앱 다운로드</v-btn
          >
        </p>
      </div>
      <div style="margin: auto">
        <v-img
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
    title: '홈',
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
</style>
