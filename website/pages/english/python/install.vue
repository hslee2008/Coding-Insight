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
        aria-label="Coding Insight Button"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        Install Python Compiler
      </v-btn>

      <v-btn
        aria-label="Coding Insight Button"
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
                      ></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 2"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 3"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                    <v-card-title
                      ><mark style="color: black"
                        >Download started</mark
                      ></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 4"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                      <mark
                        ><p style="color: black">
                          Click on 'Add Python 3.10 to PATH'<br /><br />

                          Click on 'Customize installation'
                        </p></mark
                      ></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 5"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                      <mark
                        ><p style="color: black">
                          Enable every option and click next
                        </p></mark
                      ></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 6"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                      <mark
                        ><p style="color: black">Enable 1 ~ 5th item</p></mark
                      ></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 7"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet1 = !sheet1"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
                </v-card>
              </v-stepper-content>

              <v-stepper-content step="7">
                <v-card>
                  <h2>끝</h2>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="sheet1 = !sheet1"
                    >
                      Finish
                    </v-btn></v-card-actions
                  >
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
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 2"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet2 = !sheet2"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                    <v-card-title style="color: black">
                      <mark
                        ><p color="black">
                          Click on 'open' button or press Enter key.
                        </p></mark
                      >
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 3"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet2 = !sheet2"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                    <v-card-title style="float: right"
                      ><p style="color: black">
                        After '>>>' type in
                        <code>print("Hello, World!")</code> and press Enter.
                      </p></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 4"
                    >
                      Continue
                    </v-btn>
                    <v-btn
                      aria-label="Coding Insight Button"
                      @click="sheet2 = !sheet2"
                    >
                      Cancel
                    </v-btn></v-card-actions
                  >
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
                    <v-card-title style="float: right"
                      ><p style="color: black">
                        Check the result
                      </p></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="sheet2 = !sheet2"
                    >
                      Finish
                    </v-btn></v-card-actions
                  >
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-bottom-sheet>
    </div>

    <QuadSpace />

    <div
      style="display: flex; justify-content: center; border-radius: 5px"
      class="img-div"
    >
      <div style="text-align: center; margin: auto">
        <GlobalImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="200px"
        />
      </div>
      <div class="mx-auto my-auto">
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
