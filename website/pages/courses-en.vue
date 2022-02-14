<template>
  <div>
    <Header-en type="" title="Courses" num="Complete List" />

    <QuadSpace />

    <v-row flex style="gap: 10px">
      <v-card class="mx-auto" max-width="450" min-width="350">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          class="white--text align-end"
          height="200px"
          src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
        >
          <v-card-title>Python</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Python </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Python is a language for beginners! You can learn the basics right
            now this instant in under 10 minutes.
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
            Python
            <v-icon> mdi-language-python </v-icon>
          </v-btn>
          <v-btn
            aria-label="Coding Insight Button"
            class="ma-2"
            color="primary"
            dark
            to="/korean/python/quiz"
          >
            Quiz
            <v-icon> mdi-chat-question </v-icon>
          </v-btn>
          <v-btn
            aria-label="Coding Insight Button"
            class="ma-2"
            color="primary"
            dark
            to="/korean/python/video"
          >
            Video
            <v-icon> mdi-youtube </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" min-width="250" max-width="350">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          class="white--text align-end"
          height="200px"
          src="https://i.stack.imgur.com/mWPIq.png"
        >
          <v-card-title>C/C++</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> C/C++ </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Anything can run C/C++ even though there are very limited resources.
          </div>
        </v-card-text>

        <v-card-actions>
          <a href="/korean/c-cpp/">
            <v-btn
              aria-label="Coding Insight Button"
              class="ma-2"
              color="primary"
              dark
            >
              <v-icon> mdi-language-c </v-icon>
            </v-btn>
          </a>
          <a href="/korean/c-cpp/cpp">
            <v-btn
              aria-label="Coding Insight Button"
              class="ma-2"
              color="primary"
              dark
            >
              <v-icon> mdi-language-cpp </v-icon></v-btn
            >
          </a>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" min-width="250" max-width="350">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          class="white--text align-end"
          height="200px"
          src="https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1"
        >
          <v-card-title>Rust</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Rust </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Rust is very safe and efficient. Most major companies are using Rust
            as their secondary or main programmming language.
          </div>
        </v-card-text>

        <v-card-actions>
          <a href="/korean/c-cpp/">
            <v-btn
              aria-label="Coding Insight Button"
              class="ma-2"
              color="primary"
              dark
            >
              Rust
              <v-icon> mdi-language-rust </v-icon>
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
  name: 'CoursesENPage',
  head: () => ({
    title: 'Courses',
  }),
};
</script>
