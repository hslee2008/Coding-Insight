<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      width="300"
      style="background-color: rgb(0, 0, 0, 0)"
    >
      <v-card-actions class="mx-3 mt-15 mb-10">
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
      </v-card-actions>

      <v-expansion-panels accordion flat tile dark>
        <v-expansion-panel>
          <v-expansion-panel-header ripple color="rgba(18, 18, 18)">
            Python
          </v-expansion-panel-header>
          <v-expansion-panel-content color="rgba(18, 18, 18)">
            <v-list nav>
              <ItemList
                v-for="item in python_items"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
              />
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header ripple color="rgba(18, 18, 18)">
            Rust
          </v-expansion-panel-header>
          <v-expansion-panel-content color="rgba(18, 18, 18)">
            <v-list nav>
              <ItemList
                v-for="item in rust_items"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
              />
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header ripple color="rgba(18, 18, 18)">
            C/C++
          </v-expansion-panel-header>
          <v-expansion-panel-content color="rgba(18, 18, 18)">
            <v-list nav>
              <ItemList
                v-for="item in c_items"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
              />
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>

    <AppBar :changeDrawer="changeDrawer" />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-system-bar
      v-if="$nuxt.isOffline"
      fixed
      color="error"
      style="z-index: 999"
    >
      <v-spacer></v-spacer>
      <v-icon left>mdi-access-point-off</v-icon> 오프라인
    </v-system-bar>

    <Footer />
  </v-app>
</template>

<script>
import courses from './courses';
import AppBar from './AppBar';

export default {
  name: 'AppHeader',
  components: {
    AppBar,
  },
  data() {
    return {
      drawer: false,
      ...courses,
    };
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
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
