<template>
  <div>
    <h1 class="text-center">
      {{ isEnglish() ? titleen : titlekr }}
    </h1>
    <v-divider></v-divider>
    <v-list-item
      v-for="(item, i) in items[englishValue(json)]"
      :key="englishValue(i.toString() + json)"
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
  </div>
</template>

<script>
import PythonLinks from '../layouts/layout';
import PythonLinksEN from '../layouts/layout_en';

export default {
  props: ['itemprops', 'titleen', 'titlekr', 'json'],
  data() {
    return {
      items: {
        ...PythonLinks,
        ...PythonLinksEN,
      },
    };
  },
  methods: {
    isEnglish() {
      return (
        this.$nuxt.$route.path.includes('english') ||
        this.$nuxt.$route.path.includes('-en')
      );
    },
    englishValue(a) {
      return this.isEnglish() ? a + '_en' : a;
    },
  },
};
</script>
