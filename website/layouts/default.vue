<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      :width="$vuetify.breakpoint.mobile ? '90%' : 300"
      style="background-color: rgb(0, 0, 0, 0)"
      class="mx-2 my-5 rounded-lg"
    >
      <v-tabs
        center-active
        v-model="tab"
        :vertical="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.xs"
      >
        <v-tab>Python</v-tab>
        <v-tab>C/C++</v-tab>
        <v-tab>Rust</v-tab>

        <v-tabs-items v-model="tab" class="py-3">
          <v-tab-item>
            <ItemList
              v-for="item in python_items"
              :key="item.titleen"
              :titleen="item.titleen"
              :titlekr="item.titlekr"
              :json="item.json"
            />
          </v-tab-item>
          <v-tab-item>
            <ItemList
              v-for="item in c_items"
              :key="item.titleen"
              :titleen="item.titleen"
              :titlekr="item.titlekr"
              :json="item.json"
            />
          </v-tab-item>
          <v-tab-item>
            <ItemList
              v-for="item in rust_items"
              :key="item.titleen"
              :titleen="item.titleen"
              :titlekr="item.titlekr"
              :json="item.json"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-navigation-drawer>

    <AppBar :changeDrawer="changeDrawer" />

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

    <Footer />
  </v-app>
</template>

<script>
import courses from './courses';
import AppBar from './AppBar';

export default {
  name: 'AppHeader',
  components: {
    AppBar,
  },
  data() {
    return {
      drawer: false,
      tab: null,

      ...courses,
    };
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
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
