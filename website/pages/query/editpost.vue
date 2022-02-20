<template>
  <div>
    <v-btn aria-label="Coding Insight Button" @click="okay">업데이트</v-btn>
    <v-text-field label="제목" v-model="post.title"></v-text-field>
    <v-divider></v-divider>
    <v-row>
      <div style="margin: auto">
        <br />
        <v-img :src="post.image" max-width="200" />
        <br />
      </div>
      <div style="margin: auto">
        <h3>작성자: {{ post.username }}</h3>
        <h3>작성시간: {{ new Date(parseInt(post.time)).toString() }}</h3>
        <v-rating
          hover
          length="5"
          size="10"
          :value="post.rating"
          disabled
        ></v-rating>

        <v-textarea
          label="책 요약"
          hint="책에 대한 내용을 넣으세요!"
          width="800px"
          v-model="post.content"
        ></v-textarea>
      </div>
    </v-row>
  </div>
</template>

<script>
import { db } from '../../plugins/firebase_database.js';

export default {
  data() {
    return {
      comment: '',
      username: '',
      post: {
        title: '',
        content: '',
        image: '',
        time: '',
        rating: 0,
        username: '',
      },
      isuser: false,
    };
  },
  methods: {
    async okay() {
      const timestamp = this.$route.query.time;

      db.ref(this.$route.query.uid + '/posts/' + timestamp).update({
        title: this.post.title,
        content: this.post.content,
        rating: this.post.rating,
        isbn: this.post.isbn,
        time: timestamp,
        image: this.post.image,
        previewLink: this.post.previewLink,
        genre: this.post.genre,
        pageCount: this.post.pageCount,
        username: this.post.username,
      });

      this.$router.push('/query/list');
    },
  },
  async mounted() {
    const query = this.$route.query;
    const uid = query.uid;
    const timestamp = query.time;
    const a = db.ref('/' + uid + '/posts/' + timestamp);

    this.post = (await a.once('value')).val();
  },
};
</script>
