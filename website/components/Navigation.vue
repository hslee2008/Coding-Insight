<template>
  <v-card class="transparent" style="margin-bottom: 60px">
    <v-card-text>
      <v-btn
        aria-label="Coding Insight Button"
        :to="!bef.startsWith('/') ? './' + bef : bef"
        outlined
        ripple
      >
        <v-icon left> mdi-menu-left </v-icon>Back
      </v-btn>

      <v-btn
        aria-label="Coding Insight Button"
        :to="aft"
        outlined
        ripple
        style="float: right"
      >
        Next<v-icon right> mdi-menu-right</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['bef', 'aft'],
};
</script>
