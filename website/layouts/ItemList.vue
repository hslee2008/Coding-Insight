<template>
  <v-expansion-panel
    :style="`background-color: ${$vuetify.theme.dark ? bgd : 'white'}`"
  >
    <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-list-item
        v-for="(item, i) in links[json + isEnglish()]"
        :key="item.to + i.toString()"
        :to="item.to"
        dense
        exact
        :active-class="`activeList${$vuetify.theme.dark ? 'Dark' : 'Light'}`"
        @click="close"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import PythonLinks from 'assets/js/layout';
  import PythonLinksEN from 'assets/js/layout_en';

  export default {
    props: ['itemprops', 'en', 'kr', 'json', 'close'],
    data() {
      return {
        links: {
          ...PythonLinks,
          ...PythonLinksEN,
        },

        title: this.isEnglish() ? this.en : this.kr,
      };
    },
    methods: {
      isEnglish() {
        return this.$route.path.includes('english') ||
          this.$route.path.includes('-en')
          ? '_en'
          : '';
      },
    },
  };
</script>

<style scoped>
  .activeListDark {
    background-color: #23272f;
  }

  .activeListLight {
    background-color: #e6f7ff;
  }
</style>
