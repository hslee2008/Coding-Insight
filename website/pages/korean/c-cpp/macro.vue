<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>매크로란?</h2>
        <p>
          매크로란 변수 또는 함수와 비슷하게 이름이 있는 일부의 코드
          조각입니다.<br /><br />

          변수 또는 함수와 조금 다릅니다.<br /><br />

          변수는 쉽게 프로그램 안에 저장되어 있는 정보이지만 매크로는 C
          컴파일러가 매크로가 선언이 되면 그 이름을 지정된 값으로 바꿉니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="매크로" num="39" />

    <div>
      <div>
        <h2>매크로 만들기 - #define</h2>
        <p>
          #define을 사용하면 매크로를 만들 수 있습니다.<br /><br />

          매크로는 파일 안의 이름 대신 사용할 값을 지정합니다.<br /><br />

          <kbd>#define &lt;VAR_NAME> &lt;VAR_VALUE</kbd> 형태를 가지고
          있습니다.<br /><br />

          참고로 매크로의 이름은 다 대문자로 하는 것이 좋습니다.<br /><br />

          그 이유는 나중에 어떤 변수의 포인터를 사용하고 싶다면 매크로와 변수를
          햇갈 릴 수 있습니다.<br /><br />

          또한, 매크로의 값은 바꿀 수 없습니다.<br /><br />

          <code>
            #define MFM 200<br /><br />

            int main() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", MFM);<br />
            }
          </code>

          변수만이 아니라 함수처럼도 사용이 가능합니다.<br /><br />

          <code>
            #define MFM (a) (a * 4)<br /><br />

            int main() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%d", MFM(a));<br />
            }
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47BQ"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>매크로 삭제 - #undef</h2>
        <p>
          <kbd>#undef &lt;이름</kbd> 형태로 매크로 변수를 삭제합니다.<br /><br />

          <code>
            #define MFM 200<br /><br />

            printf("%d", MFM);<br /><br />

            #undef MFM
          </code>

          매크로의 값을 바꿀 수는 없지만 삭제한 후 다시 만들 수는 있습니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47BR"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>#ifdef와 #else와 #endif</h2>
        <p>
          #ifdef는 만일 매크로의 값이 지정되어있다면 실행할 코드를 넣을 수 있는
          if문을 만듭니다.<br /><br />

          그리고 항상 #endif를 넣습니다.<br /><br />

          #else도 사용할 수 있습니다.<br /><br />

          <code>
            #define NOINPUT<br /><br />

            #ifdef NOINPUT<br />
            printf("NOINPUT");<br />
            #else<br />
            printf("NONOINPUT");<br />
            #endif
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47BT"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="assert" aft="otherif" />
  </div>
</template>
