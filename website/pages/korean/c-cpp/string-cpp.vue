<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>C++ 문자열</h2>
        C 언어에서 문자는 char의 정렬로 변수 안에 저장했지만 C++에서는
        string이라는 데이터 형태가 따로 있습니다.<br /><br />

        iostream을 가지고 오면 저절로 string이라는 데이터 형태를 사용할 수
        있습니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          using namespace std;
        </code>
      </div>
    </div>

    <Header type="C/C++" title="문자열 (C++)" num="3" />

    <div>
      <div>
        <h2>C++ string</h2>

        string이라는 데이터 형태를 사용해보겠습니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;string a = "Testing...";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        참고로 C++에서는 문자열은 "", 문자는 ''를 사용해야 합니다.<br /><br />
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/491S"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자열 연쇄하기</h2>

        문자열의 연쇄는 + 또는 &lt;&lt;를 사용하면 됩니다.<br /><br />

        +는 문자열을 합칩니다.<br /><br />

        &lt;&lt;는 cout에서 출력할 때 옆에 출력하겠다는 뜻입니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;string a = "C" + " and ";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a &lt;&lt; "C++";<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        append() 메서드를 사용해도 됩니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;string a = "A";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;string b = "B";<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a.append(b);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        참고로 append() 메서드가 훨씬 더 빠릅니다. + 대신 append()를
        사용하세요.<br /><br />
      </div>
      <div>
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
        <h2>문자열과 숫자</h2>
        <p>
          문자열과 숫자를 + 또는 append()를 사용하면 ASCII 값이 대신
          출력됩니다.<br /><br />

          이 상황에서는 + 대신 &lt;&lt; 를 사용하세요.<br /><br />

          다른 데이터 형태는 &lt;&lt;를 사이에 두면 C++은 각 데이터 형태에 맞게
          출력합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>length()와 size()</h2>

        length()와 size()는 문자열의 길이를 돌려주는 메서드입니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;string a = "Testing";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a.length();<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        length()와 size()는 같습니다.<br /><br />
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4aoo"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="io-cpp" aft="vectorbasic" />
  </div>
</template>
