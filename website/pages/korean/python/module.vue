<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>모듈의 정의</h2>
        <p>
          파이썬에서 모듈이란 클래스, 함수, 변수, 코드 등 다양한 정보를 저장하고
          있거나 실행할 수 있는 코드의 모임이라고 할 수 있습니다.<br /><br />
          이러한 코드를 우리가 2개 이상 파일에서 사용하기 위하여 모듈을 다른
          파일에서 가지고 올 수 있습니다.
        </p>
      </div>
    </div>

    <Header type="파이썬" num="40" title="모듈" />

    <div>
      <div>
        <h2>모듈 - import</h2>
        <p>
          모듈은 다른 파일에 있기 때문에 먼저 그 파일에서 가지고 와야합니다.<br /><br />
          모듈을 가지고 오려면 'import 모듈 이름' 형태를 사용하면 됩니다.<br /><br />
          참고로 우리만의 모듈을 만들어 인터넷에 올리는 것도 가능하지만 먼저
          모듈에 대하여 더 알아보겠습니다.<br /><br />
          <code> import math </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>모듈 - dir()</h2>
        <p>
          모듈에서 모든 함수, 클래스, 변수 이름을 보기 위하여 'dir(모듈이름)'
          사용할 수 있습니다.<br /><br />
          math 모듈에서 'sqrt'라는 아이템이 보입니다.<br /><br />
          'sqrt'는 Square Root의 약자로 한국어로 번역하면 제곱근입니다.<br /><br />
          이 함수를 사용하기 위하여 '모듈 이름.함수이름()' 형태를 사용할 수
          있습니다.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}cc5f724ff2`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>'as' 키워드</h2>
        <p>
          만일 abcdefghijklmnopqrstuvwxyz라는 모듈이 있다고 가정해 봅시다.<br /><br />
          그렇다면 abcdefgjijklmnopqrstuvwxyz 모듈의 abc 함수를 이용하기 위하여
          abcdefghijklmnopqrstuvwxyz.abc() 코드를 실행하기 위하여 항상 a부터
          z까지 다 쳐야합니다.<br /><br />
          그래서 긴 모듈 이름의 불편함을 최소화하기 위하여 다음과 같은 두 가지의
          방법이 있습니다.<br /><br />
          1. 새로운 변수를 만들어 모듈 저장<br /><br />
          <code>
            import abcdefghijklmnopqrstuvwxyz<br /><br />
            alphabet = abcdefghijklmnopqrstuvwxyz<br /><br />
            alphabet.abc()<br />
            abcdefghibjkmnopqrstuvwxyz.abc() #위의 코드와 같음
          </code>
          2. as 이용하기<br /><br />
          <code>
            import abcdefghijklmnopqrstuvwxyz as alphabet<br /><br />
            alphabet.abc()
          </code>
        </p>
      </div>
    </div>

    <Navigation bef="etcfunction" aft="modulemaster" />
  </div>
</template>

<script>
  export default {
    page: 'ModulePage',
  };
</script>
