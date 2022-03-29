<template>
  <v-card class="transparent my-15">
    <v-card-actions>
      <v-btn outlined color="primary" :to="bef">
        <v-icon left> mdi-chevron-left </v-icon>
        BACK
      </v-btn>

      <v-spacer />

      <v-btn outlined color="primary" :to="aft">
        NEXT
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
