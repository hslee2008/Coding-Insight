<template>
  <div>
    <QuadSpace />

    <Header type="C/C++" title="endl" num="10" />

    <QuadSpace />

    <div>
      <div>
        <h2>나만의 namespace</h2>
        <p>
          endl 함수를 실행하면 새로운 줄이 더해집니다.<br /><br />

          C 언어 시간에 "\n"에 대해서 배웠습니다.<br /><br />

          endl은 "\n"를 더합니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;cout &lt;&lt; "Testing\n";<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; "123" &lt;&lt; endl;<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe
        src="https://www.jdoodle.com/embed/v0/4mRR"
        width="100%"
        height="300"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="namespace" aft="class" />

    <QuadSpace />
  </div>
</template>
