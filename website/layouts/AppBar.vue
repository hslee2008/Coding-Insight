<template>
  <v-app-bar
    fixed
    dense
    clipped-left
    app
    :color="$vuetify.theme.dark ? '#23272F' : 'white'"
    elevate-on-scroll
  >
    <v-btn aria-label="Mobile Drawer" icon @click="changeDrawerMobile">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-spacer />

    <v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            aria-label="Coding Insight Button"
            @click="$router.push('/')"
            v-bind="attrs"
            v-on="on"
            :color="$vuetify.theme.dark ? '#23272F' : 'white'"
          >
            <v-img
              v-if="$vuetify.theme.dark"
              :src="require('~/assets/svg/dark.svg')"
              alt="SVG Logo"
            />
            <img v-else src="~/assets/svg/white.svg" alt="SVG Logo" />
          </v-btn>
        </template>
        <span>Coding-Insight (Home)</span>
      </v-tooltip>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      aria-label="Coding Insight Button"
      icon
      small
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon
        >mdi-{{
          $vuetify.theme.dark ? 'white-balance-sunny' : 'weather-night'
        }}</v-icon
      >
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
        <v-btn aria-label="Coding Insight Button" icon v-bind="attrs" v-on="on">
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
  props: ['changeDrawer', 'changeDrawerMobile'],
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
          : '/'
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
