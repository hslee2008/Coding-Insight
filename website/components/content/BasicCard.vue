<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <v-card-title class="text-h4 text--primary">{{ heading }}</v-card-title>

    <v-card-text class="text--primary" v-html="contents"> </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BasicCard',
  props: ['heading', 'contents'],
};
</script>
