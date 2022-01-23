<template>
  <div>
    <br />

    <div style="display:flex;" class="img-div">
      <div style="display: flex; justify-content: center;">
        <v-img
alt="python-factory-picture" class="img-fluid"
          src="data:image/png;base64,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" />
      </div>
      <div style="padding: 10px;">
        <p>
        <h1>파일 압축이란?</h1>
        파일을 압축하면 파일에 있는 <mark>내용의 용량이 많이 줄어듭니다</mark>.<br /><br />
        어떻게 파일을 압축할까요?
        </p>
      </div>
    </div>

    <br /><br />

    <Header num="65" title="zlib"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>파일 압축의 원리</h1>
        <p>
          파일에서는 반복되는 단어들이 많이 있습니다.<br /><br />
          <code>
          And miles to go before I sleep, and miles to go before I sleep.
          </code>
          miles, to, go, before, I, sleep와 같은 단어들은 2번 반복이 됩니다.<br /><br />
          만일 이 파일 옆에 따로 딕셔너리를 만들어서 이 값들 대신 다른 값을 넣는다면 어떻게 될까요?<br /><br />
          다음과 같은 딕셔너리를 만들 수 있습니다.<br /><br />
          <code>
          {<br />
          "miles": 0,<br />
          "to": 1,<br />
          "go": 2,<br />
          "before": 3,<br />
          "I": 4,<br />
          "sleep": 5<br />
          }
          </code>
          위의 딕셔너리를 사용하여 파일을 압축한다면 다음과 같은 내용으로 바뀔 수 있습니다.<br /><br />
          <code>
          And 0 1 2 3 4 5, and 0 1 2 3 4 5.
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h1>ZLIB 모듈</h1>
        <p>
          파이썬에서는 파일 또는 데이터 형태를 압축할 수 있는 모듈이 있습니다.<br /><br />
          zlib이라는 모듈입니다.<br /><br />
          zlib은 ZIP COMPRESSION LIBRARY의 약자입니다.<br /><br />
          먼저, PIP을 이용하여 zlib을 내려받겠습니다.<br /><br />
          <code>pip install zlib</code>
          다음에, 새로운 파일을 만들어 zlib 모듈을 가지고 오겠습니다.<br /><br />
          <code>
          import zlib
          </code>
        </p>
      </div>
      <div style="display: flex; justify-content: center;">
        <v-img
alt="python-factory-picture" class="img-fluid"
          src="https://en.terminalroot.com.br/assets/img/cppdaily/zlib.png" width="400px" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>ZLIB - 문자 압축하기</h1>
        <p>
          문자를 압축하겠습니다.<br /><br />
          아래 코드에 대한 설명을 하자면<br /><br />
          1. 먼저, zlib 모듈을 가지고 옵니다.<br />
          2. 다음, 압축할 문자를 만듭니다. 이 문자는 byte 문자여야 하니 문자 앞에 'b'를 붙입니다.<br />
          3. 그리고, zlib.compress() 메서드를 이용하여 압축합니다.<br /><br />
          아래의 코드를 실행하면 63, 44 숫자가 나옵니다. 이처럼 길이가 63인 문자를 길이가 44인 문자로 바꾸기가 가능합니다.
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/74a9209480" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <div>
      <div>
        <h1>ZLIB - 문자 압축 level</h1>
        <p>
          문자 압축을 하는데 다양한 level이 있습니다. zlib에서는 총 10개의 level (0~9)이 있습니다.<br /><br />
          0 - 가장 낮은 level로 압축을 하지 않습니다.<br />
          1 - 두 번째로 낮은 level로 압축을 조금 합니다. 속도는 빠릅니다.<br />
          ...<br />
          9 - 가장 높은 level로 압축은 많이 하지만 속도는 느립니다.<br /><br />
          하지만 위의 예시에서는 1(원래 값)과 9와 차이가 없습니다. 그 이유는 너무 짧기 때문입니다.
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/50ab5d6ef3" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <div>
      <div>
        <h1>ZLIB - 문자 압축 풀기</h1>
        <p>
          압축을 풀기 위하여 zlib.decompress() 메서드를 사용할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/c42b0b500e" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <BeforeNextButton flink="mapandreduceandfilter" slink="decorator" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: "ZLibPage"
}
</script>
