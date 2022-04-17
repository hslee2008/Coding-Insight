<template>
  <div
    class="text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden"
    :style="`background-color: ${hdbgd}; margin: 50px 0px 100px 0px`"
  >
    <v-btn :aria-label="albutt" class="mb-10" outlined @click="speak">
      <v-icon left>
        mdi-{{ notspeaking ? 'bullhorn' : 'pause-octagon' }}
      </v-icon>

      {{
        notspeaking
          ? isEnglish
            ? 'Read'
            : '읽어주기'
          : isEnglish
          ? 'Stop'
          : '멈추기'
      }}
    </v-btn>

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
