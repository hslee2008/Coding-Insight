<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
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
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="false"
      style="display: flex; justify-content: flex-end"
    >
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
          icon: 'mdi-download',
          title: '__name__',
          to: '__name__',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '파이썬',
    }
  },
}
</script>
