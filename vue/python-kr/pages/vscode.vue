<template>
  <div>
    <br />

    <div style="display: flex; gap: 10px; flex-wrap: wrap; text-align: center">
      <div>
        <v-list-item-title>VSCode 설치</v-list-item-title>
        <v-stepper v-model="e5" vertical width="700px">
          <v-stepper-step :complete="e5 > 1" step="1">
            <a
              target="_blank"
              href="https://code.visualstudio.com/download"
              style="text-decoration: none; color: yellow"
              >VSCode 설치 페이지</a
            >를 방문합니다. & 알맞은 컴퓨터 소프트웨어를 선택합니다.<br /><br />
            <small>키보드에 창문 그림이 있으면 왼쪽, 없으면 오른쪽입니다</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/vscode.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e5 = 2"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e5 > 2" step="2">
            새로운 박스가 생길 것이고 설치가 100% 다 되면 그 박스를 클릭하세요.
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/vscodesetup.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e5 = 3"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e5 > 3" step="3">
            동의합니다 그리고 다음을 누르세요.
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/agree.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e5 = 4"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e5 > 4" step="4">
            또 다음을 누르세요.
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/nextvscode.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e5 = 5"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e5 > 5" step="5">
            설치 버튼을 누르세요.
          </v-stepper-step>

          <v-stepper-content step="5">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/installvscode.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e5 = 6"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e5 > 5" step="6">
            끝내기 버튼을 누르세요.
          </v-stepper-step>

          <v-stepper-content step="6">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/vscodefinish.jpg')"
            /></v-card>
          </v-stepper-content>
        </v-stepper>
      </div>

      <div>
        <v-list-item-title>VSCode에서 파이썬 프로그래밍 준비</v-list-item-title>
        <v-stepper v-model="e4" vertical width="700px">
          <v-stepper-step :complete="e4 > 1" step="1">
            VSCode 왼쪽 바에 4 큐브 모양의 버튼이 있습니다. 클릭하세요.<br /><br />
            <small><kbd>CTRL+SHIFT+X</kbd></small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/cube.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e4 = 2"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e4 > 2" step="2">
            Python이라고 친 후 기다리세요
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/input.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e4 = 3"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e4 > 3" step="3">
            처음으로 나타나는 확장 도구을 설치하세요 (install 버튼 누르기)
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/extinstall.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e4 = 4"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e4 > 4" step="4">
            Code Runner을 치고 가장 먼저 나오는 확장 도구을 설치하세요 (install)
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/coderunner.jpg')"
            /></v-card>
            <v-btn color="primary" @click="e4 = 5"> Continue </v-btn>
          </v-stepper-content>
        </v-stepper>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <Header num="3" title="VSCode 설치"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <v-list-item-title>VSCode에서 파이썬 프로그래밍하기</v-list-item-title>
      <v-stepper v-model="e3" vertical width="700px">
        <v-stepper-step :complete="e3 > 1" step="1">
          파이썬 코드를 저장하기 위한 폴더가 필요합니다. CTRL+SHIFT+E 또는 왼쪽
          바에 있는 파일 버튼(버튼 중 맨 위)을 누르세요.
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-img
              alt="python-factory-picture"
              class="img-fluid"
              :src="require('./img/file.jpg')"
          /></v-card>
          <v-btn color="primary" @click="e3 = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 2" step="2">
          "Open Folder" 버튼을 누르고 코드를 저장할 파일을 선택하세요
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-img
              alt="python-factory-picture"
              class="img-fluid"
              :src="require('./img/choose.jpg')"
          /></v-card>
          <v-btn color="primary" @click="e3 = 3"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 3" step="3">
          파일 이름 옆에 보면 4개의 버튼이 있습니다. 가장 왼쪽 버튼을
          클릭하세요.
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-img
              alt="python-factory-picture"
              class="img-fluid"
              :src="require('./img/newfile.jpg')"
          /></v-card>
          <v-btn color="primary" @click="e3 = 4"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 4" step="4">
          파이썬 파일 이름을 입력 후 '.py'로 끝내고 엔터를 누르세요.
        </v-stepper-step>

        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-img
              alt="python-factory-picture"
              class="img-fluid"
              :src="require('./img/filename.jpg')"
          /></v-card>
          <v-btn color="primary" @click="e3 = 5"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 5" step="5">
          파일 안에 파이썬 코드를 입력합니다. print("Hello World")
        </v-stepper-step>

        <v-stepper-content step="5">
          <v-btn color="primary" @click="e3 = 6"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 6" step="6">
          파이썬 파일 위쪽 코너에 보면 삼각형이 있습니다. 그 삼각형을
          클릭하세요.
        </v-stepper-step>

        <v-stepper-content step="6">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-row
              ><v-img
                alt="python-factory-picture"
                class="img-fluid"
                :src="require('./img/tri.jpg')" />
              <v-img
                alt="python-factory-picture"
                class="v-img-fluid"
                :src="require('./img/run.jpg')"
                max-width="400px" /></v-row
          ></v-card>
          <v-btn color="primary" @click="e3 = 7"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e3 > 7" step="7">
          Hello World가 출력되었을 것입니다...
        </v-stepper-step>

        <v-stepper-content step="7">
          <v-card color="grey lighten-1" class="mb-12" height="200px"
            ><v-row>
              <v-img
                alt="python-factory-picture"
                class="v-img-fluid"
                :src="require('./img/helloworld.jpg')"
                max-width="400px" /></v-row
          ></v-card>
        </v-stepper-content>
      </v-stepper>
    </div>

    <div style="display: flex; padding: 10px" class="img-div">
      <div>
        <h1>.py?</h1>
        <p>
          위의 설명에서 항상 파이썬 파일을 만들때 "이름.py" 형태로 정해야한다고
          했습니다.
        </p>
        <br />
        <p>
          그 이유는 컴퓨터에게 파일의 형태(종류)가 무엇이지 설명해야하기
          때문입니다.
        </p>
        <br />
        <p>
          .py는 python의 약자로 컴퓨터에게 우리가 만든 파일이 파이썬 파일이라고
          알려줍니다.
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

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="install" slink="io"></BeforeNextButton>

    <QuadSpace></QuadSpace>
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
    }
  },
}
</script>
