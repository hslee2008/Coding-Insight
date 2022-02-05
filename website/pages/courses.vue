<template>
  <div>
    <Header title="Courses" num="Complete List" />

    <QuadSpace />

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

    <QuadSpace />
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
