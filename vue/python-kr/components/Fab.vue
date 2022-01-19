<template>
  <v-btn
    color="blue"
    fab
    dark
    small
    fixed
    bottom
    right
    @click="scrollTop"
    class="top-fab"
  >
    <v-icon>mdi-arrow-up-thin-circle-outline</v-icon></v-btn
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
