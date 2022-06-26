<template>
  <div>
    <Header type="" title="Courses" num="Complete List" />

    <v-row flex style="gap: 20px">
      <v-card class="ma-auto" max-width="450" min-width="350">
        <v-img
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
          <v-btn
            :aria-label="albutt"
            color="primary"
            class="ma-2"
            dark
            to="/english/python/"
          >
            Python
            <v-icon dark right> mdi-language-python </v-icon>
          </v-btn>
          <v-btn
            :aria-label="albutt"
            color="primary"
            class="ma-2"
            dark
            to="/english/python/quiz"
          >
            Quiz
            <v-icon dark right> mdi-chat-question </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'CoursesPage',
    head: () => ({
      title: 'Courses',
    }),
  };
</script>
