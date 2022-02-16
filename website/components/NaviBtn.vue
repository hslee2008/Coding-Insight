<template>
  <div>
    <NuxtLink
      aria-label="BeforeButton"
      :to="!bef.startsWith('/') ? './' + bef : bef"
      style="text-decoration: none; float: left"
    >
      <v-btn class="ma-2" outlined ripple>
        <v-icon left> mdi-arrow-left-circle-outline </v-icon>Back
      </v-btn>
    </NuxtLink>

    <NuxtLink
      aria-label="NextButton"
      :to="aft"
      style="text-decoration: none; float: right"
    >
      <v-btn class="ma-2" outlined ripple>
        Next<v-icon right> mdi-arrow-right-circle-outline</v-icon>
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NaviBtn',
  props: ['bef', 'aft'],
};
</script>
