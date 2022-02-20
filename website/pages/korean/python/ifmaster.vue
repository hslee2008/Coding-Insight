<template>
  <div>
    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SW8JgnjD9_s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <QuadSpace />

    <Header type="파이썬" num="27" title="조건문 마스터" />

    <QuadSpace />

    <div>
      <div>
        <h2>조건문 간단히 하기</h2>
        <p>
          if-else 조건문은 다음과 같은 형태로도 사용할 수 있습니다.<br /><br />

          형태는
          <code
            >(if 조건이 맞았다면 실행할 코드) if (조건) else (if조건이
            틀리다면)}입니다.</code
          ><br /><br />

          if-elif-else 조건문을 다음과 같이 사용할 수 있습니다.<br /><br />

          형태는
          <code
            >(if 조건 1이 맞았다면 실행할 코드) if (조건) else (if 조건2가
            맞았다면 실행할 코드) if (조건2) else (if 조건문이 둘 다 틀리다면
            실행할 코드)</code
          >
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/73c3356df0"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div style="padding: 10px">
          <h2>Switch</h2>
          <p>
            다른 언어 (예: 자바스크립트)에서는 switch라는 키워드가 있습니다.<br /><br />

            switch는 어떤 변수와 다른 값을 비교하는 키워드입니다.<br /><br />

            조건문인데 두 값을 비교하는 조건문입니다.<br /><br />

            하지만 파이썬에서는 switch가 없습니다. 그래서 다음과 같은 방법만으로
            사용할 수 있습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/cb9b932e10"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>들여쓰기</h2>
        <p>
          들여쓰기란 새로운 문단을 쓸 때 코드 앞에 공백을 놓고 시작하는 것을
          뜻합니다.<br /><br />

          파이썬에서는 조건문을 만들때 들여쓰기는 필수입니다.<br /><br />

          위의 코드와 같이 print()는 조건문 <b>안에</b> 있으므로 들여쓰기를 해야
          합니다.<br /><br />

          항상 어떤 코드는 어떤 것(함수, 조건문, 반복문 등) 안에 있거나 밖에
          있는지를 고려하며 들여쓰기를 해야합니다.
        </p>
      </div>
    </div>

    <br /><br /><br />

    <NaviBtn bef="if" aft="password-safe" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'IfMasterPage',
};
</script>
