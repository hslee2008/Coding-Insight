<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" class="img-div" style="margin: 10px">
      <div style="margin: auto">
        <h1>Hello</h1>
        <h2>We are Coding-Insight</h2>
      </div>
      <div style="margin: auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="/favicon.ico"
          max-width="200px"
        />
      </div>
    </v-row>

    <QuadSpace />

    <v-divider></v-divider>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>After block coding...</h2>
        <p>
          Have you ever heard the word 'Scratch' in your life?<br /><br />

          'Scratch' is a type of block coding language.<br /><br />

          In this site, we will be learning about Python.<br /><br />

          While Scratch can only make animation, simple games, quizzes and a bit
          more, learning Python can give you infinite access to everything.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="scratchy"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>

    <QuadSpace /><QuadSpace />

    <v-row flex style="gap: 10px">
      <v-card class="mx-auto" max-width="450" min-width="350">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          class="white--text align-end"
          height="200px"
          src="https://miro.medium.com/max/6016/0*ocReqNnxsbtP8OtU"
        >
          <v-card-title>Python</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Python </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>
            Python is a language for beginners! You can learn the basics right
            now this instant in under 10 minutes.
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn aria-label="Coding Insight Button" class="ma-2" color="primary" dark to="/korean/python/">
            Python
            <v-icon dark right> mdi-language-python </v-icon>
          </v-btn>
          <v-btn aria-label="Coding Insight Button" class="ma-2" color="primary" dark to="/korean/python/quiz">
            Quiz
            <v-icon dark right> mdi-chat-question </v-icon>
          </v-btn>
          <v-btn aria-label="Coding Insight Button" class="ma-2" color="primary" dark to="/korean/python/video">
            Video
            <v-icon dark right> mdi-youtube </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <QuadSpace /><QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>Application</h2>
        <p>
          There are total 4 apps you can download made by the developers of our
          site in order to help you learn!<br /><br />

          <v-btn aria-label="Coding Insight Button" to="/app-en"><v-icon>mdi-apps</v-icon> App Download </v-btn>
        </p>
      </div>
      <div style="margin: auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'IndexENPage',
  head: () => ({
    title: 'Homepage',
  }),
};
</script>

<style>
.titleDiv {
  background-image: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwY29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
  margin: 0 !important;
  padding: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  display: flex;
  align-content: center;
}
</style>
