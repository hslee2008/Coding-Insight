<template>
  <v-card style="background-color: rgb(0, 0, 0, 0); margin-bottom: 75px">
    <v-card-title class="text-h4 text--primary">{{ heading }}</v-card-title>

    <v-card-contents>
      <v-card-text>
        <template v-for="item in contents">
          <template v-if="item.startsWith('CODE:')">
            <IC :code="item.replace('CODE:', '')" />
          </template>
          <template v-else>{{ item }}<br /><br /></template>
        </template>

        <iframe
          :src="iframe"
          width="100%"
          :height="abitwider ? 370 : alotwider ? 550 : 300"
          style="border-radius: 10px"
        />
      </v-card-text>
    </v-card-contents>
  </v-card>
</template>

<script>
export default {
  name: 'BasicExpDivWithOneIframe',
  props: ['heading', 'contents', 'iframe', 'abitwider', 'alotwider'],
};
</script>
