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

    <v-app-bar app rounded fixed clipped-left color="#282C34">
      <v-btn :aria-label="albutt" icon @click="drawer = !drawer">
        <v-icon>mdi-{{ drawer ? 'close' : 'sort-variant' }}</v-icon>
      </v-btn>

      <v-spacer v-if="!$vuetify.breakpoint.mobile" />

      <v-btn :aria-label="albutt" class="elevation-0" href="/" text>
        <v-img :src="require('./dark.svg')" alt="SVG Logo" />
      </v-btn>

      <v-spacer />

      <v-btn
        href="https://github.com/HyunseungLee-Travis/Coding-Insight"
        arial-label="GitHub"
        icon
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        v-if="$vuetify.breakpoint.width > 400"
        href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
        arial-label="YouTube"
        icon
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>

      <Translate />
    </v-app-bar>

    <v-main>
      <v-container>
        <br /><br />

        <Nuxt />

        <br /><br />
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
