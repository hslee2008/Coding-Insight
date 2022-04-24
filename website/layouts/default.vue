<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
      hide-overlay
      clipped
      width="300"
      class="rounded-lg"
      color="#282C34"
    >
      <Tab :close="close" />
    </v-navigation-drawer>

    <v-app-bar app dense rounded fixed clipped-left color="#282C34">
      <v-btn :aria-label="albutt" icon @click="drawer = !drawer">
        <v-icon>mdi-{{ drawer ? 'close' : 'sort-variant' }}</v-icon>
      </v-btn>

      <v-spacer />

      <v-btn :aria-label="albutt" class="elevation-0" href="/" text>
        <v-img :src="require('./dark.svg')" alt="SVG Logo" />
      </v-btn>

      <v-spacer />

      <Translate />
    </v-app-bar>

    <v-main>
      <v-container>
        <br /><br />

        <Nuxt />

        <div
          v-if="$route.path !== '/' && $route.path !== '/index-en'"
          class="mx-1 my-16"
        >
          Edit on
          <a
            aria-label="Edit on GitHub"
            :href="`https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages${
              $nuxt.$route.path +
              ($nuxt.$route.path.endsWith('/') ? 'index' : '')
            }.vue`"
            target="_blank"
          >
            GitHub <v-icon x-small color="primary">mdi-open-in-new</v-icon>
          </a>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Tab from './Tab';
  import Translate from './Translate';

  export default {
    name: 'DefaultLayout',
    components: {
      Tab,
      Translate,
    },
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      close() {
        this.drawer = false;
      },
    },
  };
</script>
