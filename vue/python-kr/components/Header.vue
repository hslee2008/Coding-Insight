<template>
  <div class="text-center">
    <hr />
    <br />
    <v-btn class="ma-2" outlined @click="speak">
      {{ count % 2 == 0 ? '읽어주기' : '멈추기'
      }}<v-icon right>
        {{ count % 2 == 0 ? 'mdi-bullhorn' : 'mdi-pause-octagon' }}</v-icon
      >
    </v-btn>

    <v-btn class="ma-2" outlined @click="toEnglish">
      English<v-icon right> mdi-ab-testing </v-icon>
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
  props: ['title', 'num'],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    toEnglish() {
      window.location =
        'https://coding-insight.com/python/english' +
        ($nuxt.$route.path == '/' ? '/python' : $nuxt.$route.path) +
        '-en.html'
    },
    speak() {
      if (this.count % 2 == 0) {
        try {
          const a = new SpeechSynthesisUtterance(
            document.body.innerText.substring(
              document.body.innerText.indexOf('읽어주기') + 8
            )
          )
          a.lang = 'ko-kr'
          speechSynthesis.speak(a)
        } catch (err) {
          alert(
            ':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (' +
              err +
              ')'
          )
        }
      } else {
        try {
          speechSynthesis.cancel()
        } catch (err) {
          alert(
            ':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.'
          )
        }
      }

      this.count++
    },
  },
}
</script>
