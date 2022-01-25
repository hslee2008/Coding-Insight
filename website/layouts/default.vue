<template>
  <v-app dark>
    <Fab></Fab>

    <v-navigation-drawer v-model="drawer" temporary fixed app width="300">
      <v-list v-if="$nuxt.$route.path.includes('python')">
        <h1 class="text-center">
          {{ isEnglish() ? 'Start Python' : '파이썬 시작' }}
        </h1>

        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('start_python')]"
          :key="englishValue(i.toString() + 'start_python')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Python Basics' : '파이썬 기본' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('python_basics')]"
          :key="i.toString() + englishValue('python_basics')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Python Beginning' : '파이썬 초급' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('python_beginner')]"
          :key="i.toString() + englishValue('python_beginner')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Intermediate Python' : '파이썬 중급' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('intermediate_python')]"
          :key="i.toString() + englishValue('intermediate_python')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Advanced Python' : '파이썬 고급' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('advanced_python')]"
          :key="i.toString() + englishValue('advanced_python')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Python Specialist' : '파이썬 전문가' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('python_specialist')]"
          :key="i.toString() + englishValue('python_specialist')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Master Python' : '파이썬 머스터' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('master_python')]"
          :key="i.toString() + englishValue('master_python')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">
          {{ isEnglish() ? 'Last Python Step' : '파이썬 마지막 단계' }}
        </h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('python_god')]"
          :key="i.toString() + englishValue('python_god')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">{{ isEnglish() ? 'Other' : '기타' }}</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items[englishValue('other')]"
          :key="i.toString() + englishValue('other')"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list v-else-if="$nuxt.$route.path.includes('korean/rust')">
        <h1 style="text-align: center">Rust 시작</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.start_rust"
          :key="i.toString() + 'start_rust'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list v-else-if="$nuxt.$route.path.includes('korean/c-cpp')">
        <h1 style="text-align: center">C 시작</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.start_c"
          :key="i.toString() + 'start_c'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app collapse-on-scroll rounded>
      <template
        v-if="
          $nuxt.$route.path != '/index-en' &&
          $nuxt.$route.path != '/' &&
          !$nuxt.$route.path != '/app' &&
          !$nuxt.$route.path != '/app-en'
        "
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
        <v-toolbar-title v-text="title" />
      </template>
      <v-spacer />
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

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
        <v-icon>mdi-search-web</v-icon>
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
                <v-icon dark right> mdi-language-python </v-icon>
              </v-btn>
              <v-btn class="ma-2" color="primary" dark to="/korean/python/quiz">
                Quiz
                <v-icon dark right> mdi-chat-question </v-icon>
              </v-btn>
              <v-btn
                class="ma-2"
                color="primary"
                dark
                to="/korean/python/video"
              >
                Video
                <v-icon dark right> mdi-youtube </v-icon>
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
                  <v-icon dark right> mdi-language-c </v-icon>
                </v-btn>
              </a>
              <a href="/korean/c-cpp/cpp">
                <v-btn class="ma-2" color="primary" dark>
                  <v-icon dark right> mdi-language-cpp </v-icon></v-btn
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
                  <v-icon dark right> mdi-language-rust </v-icon>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-row></v-row
      >
      <v-row v-else="!isEnglish()">
        <v-card class="mx-auto" max-width="350">
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
            <NuxtLink to="/korean/python/">
              <v-btn class="ma-2" color="primary" dark>
                파이썬
                <v-icon dark right> mdi-language-python </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/korean/python/quiz">
              <v-btn class="ma-2" color="primary" dark>
                퀴즈
                <v-icon dark right> mdi-chat-question </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/korean/python/video">
              <v-btn class="ma-2" color="primary" dark>
                비디오
                <v-icon dark right> mdi-youtube </v-icon>
              </v-btn>
            </NuxtLink>
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
            <a href="/korean/c-cpp/">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark> mdi-language-c </v-icon>
              </v-btn>
            </a>
            <a href="/korean/c-cpp/cpp">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark> mdi-language-cpp </v-icon></v-btn
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
      style="display: flex; justify-content: flex-end"
    >
      <v-row justify="center">
        <v-btn
          rounded
          href="https://github.com/HyunseungLee-Travis/Coding-Insight"
          icon
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          rounded
          href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
          icon
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          rounded
          href="https://docs.google.com/forms/d/e/1FAIpQLSezvUnfD8p2ngwlQHVzAdh6CYk-J-M8VbzSgUJLmKDmvisZGQ/viewform"
          icon
        >
          <v-icon>mdi-file-sign</v-icon>
        </v-btn>
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
      drawer: false,
      fixed: false,
      items: {
        ...PythonLinks,
        ...PythonLinksEN,
      },
      rightDrawer: false,
      title: !this.isEnglish()
        ? '파이썬 프로그래밍 언어'
        : 'Python Programming Language',
    };
  },
  mounted() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-209775586-1');
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
