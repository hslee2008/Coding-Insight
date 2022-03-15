<template>
  <div>
    <br /><br />

    <v-row>
      <GlobalImage src="favicon.ico" max-width="150" class="my-auto mx-auto" />

      <div class="my-auto mx-auto">
        <v-card-title>Meet the Coding-Insight Core Team</v-card-title>
        <v-card-subtitle style="color: grey; font-size: 20px">
          The development of Coding-Insight and its platform is lead by the
          team.
        </v-card-subtitle>
        <v-card-text
          >Learn more about each of them through social links</v-card-text
        >

        <v-divider class="ml-4 mr-3" />
        <v-spacer></v-spacer>

        <v-card-actions class="ml-2">
          <v-btn text href="https://www.youtube.com/watch?v=ya7Ud1tTpag">
            <v-icon left>mdi-video</v-icon>
            인트로 비디오
          </v-btn>
        </v-card-actions>
      </div>
    </v-row>

    <br />
    <v-divider />
    <br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Hyunseung Lee</div>
        <v-list-item-title class="text-h6 mb-1">
          Front-End & Mobile
        </v-list-item-title>
        <v-list-item-subtitle>Manage Website and Project</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-actions>
        <v-btn
          aria-label="Coding Insight Button"
          rounded
          text
          href="https://github.com/HyunseungLee-Travis"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar
        v-if="!$vuetify.breakpoint.mobile"
        size="80"
        rounded
        class="mx-auto my-auto"
      >
        <GlobalImage
          src="https://avatars.githubusercontent.com/u/78584173?s=96&v=4"
        />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Juha Im</div>
        <v-list-item-title class="text-h6 mb-1">
          Back-End & Game
        </v-list-item-title>
        <v-list-item-subtitle>Manage Content and Project</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-actions>
        <v-btn
          aria-label="Coding Insight Button"
          rounded
          text
          href="https://github.com/GMTT902"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar
        v-if="!$vuetify.breakpoint.mobile"
        size="80"
        rounded
        class="mx-auto my-auto"
      >
        <GlobalImage src="https://avatars.githubusercontent.com/u/87412592?v=4" />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Kim Gun</div>
        <v-list-item-title class="text-h6 mb-1">
          Back-End & Game
        </v-list-item-title>
        <v-list-item-subtitle>Manage Content and Project</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-actions>
        <v-btn
          aria-label="Coding Insight Button"
          rounded
          text
          href="https://github.com/kimgun1217"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar
        v-if="!$vuetify.breakpoint.mobile"
        size="80"
        rounded
        class="mx-auto my-auto"
      >
        <GlobalImage src="https://avatars.githubusercontent.com/u/87595094?v=4" />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />
  </div>
</template>
