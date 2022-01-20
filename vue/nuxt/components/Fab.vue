<template>
  <v-btn
    color="blue"
    fab
    dark
    x-small
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
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
@media screen and (min-width: 600px) {
  .top-fab {
    display: none;
  }
}
</style>
