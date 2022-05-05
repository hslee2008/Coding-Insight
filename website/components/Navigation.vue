<template>
  <v-card class="transparent" style="margin-top: 200px; margin-bottom: 100px">
    <v-card-actions>
      <v-tooltip v-if="!single" right>
        <template #activator="{ on, attrs }">
          <v-btn
            exact
            outlined
            color="primary"
            v-bind="attrs"
            v-on="on"
            :to="bef"
          >
            <v-icon left> mdi-chevron-left </v-icon>

            Back
          </v-btn>
        </template>

        <span>{{ bef.toUpperCase() }}</span>
      </v-tooltip>

      <v-spacer />

      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-btn
            exact
            outlined
            color="primary"
            v-bind="attrs"
            v-on="on"
            :to="aft"
          >
            Next

            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </template>

        <span>{{ aft.toUpperCase() }}</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Navigation',
    props: ['bef', 'aft', 'single'],
  };
</script>
