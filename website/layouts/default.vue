<template>
  <v-app>
    <v-navigation-drawer
      v-model="ComputerDrawer"
      app
      width="300"
      class="mx-2 my-5 rounded-lg transparent"
    >
      <v-card-title>
        <v-btn
          aria-label="Coding Insight Button"
          :color="$vuetify.theme.dark ? '#23272F' : 'white'"
          to="/"
          text
        >
          <v-img
            :src="
              require(`~/assets/svg/${
                $vuetify.theme.dark ? 'dark' : 'white'
              }.svg`)
            "
            alt="SVG Logo"
          />
        </v-btn>

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
          v-if="!$route.path.includes('rust') && !$route.path.includes('c-cpp')"
          open-on-hover
          close-on-click
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
            <v-list-item @click="toKorean">
              <v-list-item-title>한국어</v-list-item-title>
            </v-list-item>
            <v-list-item @click="toEnglish">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>

      <v-tabs v-model="tab" grow>
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
          "
        >
          Python
        </v-tab>
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
          "
        >
          C/C++
        </v-tab>
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
          "
        >
          Rust
        </v-tab>

        <v-tabs-items
          v-model="tab"
          class="py-3"
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
          "
        >
          <v-tab-item
            v-for="(langItems, index) in [python_items, c_items, rust_items]"
            :key="index"
          >
            <v-expansion-panels accordion>
              <ItemList
                v-for="item in langItems"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
                :close="closeDrawerTwo"
              />
            </v-expansion-panels>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

      <v-footer class="mt-10 transparent">
        <v-btn
          aria-label="Coding Insight Button"
          icon
          href="https://github.com/HyunseungLee-Travis/Coding-Insight"
          target="_blank"
        >
          <v-icon> mdi-github </v-icon>
        </v-btn>
        <v-btn
          aria-label="Coding Insight Button"
          href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
          target="_blank"
          icon
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          aria-label="Coding Insight Button"
          href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
          target="_blank"
          icon
        >
          <v-icon>mdi-microsoft-visual-studio-code</v-icon>
        </v-btn>

        <v-btn icon aria-label="Coding Insight Button" to="/about"
          ><v-icon>mdi-microsoft-teams</v-icon></v-btn
        >

        <div class="ml-auto">&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-navigation-drawer>

    <v-dialog v-model="MobileDrawer" fullscreen>
      <v-card :color="$vuetify.theme.dark ? '#23272F' : '#F5F5F5'">
        <v-btn
          aria-label="Coding Insight Button"
          icon
          @click="MobileDrawer = !MobileDrawer"
          class="pa-5"
          color="error"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-tabs v-model="tab" grow>
          <v-tab
            :style="
              'background-color: ' +
              ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
            "
          >
            Python
          </v-tab>
          <v-tab
            :style="
              'background-color: ' +
              ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
            "
          >
            C/C++
          </v-tab>
          <v-tab
            :style="
              'background-color: ' +
              ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
            "
          >
            Rust
          </v-tab>

          <v-tabs-items
            v-model="tab"
            class="pa-10"
            :style="
              'background-color: ' +
              ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
            "
          >
            <v-tab-item
              v-for="(langItems, index) in [python_items, c_items, rust_items]"
              :key="index"
            >
              <v-expansion-panels accordion>
                <ItemList
                  v-for="item in langItems"
                  :key="item.titleen"
                  :titleen="item.titleen"
                  :titlekr="item.titlekr"
                  :json="item.json"
                  :close="closeDrawerTwo"
                />
              </v-expansion-panels>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-dialog>

    <AppBar
      v-if="$vuetify.breakpoint.mobile"
      :changeDrawer="changeDrawer"
      :changeDrawerMobile="changeDrawerMobile"
    />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import courses from './courses';
import ItemList from './ItemList';
import AppBar from './AppBar';

export default {
  name: 'AppHeader',
  components: {
    ItemList,
    AppBar,
  },
  data() {
    return {
      ComputerDrawer: false,
      MobileDrawer: false,
      tab: null,

      ...courses,
    };
  },
  methods: {
    changeDrawer() {
      this.ComputerDrawer = !this.ComputerDrawer;
    },
    changeDrawerMobile() {
      this.MobileDrawer = !this.MobileDrawer;
    },
    closeDrawerTwo() {
      this.MobileDrawer = false;
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
