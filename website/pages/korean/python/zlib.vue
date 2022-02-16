<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>파일 압축이란?</h2>
        파일을 압축하면 파일에 있는
        <mark>내용의 용량이 많이 줄어듭니다</mark>.<br /><br />
        어떻게 파일을 압축할까요?
      </div>
    </div>

    <QuadSpace />

    <Header type="파이썬" num="65" title="zlib" />

    <QuadSpace />

    <div>
      <div>
        <h2>파일 압축의 원리</h2>
        <p>
          파일에서는 반복되는 단어들이 많이 있습니다.<br /><br />
          <code>
            And miles to go before I sleep, and miles to go before I sleep.
          </code>
          miles, to, go, before, I, sleep와 같은 단어들은 2번 반복이 됩니다.<br /><br />
          만일 이 파일 옆에 따로 딕셔너리를 만들어서 이 값들 대신 다른 값을
          넣는다면 어떻게 될까요?<br /><br />
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
          위의 딕셔너리를 사용하여 파일을 압축한다면 다음과 같은 내용으로 바뀔
          수 있습니다.<br /><br />
          <code> And 0 1 2 3 4 5, and 0 1 2 3 4 5. </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>ZLIB 모듈</h2>
        <p>
          파이썬에서는 파일 또는 데이터 형태를 압축할 수 있는 모듈이
          있습니다.<br /><br />
          zlib이라는 모듈입니다.<br /><br />
          zlib은 ZIP COMPRESSION LIBRARY의 약자입니다.<br /><br />
          먼저, PIP을 이용하여 zlib을 내려받겠습니다.<br /><br />
          <code>pip install zlib</code>
          다음에, 새로운 파일을 만들어 zlib 모듈을 가지고 오겠습니다.<br /><br />
          <code> import zlib </code>
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <CIImage
          alt="python-factory-picture"
          src="https://en.terminalroot.com.br/assets/img/cppdaily/zlib.png"
          width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>ZLIB - 문자 압축하기</h2>
        <p>
          문자를 압축하겠습니다.<br /><br />
          아래 코드에 대한 설명을 하자면<br /><br />
          1. 먼저, zlib 모듈을 가지고 옵니다.<br />
          2. 다음, 압축할 문자를 만듭니다. 이 문자는 byte 문자여야 하니 문자
          앞에 'b'를 붙입니다.<br />
          3. 그리고, zlib.compress() 메서드를 이용하여 압축합니다.<br /><br />
          아래의 코드를 실행하면 63, 44 숫자가 나옵니다. 이처럼 길이가 63인
          문자를 길이가 44인 문자로 바꾸기가 가능합니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/74a9209480"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>ZLIB - 문자 압축 level</h2>
        <p>
          문자 압축을 하는데 다양한 level이 있습니다. zlib에서는 총 10개의 level
          (0~9)이 있습니다.<br /><br />
          0 - 가장 낮은 level로 압축을 하지 않습니다.<br />
          1 - 두 번째로 낮은 level로 압축을 조금 합니다. 속도는 빠릅니다.<br />
          ...<br />
          9 - 가장 높은 level로 압축은 많이 하지만 속도는 느립니다.<br /><br />
          하지만 위의 예시에서는 1(원래 값)과 9와 차이가 없습니다. 그 이유는
          너무 짧기 때문입니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/50ab5d6ef3"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>ZLIB - 문자 압축 풀기</h2>
        <p>압축을 풀기 위하여 zlib.decompress() 메서드를 사용할 수 있습니다.</p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/c42b0b500e"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn bef="mapandreduceandfilter" aft="decorator" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'ZLibPage',
};
</script>
