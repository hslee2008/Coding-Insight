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
        v-if="
          $nuxt.$route.path.includes('english/python') ||
          $nuxt.$route.path.includes('courses-en')
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
        <ItemList
          v-for="item in rust_items"
          :key="item.titleen"
          :titleen="item.titleen"
          :titlekr="item.titlekr"
          :json="item.json"
        />
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
        class="to-hide"
      >
        <v-btn @click.stop="drawer = !drawer" icon
          ><v-icon>mdi-menu</v-icon></v-btn
        >
      </template>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
            class="to-hide"
          >
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
        </template>
        <span>Light / Dark Mode</span>
      </v-tooltip>

      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="0"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            class="to-show"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div style="padding: 10px">
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
            <template
              v-if="
                $nuxt.$route.path != '/index-en' &&
                $nuxt.$route.path != '/' &&
                $nuxt.$route.path != '/app' &&
                $nuxt.$route.path != '/app-en'
              "
            >
              <v-btn @click.stop="drawer = !drawer" icon
                ><v-icon>mdi-menu</v-icon></v-btn
              >
            </template>
            <v-btn
              icon
              @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
            >
              <v-icon>mdi-brightness-6</v-icon>
            </v-btn>
            <v-btn to="login" icon><v-icon>mdi-account-circle</v-icon></v-btn>
          </div>
          <v-subheader>Menu</v-subheader>
          <v-list-item
            v-for="tile in tiles"
            :key="tile.title"
            @click="
              sheet = false;
              $nuxt.$router.push(tile.url);
            "
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <v-icon>{{ 'mdi-' + tile.img }}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>

      <v-toolbar-title>Coding-Insight</v-toolbar-title>

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
          <v-btn icon v-bind="attrs" v-on="on" class="to-hide">
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

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            @click="gotoEnglish"
            class="to-hide"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            @click="gotoCourses"
            class="to-hide"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-school</v-icon>
          </v-btn>
        </template>
        <span>Courses</span>
      </v-tooltip>

      <v-menu v-if="login" bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar>
              <img :src="photo" width="10" height="10" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar>
                <img :src="photo" width="10" height="10" />
              </v-avatar>
              <h3>{{ name }}</h3>
              <p class="text-caption mt-1">
                {{ email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text to="/account"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout"> Logout </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <v-btn to="login" icon v-else class="to-hide"
        ><v-icon>mdi-account-circle</v-icon></v-btn
      >
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
import Cookies from 'js-cookie';
import ov_layout from './ov_layout';

export default {
  name: 'DefaultLayout',
  mounted() {
    this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        this.login = true;
        this.email = user.email;
        this.name = user.displayName;
        this.photo = user.photoURL;
        this.$fire.auth.currentUser.getIdToken(true).then((token) => {
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
      sheet: false,
      email: '',
      name: '',
      photo: '',
      tiles: [
        { img: 'home', title: 'Home', url: '/' },
        { img: 'school', title: 'Courses', url: '/courses' },
      ],
      ...ov_layout,
    };
  },
  methods: {
    logout() {
      this.$fire.auth.signOut();
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
    gotoEnglish() {
      this.$router.push(this.isEnglish() ? '/index-en' : '/');
    },
    gotoCourses() {
      this.$router.push(this.isEnglish() ? '/courses-en' : '/courses');
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

<style scoped>
.to-show {
  display: none;
}

@media screen and (max-width: 390px) {
  .to-hide {
    display: none;
  }
  .to-show {
    display: block;
  }
}
</style>
