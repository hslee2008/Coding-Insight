<template>
  <v-app-bar
    dense
    :fixed="fixed"
    elevate-on-scroll
    :color="$vuetify.theme.dark ? bgd : 'white'"
  >
    <v-btn :aria-label="albutt" icon @click="changeDrawerMobile">
      <v-icon>mdi-{{ MobileDrawer ? 'close' : 'sort-variant' }}</v-icon>
    </v-btn>

    <v-spacer />

    <v-btn
      :aria-label="albutt"
      :color="$vuetify.theme.dark ? bgd : 'white'"
      class="elevation-0"
      to="/"
      text
      small
    >
      <v-img
        :src="
          require(`assets/svg/${$vuetify.theme.dark ? 'dark' : 'light'}.svg`)
        "
        alt="SVG"
      />
    </v-btn>

    <v-spacer />

    <v-btn
      :aria-label="albutt"
      icon
      small
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>
        mdi-{{
          $vuetify.theme.dark ? 'white-balance-sunny' : 'moon-waning-crescent'
        }}
      </v-icon>
    </v-btn>

    <Translate />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: ['changeDrawerMobile', 'MobileDrawer', 'fixed'],
  };
</script>
