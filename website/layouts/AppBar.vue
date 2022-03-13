<template>
  <v-app-bar fixed dense clipped-left app rounded class="mx-2 my-1">
    <v-btn
      v-if="$vuetify.breakpoint.mobile"
      aria-label="Coding Insight Button"
      @click.stop="changeDrawer"
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <template v-if="!$vuetify.breakpoint.mobile">
      <v-btn
        aria-label="Coding Insight Button"
        icon
        fab
        small
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
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
    </template>

    <v-spacer />

    <v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            @click="$router.push('/')"
            v-bind="attrs"
            v-on="on"
          >
            <img
              v-if="$vuetify.theme.dark"
              src="~/assets/img/dark.svg"
              alt="SVG Logo"
            />
            <img v-else src="~/assets/img/white.svg" alt="SVG Logo" />
          </v-btn>
        </template>
        <span>Coding-Insight (Home)</span>
      </v-tooltip>
    </v-toolbar-title>

    <v-spacer />

    <v-menu bottom offset-y nudge-bottom="10">
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
        <v-list-item style="gap: 3px">
          <v-list-item-title>
            <v-btn icon aria-label="Coding Insight Button" to="/korean/python"
              ><v-icon>mdi-language-python</v-icon></v-btn
            >
          </v-list-item-title>
          <v-list-item-title>
            <v-btn icon aria-label="Coding Insight Button" to="/korean/c-cpp"
              ><v-icon>mdi-language-c</v-icon></v-btn
            >
          </v-list-item-title>
          <v-list-item-title>
            <v-btn
              icon
              aria-label="Coding Insight Button"
              to="/korean/c-cpp/cpp"
              ><v-icon>mdi-language-cpp</v-icon></v-btn
            >
          </v-list-item-title>
          <v-list-item-title>
            <v-btn icon aria-label="Coding Insight Button" to="/korean/rust"
              ><v-icon>mdi-language-rust</v-icon></v-btn
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu bottom offset-y nudge-bottom="10">
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
        <v-list-item style="gap: 3px">
          <v-list-item-title>
            <v-btn icon aria-label="Coding Insight Button" to="/about"
              ><v-icon>mdi-microsoft-teams</v-icon></v-btn
            >
          </v-list-item-title>
          <v-list-item-title>
            <v-btn
              icon
              aria-label="Coding Insight Button"
              href="https://www.youtube.com/watch?v=ya7Ud1tTpag"
              target="_blank"
              ><v-icon>mdi-video</v-icon></v-btn
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-if="$vuetify.breakpoint.mobile">
      <v-btn
        aria-label="Coding Insight Button"
        icon
        fab
        small
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
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
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['changeDrawer'],
  data() {
    return {
      sheet: false,
    };
  },
  methods: {
    gotoHome() {
      this.$router.push(
        this.$nuxt.$route.path.includes('english') ||
          this.$nuxt.$route.path.includes('-en')
          ? '/index-en'
          : '/',
      );
    },
    toEnglish() {
      switch ($nuxt.$route.path) {
        case '/':
          window.location = '/index-en';
          break;
        case '/index-en':
          window.location = '/index-en';
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
