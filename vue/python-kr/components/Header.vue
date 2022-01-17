<template>
  <div class="text-center">
    <hr />
    <br />
    <v-btn class="ma-2" outlined>
      읽어주기<v-icon right> mdi-bullhorn </v-icon>
    </v-btn>

    <v-btn class="ma-2" outlined>
      English<v-icon right> mdi-ab-testing </v-icon>
    </v-btn>
    <br /><br />
    <h1 class="display-6">
      <span>{{ title }}</span
      ><br id="lbbr" /><span id="txt">Computer Science Lab (</span>CSL<span
        id="txt"
        >)</span
      >
      {{ num }}
    </h1>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  props: ['title', 'num'],
}
</script>
