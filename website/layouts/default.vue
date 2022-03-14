<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      :width="$vuetify.breakpoint.mobile ? '90%' : 300"
      :height="$vuetify.breakpoint.mobile ? '100%' : 'calc(100vh - 80px)'"
      class="mx-2 my-5 rounded-lg"
    >
      <v-tabs
        grow
        centered
        v-model="tab"
        active-class="activeTab"
        :vertical="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.xs"
        :style="
          'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
        "
      >
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
          >Python</v-tab
        >
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
          >C/C++</v-tab
        >
        <v-tab
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
          >Rust</v-tab
        >

        <v-tabs-items
          v-model="tab"
          class="py-3"
          :style="
            'background-color: ' + ($vuetify.theme.dark ? '#23272F' : 'white')
          "
        >
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

        <v-footer
          style="background-color: #087ea4"
          class="mb-5 mt-10 rounded-lg"
        >
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

            <v-divider vertical></v-divider>

            <v-btn icon aria-label="Coding Insight Button" to="/about"
              ><v-icon>mdi-microsoft-teams</v-icon></v-btn
            >
          </div>

          <div style="margin-left: auto; margin-right: 5px">
            &copy; {{ new Date().getFullYear() }}
            <span v-if="!$vuetify.breakpoint.mobile">Coding-Insight</span>
          </div>
        </v-footer>
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

.activeTab {
  background-color: #23272f;
}
</style>
