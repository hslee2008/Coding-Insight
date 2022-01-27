<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" style="gap: 10px">
      <v-simple-table>
        <v-card class="mx-auto" max-width="290">
          <v-img
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>폰앱 (안드로이드)</v-card-title>

          <v-card-subtitle> APK 16.5MB (v2.1.0) </v-card-subtitle>

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
        <v-card class="mx-auto" max-width="230">
          <v-img
            src="https://responsivedesign.is/wp-content/uploads/2018/08/PWA-Progressive-Web-App-Logo.png"
            height="200px"
          ></v-img>

          <v-card-title>PWA (모든 디바이스)</v-card-title>

          <v-card-subtitle> APK 2.77KB (v22.1.22) </v-card-subtitle>

          <v-card-actions>
            브라우저 다운로드

            <v-spacer></v-spacer>

            <v-btn icon @click="show4 = !show4">
              <v-icon>{{
                show4 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text
                >모든 디바이스에서 "홈에 추가하기" 버튼을 누르면 바로 앱을
                실행할 수 있습니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="205">
          <v-img
            src="https://code.visualstudio.com/opengraphimg/opengraph-blog.png"
            height="200px"
          ></v-img>

          <v-card-title>VSCode Extension</v-card-title>

          <v-card-subtitle> v1.0.1 </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="primary"
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
              >다운로드</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show5 = !show5">
              <v-icon>{{
                show5 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text
                >VSCode에서 쉽게 파이썬 팩토리 사이트로 들어가세요!</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
    </v-row>

    <QuadSpace />

    <Header title="폰 앱 설치하기" num="가이드 1"></Header>

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
            :src="require('./img/harm.jpg')"
          /><br /><br />

          만일 설치할 것이냐고 물어보면 확인 버튼을 누르세요.<br /><br />

          설치가 올바르게 시작이 되었다면 다음과 같이 폰에서 보여야 합니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/detail.jpg')"
          /><br /><br />

          조금 뒤 다음과 같이 스크린이 보일 것입니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/open.jpg')"
          /><br /><br />

          오픈 버튼을 누르세요.<br /><br />

          다음과 같이 보일 수 있습니다. 설정을 누르세요.<br /><br />

          만일 다음과 같이 보이지 않고 바로 설치가 시작된다면 넘어가세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/ask.jpg')"
          /><br /><br />

          그리고 다음과 같이 스크린에서 설정 창이 뜹니다.<br /><br />

          조금 다를 수 있지만 '출처를 알 수 없는 앱 설치 허용'을 허용하세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/setting.jpg')"
          /><br /><br />

          백 버튼을 누르면 설치 할 것이냐고 물어볼 것입니다. '설치' 버튼을
          누르세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/install.jpg')"
          /><br /><br />

          다음, 'Play Protect에서 찬단했습니다'라고 뜰 수 있습니다. 무시하고
          설치하기 버튼을 누르세요.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/playprotect.jpg')"
          /><br /><br />

          파이썬 팩토리 앱이 설치 되었다고 뜰 것입니다.<br /><br />

          OPEN을 누르면 저희 앱을 열 수 있습니다!<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/installed.jpg')"
          />
        </p>
      </div>
      <div>
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
            :src="require('./img/galaxystore.jpg')"
            width="300"
          /><br /><br />

          설치 버튼을 누릅니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/installgalaxystore.jpg')"
            width="300"
          /><br /><br />

          실행 버튼을 클릭합니다.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/runapp.jpg')"
            width="300"
          /><br /><br />

          참고로 새로운 버전은 거의 매일 업데이트 되니 가끔 [설정]에서 Update
          버튼을 눌러주세요!
        </p>
      </div>
    </div>

    <QuadSpace />
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
