<template>
  <div>
    <Header type="" title="Courses" num="Complete List" />

    <v-row flex style="gap: 20px">
      <v-card class="mx-auto my-auto" max-width="350" min-width="100">
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
            aria-label="Coding Insight Button"
            color="primary"
            class="ml-2"
            to="/korean/python/"
          >
            <h5 style="font-size: 15px">파이썬</h5>
            <v-icon dark right> mdi-language-python </v-icon>
          </v-btn>
          <v-btn
            aria-label="Coding Insight Button"
            color="primary"
            class="ml-2"
            to="/korean/python/quiz"
          >
            <h5 style="font-size: 15px">퀴즈</h5>
            <v-icon dark right> mdi-chat-question </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto my-auto" min-width="100" max-width="350">
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
            aria-label="Coding Insight Button"
            color="primary"
            to="/korean/c-cpp/"
            class="ml-2"
          >
            <v-icon dark> mdi-language-c </v-icon>
          </v-btn>
          <v-btn
            aria-label="Coding Insight Button"
            color="primary"
            to="/korean/c-cpp/cpp"
            class="ml-2"
          >
            <v-icon dark> mdi-language-cpp </v-icon></v-btn
          >
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto my-auto" min-width="100" max-width="350">
        <v-img
          class="white--text align-end"
          height="200"
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
            Mcirosoft, 아마존, 구글, 모질라 등 모두 Rust를 사용합니다.
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            aria-label="Coding Insight Button"
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
  </div>
</template>

<script>
  export default {
    name: 'CoursesPage',
    head: () => ({
      title: 'Courses',
    }),
  };
</script>
