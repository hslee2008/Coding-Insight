<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>파일 처리란?</h1>
        <p>
          파이썬에서는 파일을 만들고, 읽고, 쓰고, 지우는 것이 가능합니다.<br /><br />

          출력에서 'print()' 함수를 이용하여 파일에 쓰는 것이 가능합니다.
          'open()'이라는 함수는 파일을 여는 메서드입니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg"
          width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header num="49" title="파일"></Header>

    <QuadSpace></QuadSpace>

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>파일 주소</h1>
        <p>
          파일 주소는 파일을 가지고 오는 데 매우 중요한 변수입니다.<br /><br />

          파일 주소는 VSCode에서 파일을 우클릭하고 'copy path' 버튼을 누르면
          전체 파일 주소가 복사됩니다.
        </p>
      </div>
      <v-img
        alt="python-factory-picture"
        class="img-fluid"
        :src="require('./img/filepath.jpg')"
        max-width="400px"
      />
    </div>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <div>
          <h1>파일 열고 닫기</h1>
          <p>
            파일 열기는 open() 함수를 이용할 수 있습니다. 첫 번째 매개변수로
            파일의 주소를 적고 두 번째는 모드를 적습니다. 모드는 다음 시간에
            배우겠습니다.<br /><br />

            만일 두 번째 매개변수인 모드를 입력하지 않았다면 읽기모드로 파이썬은
            인식합니다.<br /><br />

            항상 파일을 연 후 닫아야 합니다. 그렇지 않으면 파이썬 코드가 끝나도
            계속 파일이 읽어질 수 있습니다. 그래서 다시는 파일을 사용하지
            않는다면 꼭 닫으세요!
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/5755f85207"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="math" slink="filereading"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>
