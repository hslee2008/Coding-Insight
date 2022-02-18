<template>
  <div>
    <div>
      <br /><br />

      <v-text-field label="제목" v-model="post.title"></v-text-field>

      <v-text-field
        label="날짜"
        :value="Date().toString()"
        disabled
      ></v-text-field>
      <v-textarea
        label="질문"
        hint="책에 대한 내용을 넣으세요!"
        v-model="post.content"
      ></v-textarea>
    </div>
    <v-btn @click="postcontent"> 올리기 </v-btn>

    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        previewLink: '',
        image: '',
      },
    };
  },
  methods: {
    async postcontent() {
      const timestamp = Date.now();

      await this.$fire.auth.onAuthStateChanged(async (user) => {
        if (user) {
          this.$fireModule
            .database()
            .ref(user.uid + '/posts/' + timestamp)
            .set({
              title: this.post.title,
              content: this.post.content,
              writer: user.uid,
              time: timestamp,
              username: user.displayName,
              image: this.post.image,
            });
        }
      });

      this.$router.push('/query/list');
    },
  },
};
</script>
