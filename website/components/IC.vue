<template>
  <span
    style="
      background-color: #4d4c5d;
      padding: 5px;
      font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    "
    v-if="$vuetify.theme.dark"
    >{{ code }}</span
  >
  <span
    v-else
    style="
      color: red;
      background-color: whitesmoke;
      font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    "
    >{{ code }}</span
  >
</template>

<script>
export default {
  name: 'InlineCodeElement',
  props: ['code'],
};
</script>
