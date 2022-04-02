<template>
  <div>
    <Header type="C/C++" title="기본 문법" num="13" />

    <div>
      <div>
        <h2>main() 함수</h2>
        <p>
          1. C 언어에서는 main() {} 안에 모든 코드를 넣습니다.<br /><br />
          2. main() 함수는 항상 0을 return해야 합니다.<br /><br />
          3. main() 앞에 int를 붙여서 0을 돌려준다는 것을 알려주어야 합니다.<br /><br />

          더 자세한 내용은 함수에서 배우겠습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <h2>;(세미콜론)</h2>
      <p>
        ;는 세미콜론이라고 하고 항상 C 언어에서 코드 다음에 넣어야 하는
        문자입니다.<br /><br />

        세미콜론은 C 언어에게 어디에서 코드가 끝나는지 알려줍니다.<br /><br />

        ; 기준으로 한 줄에 모든 코드를 넣어도 C 언어는 코드를 빠르게 잘
        실행합니다.<br /><br />

        하지만, 조건문 & 함수 선언 등에서 사용하는 {}에 ;를 붙일 필요는
        없습니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>#include</h2>
        <p>
          #include는 어떤 특별한 기능을 추가하겠다고 C 언어에게 알려줍니다.<br /><br />

          &lt;> 또는 "" 사이에 파일 이름을 넣습니다.
        </p>
      </div>
      <div class="ma-auto">
        <code> #include &lt;stdio.h> </code>
      </div>
    </div>

    <Navigation bef="comment" aft="escapecharacter" />
  </div>
</template>
