<template>
  <v-expansion-panel style="background-color: rgb(0, 0, 0, 0)">
    <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-list-item
        v-for="(item, i) in items[isEnglish() ? json + '_en' : json]"
        :key="json + i.toString()"
        :to="item.to"
        dense
        exact
        :active-class="'activeList' + $vuetify.theme.dark ? 'Dark' : 'Light'"
        @click="close"
      >
        <v-list-item-icon>
          <v-icon>{{ 'mdi-' + item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import PythonLinks from '~/assets/js/layout';
import PythonLinksEN from '~/assets/js/layout_en';

export default {
  props: ['itemprops', 'titleen', 'titlekr', 'json', 'close'],
  data() {
    return {
      items: {
        ...PythonLinks,
        ...PythonLinksEN,
      },
      title: this.isEnglish() ? this.titleen : this.titlekr,
    };
  },
  methods: {
    isEnglish() {
      return (
        this.$route.path.includes('english') || this.$route.path.includes('-en')
      );
    },
  },
};
</script>

<style>
.activeListDark {
  background-color: #23272f;
}

.activeListLight {
  background-color: #e6f7ff;
}
</style>
