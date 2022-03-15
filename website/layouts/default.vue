<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      :width="$vuetify.breakpoint.mobile ? 'calc(100% - 15px)' : 300"
      height="auto"
      class="mx-2 my-5 rounded-lg transparent"
    >
      <v-card-title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              aria-label="Coding Insight Button"
              @click="$router.push('/')"
              v-bind="attrs"
              v-on="on"
              text
              :color="$vuetify.theme.dark ? '#23272F' : 'white'"
            >
              <v-avatar v-if="$vuetify.breakpoint.width < 330" size="30">
                <img src="icon.png" alt="PNG Logo" />
              </v-avatar>
              <v-img
                v-else-if="$vuetify.theme.dark"
                :src="require('~/assets/img/dark.svg')"
                alt="SVG Logo with dark theme"
              />
              <v-img
                v-else
                :src="require('~/assets/img/white.svg')"
                alt="SVG Logo with twhite theme"
              />
            </v-btn>
          </template>
          <span>Coding-Insight (Home)</span>
        </v-tooltip>

        <v-spacer />

        <v-btn
          aria-label="Coding Insight Button"
          icon
          fab
          small
          @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>{{
            $vuetify.theme.dark
              ? 'mdi-white-balance-sunny'
              : 'mdi-weather-night'
          }}</v-icon>
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
      </v-card-title>

      <v-spacer />

      <v-tabs grow centered v-model="tab">
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
          continuous
          v-model="tab"
          class="py-3"
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
          "
        >
          <v-tab-item>
            <v-expansion-panels accordion>
              <ItemList
                v-for="item in python_items"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
                :close="closeDrawerTwo"
              />
            </v-expansion-panels>
          </v-tab-item>
          <v-tab-item>
            <v-expansion-panels>
              <ItemList
                v-for="item in c_items"
                :key="item.titleen"
                :titleen="item.titleen"
                :titlekr="item.titlekr"
                :json="item.json"
                :close="closeDrawerTwo"
              />
            </v-expansion-panels>
          </v-tab-item>
          <v-tab-item>
            <v-expansion-panels>
              <ItemList
                v-for="item in rust_items"
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

      <v-footer class="mb-5 mt-10 transparent rounded-lg">
        <div>
          <v-btn
            aria-label="Coding Insight Button"
            icon
            href="https://github.com/HyunseungLee-Travis/Coding-Insight"
            target="_blank"
          >
            <v-icon size="24px"> mdi-github </v-icon>
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

          <v-divider vertical />

          <v-btn icon aria-label="Coding Insight Button" to="/about"
            ><v-icon>mdi-microsoft-teams</v-icon></v-btn
          >
        </div>

        <div style="margin-left: auto; margin-right: 5px">
          &copy; {{ new Date().getFullYear() }}
        </div>
      </v-footer>
    </v-navigation-drawer>

    <v-dialog v-model="drawer2" width="1000">
      <v-card :color="$vuetify.theme.dark ? '#23272F' : '#F5F5F5'">
        <v-card-title>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                aria-label="Coding Insight Button"
                @click="$router.push('/')"
                v-bind="attrs"
                v-on="on"
                text
                :color="$vuetify.theme.dark ? '#23272F' : 'white'"
              >
                <v-avatar v-if="$vuetify.breakpoint.width < 330" size="30">
                  <img src="icon.png" alt="PNG Logo" />
                </v-avatar>
                <v-img
                  v-else-if="$vuetify.theme.dark"
                  :src="require('~/assets/img/dark.svg')"
                  alt="SVG Logo with dark theme"
                />
                <v-img
                  v-else
                  :src="require('~/assets/img/white.svg')"
                  alt="SVG Logo with twhite theme"
                />
              </v-btn>
            </template>
            <span>Coding-Insight (Home)</span>
          </v-tooltip>

          <v-spacer />

          <v-btn
            aria-label="Coding Insight Button"
            icon
            fab
            small
            @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
          >
            <v-icon>{{
              $vuetify.theme.dark
                ? 'mdi-white-balance-sunny'
                : 'mdi-weather-night'
            }}</v-icon>
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

          <v-spacer />

          <v-btn
            aria-label="Coding Insight Button"
            icon
            small
            color="error"
            @click.stop="drawer2 = !drawer2"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer />

        <v-tabs grow centered v-model="tab">
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
            continuous
            v-model="tab"
            class="py-3"
            :style="
              'background-color: ' +
              ($vuetify.theme.dark ? '#23272F' : '#f5f5f5')
            "
          >
            <v-tab-item>
              <v-expansion-panels accordion>
                <ItemList
                  v-for="item in python_items"
                  :key="item.titleen"
                  :titleen="item.titleen"
                  :titlekr="item.titlekr"
                  :json="item.json"
                  :close="closeDrawerTwo"
                />
              </v-expansion-panels>
            </v-tab-item>
            <v-tab-item>
              <v-expansion-panels>
                <ItemList
                  v-for="item in c_items"
                  :key="item.titleen"
                  :titleen="item.titleen"
                  :titlekr="item.titlekr"
                  :json="item.json"
                  :close="closeDrawerTwo"
                />
              </v-expansion-panels>
            </v-tab-item>
            <v-tab-item>
              <v-expansion-panels>
                <ItemList
                  v-for="item in rust_items"
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

    <v-fab-transition v-if="$vuetify.breakpoint.mobile">
      <v-btn
        @click="drawer2 = !drawer2"
        fixed
        small
        fab
        bottom
        right
        color="primary"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-fab-transition>

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
  </v-app>
</template>

<script>
import courses from './courses';
import ItemList from './ItemList';

export default {
  name: 'AppHeader',
  components: {
    ItemList,
  },
  data() {
    return {
      drawer: false,
      drawer2: false,
      tab: null,

      ...courses,
    };
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    },
    closeDrawerTwo() {
      this.drawer2 = false;
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
