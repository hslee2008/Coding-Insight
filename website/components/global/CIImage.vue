<template>
  <v-img
    :src="src"
    :max-width="maxWidth"
    alt="Coding-Insight Image"
    :class="(!noMargin ? 'mx-3 my-3 ' : '') + 'rounded-lg'"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="primary" />
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'CIImage',
  props: ['src', 'maxWidth', 'noMargin'],
};
</script>
