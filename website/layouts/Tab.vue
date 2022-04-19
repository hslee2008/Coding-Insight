<template>
  <div>
    <v-tabs v-model="tab" grow>
      <v-tab
        v-for="it in ['Python', 'C/C++', 'Rust']"
        :key="it"
        ripple
        :style="`background-color: ${bgd}`"
      >
        {{ it }}
      </v-tab>

      <v-tabs-items v-model="tab" :style="`background-color: ${bgd}`">
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

    <v-footer class="transparent">
      <v-btn
        v-for="(item, i) in [
          {
            icon: 'github',
            link: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
          },
          {
            icon: 'youtube',
            link: 'https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA',
          },
          {
            icon: 'microsoft-visual-studio-code',
            link: 'https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search',
          },
          {
            icon: 'video',
            link: 'https://www.youtube.com/watch?v=ya7Ud1tTpag',
          },
        ]"
        :key="i"
        :href="item.link"
        aria-label="Footer Buttons"
        icon
      >
        <v-icon>mdi-{{ item.icon }}</v-icon>
      </v-btn>

      <v-spacer />

      &copy; 2021-{{ new Date().getFullYear() }}
    </v-footer>
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
