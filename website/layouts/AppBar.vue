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
    >
      <v-img
        :src="
          require(`assets/svg/${$vuetify.theme.dark ? 'dark' : 'light'}.svg`)
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
          $vuetify.theme.dark ? 'white-balance-sunny' : 'moon-waning-crescent'
        }}
      </v-icon>
    </v-btn>

    <v-menu>
      <template #activator="{ on, attrs }">
        <v-btn
          :aria-label="albutt"
          :disabled="
            $nuxt.$route.path.includes('rust') ||
            $nuxt.$route.path.includes('c-cpp')
          "
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
          @click="toKorean"
        >
          <v-list-item-title>
            <v-icon left>mdi-ideogram-cjk-variant</v-icon>
            한국어
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="!$nuxt.$route.path.includes('english')"
          @click="toEnglish"
        >
          <v-list-item-title>
            <v-icon left>mdi-alpha-a</v-icon> English
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: ['changeDrawerMobile', 'MobileDrawer', 'fixed'],
  };
</script>
