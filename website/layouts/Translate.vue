<template>
  <v-menu open-on-hover close-on-click rounded>
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
        @click.stop="toKorean"
      >
        <v-list-item-title>
          <v-icon left>mdi-ideogram-cjk-variant</v-icon>
          한국어
        </v-list-item-title>
      </v-list-item>

      <v-list-item
        v-if="!$nuxt.$route.path.includes('english')"
        @click.stop="toEnglish"
      >
        <v-list-item-title>
          <v-icon left>mdi-alpha-a</v-icon> English
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    methods: {
      toEnglish() {
        const route = $nuxt.$route.path;

        this.$router.push(
          route == '/index-en'
            ? '/index-en'
            : route == '/'
            ? '/index-en'
            : route.replace('korean', 'english'),
        );
      },
      toKorean() {
        const route = $nuxt.$route.path;

        this.$router.push(
          route == '/'
            ? '/'
            : route == '/index-en'
            ? '/'
            : route.replace('english', 'korean'),
        );
      },
    },
  };
</script>
