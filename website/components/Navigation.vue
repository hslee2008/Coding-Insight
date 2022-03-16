<template>
  <v-card class="transparent mb-15 mt-15">
    <v-card-actions>
      <v-btn
        aria-label="Coding Insight Button"
        :to="!bef.startsWith('/') ? './' + bef : bef"
        outlined
        ripple
      >
        <v-icon left> mdi-menu-left </v-icon>Back
      </v-btn>

      <v-spacer />

      <v-btn aria-label="Coding Insight Button" :to="aft" outlined ripple>
        Next<v-icon right> mdi-menu-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['bef', 'aft'],
};
</script>
