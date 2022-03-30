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
          :aria-label="albutt"
          :color="$vuetify.theme.dark ? bgd : 'white'"
          class="elevation-0"
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
          :aria-label="albutt"
          icon
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>
            mdi-{{
              $vuetify.theme.dark
                ? 'white-balance-sunny'
                : 'moon-waning-crescent'
            }}
          </v-icon>
        </v-btn>

        <v-menu open-on-hover close-on-click rounded>
          <template #activator="{ on, attrs }">
            <v-btn
              :aria-label="albutt"
              :disabled="
                $nuxt.$route.path.includes('rust') ||
                $nuxt.$route.path.includes('c-cpp')
              "
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-translate{{
                  $nuxt.$route.path.includes('rust') ||
                  $nuxt.$route.path.includes('c-cpp')
                    ? '-off'
                    : ''
                }}
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-if="!$nuxt.$route.path.includes('korean')"
              @click.stop="toKorean"
            >
              <v-list-item-title>
                <v-icon left>mdi-ideogram-cjk-variant</v-icon>
                한국어
              </v-list-item-title>
            </v-list-item>

            <v-list-item
              v-if="!$nuxt.$route.path.includes('english')"
              @click.stop="toEnglish"
            >
              <v-list-item-title>
                <v-icon left>mdi-alpha-a</v-icon> English
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>

      <Tab :close="closeDrawerMobile" />
    </v-navigation-drawer>

    <AppBar
      v-if="$vuetify.breakpoint.mobile && !MobileDrawer"
      :changeDrawer="changeDrawer"
      :changeDrawerMobile="changeDrawerMobile"
      :MobileDrawer="MobileDrawer"
      :fixed="true"
    />

    <v-card v-if="MobileDrawer" :color="$vuetify.theme.dark ? bgd : 'white'">
      <AppBar
        v-if="$vuetify.breakpoint.mobile"
        :changeDrawer="changeDrawer"
        :changeDrawerMobile="changeDrawerMobile"
        :MobileDrawer="MobileDrawer"
        :fixed="false"
      />

      <Tab :close="closeDrawerMobile" />
    </v-card>
    <v-main v-else>
      <v-container> <Nuxt /> <br /><br /> </v-container>
    </v-main>

    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      :color="$vuetify.theme.dark ? bgd : 'white'"
      rounded
    >
      <v-card-text>
        <v-icon class="mr-4" :color="$vuetify.theme.dark ? bgd : 'white'">
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
  import Footer from './Footer';
  import Tab from './Tab';
  import AppBar from './AppBar';

  export default {
    name: 'AppHeader',
    components: {
      Footer,
      AppBar,
      Tab,
    },
    data() {
      return {
        ComputerDrawer: false,
        MobileDrawer: false,
        snackbar: false,
      };
    },
    methods: {
      changeDrawer() {
        this.ComputerDrawer = !this.ComputerDrawer;
      },
      changeDrawerMobile() {
        this.MobileDrawer = !this.MobileDrawer;
      },
      closeDrawerMobile() {
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
      let w = await window.$workbox;

      w &&
        w.addEventListener(
          'installed',
          e => (this.snackbar = e.isUpdate ? true : false),
        );
    },
  };
</script>
