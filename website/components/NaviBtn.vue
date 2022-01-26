<template>
  <div>
    <NuxtLink :to="'./' + flink" style="text-decoration: none; float: left">
      <v-btn class="ma-2" outlined ripple>
        <v-icon left> mdi-arrow-left-drop-circle </v-icon>Back
      </v-btn>
    </NuxtLink>

    <NuxtLink :to="'./' + slink" style="text-decoration: none; float: right">
      <v-btn class="ma-2" outlined ripple>
        Next<v-icon right> mdi-arrow-right-drop-circle </v-icon>
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script>
export default { props: ['flink', 'slink'] };
</script>
