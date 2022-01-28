<template>
  <div>
    <br />

    <Header title="VECTOR 메서드" num="5" />

    <QuadSpace />

    <div>
      <div>
        <h1>마지막과 첫 번째 아이템</h1>
        <p>
          마지막 아이템은 back() 메서드를 사용해서 알 수 있습니다.<br /><br />

          첫 번째 아이템은 front() 메서드를 사용해서 출력할 수 있습니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            #include &lt;vector><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;vector&lt;int> a = {1, 2, 3};<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; a.back();<br />
            &nbsp;&nbsp;cout &lt;&lt; a.front();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4ePU"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>empty()</h1>
        <p>
          empty()를 사용하면 vector가 비어있는지 확인할 수 있습니다.<br /><br />

          0이 출력되면 아이템이 들어있고(False) 1이면 아무것도
          없습니다(True).<br /><br />

          <code>
            #include &lt;iostream><br />
            #include &lt;vector><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;vector&lt;int> a = {1, 2, 3};<br />
            &nbsp;&nbsp;cout &lt;&lt; a.empty();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4ePV"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>clear()</h1>
        <p>
          clear()을 사용하면 vector을 초기화할 수 있습니다.<br /><br />

          초기화란 그 변수의 모든 메모리에 저장된 데이터를 삭제한다는
          뜻입니다.<br /><br />

          그래서 clear()을 실행하면 vector안의 모든 데이터들이 버려집니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            #include &lt;vector><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;vector&lt;int> a = {1, 2, 3};<br />
            &nbsp;&nbsp;a.clear();<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; a.empty();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4ePX"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="vectorbasic" aft="stack" />

    <QuadSpace />
  </div>
</template>
