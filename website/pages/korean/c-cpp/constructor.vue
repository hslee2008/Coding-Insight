<template>
  <div>
    <br />

    <div>
      <div>
        <h1>Constructor</h1>
        <p>
          C++ 클래스에서 constructor는 클래스가 선언이 되자 마자 바로 실행할
          코드를 담은 함수를 말합니다.<br /><br />

          <code>
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

    <QuadSpace />

    <Header title="Constructor" num="13" />

    <QuadSpace />

    <div>
      <div>
        <h1>Constructor - 매개변수</h1>
        <p>
          constructor 안에 매개변수를 만들면 '.'를 사용해서 정보를 넣지 않고도
          정보를 입력할 수 있습니다.<br /><br />

          <code>
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
      <iframe
        src="https://www.jdoodle.com/embed/v0/4n6k"
        width="100%"
        height="350"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>Constructor - 박에서 선언</h1>
        <p>
          Constructor를 박에서 선언해보겠습니다.<br /><br />

          <code>
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
      <iframe
        width="100%"
        height="350"
        src="https://www.jdoodle.com/embed/v0/4n6m"
      />
    </div>

    <QuadSpace />

    <NaviBtn flink="classmethod" slink="accessspecifier" />

    <QuadSpace />
  </div>
</template>
