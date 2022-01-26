<template>
  <div>
    <br />

    <div style="display: flex; justify-content: space-evenly">
      <div>
        <h1>VSCode 설치하는 방법</h1>
        <p>
          1.
          <a
            target="_blank"
            href="https://code.visualstudio.com/download"
            style="text-decoration: none; color: yellow"
            >VSCode 설치 페이지</a
          >를 방문합니다.
        </p>
        <p>2. 알맞은 컴퓨터 소프트웨어를 선택합니다.</p>
        <p>+ 키보드에 창틀이 있으면 윈도우입니다(없다면 MAC).</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/vscode.jpg')"
          max-width="400px"
        /><br />
        <p>3. 설치가 100%다 되면 그 박스를 클릭하세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/vscodesetup.jpg')"
          max-width="400px"
        /><br />
        <p>4. 동의합니다를 선택하세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/agree.jpg')"
          max-width="400px"
        /><br />
        <p>5. 다음(또는 Next) 버튼을 누르세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/nextvscode.jpg')"
          max-width="400px"
        /><br />
        <p>6. 설치 버튼을 누르세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/installvscode.jpg')"
          max-width="400px"
        /><br />
        <p>7. 끝내기 버튼을 누르세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/vscodefinish.jpg')"
          max-width="400px"
        />
      </div>
      <div>
        <h1>C 언어 프로그래밍 준비</h1>
        <p>
          1. VSCode 왼쪽 바에 4 큐브 모양의 버튼이 있습니다.<br /><br />클릭하세요.
          (CTRL+SHIFT+X)
        </p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/cube.jpg')"
          max-width="400px"
        /><br />
        <p>3. C라고 친 후 기다리세요</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/extinstall.jpg')"
          max-width="400px"
        /><br />
        <p>4. 처음으로 나타나는 확장 도구을 설치하세요 (install 버튼 누르기)</p>
        <p>
          5. Code Runner을 치고 가장 먼저 나오는 확장 도구을 설치하세요
          (install)
        </p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/coderunner.jpg')"
          max-width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header title="VSCode 설치" num="3" />

    <QuadSpace />

    <div>
      <div>
        <h1>VSCode에서 C 언어 프로그래밍하기</h1>
        <p>1. 파이썬 코드를 저장하기 위한 폴더가 필요합니다.</p>
        <p>
          2. CTRL+SHIFT+E 또는 왼쪽 바에 있는 파일 버튼(버튼 중 맨 위)을
          누르세요.
        </p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/file.jpg')"
          max-width="400px"
        />
        <br />
        <p>3. "Open Folder" 버튼을 누르고 코드를 저장할 파일을 선택하세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/choose.jpg')"
          max-width="400px"
        />
        <br />
        <p>
          4. 파일 이름 옆에 보면 4개의 버튼이 있습니다. 가장 왼쪽 버튼을
          클릭하세요.
        </p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/newfile.jpg')"
          max-width="400px"
        />
        <br />
        <p>5. 파이썬 파일 이름을 입력 후 '.c'로 끝내고 엔터를 누르세요.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/filename.jpg')"
          max-width="400px"
        />
        <br />
        <p>6. 파일 안에 C 언어 코드를 입력합니다.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/firstcode.jpg')"
          max-width="400px"
        />
        <br />
        <p>
          7. 새로운 터미널을 엽니다. 열려면 CTRL+`룰 누르거나 아래와 같이 버튼을
          누릅니다. <br />
          + 터미널이란 컴퓨터를 제어할 수 있는 공간을 뜻합니다.
        </p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/terminal.jpg')"
          max-width="400px"
        />
        <br />
        <p>6. gcc main.c(또는 C 언어 파일 이름)를 실행합니다.</p>

        <p>
          참고로 위의 커맨드를 실행하면 새로운 파일(a.exe)라고 생겼을 것입니다.
          확인하세요!
        </p>

        <p>7. 마지막으로, a.exe(만일 인되면 ./a.exe)를 실행합니다.</p>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/compileandrun.jpg')"
          max-width="400px"
        />
      </div>
    </div>
    <br /><br />

    <div>
      <div>
        <h1>C 언어 코드 살펴보기</h1>
        <p>
          1. #include &lt;stdio.h>는 출력할 수 있는 기능을 가지고 오는
          코드입니다.<br /><br />
          2. int main() {}는 모든 코드를 담는 ]부분입니다.<br /><br />
          3. printf("Hello World!");는 터미널에 Hello World!라고 출력합니다.<br /><br />
          4. ;는 항상 코드 끝에 붙여야 합니다.<br /><br />
          5. return 0; 코드가 잘 실행할 수 있도록 0을 return 해야 합니다.
        </p>
      </div>
      <div>
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          :src="require('./img/firstcode.jpg')"
          max-width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>.c란?</h1>
        <p>
          위의 설명에서 항상 파이썬 파일을 만들때 "이름.c" 형태로 정해야한다고
          했습니다.
        </p>
        <br />
        <p>
          그 이유는 컴퓨터에게 파일의 형태(종류)가 무엇이지 설명해야하기
          때문입니다.
        </p>
        <br />
        <p>.c는 컴퓨터에게 우리가 만든 파일이 C 언어 파일이라고 알려줍니다.</p>
      </div>
      <v-img
        alt="python-factory-picture"
        class="img-fluid"
        style="border-radius: 30px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlgsyBGeN71BXCaOmLKT2tPtFq38dtlbDQg&usqp=CAU"
        max-width="300px"
      />
    </div>

    <QuadSpace />

    <NaviBtn flink="install" slink="print" />

    <QuadSpace />
  </div>
</template>
