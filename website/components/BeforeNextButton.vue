<template>
  <div>
    <NuxtLink :to="'./' + flink" style="text-decoration: none; float: left">
      <v-btn class="ma-2" outlined>
        <v-icon left> mdi-chevron-left </v-icon>Back
      </v-btn>
    </NuxtLink>

    <NuxtLink :to="'./' + slink" style="text-decoration: none; float: right">
      <v-btn class="ma-2" outlined>
        Next<v-icon right> mdi-chevron-right </v-icon>
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script>
export default { props: ['flink', 'slink'] }
</script>
