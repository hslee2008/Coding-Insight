<template>
  <v-app-bar
    :fixed="fixed"
    dense
    elevate-on-scroll
    :color="$vuetify.theme.dark ? bgd : 'white'"
  >
    <v-btn
      v-if="!MobileDrawer"
      aria-label="Mobile Drawer"
      icon
      @click="changeDrawerMobile"
    >
      <v-icon>mdi-sort-variant</v-icon>
    </v-btn>
    <v-btn
      v-else
      :aria-label="albutt"
      icon
      @click="changeDrawerMobile"
      class="pa-5"
      color="primary"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-spacer />

    <v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :aria-label="albutt"
            @click="$router.push('/')"
            v-bind="attrs"
            v-on="on"
            :color="$vuetify.theme.dark ? bgd : 'white'"
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
        </template>
        <span>Coding-Insight (Home)</span>
      </v-tooltip>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      :aria-label="albutt"
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

    <v-menu close-on-click rounded>
      <template #activator="{ on, attrs }">
        <v-btn
          :disabled="
            $nuxt.$route.path.includes('rust') ||
            $nuxt.$route.path.includes('c-cpp')
          "
          aria-label="Translate"
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
          <v-list-item-title>한국어</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="!$nuxt.$route.path.includes('english')"
          @click.stop="toEnglish"
        >
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: ['changeDrawer', 'changeDrawerMobile', 'MobileDrawer', 'fixed'],
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
