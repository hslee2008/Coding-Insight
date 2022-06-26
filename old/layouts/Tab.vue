<template>
  <div>
    <v-tabs v-model="tab" grow>
      <v-tab
        v-for="it in ['Python', 'C/C++', 'Rust']"
        :key="it"
        ripple
        style="background-color: #282c34"
      >
        {{ it }}
      </v-tab>

      <v-tabs-items v-model="tab" style="background-color: #282c34">
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
  </div>
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
        ...courses,
      };
    },
    mounted() {
      const route = $nuxt.$route.path;
      this.tab = route.includes('rust') ? 2 : route.includes('c-cpp') ? 1 : 0;
    },
  };
</script>
