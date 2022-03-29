<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>조건문 다른 방법으로 만들기</h2>
        <p>
          조건문을 if...else if...else 형태와는 조금 다른 기능을 C 언어에서는
          사용할 수 있습니다.<br /><br />

          if, else if, 그리고 else 앞에 #를 붙이면 됩니다.<br /><br />

          쉽게 설명하자면, #이 없는 조건문은 조건을 따라 실행하고 #가 있다면
          쉽게 미리 어떤 코드를 실행할지 정합니다.<br /><br />

          <code>
            #if 1 == 1<br />
            printf("1");<br />
            #else<br />
            printf("not 1");<br />
            #endif
          </code>

          #을 사용하지 않으면 1 == 1일때 printf("1")을 실행하고 아니면
          printf("not 1")을 실행합니다.<br /><br />

          #를 사용하면 미리 C 언어가 1 == 1이라는 것을 알고 printf("1");만
          사용합니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="상항 연산자" num="40" />

    <div>
      <div>
        <h2>#if ... #else</h2>
        <p>
          #if하고 조건을 집어넣으면 만일 그 조건이 옳다면 안에 있는 코드를
          실행합니다.<br /><br />

          #else가 존재하면 #else와 #if까지의 코드는 if안에 있고 그렇지 않다면
          #if부터 #endif까지가 if의 코드입니다.<br /><br />

          <code>
            #if (1 == 1)<br />
            printf("1 is equal to 1");<br />
            #else<br />
            printf("1 is not equal to 1");<br />
            #endif
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47BV"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="macro" aft="error" />
  </div>
</template>
