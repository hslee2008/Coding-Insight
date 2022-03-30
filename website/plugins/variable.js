import Vue from 'vue';

Vue.mixin({
  data: () => ({
    bgd: '#23272F',
    hdbgd: '#343b47',
    hdbgl: '#F7F6F9',

    albutt: 'Coding-Insight Button',
  }),
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
});
