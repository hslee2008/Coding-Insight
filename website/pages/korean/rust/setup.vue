<template>
  <div>
    <br /><br />

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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/vscodefinish.jpg"
                >
                  <v-card-title
                    ><p style="color: black">끝내기 누르기</p></v-card-title
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
                <v-card-title style="float: right"
                  ><p style="color: black">
                    컴퓨터 다시 시작하기
                  </p></v-card-title
                >
                <v-card-actions>
                  <v-btn
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/cube.jpg"
                >
                  <v-card-title>
                    <p style="color: black">
                      <kbd>CTRL + SHIFT + X</kbd> 누르거나 큐브 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e4 = 2"
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
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="e4 = 3"
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/extinstall.jpg"
                >
                  <v-card-title
                    ><p>초록색 install 버튼을 누르세요.</p></v-card-title
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
                  alt="python-factory-picture"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/rust-kr/img/file.jpg"
                >
                  <v-card-title>
                    <p style="color: black">
                      <kbd>CTRL + SHIFT + E</kbd> 누르거나 "파일" 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 2"
                  >
                    Continue
                  </v-btn>
                  <v-btn
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
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 3"
                  >
                    Continue
                  </v-btn>
                  <v-btn
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
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 5"
                  >
                    Continue
                  </v-btn>
                  <v-btn
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
                <v-card-actions>
                  <v-btn
                    aria-label="Coding Insight Button"
                    color="primary"
                    @click="et = 6"
                  >
                    Continue
                  </v-btn>
                  <v-btn
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
                <v-card-actions>
                  <v-btn
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

    <div>
      <h2>cargo란?</h2>
      <p>
        cargo는 Rust에서 프로젝트의 기본 구조를 만듭니다.<br /><br />

        또, 필요한 파일이나 패키지 등 다른 곳에서 가지고 와야 하는 파일들은 다
        cargo.toml에서 확인할 수 있습니다.
      </p>
    </div>
    <div class="mx-auto my-auto">
      <GlobalImage
        src="https://doc.rust-lang.org/cargo/images/Cargo-Logo-Small.png"
        max-width="300px"
      />
    </div>

    <QuadSpace />

    <h2>프로젝트 시작하기</h2>
    <div>
      <br />

      <code>cargo init a && cd a</code>

      위의 코드를 VSCode 터미널에서 실행하면 (<kbd>ctrl + `</kbd>) a라는 이름을
      가진 프로젝트가 만들어지고 그 프로젝트 폴더로 들어갑니다.<br /><br />

      <code class="inline-code">cargo init</code>은 cargo를 사용해 프로젝트를
      만듭니다.<br /><br />

      <code class="inline-code">&&</code>는 또 다른 커맨드를 실행할 때 사용하는
      연산자입니다.<br /><br />

      <code class="inline-code">cd a</code>는 프로젝트 폴더로 이동합니다.<br /><br />
    </div>

    <QuadSpace />

    <h2>프로젝트 실행</h2>
    <div>
      <br />

      <code classs="inline-code">cargo run build</code> 코드를 실행하면 빌드를
      시작합니다.<br /><br />

      빌드란 프로젝트를 기계가 이해하는 0과 1로 전환하고 실행하는 과정입니다.<br /><br />

      사이트에서 Rust를 배울 때 src 폴더 안의 main.rs 파일을 바꾸면 됩니다.
    </div>

    <QuadSpace />

    <h2>폴더 형식</h2>
    <v-treeview hoverable :items="items">
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>

    <QuadSpace />

    <Navigation bef="install" aft="print" />
  </div>
</template>

<script>
  export default {
    name: 'VSCodePage',
    data() {
      return {
        e3: 1,
        e4: 1,
        e6: 1,
        et: 1,
        sheet1: false,
        sheet2: false,
        sheet3: false,
        files: {
          toml: 'mdi-cog',
          rust: 'mdi-language-rust',
        },
        items: [
          {
            id: 1,
            name: 'a 프로젝트 폴더',
            children: [
              {
                id: 2,
                name: 'src',
                children: [
                  {
                    id: 3,
                    name: 'main.rs',
                    file: 'rust',
                  },
                ],
              },
              {
                id: 4,
                name: 'Cargo.toml',
                file: 'toml',
              },
            ],
          },
        ],
      };
    },
  };
</script>
