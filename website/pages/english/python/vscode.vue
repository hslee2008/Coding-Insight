<template>
  <div>
    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        How to install VSCode
      </v-btn>

      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet2 = !sheet2"
      >
        Write code in VSCode
      </v-btn>
    </v-row>

    <v-bottom-sheet v-model="sheet1" scrollable>
      <div>
        <v-stepper v-model="e6" non-linear>
          <v-stepper-header non-linear-header>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/vscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Go to:
                      <a
                        target="_blank"
                        href="https://code.visualstudio.com/download"
                        style="text-decoration: none; color: darkorange"
                        >VSCode Installation Page</a
                      >
                      and select the correct OS.
                    </p>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/vscodesetup.jpg"
                >
                  <v-card-title style="color: black; float: right">
                    <mark>
                      <p color="black">
                        A new box will appear and click on it.
                      </p></mark
                    >
                  </v-card-title>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/agree.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Click on agree and click the next button.
                    </p>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/nextvscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">Click on next.</p>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/installvscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">Click on the install button.</p>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/vscodefinish.jpg"
                >
                  <v-card-title>
                    <p class="black--text">Click on finish</p>
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
                <v-card-title style="float: right">
                  <p class="black--text">
                    Now, restart the computer
                  </p></v-card-title
                >
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="sheet1 = !sheet1"
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

    <v-bottom-sheet v-model="sheet2" scrollable>
      <div>
        <v-stepper v-model="e4" non-linear>
          <v-stepper-header non-linear-header>
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
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/cube.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Press on <kbd>CTRL + SHIFT + X</kbd> or press the cube
                      button
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="e4 = 2">
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/input.jpg"
                >
                  <v-card-title class="black--text">
                    <mark>
                      <p color="black">Type in "Python" in the input</p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="e4 = 3">
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/extinstall.jpg"
                >
                  <v-card-title>
                    <p>Click on the green installation button.</p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="e4 = 4">
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/coderunner.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Type in code runner and click on the green button, again
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="e4 = 5">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet2 = !sheet2">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-bottom-sheet>

    <Header type="Python" num="3" title="VSCode Installation" />

    <v-btn :aria-label="albutt" color="primary" dark @click="sheet3 = !sheet3">
      Start programming in VSCode
    </v-btn>

    <v-bottom-sheet v-model="sheet3" scrollable>
      <div>
        <v-stepper v-model="et" non-linear>
          <v-stepper-header non-linear-header>
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
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/file.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <mark
                        >Press <kbd>CTRL + SHIFT + E</kbd> or click on the file
                        icon
                      </mark>
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 2">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/choose.jpg"
                >
                  <v-card-title class="black--text">
                    <mark>
                      <p color="black">
                        Click on the blue "Select Folder" button
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 3">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/background.jpg"
                >
                  <v-card-title>
                    <p>
                      Click on the folder you want your code to be. If you don't
                      know what I am talking about, just select Desktop.
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 4">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3"
                    >Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/newfile.jpg"
                >
                  <v-card-title>
                    <p class="black--text">Click on the 'new file' button</p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 5">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3"
                    >Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/filename.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Set you file name ending with '.py'
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 6">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3"
                    >Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="6">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/tri.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <mark
                        >Type in <code v-highlight class="python">print("hello world")</code>, click on the
                        arrow next to triangle, click Run Python
                      </mark>
                    </p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary" @click="et = 7">
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="7">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-en/img/helloworld.jpg"
                >
                  <v-card-title>
                    <p class="black--text">Check out your first program 기</p>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="sheet3 = !sheet3"
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

    <div>
      <div>
        <h2>.py?</h2>
        <p>
          You always have to end Python file with '.py' because it tells the
          computer that this file is for Python only.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          class="v-img-fluid"
          style="display: block"
          src="data:image/jpeg;base64,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"
          max-width="400px"
        />
      </div>
    </div>

    <Navigation bef="install" aft="io" />
  </div>
</template>

<script>
  export default {
    name: 'VSCodePage',
    data() {
      return {
        e3: 1,
        e4: 1,
        e5: 1,
        e6: 1,
        et: 1,
        sheet1: false,
        sheet2: false,
        sheet3: false,
      };
    },
  };
</script>
