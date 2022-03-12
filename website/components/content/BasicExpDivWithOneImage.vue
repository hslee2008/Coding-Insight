<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <v-row>
      <div>
        <v-card-title class="text-h4 text--primary">{{ heading }}</v-card-title>

        <v-card-tex class="text--primary" t v-html="contents"></v-card-tex>
      </div>

      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          :src="image"
          max-width="210.5px"
        />
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'BasicExpDivWithOneIframe',
  props: ['heading', 'contents', 'image', 'abitwider', 'alotwider'],
};
</script>
