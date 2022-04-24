<template>
  <div>
    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        VSCode 설치하는 방법
      </v-btn>

      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet2 = !sheet2"
      >
        VSCode에서 파이썬 프로그래밍 작작
      </v-btn>
    </v-row>

    <v-bottom-sheet v-model="sheet1" scrollable>
      <div>
        <v-stepper v-model="bsheet2" non-linear>
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/vscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
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
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet2 = 2"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/vscodesetup.jpg"
                >
                  <v-card-title class="black--text">
                    <mark>
                      <p color="black">
                        새로운 박스가 생길 것이고 설치가 100% 다 되면 그 박스를
                        클릭하세요.
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet2 = 3"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/agree.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      동의합니다 그리고 다음을 누르세요.
                    </p></v-card-title
                  >
                  <v-card-actions>
                    <v-btn
                      :aria-label="albutt"
                      color="primary"
                      @click="bsheet2 = 4"
                    >
                      Continue
                    </v-btn>
                    <v-btn :aria-label="albutt" @click="sheet1 = !sheet1">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-kr/img/nextvscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">또 다음을 누르세요.</p></v-card-title
                  >
                </v-img>
                <v-card-actions
                  ><v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet2 = 5"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/installvscode.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      설치 버튼을 누르세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet2 = 6"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/vscodefinish.jpg"
                >
                  <v-card-title>
                    <p class="black--text">끝내기 누르기</p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet2 = 7"
                  >
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
                  <p class="black--text">컴퓨터 다시 시작하기</p></v-card-title
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
        <v-stepper v-model="bsheet1" non-linear>
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/cube.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <kbd>CTRL + SHIFT + X</kbd> 누르거나 큐브 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn :aria-label="albutt" color="primary">Continue </v-btn>
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/input.jpg"
                >
                  <v-card-title class="black--text">
                    <mark>
                      <p color="black">
                        박스 안에 "python"이라고 치세요.
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet1 = 3"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/extinstall.jpg"
                >
                  <v-card-title>
                    <p>초록색 install 버튼을 누르세요.</p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet1 = 4"
                  >
                    Continue</v-btn
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/coderunner.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      Code Runner을 치고 가장 먼저 나오는 확장 도구을 설치하세요
                      (install)
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet1 = 5"
                  >
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

    <Header type="파이썬" num="3" title="VSCode 설치" />

    <v-btn :aria-label="albutt" color="primary" dark @click="sheet3 = !sheet3">
      VSCode에서 파이썬 프로그래밍 작작
    </v-btn>

    <v-bottom-sheet v-model="sheet3" scrollable>
      <div>
        <v-stepper v-model="bsheet3" non-linear>
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/file.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <kbd>CTRL + SHIFT + E</kbd> 누르거나 "파일" 버튼 누르기
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 2"
                  >
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/choose.jpg"
                >
                  <v-card-title class="black--text">
                    <mark>
                      <p color="black">
                        파란색 "폴더 선택" 버튼을 누르세요.
                      </p></mark
                    >
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 3"
                  >
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/background.jpg"
                >
                  <v-card-title>
                    <p>
                      코드를 저장하고 싶은 폴더를 선택하세요. 따로 폴더가 없다면
                      바탕화면을 선택하세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 4"
                  >
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/newfile.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      파일 새로 만들기 버튼을 누르세요.
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 5"
                  >
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/filename.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <mark>
                        파일 이름을 지으세요. 꼭 .py로 끝내야 합니다. (밑 내용
                        확인하기)
                      </mark>
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 6"
                  >
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
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
                  src="https://image-loader-coding-insight.web.app/py-kr/img/tri.jpg"
                >
                  <v-card-title>
                    <p class="black--text">
                      <mark>
                        print("hello world")라고 쓰고 위, 오른쪽에 있는 삼각형
                        옆 화살표 버튼을 누릅니다. Run Python 버튼을 누릅니다.
                      </mark>
                    </p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="bsheet3 = 7"
                  >
                    Continue
                  </v-btn>
                  <v-btn :aria-label="albutt" @click="sheet3 = !sheet3">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="7">
              <v-card>
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
                  class="white--text align-end"
                  src="https://image-loader-coding-insight.web.app/py-kr/img/helloworld.jpg"
                >
                  <v-card-title>
                    <p class="black--text">결과 확인하기</p></v-card-title
                  >
                </v-img>
                <v-card-actions>
                  <v-btn
                    :aria-label="albutt"
                    color="primary"
                    @click="sheet3 = !sheet3"
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

    <QuadSpace />

    <div>
      <h2>.py?</h2>
      <p>
        위의 설명에서 항상 파이썬 파일을 만들때
        <code class="ic">이름.py</code> 형태로 정해야한다고 했습니다.<br /><br />

        그 이유는 컴퓨터에게 파일의 형태(종류)가 무엇이지 설명해야하기
        때문입니다.<br /><br />

        <code class="ic">.py</code>는 python의 약자로 컴퓨터에게 우리가 만든
        파일이 파이썬 파일이라고 알려줍니다.
      </p>
    </div>

    <Navigation bef="install" aft="io" />
  </div>
</template>

<script>
  export default {
    name: 'VSCodePage',
    data() {
      return {
        bsheet1: 1,
        bsheet2: 1,
        bsheet3: 1,
        sheet1: false,
        sheet2: false,
        sheet3: false,
      };
    },
  };
</script>
