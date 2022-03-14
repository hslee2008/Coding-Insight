<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>do - while이란?</h2>
        <p>
          do - while은 while과 매우 비슷합니다.<br /><br />

          하지만, do - while은 코드를 먼저 실행하고 조건을 확인합니다.<br /><br />

          그래서 만일 조건이 맞더라 하더라도 코드를 먼저 실행하고 종료합니다.<br /><br />

          반면에, while은 조건을 먼저 확인하고 코드를 실행합니다. 그래서 조건이
          맞다면 바로 끝냅니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://www.tutorialspoint.com/cprogramming/images/cpp_do_while_loop.jpg"
          max-width="300px"
        />
      </div>
    </div>

    <Header type="C/C++" title="Do - While문" num="21" />

    <div>
      <div>
        <h2>do - while 사용</h2>
        <p>
          do - while은 while과 비슷하고 while에서도 do - while과 비슷한 기능을
          넣을 수 있기 때문에 많이 사용되지는 않습니다.<br /><br />

          하지만 알면 좋고 특별한 상황에서 유용하게 사용할 수 있습니다.
        </p>

        <code>
          #include &lt;stdio.h><br /><br />

          ing main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;char a;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;do {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &a);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d", n);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;} while (a != "f");<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3YM3"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>주의 할 점</h2>
        <p>while 조건 다음에 꼭 ;를 붙이세요!</p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="doublefor" aft="inffor" />
  </div>
</template>
