<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <h2>{{ heading }}</h2>

    <div v-html="contents"></div>
  </v-card>
</template>

<script>
export default {
  name: 'BasicCard',
  props: ['heading', 'contents'],
};
</script>
