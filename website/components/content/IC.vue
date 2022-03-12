<template>
  <span
    v-if="$vuetify.theme.dark"
    class="grey darken-2 pa-md-1 mr-1 rounded"
    style="font-family: Menlo, Monaco, Consolas, Courier New, monospace"
  >
    {{ code }}
  </span>

  <span
    v-else
    class="blue-grey red--text lighten-4 pa-md-1 mrw-1 rounded"
    style="font-family: Menlo, Monaco, Consolas, Courier New, monospace"
  >
    {{ code }}
  </span>
</template>

<script>
export default {
  name: 'InlineCodeElement',
  props: ['code'],
};
</script>
