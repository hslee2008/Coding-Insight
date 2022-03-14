<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>파일 다루는 작업이란?</h2>
        <p>
          파일을 다루는 작업은 파일 처리하는 작업입니다.<br /><br />

          파일을 삭제하고, 만들고, 쓰고, 읽는 등을 통틀어 파일 다루는 작업이라고
          합니다.<br /><br />

          C 언어에서 파일을 다루기 위해서 stdlib.h라는 라이브러리를 먼저 가지고
          와야합니다.<br /><br />

          <code> #include &lt;stdlib.h> </code>
        </p>
      </div>
    </div>

    <Header type="C/C++" title="파일 다루기" num="47" />

    <div>
      <div>
        <h2>FILE 데이터 형태</h2>
        <p>
          C 언어에서 파일을 먼저 변수 안에 저장해야 합니다.<br /><br />

          그 변수의 형태는 FILE이고 포인터를 사용해야 합니다.<br /><br />

          <code> FILE * fp </code>

          위의 fp라는 변수 안에 파일을 저장하겠습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>파일 열기</h2>
        <p>
          파일을 사용하기 위해서 fopen() 함수를 FILE * fp 안에
          저장하겠습니다.<br /><br />

          fopen() 함수는 파일을 여는 함수입니다.<br /><br />

          매개변수로 첫 번째에는 파일 주소와 파일을 여는 모드를 넣습니다.<br /><br />

          파일 주소는 VSCode에서 파일을 우클릭하고 Copy Path 버튼을 누르면
          됩니다.<br /><br />

          파일 여는 모드는 조금 나중에 더 자세히 배우겠습니다.<br /><br />

          <code> FILE * fp = fopen("test.txt", "r"); </code>

          여기에서 r은 파일을 읽겠다는 뜻입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>파일 닫기</h2>
        <p>
          파일을 항상 닫아야 합니다.<br /><br />

          그렇게 하지 않는다면 에러가 생길 수 있습니다.<br /><br />

          <code> fclose(fp); </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="math" aft="readfile" />
  </div>
</template>
