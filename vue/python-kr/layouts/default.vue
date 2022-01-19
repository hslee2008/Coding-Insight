<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <h1 class="text-center">파이썬 시작</h1>

        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.start_python"
          :key="i.toString() + 'start_python'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">파이썬 기본</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.python_basics"
          :key="i.toString() + 'python_basics'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">파이썬 초급</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.python_beginner"
          :key="i.toString() + 'python_beginner'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> </v-list-item
        ><br /><br />

        <h1 style="text-align: center">파이썬 중급</h1>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items.intermediate_python"
          :key="i.toString() + 'intermediate_python'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> </v-list
      ><br /><br />

      <h1 style="text-align: center">파이썬 고급</h1>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in items.advanced_python"
        :key="i.toString() + 'advanced_python'"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content> </v-list-item
      ><br /><br />

      <h1 style="text-align: center">파이썬 고수</h1>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in items.python_specialist"
        :key="i.toString() + 'python_specialist'"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content> </v-list-item
      ><br /><br />

      <h1 style="text-align: center">파이썬 고급</h1>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in items.master_python"
        :key="i.toString() + 'master_python'"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content> </v-list-item
      ><br /><br />

      <h1 style="text-align: center">파이썬 신</h1>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in items.python_god"
        :key="i.toString() + 'python_god'"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content> </v-list-item
      ><br /><br />

      <h1 style="text-align: center">기타</h1>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in items.other"
        :key="i.toString() + 'other'"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>{{ clipped ? 'mdi-forwardburger' : 'mdi-backburger' }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-btn class="ma-2" color="primary" dark to="/">
        파이썬
        <v-icon dark right> mdi-language-python </v-icon>
      </v-btn>
    </v-navigation-drawer>

    <v-footer
      :absolute="false"
      style="display: flex; justify-content: flex-end; padding: 10px"
    >
      <v-img
        src="favicon.ico"
        max-width="25px"
        style="margin-right: 5px"
      ></v-img>
      <span
        >Python-Factory &copy; {{ new Date().getFullYear() }} (Hyunseung, Juha,
        Gun)</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: {
        start_python: [
          {
            icon: 'mdi-source-commit-start',
            title: '시작',
            to: '/',
          },
          {
            icon: 'mdi-download',
            title: '설치',
            to: '/install',
          },
          {
            icon: 'mdi-microsoft-visual-studio-code',
            title: 'VSCode',
            to: '/vscode',
          },
          {
            icon: 'mdi-audio-input-rca',
            title: '입출력',
            to: '/io',
          },
          {
            icon: 'mdi-application-variable',
            title: '변수',
            to: '/variable',
          },
          {
            icon: 'mdi-lipstick',
            title: '매드립스 만들기',
            to: '/madlib',
          },

          {
            icon: 'mdi-database',
            title: '데이터 형태',
            to: '/datatype',
          },
          {
            icon: 'mdi-message',
            title: '주석',
            to: '/comment',
          },
          {
            icon: 'mdi-code-string',
            title: '문자',
            to: '/string',
          },
          {
            icon: 'mdi-function-variant',
            title: '문자 메서드 1',
            to: '/stringmethod1',
          },
          {
            icon: 'mdi-function-variant',
            title: '문자 메서드 2',
            to: '/stringmethod2',
          },
          {
            icon: 'mdi-door-sliding-lock',
            title: '이스케이프 문자',
            to: '/escapechar',
          },
        ],

        python_basics: [
          {
            icon: 'mdi-ab-testing',
            title: '아스키',
            to: '/ascii',
          },
          {
            icon: 'mdi-numeric-2',
            title: '분리언',
            to: '/boolean',
          },
          {
            icon: 'mdi-counter',
            title: '숫자',
            to: '/number',
          },
          {
            icon: 'mdi-plus-minus',
            title: '연산자',
            to: '/operator',
          },
          {
            icon: 'mdi-format-list-numbered',
            title: '숫자 종류',
            to: '/numtype',
          },
          {
            icon: 'mdi-calculator',
            title: '계산기 만들기',
            to: '/calc',
          },
          {
            icon: 'mdi-code-parentheses-box',
            title: '숫자 메서드',
            to: '/nummethod',
          },
          {
            icon: 'mdi-filter-variant',
            title: '리스트',
            to: '/list',
          },
          {
            icon: 'mdi-playlist-plus',
            title: '리스트 메서드 1',
            to: '/listmethod1',
          },
          {
            icon: 'mdi-playlist-plus',
            title: '리스트 메서드 2',
            to: '/listmethod2',
          },
        ],

        python_beginner: [
          {
            icon: 'mdi-book-alphabet',
            title: '딕셔너리',
            to: '/dictionary',
          },
          {
            icon: 'mdi-book-cog-outline',
            title: '딕셔너리 메서드',
            to: '/dictionarymethod',
          },
          {
            icon: 'mdi-application-parentheses-outline',
            title: '튜플',
            to: '/tuple',
          },
          {
            icon: 'mdi-application-braces-outline',
            title: '집합',
            to: '/set',
          },
          {
            icon: 'mdi-application-cog-outline',
            title: '집합 메서드',
            to: '/setmethod',
          },
          {
            icon: 'mdi-car-shift-pattern',
            title: '조건문',
            to: '/if',
          },
          {
            icon: 'mdi-arrow-decision',
            title: '조건문 마스터',
            to: '/ifmaster',
          },
          {
            icon: 'mdi-border-none-variant',
            title: 'None',
            to: '/none',
          },
          {
            icon: 'mdi-function',
            title: '함수',
            to: '/function',
          },
          {
            icon: 'mdi-account-details',
            title: '함수 (자세히)',
            to: '/functionhard',
          },
          {
            icon: 'mdi-application-variable-outline',
            title: '특별한 변수',
            to: '/specialvariable',
          },
        ],

        intermediate_python: [
          {
            icon: 'mdi-database-settings-outline',
            title: '타입 지정',
            to: '/type',
          },
          {
            icon: 'mdi-incognito-circle',
            title: '익명함수',
            to: '/anonymousfunction',
          },
          {
            icon: 'mdi-fast-forward-outline',
            title: 'For 반복문',
            to: '/for',
          },
          {
            icon: 'mdi-fast-forward-60',
            title: '반복문 종류',
            to: '/fortype',
          },
          {
            icon: 'mdi-fast-forward-30',
            title: '반복문 함수',
            to: '/forfunction',
          },
          {
            icon: 'mdi-directions-fork',
            title: 'While 반복문',
            to: '/while',
          },
          {
            icon: 'mdi-minus',
            title: '코드를 한 줄에',
            to: '/oneliner',
          },
          {
            icon: 'mdi-dots-horizontal',
            title: '다양한 함수',
            to: '/etcfunction',
          },
          {
            icon: 'mdi-package-variant-closed',
            title: '모듈',
            to: '/module',
          },
          {
            icon: 'mdi-package-variant',
            title: '모듈 마스터',
            to: '/modulemaster',
          },
          {
            icon: 'mdi-camera-timer',
            title: '파이썬 모듈',
            to: '/pythonmodule',
          },
          {
            icon: 'mdi-calendar-range',
            title: '날짜',
            to: '/date',
          },
          {
            icon: 'mdi-dice-1',
            title: '랜덤',
            to: '/random',
          },
          {
            icon: 'mdi-regex',
            title: '정규식',
            to: '/regex',
          },
        ],

        advanced_python: [
          {
            icon: 'mdi-google-classroom',
            title: '클래스',
            to: '/class',
          },
          {
            icon: 'mdi-microsoft-windows-classic',
            title: '클래스 메서드',
            to: '/classmethod',
          },
          {
            icon: 'mdi-android-studio',
            title: '수학 (통계)',
            to: '/math',
          },
          {
            icon: 'mdi-file',
            title: '파일',
            to: '/file',
          },
          {
            icon: 'mdi-file-document',
            title: '파일 읽기',
            to: '/filereading',
          },
          {
            icon: 'mdi-file-document-edit',
            title: '파일 쓰기',
            to: '/filewriting',
          },
          {
            icon: 'mdi-barcode',
            title: '파일 만들기, 삭제하기, encoding',
            to: '/etcfile',
          },
          {
            icon: 'mdi-account-check',
            title: '컨텍스트 매니저',
            to: '/contextmanager',
          },
          {
            icon: 'mdi-database-refresh-outline',
            title: '데이터 형태 바꾸기',
            to: '/datachange',
          },
          {
            icon: 'mdi-application-cog-outline',
            title: '문자열을 코드로',
            to: '/stringascode',
          },
          {
            icon: 'mdi-tray-arrow-down',
            title: 'PIP',
            to: '/pip',
          },
        ],

        python_specialist: [
          {
            icon: 'mdi-code-json',
            title: 'JSON',
            to: '/json',
          },
          {
            icon: 'mdi-arrange-bring-to-front',
            title: '정렬',
            to: '/array',
          },
          {
            icon: 'mdi-clipboard-list',
            title: '정렬 종류',
            to: '/array_type',
          },
          {
            icon: 'mdi-format-list-bulleted-type',
            title: '정렬 모양',
            to: '/array_shape',
          },
          {
            icon: 'mdi-alert-circle',
            title: '에러 다루기',
            to: '/error',
          },
          {
            icon: 'mdi-alert-circle-outline',
            title: '에러',
            to: '/error2',
          },
          {
            icon: 'mdi-post',
            title: '로깅',
            to: '/logging',
          },
          {
            icon: 'mdi-chart-gantt',
            title: 'Map, Reduce, Filter',
            to: '/mapandreduceandfilter',
          },
          {
            icon: 'mdi-string-lights',
            title: '데코레이터',
            to: '/decorator',
          },
          {
            icon: 'mdi-string-lights-off',
            title: '나만의 데코레이터',
            to: '/mydecorator',
          },
          {
            icon: 'mdi-language-python',
            title: '파이썬 데코레이터',
            to: '/pythondecorator',
          },
        ],

        master_python: [
          {
            icon: 'mdi-view-agenda-outline',
            title: '새로운 줄',
            to: '/newline',
          },
          {
            icon: 'mdi-sync-alert',
            title: '비동기',
            to: '/beedongee',
          },
          {
            icon: 'mdi-cog-sync',
            title: 'asyncio',
            to: '/asyncio',
          },
          {
            icon: 'mdi-form-textbox',
            title: '__name__',
            to: '/name',
          },
          {
            icon: 'mdi-spider-thread',
            title: '스레드',
            to: '/thread',
          },
          {
            icon: 'mdi-spider-web',
            title: '스레드 (자세히)',
            to: '/complexthread',
          },
          {
            icon: 'mdi-spider',
            title: '스레드 메서드',
            to: '/threadmethod',
          },
          {
            icon: 'mdi-scoreboard',
            title: '멀티프로세싱',
            to: '/multiprocessing',
          },
          {
            icon: 'mdi-countertop-outline',
            title: '카운터',
            to: '/counter',
          },
          {
            icon: 'mdi-frequently-asked-questions',
            title: '리퀘스트',
            to: '/request',
          },
          {
            icon: 'mdi-bottle-tonic-outline',
            title: '리퀘스트 메서드',
            to: '/requestmethod',
          },
          {
            icon: 'mdi-lightning-bolt',
            title: '던더메서드',
            to: '/dundermethod',
          },
          {
            icon: 'mdi-lightning-bolt-circle',
            title: '추가 던더메서드',
            to: '/additionaldundermethod',
          },
          {
            icon: 'mdi-weather-lightning-rainy',
            title: '기타 던더메서드',
            to: '/etcdundermethod',
          },
          {
            icon: 'mdi-cash-register',
            title: 'atexit',
            to: '/atexit',
          },
          {
            icon: 'mdi-map-marker-path',
            title: 'coroutine',
            to: '/coroutine',
          },
        ],

        python_god: [
          {
            icon: 'mdi-stack-overflow',
            title: '스펨 이메일',
            to: '/spam',
          },
          {
            icon: 'mdi-magnify-plus-outline',
            title: '자동 줌',
            to: '/autozoom',
          },
          {
            icon: 'mdi-keyboard-variant',
            title: '키보드',
            to: '/keyboard',
          },
          {
            icon: 'mdi-chart-scatter-plot',
            title: 'Matplotlib',
            to: '/matplotlib',
          },
          {
            icon: 'mdi-mouse',
            title: '마우스',
            to: '/mouse',
          },
          {
            icon: 'mdi-turtle',
            title: '터틀',
            to: '/turtle',
          },
          {
            icon: 'mdi-panda',
            title: '판다스',
            to: '/pandas',
          },
          {
            icon: 'mdi-account-voice',
            title: 'gTTS',
            to: '/gtts',
          },
        ],

        other: [
          {
            icon: 'mdi-map-marker-question',
            title: '퀴즈!',
            to: '/quiz',
          },
          {
            icon: 'mdi-file-video',
            title: '비디오 모음',
            to: '/video',
          },
          {
            icon: 'mdi-check-all',
            title: '끝?',
            to: '/finished',
          },
        ],
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '파이썬',
    }
  },
  mounted() {
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'UA-209775586-1')
  },
}
</script>
