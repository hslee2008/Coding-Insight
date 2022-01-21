<template>
  <div>
    <QuadSpace></QuadSpace>

    <v-row flex justify="center">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">타입</th>
            <th class="text-left">파일 형태</th>
            <th class="text-left">버전</th>
            <th class="text-left">설치 링크</th>
            <th class="text-left">사이즈</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in apps" :key="item.type">
            <td>{{ item.type }}</td>
            <td>{{ item.filetype }}</td>
            <td>{{ item.version }}</td>
            <td>
              <v-btn color="primary" :href="item.link" download>다운로드</v-btn>
            </td>
            <td>{{ item.size }}</td>
          </tr>
          <tr>
            <td>프로그레시브 웹앱</td>
            <td>브라우저 링크</td>
            <td>2022.01.16</td>
            <td>
              브라우저에서 설치 <small>(홈 화면에 추가 버튼 누르기)</small>
            </td>
            <td>2.77 KB</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>

    <QuadSpace></QuadSpace>

    <Header title="앱 설치하기" num="가이드 1"></Header>

    <QuadSpace></QuadSpace>

    <div style="display: flex; gap: 30px;">
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

    <QuadSpace></QuadSpace>

    <Header title="컴퓨텨앱 설치" num="가이드 2"></Header>

    <QuadSpace></QuadSpace>

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
      apps: [
        {
          type: '폰앱',
          filetype: 'apk',
          version: '2.0.1',
          link: '/Python_Factory_App.apk',
          size: '62.3 MB',
        },
        {
          type: '최적화된 폰앱',
          filetype: 'apk',
          version: '1.0.1',
          link: '/app-release.apk',
          size: '16.4 MB',
        },
        {
          type: '컴퓨터앱',
          filetype: 'exe',
          version: '1.0.2',
          link: '/Python_Factory.exe',
          size: '7.53 MB',
        },
      ],
    };
  },
};
</script>
