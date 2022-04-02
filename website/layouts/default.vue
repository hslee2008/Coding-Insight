<template>
  <v-app>
    <v-navigation-drawer
      v-show="!$vuetify.breakpoint.mobile"
      v-model="ComputerDrawer"
      app
      width="300"
      class="mx-2 my-5 rounded-lg transparent"
    >
      <v-card-actions>
        <v-btn
          :aria-label="albutt"
          :color="$vuetify.theme.dark ? bgd : 'white'"
          class="elevation-0"
          to="/"
          text
        >
          <v-img
            :src="
              require(`assets/svg/${
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

        <Translate />
      </v-card-actions>

      <Tab :close="closeDrawerMobile" />
    </v-navigation-drawer>

    <AppBar
      v-if="$vuetify.breakpoint.mobile && !MobileDrawer"
      :changeDrawer="changeDrawer"
      :changeDrawerMobile="changeDrawerMobile"
      fixed
    />

    <v-card v-if="MobileDrawer" :color="$vuetify.theme.dark ? bgd : 'white'">
      <AppBar
        v-if="$vuetify.breakpoint.mobile"
        :changeDrawer="changeDrawer"
        :changeDrawerMobile="changeDrawerMobile"
        :MobileDrawer="MobileDrawer"
      />

      <Tab :close="closeDrawerMobile" />
    </v-card>
    <v-main v-else>
      <v-container> <Nuxt /> <PageFooter /> </v-container>
    </v-main>

    <v-snackbar
      v-model="snackbar"
      timeout="4000"
      height="50"
      color="primary"
      rounded
      outlined
    >
      <v-card-text>
        <v-icon small class="mr-2"> mdi-information-outline </v-icon>

        New Update!
      </v-card-text>

      <template #action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="reload">
          Reload
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
  import Footer from './Footer';
  import Tab from './Tab';
  import AppBar from './AppBar';
  import PageFooter from './PageFooter';

  export default {
    name: 'AppHeader',
    components: {
      Footer,
      AppBar,
      Tab,
      PageFooter,
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
    },

    async mounted() {
      let w = await window.$workbox;
      w && w.addEventListener('installed', e => (this.snackbar = e.update));
    },
  };
</script>
