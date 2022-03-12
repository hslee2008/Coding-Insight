<template>
  <v-card
    style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px"
    elevation="0"
  >
    <v-card-title class="text-h4 text--primary">{{ heading }}</v-card-title>

    <v-card-text class="text--primary">
      <template v-for="item in contents">
        <template v-if="item.startsWith('CODE:')">
          <IC :code="item.replace('CODE:', '')" />
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BasicExpDivWithOneIframe',
  props: ['heading', 'contents', 'iframe', 'abitwider', 'alotwider'],
};
</script>
