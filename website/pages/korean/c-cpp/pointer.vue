<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>C 포인터</h2>
        <p>
          C 포인터(pointer)이란 변수의 '주소'를 뜻합니다.<br /><br />

          C 언어에서 변수는 두 가지 방법을 사용할 수 있습니다.<br /><br />

          하나는 변수의 이름을 사용하는 방법이고 두 번째는 포인터를 이용하는
          방법입니다.<br /><br />

          포인터를 이용하면 변수의 '주소'를 알 수 있고 변수의 이름과 비슷하게
          사용할 수 있습니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          width="250px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header title="포인터 기본" num="33" />

    <QuadSpace />

    <div>
      <div>
        <h2>포인터 - 변수의 주소 저장하기</h2>

        변수의 주소를 변수 안에 저장하겠습니다.<br /><br />

        1. 먼저, 정수 a를 선언합니다.<br />
        2. 다음, 포인터 adr를 선언합니다.<br />
        3. 포인터 adr 안에 a의 주소를 넣습니다.<br />
        4. adr의 값(a의 주소)를 출력합니다.<br /><br />

        <code>
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int a;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int* adr;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;adr = &a<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;printf("%p", adr);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        참고로 포인터를 선언할 때 자료형 옆에 *를 붙입니다.<br /><br />

        또한, 변수의 주소는 &를 사용하고 포인터를 출력할 때 %p를 사용합니다.<br /><br />
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47pe"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>포인터 - 포인터를 사용해서 변수 값 지정</h2>

        위의 예시에서 변수의 값 a를 포인터를 사용해서 바꾸겠습니다.<br /><br />

        선언된 포인터 adr을 사용해서 변수 a를 바꾸겠습니다.<br /><br />

        <code>
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int a;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int* adr = &a<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;*adr = 444;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;printf("%p", &adr);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", a);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        포인터 앞에 *를 입력하면 변수의 이름과 비슷하게 지정이 가능합니다.<br /><br />

        참고로 *는 자료형과 이름 사이에 어디든 놓는지 상관 없습니다.<br /><br />

        'int* adr' 'int *adr' 'int * adr'<br /><br />

        정리하자면, *를 사용할 때 변수 (adr)이 주소라면 변수로 바꾸고 변수라면
        주소로 바꿉니다.<br /><br />
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47pf"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <br /><br />

    <div>
      <div>
        <h2>중요 내용 정리하기</h2>
        <p>포인터란? 다른 변수의 주소를 저장한다</p>
        <kbd>int * adr = &a</kbd>
        <br /><br />
        <p>& 사용하기 ? 컴퓨터에 저장된 주소 찾기</p>
        <kbd>&a</kbd>
        <br /><br />
        <p>* 사용하기 ? 주소면 변수를 변수면 주소</p>
        <kbd>*a</kbd>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="struct" aft="usingpointer" />

    <QuadSpace />
  </div>
</template>
