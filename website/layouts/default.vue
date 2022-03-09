<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app width="300">
      <v-list
        v-if="
          $nuxt.$route.path.includes('python') ||
          $nuxt.$route.path.includes('courses')
        "
      >
        <ItemList
          v-for="item in python_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>

      <v-list
        v-if="
          $nuxt.$route.path.includes('english/python') ||
          $nuxt.$route.path.includes('courses-en')
        "
      >
        <ItemList
          v-for="item in python_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>

      <v-list
        v-else-if="
          $nuxt.$route.path.includes('korean/rust') ||
          $nuxt.$route.path.includes('courses')
        "
      >
        <ItemList
          v-for="item in rust_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>

      <v-list
        v-else-if="
          $nuxt.$route.path.includes('korean/c-cpp') ||
          $nuxt.$route.path.includes('courses')
        "
      >
        <ItemList
          v-for="item in c_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            elevation="0"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            class="to-show"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div style="padding: 10px">
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
                <v-btn
                  aria-label="Coding Insight Button"
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
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
            <template
              v-if="
                $nuxt.$route.path != '/index-en' && $nuxt.$route.path != '/'
              "
            >
              <v-btn
                aria-label="Coding Insight Button"
                @click.stop="drawer = !drawer"
                icon
                ><v-icon>mdi-menu</v-icon></v-btn
              >
            </template>
            <v-btn
              aria-label="Coding Insight Button"
              icon
              @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
            >
              <v-icon>mdi-brightness-6</v-icon>
            </v-btn>
            <v-btn aria-label="Coding Insight Button" @click="gotoHome" icon
              ><v-icon>mdi-home</v-icon></v-btn
            >
            <v-btn aria-label="Coding Insight Button" @click="gotoCourses" icon
              ><v-icon>mdi-school</v-icon></v-btn
            >
          </div>
          <v-subheader>Team</v-subheader>
          <v-list-item
            v-for="tile in ttiles"
            :key="tile.title"
            @click="
              sheet = false;
              $nuxt.$router.push(tile.url);
            "
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <v-icon>{{ 'mdi-' + tile.img }}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>

      <template
        v-if="$nuxt.$route.path != '/index-en' && $nuxt.$route.path != '/'"
      >
        <v-btn
          aria-label="Coding Insight Button"
          @click.stop="drawer = !drawer"
          icon
          ><v-icon>mdi-menu</v-icon></v-btn
        >
      </template>

      <v-toolbar-title
        ><v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              aria-label="Coding Insight Button"
              style="display: flex; text-align: center"
              @click="$router.push('/')"
              v-bind="attrs"
              v-on="on"
            >
              <img src="~/assets/img/logo.svg" alt="SVG Logo" />
            </v-btn>
          </template>
          <span>Coding-Insight (Home)</span>
        </v-tooltip>
      </v-toolbar-title>

      <v-spacer />

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            v-bind="attrs"
            v-on="on"
            elevation="0"
            class="to-hide"
          >
            Courses <v-icon right>mdi-school</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item style="gap: 10px">
            <v-list-item-title
              ><v-btn aria-label="Coding Insight Button" to="/korean/python"
                ><v-icon left>mdi-language-python</v-icon>Python</v-btn
              ></v-list-item-title
            >
            <v-divider vertical></v-divider>
            <v-list-item-title
              ><v-btn aria-label="Coding Insight Button" to="/korean/c-cpp"
                ><v-icon left>mdi-language-c</v-icon>C/C++</v-btn
              ></v-list-item-title
            >
            <v-divider vertical></v-divider>
            <v-list-item-title
              ><v-btn aria-label="Coding Insight Button" to="/korean/rust"
                ><v-icon left>mdi-language-rust</v-icon>Rust</v-btn
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            class="to-hide"
            v-bind="attrs"
            v-on="on"
            elevation="0"
          >
            About <v-icon right>mdi-information</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item style="gap: 10px">
            <v-list-item-title
              ><v-btn aria-label="Coding Insight Button" to="/about"
                ><v-icon left>mdi-microsoft-teams</v-icon>Team</v-btn
              ></v-list-item-title
            >
            <v-divider vertical></v-divider>
            <v-list-item-title
              ><v-btn
                aria-label="Coding Insight Button"
                href="https://www.youtube.com/watch?v=ya7Ud1tTpag"
                target="_blank"
                ><v-icon left>mdi-video</v-icon>Intro</v-btn
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            icon
            v-bind="attrs"
            v-on="on"
            @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
            class="to-hide"
          >
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
        </template>
        <span>Light / Dark Mode</span>
      </v-tooltip>

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
          <v-btn
            aria-label="Coding Insight Button"
            icon
            v-bind="attrs"
            v-on="on"
            class="to-hide"
          >
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
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import ov_layout from './ov_layout';

export default {
  name: 'AppHeader',
  props: ['drawer'],
  data() {
    return {
      sheet: false,
      email: '',
      name: '',
      photo: '',

      tiles: [
        { img: 'home', title: 'Home', url: '/' },
        { img: 'school', title: 'Courses', url: '/courses' },
      ],
      ttiles: [
        { img: 'microsoft-teams', title: 'Team', url: '/about' },
        {
          img: 'video',
          title: 'Intro Video',
          url: 'https://www.youtube.com/watch?v=ya7Ud1tTpag',
        },
      ],
      ...ov_layout,
    };
  },
  methods: {
    gotoCourses() {
      this.$router.push('/courses');
    },
    isEnglish() {
      return (
        this.$nuxt.$route.path.includes('english') ||
        this.$nuxt.$route.path.includes('-en')
      );
    },
    englishValue(a) {
      return this.isEnglish() ? a + '_en' : a;
    },
    gotoHome() {
      this.$router.push(this.isEnglish() ? '/index-en' : '/');
    },
    toEnglish() {
      switch ($nuxt.$route.path) {
        case '/':
          window.location = '/index-en';
          break;
        case '/index-en':
          window.location = '/index-en';
          break;
        case '/courses':
          window.location = '/courses-en';
          break;
        case '/courses-en':
          window.location = '/courses-en';
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
        case '/index-en':
          window.location = '/';
          break;
        case '/courses':
          window.location = '/courses';
          break;
        case '/courses-en':
          window.location = '/courses';
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

<style scoped>
.to-show {
  display: none;
}

@media screen and (max-width: 686px) {
  .to-hide {
    display: none;
  }
  .to-show {
    display: block;
  }
}
</style>
