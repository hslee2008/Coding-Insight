<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <v-row>
      <div>
        <h2>{{ heading }}</h2>

        <div v-html="contents"></div>
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
