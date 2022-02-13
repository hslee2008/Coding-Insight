<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="display: flex; justify-content: center">
        <v-img
          lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
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

    <QuadSpace />

    <Header type="파이썬" num="2" title="설치 & 첫 프로그램" />

    <QuadSpace />

    <v-row flex justify="center" style="gap: 30px">
      <v-btn
        aria-label="Coding Insight Button"
        color="primary"
        dark
        @click="sheet1 = !sheet1"
      >
        파이썬 컴파일러 설치하는 방법
      </v-btn>

      <v-btn
        aria-label="Coding Insight Button"
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/python.jpg"
                  >
                    <v-card-title>
                      <a
                        href="https://www.python.org/downloads/"
                        target="_blank"
                        >파이썬 공식 사이트</a
                      ></v-card-title
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/button.jpg"
                  >
                    <v-card-title> 노란색 버튼 클릭</v-card-title>
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/다운로드.jpg"
                  >
                    <v-card-title
                      ><mark style="color: black"
                        >다운로드 시작됨</mark
                      ></v-card-title
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/installnow.jpg"
                  >
                    <v-card-title style="float: right">
                      <mark
                        ><p style="color: black">
                          Add Python 3.10 to PATH 누르고<br />
                          Customize installation 버튼 누르기
                        </p></mark
                      ></v-card-title
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/설치2.jpg"
                  >
                    <v-card-title>
                      <mark
                        ><p style="color: black">
                          모두 선택하고 다음 누르기
                        </p></mark
                      ></v-card-title
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/adopt.jpg"
                  >
                    <v-card-title>
                      <mark
                        ><p style="color: black">
                          1부터 5번째 선택하고 설치 누르기
                        </p></mark
                      ></v-card-title
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
                  <h2>끝</h2>
                  <v-card-actions
                    ><v-btn
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
                  <v-card-title
                    >저희는 파이썬의 IDLE이라는 편집기를 사용하겠습니다.<br /><br />
                    먼저 파이썬의 IDLE을 이용하려면 앱을 찾고 실행을 해야
                    합니다.</v-card-title
                  >
                  <v-card-actions
                    ><v-btn
                      aria-label="Coding Insight Button"
                      color="primary"
                      @click="e6 = 2"
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle.jpg"
                  >
                    <v-card-title style="color: black">
                      <mark
                        ><p color="black">
                          열기 버튼 누르기 또는 엔터 누르기
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle2.jpg"
                  >
                    <v-card-title style="float: right"
                      ><p style="color: black">
                        >>> 다음에 <code>print("Hello, World!")</code>라고 치고
                        엔터 누르기
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
                    lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="python-factory-picture"
                    class="white--text align-end"
                    src="https://image-loader-coding-insight.web.app/py-kr/img/idle3.jpg"
                  >
                    <v-card-title style="float: right"
                      ><p style="color: black">결과 확인하기</p></v-card-title
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
    </div>

    <QuadSpace />

    <div
      style="display: flex; justify-content: center; border-radius: 5px"
      class="img-div"
    >
      <div style="text-align: center; margin: auto">
        <v-img
          lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="200px"
        />
      </div>
      <div class="mx-auto">
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

    <QuadSpace />

    <NaviBtn bef="/korean/python/" aft="vscode" />

    <QuadSpace />
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
