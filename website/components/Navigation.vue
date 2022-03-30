<template>
  <v-card class="transparent my-15">
    <v-card-actions>
      <v-btn outlined color="primary" :to="bef">
        <v-icon left> mdi-chevron-left </v-icon>
        Back
      </v-btn>

      <v-spacer />

      <v-btn outlined color="primary" :to="aft">
        Next
        <v-icon right> mdi-chevron-right </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Navigation',
    props: ['bef', 'aft', 'single'],
  };
</script>
