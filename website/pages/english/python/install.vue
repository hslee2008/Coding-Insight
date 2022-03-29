<template>
  <div>
    <br /><br />

    <div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          alt="python-factory-picture"
          max-width="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hQGGTvkDEUH9Bgtv9YRcwhjO8mwFpd5tQA&usqp=CAU"
        />
      </div>
      <p style="margin: auto">
        Python programming language needs to be converted into 0s and 1s for the
        computer to understand.<br /><br />

        This process is called compiling. We first need to install a compiler
        for Python which converts Python to binary digits.
      </p>
    </div>

    <Header-en type="Python" num="2" title="Installation & First program" />

    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        Install Python Compiler
      </v-btn>

      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet2 = !sheet2"
      >
        Python Progarmming setup
      </v-btn>
    </v-row>

    <div style="display: flex; flex-wrap: wrap; gap: 10px">
      <v-bottom-sheet v-model="sheet1" scrollable>
        <div>
          <v-stepper v-model="e6" non-linear>
            <v-stepper-header>
              <v-stepper-step editable step="1"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="2"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="3"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="4"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="5"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="6"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="7"> </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/python.jpg"
                  >
                    <v-card-title>
                      <a
                        href="https://www.python.org/downloads/"
                        target="_blank"
                        >Official Python Site</a
                      >
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 2">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/button.jpg"
                  >
                    <v-card-title> Click on the Yello Button </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 3">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/다운로드.jpg"
                  >
                    <v-card-title>
                      <mark class="black--text">Download started</mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 4">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/installnow.jpg"
                  >
                    <v-card-title style="float: right">
                      <mark>
                        <p class="black--text">
                          Click on 'Add Python 3.10 to PATH'<br /><br />

                          Click on 'Customize installation'
                        </p>
                      </mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 5">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="5">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/설치2.jpg"
                  >
                    <v-card-title>
                      <mark>
                        <p class="black--text">
                          Enable every option and click next
                        </p>
                      </mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 6">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="6">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/adopt.jpg"
                  >
                    <v-card-title>
                      <mark>
                        <p class="black--text">Enable 1 ~ 5th item</p>
                      </mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 7">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="7">
                <v-card>
                  <h2>끝</h2>
                  <v-card-actions>
                    <v-btn
                      :aria-label="albutt"
                      color="primary"
                      @click="sheet1 = !sheet1"
                    >
                      Finish
                    </v-btn>
                  </v-card-actions>
                </v-card></v-stepper-content
              >
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-bottom-sheet>

      <v-bottom-sheet v-model="sheet2" scrollable>
        <div>
          <v-stepper v-model="e6" non-linear>
            <v-stepper-header>
              <v-stepper-step editable step="1"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="2"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="3"> </v-stepper-step>

              <v-divider />

              <v-stepper-step editable step="4"> </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <v-card-title
                    >We will be using IDLE editor in which we could run Python/
                  </v-card-title>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 2">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet2 = !sheet2">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/idle.jpg"
                  >
                    <v-card-title class="black--text">
                      <mark>
                        <p color="black">
                          Click on 'open' button or press Enter key.
                        </p>
                      </mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 3">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet2 = !sheet2">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/idle2.jpg"
                  >
                    <v-card-title style="float: right">
                      <p class="black--text">
                        After '>>>' type in
                        <code>print("Hello, World!")</code> and press Enter.
                      </p></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e6 = 4">
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet2 = !sheet2">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-card>
                  <v-img
                    lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-en/img/idle3.jpg"
                  >
                    <v-card-title style="float: right">
                      <p class="black--text">Check the result</p></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      :aria-label="albutt"
                      color="primary"
                      @click="sheet2 = !sheet2"
                    >
                      Finish
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-bottom-sheet>
    </div>

    <QuadSpace />
    <QuadSpace />

    <div class="d-flex">
      <div style="margin: auto">
        <v-icon v-if="!$vuetify.breakpoint.mobile" x-large>
          mdi-microsoft-visual-studio-code
        </v-icon>
      </div>
      <div class="ma-auto">
        <h2>What is VSCode?</h2>
        <p>
          We learned how to use IDLE. However, we will be using VSCode instead
          of IDLE for better editing.<br /><br />

          VSCode is the most famous and best text code editor in the entire
          universe.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="/english/python/" aft="vscode" />
  </div>
</template>

<script>
  export default {
    name: 'InstallPage',
    data() {
      return {
        e6: 1,
        e5: 1,
        sheet1: false,
        sheet2: false,
      };
    },
  };
</script>
