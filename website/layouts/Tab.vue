<template>
  <v-tabs v-model="tab" grow>
    <v-tab
      v-for="it in ['Python', 'C/C++', 'Rust']"
      :key="it"
      ripple
      :style="`background-color: ${$vuetify.theme.dark ? bgd : 'white'}`"
    >
      {{ it }}
    </v-tab>

    <v-tabs-items
      v-model="tab"
      :style="`background-color: ${$vuetify.theme.dark ? bgd : 'white'}`"
    >
      <v-tab-item v-for="(langItems, index) in [python, c, rust]" :key="index">
        <v-expansion-panels hover flat accordion>
          <ItemList
            v-for="item in langItems"
            :key="item.titleen"
            :titleen="item.titleen"
            :titlekr="item.titlekr"
            :json="item.json"
            :close="close"
          />
        </v-expansion-panels>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
  import ItemList from './ItemList.vue';
  import courses from './courses';

  export default {
    name: 'Tab',
    props: ['close'],
    components: {
      ItemList,
    },
    data() {
      return {
        tab: 0,
        python: courses.python,
        c: courses.c,
        rust: courses.rust,
      };
    },
  };
</script>
