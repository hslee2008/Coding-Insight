<template>
  <div>
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
        <v-tab-item
          v-for="(langItems, index) in [python, c, rust]"
          :key="index"
        >
          <v-expansion-panels hover flat accordion>
            <ItemList
              v-for="item in langItems"
              :key="item.en"
              :en="item.en"
              :kr="item.kr"
              :json="item.json"
              :close="close"
            />
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>

    <Footer />
  </div>
</template>

<script>
  import Footer from './Footer';
  import ItemList from './ItemList.vue';
  import courses from './courses';

  export default {
    name: 'Tab',
    props: ['close'],
    components: {
      ItemList,
      Footer,
    },

    data() {
      return {
        tab: 0,
        ...courses,
      };
    },

    mounted() {
      this.tab = $nuxt.$route.path.includes('rust')
        ? 2
        : $nuxt.$route.path.includes('c-cpp')
        ? 1
        : 0;
    },
  };
</script>
