<template>
  <div style="position: absolute; height: 200px; right: 50%; top: 50%">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <br />
    <NuxtLink to="/" style="text-decoration: none">
      <v-btn> <v-icon left>mdi-language-python</v-icon>파이썬 배우기</v-btn>
    </NuxtLink>
    <a href="https://www.coding-insight.com/" style="text-decoration: none">
      <v-btn> <v-icon left>mdi-home</v-icon>홈으로 이동</v-btn>
    </a>
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
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
