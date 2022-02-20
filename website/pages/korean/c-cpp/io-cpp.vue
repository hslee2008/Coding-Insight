<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>C와 C++ 언어 입출력</h2>
        <p>
          C 언어에서 사용한 printf()와 scanf()는 cpp 파일에서도 사용할 수
          있습니다.<br /><br />

          하지만 stdio.h 라이브러리를 가지고 오지 않고 cstdio 파일을 가지고 오면
          사용할 수 있습니다.<br /><br />

          <code> #include &lt;cstdio> </code>

          C++ 입출력은 cstdio 라이브러리 대신 iostream이라는 라이브러리를 가지고
          오겠습니다.<br /><br />

          참고로 항상 include 한 뒤 using namespace std라는 코드를 넣으세요.<br /><br />

          이 코드를 사용하지 않으면 항상 모든 C++ 함수 앞에 std::라는 것을
          붙여야 하기 때문입니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/48Mv"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Header type="C/C++" title="출력 (C++)" num="2" />

    <QuadSpace />

    <div>
      <div>
        <h2>C++ 출력</h2>
        <p>
          C++에서 출력은 cout 이라는 키워드를 사용합니다.<br /><br />

          그리고 &lt;&lt; 를 붙이고 출력하고 싶은 변수 또는 데이터를
          넣으세요.<br /><br />

          <kbd>cout &lt;&lt; "Hello, World!" ;</kbd> <br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Hello, World!" ;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>

          참고로 &lt;&lt; 는 출력하고 싶은 데이터를 서로 합하는 키워드이기도
          합니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Hello, World!" &lt;&lt;
            123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/48MH"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>C++ 입력</h2>
        <p>
          C++ 입력은 cin 키워드를 사용하고 >>를 입력하고 변수의 이름을
          넣습니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cin >> a;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/48MS"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>endl</h2>
        <p>
          C++에서 새로운 줄을 출력할 때 endl이라는 변수를 사용할 수 있습니다.<br /><br />

          <code> cout &lt;&lt; "Hello, World!" &lt;&lt; endl; </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4aoi"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="cpp" aft="string-cpp" />

    <QuadSpace />
  </div>
</template>
