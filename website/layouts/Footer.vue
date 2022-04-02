<template>
  <v-footer class="my-5 transparent">
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
</template>
