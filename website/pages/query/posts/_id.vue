<template>
  <div>
    <h1>{{ post.title }}</h1>
    <v-divider></v-divider>
    <div style="margin: auto">
      <h3>작성자: {{ post.username }}</h3>
      <h3>작성시간: {{ new Date(post.time).toString() }}</h3>

      <v-divider></v-divider>

      <p>{{ post.content }}</p>
    </div>

    <v-text-field
      label="코멘트"
      v-model="comment"
      append-icon="mdi-send"
      @click:append="commentpost"
    ></v-text-field>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <h3>코멘트</h3>
        </v-list-item-title>

        <v-list-item-subtitle v-for="(item, index) in comments" :key="index">
          <h3>{{ item.username }} - {{ item.content }}</h3>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { db } from '../../../plugins/firebase_database.js';

export default {
  data() {
    return {
      comment: '',
      username: '',
    };
  },
  methods: {
    async commentpost() {
      const timestamp = Date.now();
      await this.$fire.auth.onAuthStateChanged(async (user) => {
        this.username = user.displayName;
      });
      const comment = {
        username: this.username,
        content: this.comment,
        time: timestamp,
      };
      await this.$fireModule
        .database()
        .ref(`posts/${this.$route.params.id}/comments`)
        .push(comment);
      this.comment = '';

      location.reload();
    },
  },
  async asyncData({ params }) {
    const uid = params.id.substring(
      params.id.indexOf('WRITER:') + 7,
      params.id.indexOf('TIME:'),
    );
    const timestamp = params.id.substring(params.id.indexOf('TIME:') + 5);
    const a = db.ref('/' + uid + '/posts/' + timestamp);
    const b = db.ref(`posts/${params.id}/comments`);

    let list = [];

    b.on('child_added', async function (snapshot) {
      list.push(snapshot.val());
    });

    return {
      post: await a.once('value'),
      comments: list,
    };
  },
};
</script>
