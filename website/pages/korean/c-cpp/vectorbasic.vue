<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>vector이란?</h2>
        <p>
          vector은 정렬과 매우 비슷한 데이터 형태입니다.<br /><br />

          하지만 정렬과 다르게 유연하고 항상 길이가 정해져 있지 않습니다.<br /><br />

          정렬은 처음에 길이를 지정하면 다시는 못하지만 vector은 원하는 만큼
          아이템을 넣고 뺄 수 있습니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="Vector" num="4" />

    <div>
      <div class="mx-auto my-auto">
        <h2>vector 사용하기</h2>

        vector을 사용하기 위해서 vector 라이브러리에서 먼저 가지고
        오겠습니다.<br /><br />

        <code> #include &lt;vector> </code>

        vector은 vector&lt;데이터형태> 모양이고 데이터 형태를 &lt;> 안에 넣으면
        됩니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          #include &lt;vector><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int> mainVec = {0, 1, 2};<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://image-loader-coding-insight.web.app/c-cpp-kr/img/vectorcode.png"
          max-width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>vector에 아이템 더하기</h2>
        vector 끝에는 push_back()이라는 메서드를 이용해서 끝에 새로운 값을 더할
        수 있습니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          #include &lt;vector><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int> mainVec;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.push_back(123);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; mainVec[0];<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        또는 insert()를 사용해서 어떤 한 인덱스 안에 넣는 방법도 있습니다.
        <br /><br />

        insert() 첫 번째 안에는 mainVec.begin()을 0이라고 하고 원하는 인덱스
        값을 더하면 됩니다.<br /><br />

        두 번째에는 더하고 싶은 값을 넣으면 됩니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          #include &lt;vector><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int> mainVec = {1, 2, 3};<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.insert(mainVec.begin(), 0) #첫 번째<br />
          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.insert(mainVec.begin() + 1, 2) #두
          번째<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <iframe
        src="https://www.jdoodle.com/embed/v0/4apz"
        width="100%"
        height="300"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>vector 아이템 제거하기</h2>

        가장 뒤에 있는 vector 아이템은 pop_back() 메서드를 사용해서 제거할 수
        있습니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          #include &lt;vector><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int> mainVec = {0, 1, 2, 3, 4,
          5};<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.pop_back(); //5 없어졌다.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.pop_back(); //4 없어졌다.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.pop_back(); //3 없어졌다.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.pop_back(); //2 없어졌다.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.pop_back(); //1 없어졌다.<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; mainVec[0];<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        또는 erase()를 사용해서 어떤 한 인덱스에 있는 값을 제거할 수
        있습니다.<br /><br />

        <code>
          #include &lt;iostream><br />
          #include &lt;vector><br />
          using namespace std;<br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int> mainVec = {1, 2, 3};<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;mainVec.erase(mainVec.begin()); //첫 번째<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
        <iframe
          src="https://www.jdoodle.com/embed/v0/4apA"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="string-cpp" aft="vectormethod" />
  </div>
</template>
