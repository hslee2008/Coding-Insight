<template>
  <v-img :src="src" :max-width="maxWidth" alt="python-factory-image">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'CIImage',
  props: ['src', 'maxWidth'],
};
</script>
