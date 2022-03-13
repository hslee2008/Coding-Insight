<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <h2>{{ heading }}</h2>

    <template v-for="item in contents">
      <template v-if="item.startsWith('CODE:')">
        <code>{{ item.replace('CODE:', '') }}</code>
      </template>
      <template v-else>{{ item }}<br /><br /></template>
    </template>

    <iframe
      :src="iframe"
      :height="abitwider ? 370 : alotwider ? 550 : 300"
      style="border-radius: 10px"
      allowfullscreen
      width="100%"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      loading="lazy"
      title="Code Iframe"
      name="Code Iframe"
    />
  </v-card>
</template>

<script>
export default {
  name: 'BasicExpDivWithOneIframe',
  props: ['heading', 'contents', 'iframe', 'abitwider', 'alotwider'],
};
</script>
