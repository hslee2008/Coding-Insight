<template>
  <div>
    <br /><br />

    <v-card class="d-flex" style="background-color: rgb(0, 0, 0, 0)">
      <CIImage src="favicon.ico" max-width="300" />

      <div class="my-auto">
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
          <v-btn href="https://www.youtube.com/watch?v=ya7Ud1tTpag">
            <v-icon left>mdi-video</v-icon>
            인트로 비디오
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>

    <br />
    <v-divider />
    <br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Hyunseung Lee</div>
        <v-list-item-title class="text-h5 mb-1">
          Front-End & Mobile Developer
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
          <v-icon left>mdi-github</v-icon>GitHub
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar size="80" rounded style="margin: auto">
        <CIImage
          src="https://avatars.githubusercontent.com/u/78584173?s=96&v=4"
        />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Juha Im</div>
        <v-list-item-title class="text-h5 mb-1">
          Back-End & Game Developer
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
          <v-icon left>mdi-github</v-icon>GitHub
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar size="80" rounded style="margin: auto">
        <CIImage src="https://avatars.githubusercontent.com/u/87412592?v=4" />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Kim Gun</div>
        <v-list-item-title class="text-h5 mb-1">
          Back-End & Game Developer
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
          <v-icon left>mdi-github</v-icon>GitHub
        </v-btn>
      </v-list-item-actions>

      <v-list-item-avatar size="80" rounded style="margin: auto">
        <CIImage src="https://avatars.githubusercontent.com/u/87595094?v=4" />
      </v-list-item-avatar>
    </v-list-item>

    <br /><br />
  </div>
</template>
