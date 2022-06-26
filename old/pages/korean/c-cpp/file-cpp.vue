<template>
  <div>
    <div>
      <div>
        <h2>c++ 파일 다루기</h2>
        <p>
          fstream이라는 라이브러리를 사용하면 파일을 다룰 수 있습니다.<br /><br />

          fstream 라이브러리를 사용하려면 항상 &lt;iostream>과 &lt;fstream>
          헤더를 가지고 오세요.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;iostream><br />
            #include &lt;fstream>
          </code>

          fstream 라이브러리 안에 세 가지 헤더가 있습니다.<br /><br />

          1. ofstream은 파일을 만들고 씁니다.<br />
          2. ifstream은 파일을 읽습니다.<br />
          3. 마지막으로 fstream은 ofstream과 ifstream을 합했습니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="C++ 파일 다루기" num="16" />

    <div>
      <div>
        <h2>파일 쓰기</h2>
        <p>
          1. 먼저, ofstream file("filepath.ext"); 코드를 실행해서 파일을 엽니다.
          file 대신 나만의 변수 이름을 넣고 filepath.ext 대신 파일 주소를 집어
          넣습니다.<br />
          2. 다음, file &lt;&lt; "new text"; 코드를 실행해서 파일 안에 "new
          text"라는 문자열을 씁니다.<br />
          3. 마지막으로, file.close(); 코드를 실행해서 파일을 닫읍니다.<br /><br />

          참고로 파일을 닫아야지 메모리 사용량을 줄일 수 있습니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;iostream><br />
            #include &lt;fstream><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;ofstream file("myfile.txt");<br /><br />

            &nbsp;&nbsp;file &lt;&lt; "New content";<br /><br />

            &nbsp;&nbsp;file.close();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>파일 읽기</h2>
        <p>
          1. 먼저, 파일 내용을 담을 문자열 변수를 만듭니다.<br />
          2. 다음, ifstream file("filepath");를 사용해서 새로운 파일을
          엽니다.<br />
          3. while(getline(file, 문자열변수)) {} 코드를 사용해서 각 라인을
          읽습니다.<br />
          4. while 반복문 안에 문자열변수를 사용합니다.<br />
          5. 마지막으로, 파일을 닫습니다.<br /><br />

          <code v-highlight class="cpp">
            string a;<br />
            ifstream file("myfile.txt");<br /><br />

            while(getline(file, a)) {<br />
            &nbsp;&nbsp;cout &lt;&lt; a &lt;&lt; "\n";<br />
            }<br /><br />

            file.close();
          </code>
        </p>
      </div>
    </div>

    <Navigation bef="inheritance" aft="finished" />
  </div>
</template>
