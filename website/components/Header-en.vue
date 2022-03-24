<template>
  <div>
    <br /><br />

    <div
      class="text-center my-15 pa-6 rounded-lg"
      :style="
        'background-color: ' + ($vuetify.theme.dark ? '#343b47' : 'white')
      "
    >
      <v-btn
        aria-label="Coding Insight Button"
        class="mb-10"
        outlined
        @click="speak"
      >
        <v-icon left>
          mdi-{{ notspeaking ? 'bullhorn' : 'pause-octagon' }}
        </v-icon>

        {{ notspeaking ? 'Read' : 'Stop' }}
      </v-btn>

      <h1>
        {{ title }}
      </h1>
      <h2 class="font-weight-thin">
        <span v-if="!$vuetify.breakpoint.mobile">Computer Science Lab -</span>

        {{ num }}
      </h2>
    </div>

    <br /><br />
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: ['title', 'num', 'type'],
  data() {
    return {
      notspeaking: true,
    };
  },
  mounted() {
    document.title = `${this.type} ${this.title} - Coding-Insight`;
  },
  methods: {
    speak() {
      try {
        if (this.notspeaking) {
          const a = new SpeechSynthesisUtterance(document.body.innerText);
          a.lang = 'ko-kr';
          speechSynthesis.speak(a);
        } else {
          speechSynthesis.cancel();
        }
      } catch (err) {
        alert(
          ':( SpeechSynthesis API is not supported in your browser (Legacy)'
        );
      }

      this.notspeaking = !this.notspeaking;
    },
  },
};
</script>
