<template>
  <div class="text-center">
    <v-divider />
    <br />
    <v-btn class="ma-2" outlined @click="speak">
      {{ count % 2 == 0 ? 'Read' : 'Stop'
      }}<v-icon right>
        {{ count % 2 == 0 ? 'mdi-bullhorn' : 'mdi-pause-octagon' }}</v-icon
      >
    </v-btn>

    <v-btn class="ma-2" outlined to="/index-en">
      Home<v-icon right> mdi-home </v-icon>
    </v-btn>
    <br /><br />
    <h1 class="display-6">
      <span>{{ title }}</span
      ><br id="lbbr" /><span id="txt">Computer Science Lab (</span>CSL<span
        id="txt"
        >)</span
      >
      {{ num }}
    </h1>
    <br />
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    title: { type: String, required: true },
    num: { type: String, required: true },
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    document.title = `${this.title} ${this.num} - Coding-Insight`;
  },
  methods: {
    speak() {
      if (this.count % 2 === 0) {
        try {
          const a = new SpeechSynthesisUtterance(
            document.body.innerText.substring(
              document.body.innerText.indexOf('Read') + 8,
            ),
          );
          a.lang = 'ko-kr';
          speechSynthesis.speak(a);
        } catch (err) {
          alert(':( Speech Synthesis is not present: (' + err + ')');
        }
      } else {
        try {
          speechSynthesis.cancel();
        } catch (err) {
          alert(':( Speech Synthesis is not present');
        }
      }

      this.count++;
    },
  },
};
</script>
