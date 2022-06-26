<template>
  <div>
    <h2>VSCode 설치</h2>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/vscode.jpg"
    />
    <p>
      <a
        aria-label="VSCode installation page (opens in a new window)"
        target="_blank"
        href="https://code.visualstudio.com/download"
        >VSCode 설치 페이지</a
      >를 방문합니다. 알맞은 컴퓨터 소프트웨어를 선택합니다.
    </p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/vscodesetup.jpg"
    />
    <p>새로운 박스가 생길 것이고 설치가 100% 다 되면 그 박스를 클릭하세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/agree.jpg"
    />
    <p>동의합니다 그리고 다음을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/nextvscode.jpg"
    />
    <p>또 다음을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/installvscode.jpg"
    />
    <p>설치 버튼을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/vscodefinish.jpg"
    />
    <p>끝내기 누르기</p>

    <p>컴퓨터 다시 시작하기</p>

    <h2>코딩 준비하기</h2>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/cube.jpg"
    />
    <p><kbd>CTRL + SHIFT + X</kbd> 누르거나 큐브 버튼 누르기</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/input.jpg"
    />
    <p>박스 안에 "python"이라고 치세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/extinstall.jpg"
    />
    <p>초록색 install 버튼을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/coderunner.jpg"
    />
    <p>Code Runner을 치고 가장 먼저 나오는 확장 도구을 설치하세요 (install)</p>

    <Header type="파이썬" num="3" title="VSCode 설치" />

    <h3>VSCode에서 파이썬 프로그래밍 작작</h3>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/file.jpg"
    />
    <p><kbd>CTRL + SHIFT + E</kbd> 누르거나 "파일" 버튼 누르기</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/choose.jpg"
    />
    <p>파란색 "폴더 선택" 버튼을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/background.jpg"
    />
    <p>
      코드를 저장하고 싶은 폴더를 선택하세요. 따로 폴더가 없다면 바탕화면을
      선택하세요.
    </p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/newfile.jpg"
    />
    <p>파일 새로 만들기 버튼을 누르세요.</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/filename.jpg"
    />
    <p>파일 이름을 지으세요. 꼭 .py로 끝내야 합니다. (밑 내용 확인하기)</p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/tri.jpg"
    />
    <p>
      print("hello world")라고 쓰고 위, 오른쪽에 있는 삼각형 옆 화살표 버튼을
      누릅니다. Run Python 버튼을 누릅니다.
    </p>

    <v-img
      src="https://image-loader-coding-insight.web.app/py-kr/img/helloworld.jpg"
    />
    <p>결과 확인하기</p>

    <QuadSpace />

    <div>
      <h2>.py?</h2>
      <p>
        위의 설명에서 항상 파이썬 파일을 만들때
        <code v-highlight class="python ic">이름.py</code> 형태로 정해야한다고
        했습니다.<br /><br />

        그 이유는 컴퓨터에게 파일의 형태(종류)가 무엇이지 설명해야하기
        때문입니다.<br /><br />

        <code v-highlight class="python ic">.py</code>는 python의 약자로
        컴퓨터에게 우리가 만든 파일이 파이썬 파일이라고 알려줍니다.
      </p>
    </div>

    <Navigation bef="install" aft="io" />
  </div>
</template>
