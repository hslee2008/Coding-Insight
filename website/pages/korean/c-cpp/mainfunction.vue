<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>main() 함수란?</h1>
        <p>
          main() 함수는 C 언어에서 실행할 모든 코드를 담은 곳입니다.<br /><br />

          지켜야 하는 규칙이 있습니다.<br /><br />

          1. 꼭 이름이 main이어야 합니다. 대소문자 구별이 됩니다.<br />
          2. return하는 값은 0이어야지만 실행이 됩니다.<br />
          3. return이 숫자이니 main의 데이터 형태도 int이어야 합니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVtWFSGRUxMggLLNqG3lCfUkfN02VTaOkHw&usqp=CAU"
          width="400px"
        />
      </div>
    </div>

    <br /><br />

    <Header title="MAIN 함수" num="29" />

    <QuadSpace />

    <div>
      <div>
        <h1>main() 함수의 매개변수</h1>
        <p>
          main 함수도 매개변수가 있습니다.<br /><br />

          우리가 만든 exe 파일을 실행할 때 'name.exe' 형태를 터미널에 입력해서
          실행합니다.<br /><br />

          이때 특별한 매개변수를 넣을 수 있습니다.<br /><br />

          'name.exe' 다음에 몇가지 값을 넣으면 처음 main() 함수의 매개변수 안에
          다 저장이 됩니다.<br /><br />

          참고로 name.exe 다음에 나오는 값들은 ' '로 분리됩니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main(int a, int b) {<br />
            &nbsp;&nbsp;printf("%d", a + b);<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          그리고 다음과 같이 VSCode 터미널에 입력합니다.<br /><br />

          <code> a.exe 1 1 </code>

          참고로 a.exe 대신 여러분의 파일명을 입력하세요. 아마도 a.exe일
          것입니다.<br /><br />

          파일 이름을 확인하기 위해서 VSCode의 파일을
          열고(<kbd>ctrl+shift+e</kbd>) exe로 끝나는 파일을 찾습니다.
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gu"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="function" slink="storageclass" />

    <QuadSpace />
  </div>
</template>
