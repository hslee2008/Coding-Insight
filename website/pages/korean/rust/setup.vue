<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        aria-label="Coding Insight Button"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        VSCode 설치하는 방법
      </v-btn>

      <v-btn
        aria-label="Coding Insight Button"
        color="primary"
        dark
        @click="sheet2 = !sheet2"
      >
        VSCode에서 파이썬 프로그래밍 작작
      </v-btn>
    </v-row>

    <v-bottom-sheet v-model="sheet1" scrollable>
      <div>
        <v-stepper v-model="e6" non-linear>
          <v-stepper-header non-linear-header>
            <v-stepper-step editable step="1"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="2"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="4"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="5"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="6"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="7"> </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/vscode.jpg"
                >
                  <v-card-title>
                    <p style="color: black">
                      <a
                        target="_blank"
                        href="https://code.visualstudio.com/download"
                        style="text-decoration: none; color: darkorange"
                        >VSCode 설치 페이지</a
                      >를 방문합니다. 알맞은 컴퓨터 소프트웨어를 선택합니다.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 2"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/vscodesetup.jpg"
                >
                  <v-card-title style="color: black">
                    <mark
                      ><p color="black">
                        새로운 박스가 생길 것이고 설치가 100% 다 되면 그 박스를
                        클릭하세요.
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 3"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/agree.jpg"
                >
                  <v-card-title
                    ><p style="color: black">
                      동의합니다 그리고 다음을 누르세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 4"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/nextvscode.jpg"
                >
                  <v-card-title
                    ><p style="color: black">
                      또 다음을 누르세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 5"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/installvscode.jpg"
                >
                  <v-card-title
                    ><p style="color: black">
                      설치 버튼을 누르세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 6"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/vscodefinish.jpg"
                >
                  <v-card-title
                    ><p style="color: black">끝내기 누르기</p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e6 = 7"
                  >
                    Continue </v-btn
                  ><v-btn
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
                <v-card-title style="float: right"
                  ><p style="color: black">
                    컴퓨터 다시 시작하기
                  </p></v-card-title
                >
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="sheet1 = !sheet1"
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

    <v-bottom-sheet v-model="sheet2" scrollable>
      <div>
        <v-stepper v-model="e4" non-linear>
          <v-stepper-header non-linear-header>
            <v-stepper-step editable step="1"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="2"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="4"> </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/cube.jpg"
                >
                  <v-card-title>
                    <p style="color: black">
                      CTRL + SHIFT + X 누르거나 큐브 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e4 = 2"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/input.jpg"
                >
                  <v-card-title style="color: black">
                    <mark
                      ><p color="black">박스 안에 "rust"라고 치세요.</p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e4 = 3"
                  >
                    Continue </v-btn
                  ><v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/extinstall.jpg"
                >
                  <v-card-title
                    ><p>초록색 install 버튼을 누르세요.</p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
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

    <Header type="Rust" num="3" title="VSCode 설치" />

    <v-btn
      aria-label="Coding Insight Button"
      color="primary"
      dark
      @click="sheet3 = !sheet3"
    >
      VSCode에서 Rust 프로그래밍 작작
    </v-btn>

    <v-bottom-sheet v-model="sheet3" scrollable>
      <div>
        <v-stepper v-model="et" non-linear>
          <v-stepper-header non-linear-header>
            <v-stepper-step editable step="1"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="2"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="4"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="5"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="6"> </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="7"> </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/file.jpg"
                >
                  <v-card-title>
                    <p style="color: black">
                      CTRL + SHIFT + E 누르거나 "파일" 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 2"
                  >
                    Continue </v-btn
                  ><v-btn
                    aria-label="Coding Insight Button"
                    @click="sheet3 = !sheet3"
                  >
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/choose.jpg"
                >
                  <v-card-title style="color: black">
                    <mark
                      ><p color="black">
                        파란색 "폴더 선택" 버튼을 누르세요.
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 3"
                  >
                    Continue </v-btn
                  ><v-btn
                    aria-label="Coding Insight Button"
                    @click="sheet3 = !sheet3"
                  >
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/background.jpg"
                >
                  <v-card-title
                    ><p>
                      코드를 저장하고 싶은 폴더를 선택하세요. 따로 폴더가 없다면
                      바탕화면을 선택하세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 5"
                  >
                    Continue </v-btn
                  ><v-btn
                    aria-label="Coding Insight Button"
                    @click="sheet3 = !sheet3"
                  >
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/filename.jpg"
                >
                  <v-card-title
                    ><p style="color: black">
                      <mark
                        >cargo init first_rust를 실행해서 새로운 Rust 프로젝트를
                        시작합니다.</mark
                      >
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 6"
                  >
                    Continue </v-btn
                  ><v-btn
                    aria-label="Coding Insight Button"
                    @click="sheet3 = !sheet3"
                  >
                    Cancel
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="6">
              <v-card>
                <v-img
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/tri.jpg"
                >
                  <v-card-title
                    ><p style="color: black">
                      <mark
                        >cd first_rust를 실행해서 first_rust 폴더로 들어가고
                        cargo run build를 사용해서 파일을 실행합니다.</mark
                      >
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    aria-label="Coding Insight Button"
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

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>cargo란?</h2>
        <p>
          cargo는 Rust에서 프로젝트의 기본 구조를 만듭니다.<br /><br />

          또, 필요한 파일이나 패키지 등 다른 곳에서 가지고 와야 하는 파일들은 다
          cargo.toml에서 확인할 수 있습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="v-img-fluid"
          style="display: block"
          src="data:image/jpeg;base64,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"
          max-width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="install" aft="print" />
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
