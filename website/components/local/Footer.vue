<template>
  <v-footer :absolute="false" rounded>
    <div>
      <v-btn
        aria-label="Coding Insight Button"
        icon
        href="https://github.com/HyunseungLee-Travis/Coding-Insight"
        target="_blank"
      >
        <v-icon size="24px"> mdi-github </v-icon>
      </v-btn>
      <v-btn
        aria-label="Coding Insight Button"
        href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
        target="_blank"
        icon
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn
        aria-label="Coding Insight Button"
        href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
        target="_blank"
        icon
      >
        <v-icon>mdi-microsoft-visual-studio-code</v-icon>
      </v-btn>
    </div>

    <div style="margin-left: auto; margin-right: 5px">
      &copy; {{ new Date().getFullYear() }} Coding-Insight
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
