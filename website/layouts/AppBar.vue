<template>
  <v-app-bar fixed app>
    <v-btn aria-label="Coding Insight Button" @click.stop="changeDrawer" icon>
      <v-icon>mdi-sticker-text-outline</v-icon>
    </v-btn>

    <v-spacer />

    <v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            style="display: flex; text-align: center"
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
          aria-label="Coding Insight ToolTip Button"
          icon
          v-bind="attrs"
          v-on="on"
          @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
          class="to-hide"
        >
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
      <span>Ligh / Dark Mode</span>
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
