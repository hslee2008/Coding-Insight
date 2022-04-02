<template>
  <v-img
    :src="src"
    :max-width="maxWidth"
    class="rounded-lg"
    alt="Coding-Insight Image"
    :style="`margin-bottom: 15px !important`"
  >
    <template #placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="primary" />
      </v-row>
    </template>
  </v-img>
</template>

<script>
  export default {
    name: 'GlobalImage',
    props: ['src', 'maxWidth'],
  };
</script>
