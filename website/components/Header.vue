<template>
  <div
    class="text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden"
    style="background-color: #343b47; margin: 50px 0px 100px 0px"
  >
    <div class="mb-10">
      <v-btn icon aria-label="speak" @click="speak">
        <v-icon> mdi-{{ notspeaking ? 'bullhorn' : 'pause-octagon' }} </v-icon>
      </v-btn>
      <v-btn
        aria-label="Edit on GitHub (opens in a new window)"
        icon
        :href="`https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages${
          $nuxt.$route.path + ($nuxt.$route.path.endsWith('/') ? 'index' : '')
        }.vue`"
        target="_blank"
      >
        <v-icon>mdi-text-box-search-outline</v-icon>
      </v-btn>
      <v-btn
        aria-label="Bug Report (opens in a new window)"
        icon
        :href="`https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B (${$nuxt.$route.path})`"
        target="_blank"
      >
        <v-icon>mdi-bug</v-icon>
      </v-btn>
    </div>

    <h1>
      {{ title }}
    </h1>
    <h2 class="font-weight-thin">
      <span v-if="!$vuetify.breakpoint.sm">Computer Science Lab -</span>

      {{ num }}
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'HeaderPage',
    props: ['title', 'num', 'type'],
    data() {
      return {
        notspeaking: true,
        showButton: true,
        isEnglish: this.type === 'Python',
      };
    },
    mounted() {
      document.title = `${this.type} ${this.title} — Coding-Insight`;
      this.showButton = 'speechSynthesis' in window ? true : false;
    },
    methods: {
      speak() {
        try {
          const a = new SpeechSynthesisUtterance(
            document.querySelector('.v-main').innerText,
          );
          a.lang = this.isEnglish ? 'en-US' : 'ko-kr';

          this.notspeaking
            ? speechSynthesis.speak(a)
            : speechSynthesis.cancel();
        } catch (e) {
          this.showButton = false;
          alert(
            this.isEnglish
              ? 'This browser does not support voice.' + e
              : '이 브라우저는 음성을 지원하지 않습니다.',
          );
        }

        this.notspeaking = !this.notspeaking;
      },
    },
  };
</script>
