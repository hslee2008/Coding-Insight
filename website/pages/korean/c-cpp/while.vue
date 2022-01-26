<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>while 반복문이란?</h1>
        <p>
          while 반복문은 for 반복문과 매우 비슷합니다.<br /><br />

          하지만 for 반복문은 처음에 시작 값, 멈출 값, 그리고 늘어나는 값을
          선언합니다.<br /><br />

          하지만 while 반복문 언제 멈출지 모를 때 사용합니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header title="while문" num="19" />

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>while문의 장점 & 단점</h1>
        <p>
          거의 모든 부분에서 for 반복문은 while 반복문보다 더 문제를 푸는데
          도움이 많이 됩니다.<br /><br />

          for 반복문의 장점: 딱 값들의 경계가 정해져 있다.<br /><br />

          while 반복문의 장점: 값들의 경계는 못 정하지만 어떤 조건을 만족하면
          작업을 마무리할 수 있다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="https://static.javatpoint.com/core/images/java-while-loop.png"
          width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>while 기본 형태</h1>
        <p>
          1. 먼저 변수를 만듭니다.<br /><br />
          2. 변수의 값은 원할 때 정해도 됩니다. 밖에서도 가능하고 어떤 특별한
          조건에서도 선언이 가능합니다. 원할 때 바꿀 수 있습니다.<br /><br />
          3. while (조건) 명령; 의 형태로 조건에는 변수가 멈출 떄를 입력합니다.
          (에: a &lt; 30)<br /><br />
          4. while 문 안에 코드를 넣습니다.<br /><br />
          5. 기억하세요! 변수의 값을 바꾸는 명령을 넣어야 합니다. 원하는 곳에
          넣을 수 있지만 꼭 while 문 안에 넣으세요. 그렇지 않으면 무한으로
          반복이 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>while 반복문 예시</h1>
        <p>
          위의 예시에서는 a가 f가 아니면 계속 입력과 출력을 합니다.<br /><br />

          이 기능은 for 반복문에서는 if를 사용해야 되서 조금 더 복잡합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char a;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;while (a != "f") {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &a);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("You said '%c'!!!",
            a);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3YLX"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="for" slink="doublefor" />

    <QuadSpace />
  </div>
</template>
