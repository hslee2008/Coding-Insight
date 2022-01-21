<template>
  <div style="position: absolute; height: 200px; right: 50%; top: 50%">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <br />
    <v-btn to="/"> <v-icon left>mdi-home</v-icon>홈으로 이동</v-btn>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 페이지를 찾지 못했습니다...',
      otherError: '알 수 없는 에러가 생겼습니다 :(',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
