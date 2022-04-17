<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
      width="300"
      class="rounded-lg"
      :style="`background-color: ${bgd}`"
    >
      <Tab :close="close" />
    </v-navigation-drawer>

    <v-app-bar dense rounded :fixed="true" :color="bgd" elevation="0">
      <v-btn :aria-label="albutt" icon @click="drawer = !drawer">
        <v-icon>mdi-{{ drawer ? 'close' : 'sort-variant' }}</v-icon>
      </v-btn>

      <v-spacer />

      <v-btn :aria-label="albutt" :color="bgd" class="elevation-0" to="/" text>
        <v-img :src="require('./dark.svg')" alt="SVG Logo" />
      </v-btn>

      <v-spacer />

      <Translate />
    </v-app-bar>

    <v-main>
      <v-container>
        <br /><br />
        <Nuxt />
        <PageFooter />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Footer from './Footer';
  import Tab from './Tab';
  import PageFooter from './PageFooter';

  export default {
    name: 'DefaultLayout',
    components: {
      Footer,
      Tab,
      PageFooter,
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
