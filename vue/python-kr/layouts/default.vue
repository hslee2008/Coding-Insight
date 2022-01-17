<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
      </v-list>
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
      items: [
        {
          icon: 'mdi-source-commit-start',
          title: '시작',
          to: '/',
        },
        {
          icon: 'mdi-download',
          title: '설치',
          to: 'install',
        },
        {
          icon: 'mdi-microsoft-visual-studio-code',
          title: 'VSCode',
          to: 'vscode',
        },
        {
          icon: 'mdi-audio-input-rca',
          title: '입출력',
          to: 'io',
        },
        {
          icon: 'mdi-application-variable',
          title: '변수',
          to: 'variable',
        },
        {
          icon: 'mdi-lipstick',
          title: '매드립스 만들기',
          to: 'madlib',
        },

        {
          icon: 'mdi-database',
          title: '데이터 형태',
          to: 'datatype',
        },
        {
          icon: 'mdi-message',
          title: '주석',
          to: 'comment',
        },
        {
          icon: 'mdi-code-string',
          title: '문자',
          to: 'string',
        },
        {
          icon: 'mdi-function-variant',
          title: '문자 메서드 1',
          to: 'stringmethod1',
        },
        {
          icon: 'mdi-function-variant',
          title: '문자 메서드 2',
          to: 'stringmethod2',
        },
        {
          icon: 'mdi-door-sliding-lock',
          title: '이스케이프 문자',
          to: 'escapechar',
        },

        {
          icon: 'mdi-ab-testing',
          title: '아스키',
          to: 'ascii',
        },
        {
          icon: 'mdi-numeric-2',
          title: '분리언',
          to: 'boolean',
        },
        {
          icon: 'mdi-counter',
          title: '숫자',
          to: 'number',
        },
        {
          icon: 'mdi-plus-minus',
          title: '연산자',
          to: 'operator',
        },
        {
          icon: 'mdi-format-list-bulleted-type',
          title: '숫자 종류',
          to: 'numtype',
        },
        {
          icon: 'mdi-calculator',
          title: '계산기 만들기',
          to: 'calc',
        },
        {
          icon: 'mdi-application-parentheses',
          title: '숫자 메서드',
          to: 'nummethod',
        },
        {
          icon: 'mdi-filter-variant',
          title: '리스트',
          to: 'list',
        },
        {
          icon: 'mdi-playlist-plus',
          title: '리스트 메서드 1',
          to: 'listmethod1',
        },

        {
          icon: 'mdi-download',
          title: '__name__',
          to: '__name__',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '파이썬',
    };
  },
};
</script>
