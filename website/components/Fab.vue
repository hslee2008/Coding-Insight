<template>
  <v-btn
    color="blue"
    fab
    dark
    fixed
    bottom
    right
    icon
    @click="scrollTop"
    class="top-fab"
  >
    <v-icon>mdi-mouse-move-up</v-icon></v-btn
  >
</template>

<script>
export default {
  name: 'ScrollTopFab',
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
@media screen and (min-width: 800px) {
  .top-fab {
    display: none;
  }
}
</style>
