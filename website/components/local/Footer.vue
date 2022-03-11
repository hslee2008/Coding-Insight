<template>
  <v-footer :absolute="false">
    <div>
      <v-btn
        aria-label="Coding Insight Button"
        icon
        href="https://github.com/HyunseungLee-Travis/Coding-Insight"
        target="_blank"
        class="white--text"
      >
        <v-icon size="24px"> mdi-github </v-icon>
      </v-btn>
      <v-btn
        aria-label="Coding Insight Button"
        href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
        target="_blank"
        icon
        class="white--text"
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn
        aria-label="Coding Insight Button"
        href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
        target="_blank"
        icon
        class="white--text"
      >
        <v-icon>mdi-microsoft-visual-studio-code</v-icon>
      </v-btn>
    </div>

    <div style="margin-left: auto; margin-right: 5px">
      &copy; {{ new Date().getFullYear() }} <strong>Coding-Insight</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
