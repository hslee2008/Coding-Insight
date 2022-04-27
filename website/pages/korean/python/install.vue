<template>
  <div>
    <div>
      <div style="display: flex; justify-content: center; margin: 5px">
        <GlobalImage
          lazy-src="https://cdn.dribbble.com/users/1390/screenshots/2112301/yota_icons.gif"
          max-width="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hQGGTvkDEUH9Bgtv9YRcwhjO8mwFpd5tQA&usqp=CAU"
        />
      </div>
      <p style="margin: auto">
        파이썬을 기기에 설치하기<br /><br />
        파이썬이 이진수 (0과 1)로 컴파일이 되어서 기계가 이해하기를 도와주기
        위해서 먼저 공식 사이트에서 컴파일러를 설치해야 합니다.
      </p>
    </div>

    <Header type="파이썬" num="2" title="설치 & 첫 프로그램" />

    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        파이썬 컴파일러 설치하는 방법
      </v-btn>

      <v-btn
        :aria-label="albutt"
        color="primary"
        dark
        @click="sheet2 = !sheet2"
      >
        파이썬 프로그래밍 시작
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
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/python.jpg"
                  >
                    <v-card-title>
                      <a
                        href="https://www.python.org/downloads/"
                        target="_blank"
                        >파이썬 공식 사이트</a
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
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/button.jpg"
                  >
                    <v-card-title> 노란색 버튼 클릭</v-card-title>
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
                    src="https://image-loader-coding-insight.web.app/py-kr/img/다운로드.jpg"
                  >
                    <v-card-title>
                      <mark class="black--text">다운로드 시작됨</mark>
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
                    src="https://image-loader-coding-insight.web.app/py-kr/img/installnow.jpg"
                  >
                    <v-card-title style="float: right">
                      <mark>
                        <p class="black--text">
                          Add Python 3.10 to PATH 누르고<br />
                          Customize installation 버튼 누르기
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
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/설치2.jpg"
                  >
                    <v-card-title>
                      <mark>
                        <p class="black--text">모두 선택하고 다음 누르기</p>
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
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/adopt.jpg"
                  >
                    <v-card-title>
                      <mark>
                        <p class="black--text">
                          1부터 5번째 선택하고 설치 누르기
                        </p>
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
          <v-stepper v-model="e5" non-linear>
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
                    >저희는 파이썬의 IDLE이라는 편집기를 사용하겠습니다.<br /><br />
                    먼저 파이썬의 IDLE을 이용하려면 앱을 찾고 실행을 해야
                    합니다.</v-card-title
                  >
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e5 = 2">
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
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle.jpg"
                  >
                    <v-card-title class="black--text">
                      <mark>
                        <p color="black">열기 버튼 누르기 또는 엔터 누르기</p>
                      </mark>
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e5 = 3">
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
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle2.jpg"
                  >
                    <v-card-title style="float: right">
                      <p class="black--text">
                        >>> 다음에 <code v-highlight class="python">print("Hello, World!")</code>라고 치고
                        엔터 누르기
                      </p></v-card-title
                    >
                  </v-img>
                  <v-card-actions>
                    <v-btn :aria-label="albutt" color="primary" @click="e5 = 4">
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
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle3.jpg"
                  >
                    <v-card-title style="float: right">
                      <p class="black--text">결과 확인하기</p></v-card-title
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
      <div class="ma-auto" v-if="!$vuetify.breakpoint.mobile">
        <v-icon x-large>mdi-microsoft-visual-studio-code</v-icon>
      </div>

      <div class="ma-auto">
        <h2>VSCode란?</h2>
        <p>
          VSCode를 사용해보겠습니다.<br /><br />

          VSCode는 파이썬 코드를 편집하는 과정을 쉽게 만들어주는
          플랫폼입니다.<br /><br />

          지금까지는 IDLE을 사용했지만 VSCode를 사용하면 매우 더 쉬워집니다.<br /><br />

          VSCode 설치 방법과 사용방법은 다음 시간에 설명하겠습니다.
        </p>
      </div>
    </div>

    <Navigation bef="/korean/python/" aft="vscode" />
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
