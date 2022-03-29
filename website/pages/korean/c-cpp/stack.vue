<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>stack 사용하기</h2>
        <p>
          stack은 <kbd>stack&lt;데이터형태</kbd> 형태로 선언하면 됩니다.<br /><br />

          데이터를 추가하기 위해서 push()를 사용하세요.<br /><br />

          <code>
            #include &lt;iostream><br />
            #include &lt;stack><br />
            using namespace std;<br /><br />
            int main()<br />
            {<br />
            &nbsp;&nbsp;stack&lt;int> s;<br /><br />

            &nbsp;&nbsp;s.push(3);<br />
            &nbsp;&nbsp;s.push(4);<br />
            &nbsp;&nbsp;s.push(5);<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4iuF"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>pop()와 push()</h2>
        <p>
          pop()를 사용하면 stack의 마지막 아이템을 제거합니다.<br /><br />

          push()를 사용하면 뒤에 새로운 아이템을 더합니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            #include &lt;stack><br />
            using namespace std;<br /><br />
            int main()<br />
            {<br />
            &nbsp;&nbsp;stack&lt;int> s;<br /><br />
            &nbsp;&nbsp;s.push(3);<br />
            &nbsp;&nbsp;s.pop();<br /><br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4iuG"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>size()</h2>
        <p>
          size()를 사용하면 정수로 stack 안에 있는 아이템의 개수를 알 수
          있습니다.<br /><br />
          <code>
            #include &lt;iostream><br />
            #include &lt;stack><br />
            using namespace std;<br /><br />
            int main()<br />
            {<br />
            &nbsp;&nbsp;stack&lt;int> s;<br /><br />
            &nbsp;&nbsp;s.push(3);<br />
            &nbsp;&nbsp;s.pop();<br /><br />
            &nbsp;&nbsp;cout &lt;&lt; s.size();<br /><br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4iuH"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>top()</h2>
        <p>
          top()을 사용하면 stack에서 가장 위에 있는 아이템을 찾을 수
          있습니다.<br /><br />
          <code>
            #include &lt;iostream><br />
            #include &lt;stack><br />
            using namespace std;<br /><br />
            int main()<br />
            {<br />
            &nbsp;&nbsp;stack&lt;int> s;<br /><br />
            &nbsp;&nbsp;s.push(3);<br /><br />
            &nbsp;&nbsp;cout &lt;&lt; s.top();<br />
            &nbsp;&nbsp;s.pop();<br />
            &nbsp;&nbsp;cout &lt;&lt; s.top();<br /><br />
            &nbsp;&nbsp;return 0;<br />
            }`
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/4iuI"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="vectormethod" aft="allheader" />
  </div>
</template>
