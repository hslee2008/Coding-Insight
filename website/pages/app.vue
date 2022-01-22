<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" style="gap: 10px">
      <v-simple-table>
        <v-card class="mx-auto" max-width="250">
          <v-img
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>핸드폰 앱 (안드로이드)</v-card-title>

          <v-card-subtitle> APK 62.3MB (v2.0.1) </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" href="./Python_factory_App.apk" download
              >다운로드</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text
                >React Native 프레임워크를 사용해서 핸드폰 앱을 만들었습니다.
                사이트와 Galaxy Store에서 다운로드 받을 수 있습니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>최적화된 폰 앱 (안드로이드)</v-card-title>

          <v-card-subtitle> APK 16.4MB (v1.0.1) </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" href="./app-release.apk" download
              >다운로드</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text
                >Flutter 프레임워크를 사용해서 핸드폰 앱을 만들었습니다. 원래
                폰앱보다 훨씬 간단하고, 사이즈가 작고, 빠릅니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="300">
          <v-img
            src="data:image/jpeg;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>컴퓨터 앱 (윈도우)</v-card-title>

          <v-card-subtitle> EXE 7.53MB (v1.0.2) </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" href="./Python_Factory.exe" download
              >다운로드</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show3 = !show3">
              <v-icon>{{
                show3 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text
                >파이썬을 사용해서 컴퓨터 앱을 만들었습니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="300">
          <v-img
            src="https://responsivedesign.is/wp-content/uploads/2018/08/PWA-Progressive-Web-App-Logo.png"
            height="200px"
          ></v-img>

          <v-card-title>PWA (모든 디바이스)</v-card-title>

          <v-card-subtitle> APK 2.77KB (v22.1.22) </v-card-subtitle>

          <v-card-actions>
            브라우저 다운로드

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text
                >모든 디바이스에서 "홈에 추가하기" 버튼을 누르면 바로 앱을
                실행할 수 있습니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
    </v-row>

    <QuadSpace />

    <Header title="앱 설치하기" num="가이드 1"></Header>

    <QuadSpace />

    <div style="display: flex; gap: 30px" class="img-div">
      <div>
        <h3>APK 파일 내려받기</h3>
        <p>
          저희 사이트 또는
          <a
            href="https://github.com/HyunseungLee-Travis/Coding-Insight/releases/tag/v1.3.10"
            target="_blank"
            style="color: dodgerblue"
            >깃허브</a
          >
          에서 APK 파일을 설치 받습니다.<br /><br />

          APK 파일은 폰에서 앱 파일입니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/harm.jpg')"
          /><br /><br />

          만일 설치할 것이냐고 물어보면 확인 버튼을 누르세요.<br /><br />

          설치가 올바르게 시작이 되었다면 다음과 같이 폰에서 보여야 합니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/detail.jpg')"
          /><br /><br />

          조금 뒤 다음과 같이 스크린이 보일 것입니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/open.jpg')"
          /><br /><br />

          오픈 버튼을 누르세요.<br /><br />

          다음과 같이 보일 수 있습니다. 설정을 누르세요.<br /><br />

          만일 다음과 같이 보이지 않고 바로 설치가 시작된다면 넘어가세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/ask.jpg')"
          /><br /><br />

          그리고 다음과 같이 스크린에서 설정 창이 뜹니다.<br /><br />

          조금 다를 수 있지만 '출처를 알 수 없는 앱 설치 허용'을 허용하세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/setting.jpg')"
          /><br /><br />

          백 버튼을 누르면 설치 할 것이냐고 물어볼 것입니다. '설치' 버튼을
          누르세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/install.jpg')"
          /><br /><br />

          다음, 'Play Protect에서 찬단했습니다'라고 뜰 수 있습니다. 무시하고
          설치하기 버튼을 누르세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/playprotect.jpg')"
          /><br /><br />

          파이썬 팩토리 앱이 설치 되었다고 뜰 것입니다.<br /><br />

          OPEN을 누르면 저희 앱을 열 수 있습니다!<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/installed.jpg')"
          />
        </p>
      </div>
      <div class="text-center m-5">
        <h3>갤럭시 스토어</h3>
        <p>
          갤럭시 스토어에서 "Python Factory App"이라고 칩니다.<br /><br />

          또는
          <a
            href="https://galaxy.store/pyfact"
            target="_blank"
            style="color: dodgerblue"
            >갤럭시 스토어 링크</a
          >를 클릭하세요<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/galaxystore.jpg')"
            width="300"
          /><br /><br />

          설치 버튼을 누릅니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/installgalaxystore.jpg')"
            width="300"
          /><br /><br />

          실행 버튼을 클릭합니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            class="img-fluid"
            :src="require('./img/runapp.jpg')"
            width="300"
          /><br /><br />

          참고로 새로운 버전은 거의 매일 업데이트 되니 가끔 [설정]에서 Update
          버튼을 눌러주세요!
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="컴퓨텨앱 설치" num="가이드 2"></Header>

    <QuadSpace />

    <div>
      <h3>파일 설치</h3>
      <p>
        위에 있는 링크를 눌러서 EXE 파일을 설치 받습니다.<br /><br />

        <v-img
          max-width="300px"
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/exe.jpg')"
        /><br /><br />

        박스 안을 클릭하세요.
      </p>
      <h3>윈도우 보호</h3>
      <p>
        다음과 같이 윈도우에서 파일을 막을 수 있습니다.<br /><br />

        <v-img
          max-width="300px"
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/windowsprotect.jpg')"
        /><br /><br />

        추가 정보를 누르고 실행 버튼을 클릭하세요.<br /><br />

        <v-img
          max-width="300px"
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/run.jpg')"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
    };
  },
};
</script>
