<template>
  <v-app dark>
    <Fab></Fab>

    <v-navigation-drawer v-model="drawer" temporary fixed app width="300">
      <v-list v-if="$nuxt.$route.path.includes('python')">
        <ItemList
          v-for="item in python_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>

      <v-list v-else-if="$nuxt.$route.path.includes('korean/rust')">
        <ItemList titleen="Rust Start" titlekr="Rust 시작" json="start_rust" />
      </v-list>

      <v-list v-else-if="$nuxt.$route.path.includes('korean/c-cpp')">
        <ItemList
          v-for="item in c_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app collapse-on-scroll>
      <template
        v-if="
          $nuxt.$route.path != '/index-en' &&
          $nuxt.$route.path != '/' &&
          $nuxt.$route.path != '/app' &&
          $nuxt.$route.path != '/app-en'
        "
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <template
        v-if="
          $nuxt.$route.path != '/index-en' &&
          $nuxt.$route.path != '/' &&
          $nuxt.$route.path != '/app' &&
          $nuxt.$route.path != '/app-en'
        "
      >
        <v-toolbar-title v-text="title" />
      </template>
      <v-spacer />

      <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
      <v-menu
        v-if="
          !$nuxt.$route.path.includes('rust') &&
          !$nuxt.$route.path.includes('c-cpp')
        "
        open-on-hover
        top
        offset-y
        auto
        close-on-click
        rounded
        transition="slide-y-transition"
      >
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click.stop="toKorean">
            <v-list-item-title>한국어</v-list-item-title>
          </v-list-item>
          <v-list-item @click.stop="toEnglish">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-school</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      :bottom="true"
      width="80%"
      fixed
      temporary
      style="padding: 10px; display: flex"
    >
      <v-row v-if="isEnglish()">
        <v-row flex style="gap: 10px">
          <v-card class="mx-auto" max-width="450" min-width="350">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
            >
              <v-card-title>Python</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Python </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Python is a language for beginners! You can learn the basics
                right now this instant in under 10 minutes.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn class="ma-2" color="primary" dark to="/korean/python/">
                Python
                <v-icon> mdi-language-python </v-icon>
              </v-btn>
              <v-btn class="ma-2" color="primary" dark to="/korean/python/quiz">
                Quiz
                <v-icon> mdi-chat-question </v-icon>
              </v-btn>
              <v-btn
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
              class="white--text align-end"
              height="200px"
              src="https://i.stack.imgur.com/mWPIq.png"
            >
              <v-card-title>C/C++</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> C/C++ </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Anything can run C/C++ even though there are very limited
                resources.
              </div>
            </v-card-text>

            <v-card-actions>
              <a href="/korean/c-cpp/">
                <v-btn class="ma-2" color="primary" dark>
                  <v-icon> mdi-language-c </v-icon>
                </v-btn>
              </a>
              <a href="/korean/c-cpp/cpp">
                <v-btn class="ma-2" color="primary" dark>
                  <v-icon> mdi-language-cpp </v-icon></v-btn
                >
              </a>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto" min-width="250" max-width="350">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1"
            >
              <v-card-title>Rust</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Rust </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Rust is very safe and efficient. Most major companies are using
                Rust as their secondary or main programmming language.
              </div>
            </v-card-text>

            <v-card-actions>
              <a href="/korean/c-cpp/">
                <v-btn class="ma-2" color="primary" dark>
                  Rust
                  <v-icon> mdi-language-rust </v-icon>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-row></v-row
      >
      <v-row v-else flex style="gap: 10px">
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
            <v-btn class="ma-2" color="primary" dark to="/korean/python/">
              파이썬
              <v-icon dark right> mdi-language-python </v-icon>
            </v-btn>
            <v-btn class="ma-2" color="primary" dark to="/korean/python/quiz">
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
            <NuxtLink to="/korean/c-cpp/">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark> mdi-language-c </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/korean/c-cpp/cpp">
              <v-btn class="ma-2" color="primary" dark>
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
              <v-btn class="ma-2" color="primary" dark>
                Rust
                <v-icon dark right> mdi-language-rust </v-icon>
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-navigation-drawer>

    <v-footer
      :absolute="false"
      style="display: flex; justify-content: flex-end; padding: 10px"
    >
      <v-row justify="center" style="margin: 5px">
        <v-btn
          rounded
          href="https://github.com/HyunseungLee-Travis/Coding-Insight"
          target="_blank"
          icon
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          rounded
          href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
          target="_blank"
          icon
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          rounded
          href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
          target="_blank"
          icon
        >
          <v-icon>mdi-microsoft-visual-studio-code</v-icon>
        </v-btn>
        <v-btn
          rounded
          href="https://docs.google.com/forms/d/e/1FAIpQLSezvUnfD8p2ngwlQHVzAdh6CYk-J-M8VbzSgUJLmKDmvisZGQ/viewform"
          target="_blank"
          icon
        >
          <v-icon>mdi-file-sign</v-icon>
        </v-btn>
        <br />
      </v-row>
      <div>
        Python-Factory &copy; {{ new Date().getFullYear() }} (Hyunseung, Juha,
        Gun)
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import PythonLinks from './layout';
import PythonLinksEN from './layout_en';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      python_items: [
        {
          titleen: 'Start Python',
          titlekr: '파이썬 시작',
          json: 'start_python',
        },
        {
          titleen: 'Python Basics',
          titlekr: '파이썬 기본',
          json: 'python_basics',
        },

        {
          titleen: 'Python Beginning',
          titlekr: '파이썬 초급',
          json: 'python_beginner',
        },
        {
          titleen: 'Intermediate Python',
          titlekr: '파이썬 중급',
          json: 'intermediate_python',
        },
        {
          titleen: 'Advanced Python',
          titlekr: '파이썬 고급',
          json: 'advanced_python',
        },
        {
          titleen: 'Python Specialist',
          titlekr: '파이썬 전문가',
          json: 'python_specialist',
        },
        {
          titleen: 'Master Python',
          titlekr: '파이썬 마스터',
          json: 'master_python',
        },
        {
          titleen: 'Last Step',
          titlekr: '마지막 단계',
          json: 'python_god',
        },
        {
          titleen: 'Other',
          titlekr: '기타',
          json: 'other',
        },
      ],
      c_items: [
        {
          titleen: 'Starting C Programming',
          titlekr: 'C 언어 시작',
          json: 'start_c',
        },
        {
          titleen: 'Beginning C Programming',
          titlekr: 'C 언어 기본',
          json: 'c_basics',
        },
        {
          titleen: 'Intermediate C Programming',
          titlekr: 'C 언어 중급',
          json: 'c_intermediate',
        },
        {
          titleen: 'Advanced C Programming',
          titlekr: 'C 언어 고급',
          json: 'c_advanced',
        },
        {
          titleen: 'Starting C++ Programming',
          titlekr: 'C++ 언어 시작',
          json: 'start_cpp',
        },
        {
          titleen: 'C++ Programming Basics',
          titlekr: 'C++ 언어 기본',
          json: 'cpp_basics',
        },
      ],
      drawer: false,
      fixed: false,
      items: {
        ...PythonLinks,
        ...PythonLinksEN,
      },
      rightDrawer: false,
      title: !this.isEnglish() ? '코딩 인사이트' : 'Coding - Insight',
    };
  },
  methods: {
    isEnglish() {
      return (
        this.$nuxt.$route.path.includes('english') ||
        this.$nuxt.$route.path.includes('-en')
      );
    },
    englishValue(a) {
      return this.isEnglish() ? a + '_en' : a;
    },
    toEnglish() {
      switch ($nuxt.$route.path) {
        case '/':
          window.location = '/index-en';
          break;
        case '/app':
          window.location = '/app-en';
          break;
        case '/index-en':
          window.location = '/index-en';
          break;
        case '/app-en':
          window.location = '/app-en';
          break;
        default:
          window.location =
            '/english/python' +
            ($nuxt.$route.path === '/'
              ? '/python'
              : $nuxt.$route.path.replace('/korean/python', ''));
          break;
      }
    },
    toKorean() {
      switch ($nuxt.$route.path) {
        case '/':
          window.location = '/';
          break;
        case '/app':
          window.location = '/app';
          break;
        case '/index-en':
          window.location = '/';
          break;
        case '/app-en':
          window.location = '/app';
          break;
        default:
          window.location =
            '/korean/python' +
            ($nuxt.$route.path === '/'
              ? '/python'
              : $nuxt.$route.path.replace('/english/python', ''));
          break;
      }
    },
  },
};
</script>
