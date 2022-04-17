<template>
  <v-row
    v-if="$route.path !== '/' && $route.path !== '/index-en'"
    class="mx-1 my-16"
  >
    <span>
      Edit on
      <a
        aria-label="Edit on GitHub"
        :href="`https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages${
          $nuxt.$route.path + ($nuxt.$route.path.endsWith('/') ? 'index' : '')
        }.vue`"
        target="_blank"
      >
        GitHub <v-icon x-small color="primary">mdi-open-in-new</v-icon>
      </a>
    </span>

    <v-spacer />

    <span style="float: right">
      Updated: <span class="grey--text">{{ last }}</span>
    </span>
  </v-row>
</template>

<script>
  export default {
    name: 'PageFooter',
    data() {
      return {
        last: '',
      };
    },
    mounted() {
      this.last = document.lastModified;
    },
  };
</script>
