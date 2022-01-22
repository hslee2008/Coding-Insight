<template>
  <v-app dark>
    <Fab></Fab>

    <v-navigation-drawer
      v-model="drawer"
      :collapsed="collapsed"
      temporary
      fixed
      app
      width="300"
    >
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
    </v-navigation-drawer>

    <v-app-bar :collapse="collapsed" fixed app>
      <template v-if="$nuxt.$route.path != '/' && $nuxt.$route.path != '/app'">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="collapsed = !collapsed">
          <v-icon>{{
            'mdi-arrow-collapse-' + (collapsed ? 'right' : 'left')
          }}</v-icon>
        </v-btn>
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
      temporary
      fixed
      style="padding: 10px; display: flex"
      ><v-row>
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
            <a href="https://coding-insight.com/c-cpp/korean/c.html">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark> mdi-language-c </v-icon>
              </v-btn>
            </a>
            <a href="https://coding-insight.com/c-cpp/korean/cpp.html">
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

      <br /><br />

      <v-footer
        :absolute="false"
        fixed
        style="display: flex; justify-content: flex-end; padding: 10px"
      >
        <v-row justify="center">
          <v-btn rounded href="/app">
            <v-icon left>mdi-home</v-icon> 홈으로 이동
          </v-btn>
        </v-row>
      </v-footer>
    </v-navigation-drawer>

    <v-footer
      :absolute="false"
      style="display: flex; justify-content: flex-end; padding: 10px"
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

export default {
  name: 'DefaultLayout',
  data() {
    return {
      collapsed: false,
      drawer: false,
      fixed: false,
      items: {
        ...PythonLinks,
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
      if (!this.isEnglish())
        window.location =
          '/english/python' +
          ($nuxt.$route.path === '/'
            ? '/python'
            : $nuxt.$route.path.replace('/korean/python', ''));
      else window.location = $nuxt.$route.path == '/' ? '/index-en' : 'app-en';
    },
    toKorean() {
      if (this.isEnglish())
        window.location =
          '/korean/python' +
          ($nuxt.$route.path === '/'
            ? '/python'
            : $nuxt.$route.path.replace('/english/python', ''));
      else window.location = $nuxt.$route.path == '/index-en' ? '/' : 'app';
    },
  },
};
</script>
