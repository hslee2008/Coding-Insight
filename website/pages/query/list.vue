<template>
  <div>
    <h1 v-if="loading">로딩 중...</h1>
    <ul>
      <li v-for="(item, index) in listev" :key="index">
        {{ item['username'] }}의 질문: 
        <NuxtLink
          :to="
            '/query/posts/' +
            item['title'] +
            'WRITER:' +
            item['writer'] +
            'TIME:' +
            item['time']
          "
        >
          {{ item['title'] }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listev: [],
      loading: true,
    };
  },
  mounted() {
    const a = this.$fireModule.database().ref('/');
    let list = [];

    a.on('child_added', async function (snapshot) {
      for (let i = 0; i < Object.keys(snapshot.val().posts).length; i++) {
        list.push(snapshot.val().posts[Object.keys(snapshot.val().posts)[i]]);
      }
    });

    this.listev = list;

    this.loading = false;
  },
};
</script>
