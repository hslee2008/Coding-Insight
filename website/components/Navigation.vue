<template>
  <v-card class="transparent my-15">
    <v-card-actions>
      <v-btn
        v-if="!single"
        aria-label="Back"
        :to="bef"
        ripple
        outlined
        color="primary"
      >
        <v-icon left> mdi-menu-left </v-icon> Back
      </v-btn>

      <v-spacer />

      <v-btn aria-label="Next" :to="aft" ripple outlined color="primary">
        Next <v-icon right> mdi-menu-right</v-icon>
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
