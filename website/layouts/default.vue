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
        v-else-if="
          $nuxt.$route.path.includes('korean/rust') ||
          $nuxt.$route.path.includes('courses')
        "
      >
        <ItemList titleen="Rust Start" titlekr="Rust 시작" json="start_rust" />
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
      <template
        v-if="
          $nuxt.$route.path != '/index-en' &&
          $nuxt.$route.path != '/' &&
          $nuxt.$route.path != '/app' &&
          $nuxt.$route.path != '/app-en'
        "
      >
        <v-btn @click.stop="drawer = !drawer" icon
          ><v-icon>mdi-microsoft-xbox-controller-menu</v-icon></v-btn
        >
      </template>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>

      <v-toolbar-title>
        <span class="title">{{
          $nuxt.$route.path.split('/')[1] == 'korean'
            ? '한국어'
            : $nuxt.$route.path.split('/')[1] == 'korean'
            ? 'English'
            : 'Coding-Insight'
        }}</span
        ><v-icon>mdi-chevron-right</v-icon
        ><span class="title">{{
          $nuxt.$route.path.split('/')[2] !== undefined
            ? $nuxt.$route.path.split('/')[2].toUpperCase()
            : 'Other'
        }}</span></v-toolbar-title
      >

      <v-spacer />

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
          <v-btn icon v-bind="attrs" v-on="on">
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

      <v-btn icon :to="isEnglish() ? '/courses-en' : '/courses'">
        <v-icon>mdi-school</v-icon>
      </v-btn>

      <v-btn :to="login ? '/home' : '/login'" icon
        ><v-icon>mdi-account-circle</v-icon></v-btn
      >
      <v-btn v-if="login" @click="logout">Logout</v-btn>
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
import firebase from '~/plugins/firebase.js';
import 'firebase/compat/auth';
import Cookies from 'js-cookie';

import ov_layout from './ov_layout';

export default {
  name: 'DefaultLayout',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.login = true;
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then((token) => {
            Cookies.set('access_token', token);
          });
      } else {
        this.login = false;
        Cookies.remove('access_token');
      }
    });
  },

  data() {
    return {
      login: false,
      drawer: false,
      ...ov_layout,
    };
  },

  methods: {
    logout() {
      firebase.auth().signOut();
      this.$router.push('/ ');
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
    toEnglish() {
      switch ($nuxt.$route.path) {
        case '/':
          window.location = '/index-en';
          break;
        case '/app':
          window.location = '/app-en';
          break;
        case '/index-en':
          window.location = '/index-en';
          break;
        case '/app-en':
          window.location = '/app-en';
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
        case '/app':
          window.location = '/app';
          break;
        case '/index-en':
          window.location = '/';
          break;
        case '/app-en':
          window.location = '/app';
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
