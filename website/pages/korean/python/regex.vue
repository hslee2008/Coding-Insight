<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>정규식이란</h2>
        <p>
          정규식은 프로그래밍에서 특정한 규칙을 가진 문자열의 집합을
          뜻합니다.<br /><br />
          정규식 없이 영어에서 모든 알파벳의 문자를 만들고 싶다면 'abcdef...'
          하나하나 다 코드 안에 쳐야합니다.<br /><br />
          하지만 정규식을 사용하면 아주 간단합니다.<br /><br />
          정규식은 모듈이어서 먼저 가지고 와야 합니다.<br /><br />
          <code> import re #영어로 Regular Expression입니다. (re) </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://cmgcode.com/images/portfolio/regexoff-icon.png"
          width="300px"
        />
      </div>
    </div>

    <Header type="파이썬" num="45" title="정규식" />

    <div>
      <div>
        <h2>정규식 - 문자의 값 맞히기</h2>
        <p>
          re.match() 메서드를 사용하면 어떤 두 문자에서 동일한 시작 부분을 알 수
          있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/6b78aaf023"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>정규식 - 문자의 값 찾기</h2>
          <p>
            match는 문자의 시작 부분을 알 수 있지만 re.search() 메서드를
            사용한다면 전체 값에서의 같은 부분을 계산할 수 있습니다.
          </p>
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/6d2e182407"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>정규식 문자</h2>
        <p>
          정규식을 <b>진짜로</b> 사용하기 위해서는 다음과 같은 문자를 이용해야
          합니다. 1. [a-b]<br />
          2. [abc]: a, b, 또는 c<br />
          3. [^abc]: a, b, c 제외<br />
          &nbsp;. -- 임의의 알파벳: "h."는 ha, hb, hc, ... hz 다입니다<br />
          &nbsp;^ -- 단어 중 다음 패턴으로 시작하는지: "^hello": hello로
          시작하는 단어가 있는지<br />
          &nbsp;$ -- 단어 중 다음 패턴으로 끝나는지: "$hello": hello로 끝나는
          단어가 있는지
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="dice" aft="class" />
  </div>
</template>

<script>
  export default {
    page: 'RegexPage',
  };
</script>
