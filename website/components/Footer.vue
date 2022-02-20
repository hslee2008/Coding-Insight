<template>
  <v-footer :absolute="false" padless>
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-row style="gap: 30px" justify="center">
          <div>
            <div class="text-h6">
              {{ isEnglish() ? 'Site Links' : '사이트 추가 링크' }}
            </div>
            <v-btn
              aria-label="Coding Insight Button"
              icon
              @click="this.$router.push(this.isEnglish() ? '/index-en' : '/')"
              class="to-hide"
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn
              aria-label="Coding Insight Button"
              class="white--text"
              icon
              :to="isEnglish() ? '/app-en' : '/app'"
              ><v-icon>mdi-apps</v-icon></v-btn
            >
            <v-btn
              aria-label="Coding Insight Button"
              class="white--text"
              icon
              :to="isEnglish() ? '/courses-en' : '/courses'"
            >
              <v-icon>mdi-school</v-icon>
            </v-btn>
          </div>

          <div>
            <div class="text-h6">
              {{ isEnglish() ? 'More about us' : '코딩 인사이트에 대해' }}
            </div>
            <v-btn
              aria-label="Coding Insight Button"
              icon
              href="https://github.com/HyunseungLee-Travis/Coding-Insight"
              target="_blank"
              class="white--text"
            >
              <v-icon size="24px"> mdi-github </v-icon> </v-btn
            ><v-btn
              aria-label="Coding Insight Button"
              href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
              target="_blank"
              icon
              class="white--text"
            >
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
            <v-btn
              aria-label="Coding Insight Button"
              href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
              target="_blank"
              icon
              class="white--text"
            >
              <v-icon>mdi-microsoft-visual-studio-code</v-icon>
            </v-btn>
            <v-btn
              aria-label="Coding Insight Button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSezvUnfD8p2ngwlQHVzAdh6CYk-J-M8VbzSgUJLmKDmvisZGQ/viewform"
              target="_blank"
              icon
              class="white--text"
            >
              <v-icon>mdi-file-sign</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} <strong>Coding-Insight</strong
        ><br />
        (Hyunseung, Juha, Gun)
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
