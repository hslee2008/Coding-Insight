<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 50px"
    elevation="0"
  >
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
  name: 'NaviBtn',
  props: ['bef', 'aft'],
};
</script>
