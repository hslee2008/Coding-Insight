<template>
  <div>
    <h1 class="text-center" style="font-size: 30px">
      {{ title }}
    </h1>

    <v-divider class="mb-3 mx-3"></v-divider>

    <v-list-item
      v-for="(item, i) in items[isEnglish() ? json + '_en' : json]"
      :key="json + i.toString()"
      :to="item.to"
      router
      exact
      dense
      color="primary"
      active-class="activeList"
    >
      <v-list-item-icon>
        <v-icon>{{ 'mdi-' + item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>

    <br /><br />
  </div>
</template>

<script>
import PythonLinks from '~/assets/js/layout';
import PythonLinksEN from '~/assets/js/layout_en';

export default {
  props: ['itemprops', 'titleen', 'titlekr', 'json'],
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
        this.$nuxt.$route.path.includes('english') ||
        this.$nuxt.$route.path.includes('-en')
      );
    },
  },
};
</script>

<style>
.activeList {
  background-color: #23272f;
}
</style>
