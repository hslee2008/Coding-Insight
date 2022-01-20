<template>
  <div class="text-center">
    <hr />
    <br />
    <v-btn class="ma-2" outlined @click="speak">
      {{ count % 2 == 0 ? 'Read' : 'Stop'
      }}<v-icon right>
        {{ count % 2 == 0 ? 'mdi-bullhorn' : 'mdi-pause-octagon' }}</v-icon
      >
    </v-btn>

    <v-btn
      v-if="$nuxt.$route.path.includes('english/python')"
      class="ma-2"
      outlined
      @click="toKorean"
    >
      English<v-icon right> mdi-ab-testing </v-icon>
    </v-btn>

    <v-btn class="ma-2" outlined to="/">
      홈<v-icon right> mdi-home </v-icon>
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
    <hr />
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
  methods: {
    toKorean() {
      window.location =
        '/korean/python' +
        ($nuxt.$route.path === '/'
          ? '/python'
          : $nuxt.$route.path.replace('/english/python', ''));
    },
    speak() {
      if (this.count % 2 === 0) {
        try {
          const a = new SpeechSynthesisUtterance(
            document.body.innerText.substring(
              document.body.innerText.indexOf('읽어주기') + 8,
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
