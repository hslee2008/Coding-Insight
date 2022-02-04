<template>
  <v-footer :absolute="false" padless>
    <v-card flat tile width="100%" class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn class="white--text" icon :to="isEnglish() ? '/app-en' : '/app'"
          ><v-icon>mdi-apps</v-icon></v-btn
        >
        <v-btn
          class="white--text"
          icon
          :to="isEnglish() ? '/courses-en' : '/courses'"
        >
          <v-icon>mdi-school</v-icon>
        </v-btn>

        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>

        <v-btn
          icon
          href="https://github.com/HyunseungLee-Travis/Coding-Insight"
          target="_blank"
          class="white--text"
        >
          <v-icon size="24px"> mdi-github </v-icon> </v-btn
        ><v-btn
          href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
          target="_blank"
          icon
          class="white--text"
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
          target="_blank"
          icon
          class="white--text"
        >
          <v-icon>mdi-microsoft-visual-studio-code</v-icon>
        </v-btn>
        <v-btn
          href="https://docs.google.com/forms/d/e/1FAIpQLSezvUnfD8p2ngwlQHVzAdh6CYk-J-M8VbzSgUJLmKDmvisZGQ/viewform"
          target="_blank"
          icon
          class="white--text"
        >
          <v-icon>mdi-file-sign</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        저희 팀의 목적은 어린이들이 블록코딩을 배우고나서 또는 새로운 코딩
        언어를 배우고 싶다면 텍스트 기반인 파이썬, C/C++, Rust 코딩 방식 등을
        독학으로 배울 수 있는 사이트를 개설하고 무료로 운영하는 것입니다.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2021-{{ new Date().getFullYear() }}
        <strong>Python-Factory</strong> (Hyunseung, Juha, Gun)
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    isEnglish() {
      return (
        this.$nuxt.$route.path.includes('english') ||
        this.$nuxt.$route.path.includes('-en')
      );
    },
  },
};
</script>
