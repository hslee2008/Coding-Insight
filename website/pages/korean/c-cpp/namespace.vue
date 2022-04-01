<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>namespace란?</h2>
        <p>
          namespace는 space의 이름입니다.<br /><br />

          namespace 안에 나만의 코드의 모음을 넣을 수 있습니다.<br /><br />

          use namespace std;도 std namespace를 사용하겠다는 뜻입니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="NAMESPACE" num="9" />

    <div>
      <div>
        <h2>나만의 namespace</h2>
        <p>
          나만의 namespace를 만들기도 가능합니다.<br /><br />

          `namespace 이름 {}` 형태로 선언을 하고 {} 안에 함수, 클래스 등 넣으면
          됩니다.<br /><br />

          참고로 namespace 안에 있는 함수를 사용하기 위해서는 이름::을 함수 이름
          전에 붙어야 합니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std; <br /><br />

            namespace functions {<br />
            &nbsp;&nbsp;void func() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Running inside functions
            namespace!!!";<br />
            &nbsp;&nbsp;}<br />
            }<br /><br />

            int main() { <br />
            &nbsp;&nbsp;functions::func();<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe :src="`${jdoodle}4mRF`" width="100%" height="400" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>using namespace 이름</h2>
        <p>
          using namespace 이름을 넣으면 그 다음 나오는 모든 코드는 namespace가
          그 namespace일 것입니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            namespace functions {<br />
            &nbsp;&nbsp;void func() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Running inside functions
            namespace!!!";<br />
            &nbsp;&nbsp;}<br />
            } <br /><br />

            using namespace functions;<br /><br />

            int main() {<br />
            &nbsp;&nbsp;func();<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="errorhandling" aft="endl" />
  </div>
</template>
