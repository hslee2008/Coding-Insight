<template>
  <div style="display: flex; justify-content: center; align-self: center">
    <div>
      <h2>The Python Journey has now ended~~~</h2>
      <p>Or did it?</p>

      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinishedPage',
  data() {
    return {
      headers: [
        {
          text: 'Library',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Link', value: 'link' },
        { text: 'Uses', value: 'topic' },
      ],
      items: [
        {
          name: 'Tensorflow',
          link: 'https://www.tensorflow.org/api_docs',
          topic: 'Machine Learning & Deep Learning',
        },
        {
          name: 'Pygame',
          link: 'https://www.pygame.org/docs/',
          topic: 'Games',
        },
        {
          name: 'Django',
          link: 'https://docs.djangoproject.com/en/3.2/',
          topic: 'Making your website',
        },
        {
          name: 'Open CV',
          link: 'https://opencv.org',
          topic: 'Video and Photo manipulation',
        },
        {
          name: 'TKinter',
          link: 'https://www.javatpoint.com/python-tkinter',
          topic: 'GUI (Computer APp)',
        },
      ],
    };
  },
};
</script>
