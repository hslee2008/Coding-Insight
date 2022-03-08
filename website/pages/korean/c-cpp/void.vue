<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>void 데이터 형태</h2>
        <p>
          void 데이터 형태란 아무것도 돌려주지 않는다를 뜻합니다.<br /><br />

          return을 사용해도 되지만 값을 돌려주면 안됩니다.<br /><br />

          또한, 포인터를 사용할 때 값의 종류를 모른다면 void 형식을 사용할 수
          있습니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="void" num="36" />

    <div>
      <h2>void main() {} 형태</h2>

      지금까지 int 데이터 형태를 이용해서 main 함수를 선언했습니다.<br /><br />

      그리고 항상 return 0; 코드를 마지막에 넣었습니다.<br /><br />

      <code>
        int main() {<br />
        &nbsp;&nbsp;return 0;<br />
        }
      </code>

      하지만 이제는 귀찮게 return 0;을 사용하지 않고 void 데이터 형태를 이용하면
      return하지 않아도 됩니다.<br /><br />

      <code>
        void main() {<br /><br />

        }
      </code>

      또는 void를 사용해 아무것도 돌려주지 않는 함수를 만들 수도 있습니다.<br /><br />

      <code>
        void testing() {<br />
        &nbsp;&nbsp;printf("Hello, World!");<br />
        }
      </code>
    </div>

    <QuadSpace />

    <NaviBtn bef="union" aft="include" />
  </div>
</template>
