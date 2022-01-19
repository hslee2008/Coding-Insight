<template>
  <v-app dark>
    <Fab></Fab>
    
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
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
            <v-icon>{{
              !howMuchDoneQ(item.to) ? item.icon : 'mdi-check-decagram'
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>{{ clipped ? 'mdi-forwardburger' : 'mdi-backburger' }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      :bottom="true"
      width="70%"
      temporary
      fixed
      style="padding: 10px; display: flex"
      ><v-row>
        <v-card class="mx-auto" max-width="350">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
          >
            <v-card-title>파이썬 프로그래밍 언어</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Python </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              파이썬은 대부분 초보자들이 처음으로 배우는 코딩 언어입니다. 매우
              배우기 쉽습니다!
            </div>
          </v-card-text>

          <v-card-actions>
            <NuxtLink to="/">
              <v-btn class="ma-2" color="primary" dark>
                파이썬
                <v-icon dark right> mdi-language-python </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/quiz">
              <v-btn class="ma-2" color="primary" dark>
                퀴즈
                <v-icon dark right> mdi-chat-question </v-icon>
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/video">
              <v-btn class="ma-2" color="primary" dark>
                비디오
                <v-icon dark right> mdi-youtube </v-icon>
              </v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="350">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://i.stack.imgur.com/mWPIq.png"
          >
            <v-card-title>C/C++ 프로그래밍 언어</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> C/C++ </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              C/C++는 매우 좋지 않는 환경에서도 잘 실행이 될 수 있는 매우 빠른
              코딩 언어입니다.
            </div>
          </v-card-text>

          <v-card-actions>
            <a href="https://coding-insight.com/c-cpp/korean/c.html">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark right> mdi-language-c </v-icon>
              </v-btn>
            </a>
            <a href="https://coding-insight.com/c-cpp/korean/cpp.html">
              <v-btn class="ma-2" color="primary" dark>
                <v-icon dark right> mdi-language-cpp </v-icon></v-btn
              >
            </a>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="350">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://i2.wp.com/www.thecoderworld.com/wp-content/uploads/2020/04/Rust-Based-Programming-Language.png?fit=1280%2C720&ssl=1"
          >
            <v-card-title>Rust 프로그래밍 언어</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Rust </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              Rust 프로그래밍 언어는 매우 안정적이면서 C 언어처럼 빠릅니다!
            </div>
          </v-card-text>

          <v-card-actions>
            <a href="https://coding-insight.com/c-cpp/korean/c.html">
              <v-btn class="ma-2" color="primary" dark>
                Rust
                <v-icon dark right> mdi-language-rust </v-icon>
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-row></v-navigation-drawer
    >

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
            icon: 'mdi-map-marker',
            title: '시작',
            to: '/',
          },
          {
            icon: 'mdi-folder-download',
            title: '설치',
            to: '/install',
          },
          {
            icon: 'mdi-microsoft-visual-studio-code',
            title: 'VSCode',
            to: '/vscode',
          },
          {
            icon: 'mdi-video-input-component',
            title: '입출력',
            to: '/io',
          },
          {
            icon: 'mdi-application-variable',
            title: '변수',
            to: '/variable',
          },
          {
            icon: 'mdi-emoticon-lol',
            title: '매드립스',
            to: '/madlib',
          },

          {
            icon: 'mdi-database',
            title: '데이터 형태',
            to: '/datatype',
          },
          {
            icon: 'mdi-comment-quote',
            title: '주석',
            to: '/comment',
          },
          {
            icon: 'mdi-alphabetical',
            title: '문자',
            to: '/string',
          },
          {
            icon: 'mdi-sort-alphabetical-ascending',
            title: '문자 메서드 1',
            to: '/stringmethod1',
          },
          {
            icon: 'mdi-sort-alphabetical-descending',
            title: '문자 메서드 2',
            to: '/stringmethod2',
          },
          {
            icon: 'mdi-exit-run',
            title: '이스케이프 문자',
            to: '/escapechar',
          },
        ],

        python_basics: [
          {
            icon: 'mdi-book-alphabet',
            title: '아스키',
            to: '/ascii',
          },
          {
            icon: 'mdi-nintendo-switch',
            title: '분리언',
            to: '/boolean',
          },
          {
            icon: 'mdi-numeric',
            title: '숫자',
            to: '/number',
          },
          {
            icon: 'mdi-plus-minus-variant',
            title: '연산자',
            to: '/operator',
          },
          {
            icon: 'mdi-pi',
            title: '숫자 종류',
            to: '/numtype',
          },
          {
            icon: 'mdi-calculator',
            title: '계산기 만들기',
            to: '/calc',
          },
          {
            icon: 'mdi-numeric-9-plus-box-multiple',
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
            icon: 'mdi-playlist-minus',
            title: '리스트 메서드 2',
            to: '/listmethod2',
          },
        ],

        python_beginner: [
          {
            icon: 'mdi-notebook-multiple',
            title: '딕셔너리',
            to: '/dictionary',
          },
          {
            icon: 'mdi-notebook-plus',
            title: '딕셔너리 메서드',
            to: '/dictionarymethod',
          },
          {
            icon: 'mdi-view-list',
            title: '튜플',
            to: '/tuple',
          },
          {
            icon: 'mdi-code-braces',
            title: '집합',
            to: '/set',
          },
          {
            icon: 'mdi-code-braces-box',
            title: '집합 메서드',
            to: '/setmethod',
          },
          {
            icon: 'mdi-diversify',
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
            icon: 'mdi-function-variant',
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
            icon: 'mdi-database-cog',
            title: '타입 지정',
            to: '/type',
          },
          {
            icon: 'mdi-incognito',
            title: '익명함수',
            to: '/anonymousfunction',
          },
          {
            icon: 'mdi-fast-forward-outline',
            title: 'For 반복문',
            to: '/for',
          },
          {
            icon: 'mdi-skip-forward',
            title: '반복문 종류',
            to: '/fortype',
          },
          {
            icon: 'mdi-rewind',
            title: '반복문 함수',
            to: '/forfunction',
          },
          {
            icon: 'mdi-sync',
            title: 'While 반복문',
            to: '/while',
          },
          {
            icon: 'mdi-minus',
            title: '코드를 한 줄에',
            to: '/oneliner',
          },
          {
            //TODO
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
            icon: 'mdi-gift',
            title: '모듈 마스터',
            to: '/modulemaster',
          },
          {
            icon: 'mdi-package-variant',
            title: '파이썬 모듈',
            to: '/pythonmodule',
          },
          {
            icon: 'mdi-calendar-range',
            title: '날짜',
            to: '/date',
          },
          {
            icon: 'mdi-dice-multiple',
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
            icon: 'mdi-map',
            title: '클래스',
            to: '/class',
          },
          {
            icon: 'mdi-map-outline',
            title: '클래스 메서드',
            to: '/classmethod',
          },
          {
            icon: 'mdi-math-integral',
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
            icon: 'mdi-file-tree',
            title: '파일 만들기, 삭제하기, encoding',
            to: '/etcfile',
          },
          {
            icon: 'mdi-file-sign',
            title: '컨텍스트 매니저',
            to: '/contextmanager',
          },
          {
            icon: 'mdi-database-refresh-outline',
            title: '데이터 형태 바꾸기',
            to: '/datachange',
          },
          {
            icon: 'mdi-code-tags',
            title: '문자열을 코드로',
            to: '/stringascode',
          },
          {
            icon: 'mdi-progress-download',
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
            icon: 'mdi-clipboard',
            title: '정렬',
            to: '/array',
          },
          {
            icon: 'mdi-clipboard-list',
            title: '정렬 종류',
            to: '/array_type',
          },
          {
            icon: 'mdi-clipboard-pulse',
            title: '정렬 모양',
            to: '/array_shape',
          },
          {
            icon: 'mdi-alert-circle',
            title: '에러 다루기',
            to: '/error',
          },
          {
            icon: 'mdi-water-boiler-alert',
            title: '에러',
            to: '/error2',
          },
          {
            icon: 'mdi-pulse',
            title: '로깅',
            to: '/logging',
          },
          {
            icon: 'mdi-filter',
            title: 'Map, Reduce, Filter',
            to: '/mapandreduceandfilter',
          },
          {
            icon: 'mdi-string-lights',
            title: '데코레이터',
            to: '/decorator',
          },
          {
            icon: 'mdi-ornament',
            title: '나만의 데코레이터',
            to: '/mydecorator',
          },
          {
            icon: 'mdi-wrench-outline',
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
            icon: 'mdi-sync-off',
            title: '비동기',
            to: '/beedongee',
          },
          {
            icon: 'mdi-sync',
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
            icon: 'mdi-desktop-classic',
            title: '멀티프로세싱',
            to: '/multiprocessing',
          },
          {
            icon: 'mdi-account-question',
            title: '카운터',
            to: '/counter',
          },
          {
            icon: 'mdi-hand-wave',
            title: '리퀘스트',
            to: '/request',
          },
          {
            icon: 'mdi-hand-coin',
            title: '리퀘스트 메서드',
            to: '/requestmethod',
          },
          {
            icon: 'mdi-puzzle',
            title: '던더메서드',
            to: '/dundermethod',
          },
          {
            icon: 'mdi-puzzle-plus',
            title: '추가 던더메서드',
            to: '/additionaldundermethod',
          },
          {
            icon: 'mdi-puzzle-star',
            title: '기타 던더메서드',
            to: '/etcdundermethod',
          },
          {
            icon: 'mdi-lan-pending',
            title: 'atexit',
            to: '/atexit',
          },
          {
            icon: 'mdi-transit-connection-variant',
            title: '코루틴',
            to: '/coroutine',
          },
        ],

        python_god: [
          {
            icon: 'mdi-email-alert',
            title: '스펨 이메일',
            to: '/spam',
          },
          {
            icon: 'mdi-video-box',
            title: '자동 줌',
            to: '/autozoom',
          },
          {
            icon: 'mdi-keyboard-variant',
            title: '키보드',
            to: '/keyboard',
          },
          {
            icon: 'mdi-chart-bar-stacked',
            title: 'Matplotlib',
            to: '/matplotlib',
          },
          {
            icon: 'mdi-mouse-bluetooth',
            title: '마우스',
            to: '/mouse',
          },
          {
            icon: 'mdi-tortoise',
            title: '터틀',
            to: '/turtle',
          },
          {
            icon: 'mdi-panda',
            title: '판다스',
            to: '/pandas',
          },
          {
            icon: 'mdi-monitor-speaker',
            title: 'gTTS',
            to: '/gtts',
          },
        ],

        other: [
          {
            icon: 'mdi-head-question',
            title: '퀴즈!',
            to: '/quiz',
          },
          {
            icon: 'mdi-video-marker',
            title: '비디오 모음',
            to: '/video',
          },
          {
            icon: 'mdi-checkbox-multiple-marked-circle-outline',
            title: '끝?',
            to: '/finished',
          },
        ],
      },
      rightDrawer: false,
      title: '파이썬 프로그래밍 언어',
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
  methods: {
    howMuchDoneQ(checking) {
      return false
    },
  },
}
</script>
