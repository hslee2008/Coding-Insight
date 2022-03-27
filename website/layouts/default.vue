<template>
  <v-app>
    <v-navigation-drawer
      v-show="!$vuetify.breakpoint.mobile"
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
                $vuetify.theme.dark ? 'dark' : 'light'
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
        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              aria-label="Coding Insight Button"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-translate-off</v-icon>
            </v-btn>
          </template>
          <span>No Translation</span>
        </v-tooltip>
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
            <v-expansion-panels flat accordion>
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

      <br /><br />
    </v-navigation-drawer>

    <AppBar
      v-if="$vuetify.breakpoint.mobile && !MobileDrawer"
      :changeDrawer="changeDrawer"
      :changeDrawerMobile="changeDrawerMobile"
      :MobileDrawer="MobileDrawer"
      :fixed="true"
    />

    <v-card
      v-if="MobileDrawer"
      :color="$vuetify.theme.dark ? '#23272F' : 'white'"
    >
      <AppBar
        v-if="$vuetify.breakpoint.mobile"
        :changeDrawer="changeDrawer"
        :changeDrawerMobile="changeDrawerMobile"
        :MobileDrawer="MobileDrawer"
        :fixed="false"
      />

      <v-tabs v-model="tab" grow>
        <v-tab
          v-for="it in ['Python', 'C/C++', 'Rust']"
          :key="it"
          ripple
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
        >
          {{ it }}
        </v-tab>

        <v-tabs-items
          v-model="tab"
          class="pa-5"
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
        >
          <v-tab-item
            v-for="(langItems, index) in [python_items, c_items, rust_items]"
            :key="index"
          >
            <v-expansion-panels hover flat accordion>
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

    <v-main v-else>
      <v-container>
        <Nuxt />

        <br /><br />
      </v-container>
    </v-main>

    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      :color="$vuetify.theme.dark ? '#23272F' : 'white'"
      rounded
    >
      <v-card-text>
        <v-icon class="mr-4" :color="$vuetify.theme.dark ? '#23272F' : 'white'">
          mdi-information-outline
        </v-icon>
        <span> New Update! </span>
      </v-card-text>
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="reload"> Reload </v-btn>
      </template>
    </v-snackbar>
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
        snackbar: false,

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
      reload() {
        window.location.reload();
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
    async mounted() {
      let workbox = await window.$workbox;

      if (workbox)
        workbox.addEventListener('installed', event => {
          if (event.isUpdate) this.snackbar = true;
        });
    },
  };
</script>
