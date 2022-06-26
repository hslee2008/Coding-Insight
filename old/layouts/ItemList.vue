<template>
  <v-expansion-panel style="background-color: #282c34">
    <v-expansion-panel-header>{{
      englishfy() ? en : kr
    }}</v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-list-item
        v-for="(item, i) in links[json + englishfy()]"
        :key="item.to + i.toString()"
        :to="`/${item.type}/${item.to}`"
        dense
        exact
        @click="closeIfM"
        color="#097FA4"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
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
      };
    },

    methods: {
      englishfy() {
        return this.$route.path.includes('english') ? '_en' : '';
      },
      closeIfM() {
        this.$vuetify.breakpoint.mobile && this.close();
      },
    },
  };
</script>
