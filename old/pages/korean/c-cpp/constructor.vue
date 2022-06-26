<template>
  <div>
    <div>
      <div>
        <h2>Constructor</h2>
        <p>
          C++ 클래스에서 constructor는 클래스가 선언이 되자 마자 바로 실행할
          코드를 담은 함수를 말합니다.<br /><br />

          <code v-highlight class="cpp">
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;person() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Testin123";<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br />
            };
          </code>
        </p>
      </div>
    </div>

    <Header type="C/C++" title="Constructor" num="13" />

    <div>
      <div>
        <h2>Constructor - 매개변수</h2>
        <p>
          constructor 안에 매개변수를 만들면 '.'를 사용해서 정보를 넣지 않고도
          정보를 입력할 수 있습니다.<br /><br />

          <code v-highlight class="cpp">
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;person(int page) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age = page;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br />
            };<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;person Hyunseung(12);<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; Hyunseung.age;<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe title="JDoodle C and CPP" :src="`${jdoodle}4n6k`" height="350" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Constructor - 밖에서 선언</h2>
        <p>
          Constructor를 밖에서 선언해보겠습니다.<br /><br />

          <code v-highlight class="cpp">
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;person(int page);<br />
            };<br /><br />

            person::person(int page) {<br />
            &nbsp;&nbsp;age = page;<br />
            };<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;person Hyunseung(12);<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; Hyunseung.age;<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe height="350" :src="`${jdoodle}4n6m`" />
    </div>

    <Navigation bef="classmethod" aft="accessspecifier" />
  </div>
</template>
