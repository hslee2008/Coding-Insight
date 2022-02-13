<template>
  <div
    style="
      width: 80%;
      height: 100px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    "
  >
    <v-card class="mx-auto" max-width="400">
      <v-alert border="right" colored-border type="error" elevation="2">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </v-alert>

      <v-card-actions>
        <v-btn @click="refresh"> <v-icon>mdi-refresh</v-icon></v-btn>
        <v-btn @click="backward">
          <v-icon left>mdi-chevron-left</v-icon>뒤로 가기</v-btn
        >

        <v-btn to="/"> <v-icon left>mdi-home</v-icon>홈으로 이동</v-btn>
      </v-card-actions>
    </v-card>
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
      pageNotFound: '😭 에러 404 😭',
      otherError: '😢 알 수 없는 에러가 생겼습니다 😢',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  methods: {
    backward() {
      history.back();
    },
    refresh() {
      location.reload();
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
