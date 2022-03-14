<template>
  <div>
    <br /><br />

    <v-row flex justify="center" class="img-div" style="margin: 10px">
      <div class="mx-auto my-auto">
        <h1>
          Welcome to<br />
          <span class="titleforcodinginsight">Coding-Insight</span>
        </h1>
        <h2 style="color: grey">Learn, Practice, Build and Deploy</h2>
        <br />
        <v-btn
          aria-label="Coding Insight Button"
          to="/courses"
          color="primary"
          class="my-3"
          >지금 배우기 <v-icon right>mdi-arrow-right-thin</v-icon></v-btn
        >
        <v-btn aria-label="Coding Insight Button" to="/index-en" class="my-3">
          In English<v-icon right>mdi-book-alphabet</v-icon>
        </v-btn>
      </div>
    </v-row>

    <QuadSpace />

    <v-divider></v-divider>

    <QuadSpace />

    <v-card class="mx-auto my-auto">
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
          <v-avatar style="margin: auto" size="150px"
            ><v-img
              src="data:image/png;base64,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" /></v-avatar
        ></v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn
          aria-label="Coding Insight Button"
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

    <v-card-title>Coding-Insight에서 배우기</v-card-title>
    <v-row style="gap: 50px" class="mx-auto my-auto">
      <div style="width: 290px" class="d-flex">
        <img src="~/assets/img/learn.svg" alt="learn" style="margin: auto" />

        <div>
          <v-card-title>배우기</v-card-title>
          <v-card-text>
            쉽고 재미있는 설명으로<br />
            코딩을 배우세요!
          </v-card-text>
        </div>
      </div>

      <div style="width: 290px" class="d-flex">
        <img
          src="~/assets/img/zeroconfig.svg"
          alt="zeroconfig"
          style="margin: auto"
        />

        <div>
          <v-card-title>바로 시작하기</v-card-title>
          <v-card-text>
            설치 필요 없이<br />
            사이트에서 바로 시작!
          </v-card-text>
        </div>
      </div>

      <div style="width: 290px" class="d-flex">
        <img
          src="~/assets/img/diverse.svg"
          alt="diverse"
          style="margin: auto"
        />

        <div>
          <v-card-title>3개의 언어</v-card-title>
          <v-card-text>
            파이썬, C/C++, Rust<br />
            프로그래밍 언어
          </v-card-text>
        </div>
      </div>

      <div style="width: 290px" class="d-flex">
        <img
          src="~/assets/img/project.svg"
          alt="project"
          style="margin: auto"
        />

        <div>
          <v-card-title>프로젝트로</v-card-title>
          <v-card-text>
            프로젝트를 만들며<br />
            배우고 실행하세요!
          </v-card-text>
        </div>
      </div>

      <div style="width: 290px" class="d-flex">
        <img src="~/assets/img/inf.svg" alt="inf" style="margin: auto" />

        <div>
          <v-card-title>0부터 무한까지</v-card-title>
          <v-card-text>
            사이트에서 시작해서<br />
            무한대의 코딩 배우기
          </v-card-text>
        </div>
      </div>

      <div style="width: 290px" class="d-flex">
        <img src="~/assets/img/eng.svg" alt="eng" style="margin: auto" />

        <div>
          <v-card-title>영어로까지!</v-card-title>
          <v-card-text> 영어로까지 배우기<br /> </v-card-text>
        </div>
      </div>
    </v-row>

    <QuadSpace />
    <QuadSpace />

    <h3>모든 강좌 확인하기</h3>
    <br />
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
            class="ml-2 to-hide"
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
  name: 'IndexPage',
  head: () => ({
    title: '홈페이지',
  }),
  data() {
    return {
      slides: [
        {
          img: 'https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1',
          logo: 'data:image/png;base64,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',
          text: 'Rust',
          quote:
            'Rust is a new programming language that is designed to be fast, safe, and secure. Rust 프로그래밍 언어는 속도, 안전, 보안을 집중적으로 개선하여 제작되었습니다. 윈도우 10에서 일부 코드를 C++에서 Rust 언어로 바꾸었더니 매우 큰 보안 문제 8개가 자동으로 Rust의 메모리 관리 프로그램으로 해결되었습니다. ',
        },
        {
          img: 'https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg',
          logo: 'data:image/jpeg;base64,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',
          text: '파이썬',
          quote:
            '파이썬은 세상에서 가장 쉽고 간단한 언어로 텍스트 코딩 언어를 처음으로 접한 사람들을 위한 코딩 언어입니다. 쉽기도 하면서 웹사이트 만들기, 해킹하기, 게임 만들기, 앱 만들기 등 다양한 분야에서 사용할 수 있습니다. ',
        },
        {
          img: 'https://blog.udemy.com/wp-content/uploads/2014/05/shutterstock_100574980.jpg',
          logo: 'data:image/png;base64,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',
          text: 'C/C++',
          quote:
            '빠르고 간단한 프로그래밍 언어로 요즘 대부분 기기 또는 하드웨어의 코어 언어입니다. 이 언어를 공부하지 않고 프로그래머라고 할 수 없을 정도로 중요한데 파이썬 프로그래밍 언어에서 자동으로 하는 일의 원리를 아는 목적으로 대부분 사람들이 이 언어를 공부하고 있습니다.',
        },
      ],
    };
  },
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
