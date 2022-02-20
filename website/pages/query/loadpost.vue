<template>
  <div>
    <v-btn aria-label="Coding Insight Button" to="./list">
      <v-icon>mdi-arrow-left</v-icon>뒤로가기</v-btn
    >
    <v-card :loading="loading" class="mx-auto my-12 cardy">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img :src="post.image" width="200" style="margin: 10px"></v-img>

      <div>
        <v-card-title>{{ post.title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="post.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ post.rating }} (Page: {{ post.pageCount }})
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">by {{ post.username }}</div>

          <div class="my-4 grey--text">
            {{ new Date(post.time).toString() }}
          </div>

          <div>
            {{ post.content }}
          </div>
        </v-card-text>

        <v-spacer style="margin: 40px"></v-spacer>

        <v-divider></v-divider>

        <v-card-actions style="margin-top: 5px">
          <v-btn
            aria-label="Coding Insight Button"
            @click="del"
            color="red lighten-2"
            v-if="this.isuser"
            ><v-icon left>mdi-delete</v-icon>삭제하기</v-btn
          >
          <v-btn
            aria-label="Coding Insight Button"
            @click="edit"
            color="blue lighten-2"
            v-if="this.isuser"
            ><v-icon left>mdi-pencil</v-icon>편집하기</v-btn
          >
        </v-card-actions>
      </div>
    </v-card>

    <v-text-field
      label="코멘트"
      v-model="comment"
      append-icon="mdi-send"
      @click:append="commentpost"
      @keyup.enter="commentpost"
      single-line
      hide-details
      outlined
      dense
      class="mx-auto ml-8 mb-2"
    ></v-text-field>

    <v-timeline align-top dense>
      <v-timeline-item v-for="message in comments" :key="message.time" small>
        <div>
          <div class="font-weight-normal">
            <strong>{{ message.username }}</strong> @{{
              new Date(message.time).toString()
            }}
          </div>
          <div>{{ message.content }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>

    <br /><br />
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
      comments: [],
      isuser: false,
      views: 0,
      loading: false,
      selection: 1,
      useruid: '',
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
        uid: this.$fire.auth.currentUser.uid,
      };
      await db
        .ref(`posts/${this.$route.query.uid + this.$route.query.time}/comments`)
        .push(comment);

      this.comment = '';
    },
    async del() {
      const query = this.$route.query;
      const uid = query.uid;
      const timestamp = query.time;
      await db.ref('/' + uid + '/posts/' + timestamp).remove();
      await db.ref(`posts/${this.$route.path}/comments`).remove();
      this.$router.push('/query/list');
    },
    async edit() {
      this.$router.push({
        path: '/editpost',
        query: {
          uid: this.$route.query.uid,
          writer: this.$route.query.writer,
          time: this.$route.query.time,
        },
      });
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  async mounted() {
    const query = this.$route.query;
    const uid = query.uid;
    const timestamp = query.time;
    const a = db.ref('/' + uid + '/posts/' + timestamp);
    const b = db.ref(
      `posts/${this.$route.query.uid + this.$route.query.time}/comments`,
    );

    let list = [];

    b.on('child_added', async function (snapshot) {
      list.push(snapshot.val());
    });

    this.post = (await a.once('value')).val();
    this.comments = list;

    await this.$fire.auth.onAuthStateChanged(async (user) => {
      if (user.uid == this.$route.query.uid) {
        this.isuser = true;
      }
      this.useruid = user.uid;

      console.log(this.useruid);
    });

    db.ref(uid + '/posts/' + timestamp).update({
      views: parseInt(query.views) + 1,
    });
  },
};
</script>

<style scoped>
.cardy {
  display: flex;
}

@media screen and (max-width: 605px) {
  .cardy {
    display: block;
  }
}
</style>
