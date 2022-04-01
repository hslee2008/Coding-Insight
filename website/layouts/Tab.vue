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
        <v-tab-item v-for="(li, ind) in [python, c, rust]" :key="ind">
          <v-expansion-panels hover flat accordion>
            <ItemList
              v-for="item in li"
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
      const route = $nuxt.$route.path;
      this.tab = route.includes('rust') ? 2 : route.includes('c-cpp') ? 1 : 0;
    },
  };
</script>
