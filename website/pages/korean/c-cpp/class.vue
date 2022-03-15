<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>클래스란?</h2>
        <p>
          어떤 기본 틀을 가지고 있는 독서 기록 예시 페이지가 있다고 해봅시다.<br /><br />

          만일 새로운 독서 기록장을 만들기 위해서 원래의 틀을 복사해서 새로운
          파일에 내용을 작성합니다.<br /><br />

          이때, 매일 새로운 독서 기록장을 만들기 위해서 원본 파일을 복사하고
          복사본에 정보를 담습니다.<br /><br />

          이 예시에서 기본틀을 '클래스'라고 합니다.<br /><br />

          클래스란 어떤 데이터를 담을 수 있는 매우 편리한 틀입니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="클래스" num="11" />

    <div>
      <div>
        <h2>클래스 만들기</h2>
        <p>
          <code> class person { public: int age; string name; };</code>

          1. 먼저, class를 사용해서 클래스를 만듭니다. 클래스의 이름은
          person입니다.<br />
          2. 다음, public 키워드를 사용해서 기본 클래스를 복사하고 정보를 담을
          변수들을 만듭니다.<br />
          3. 마지막으로, ';'를 끝에 넣습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>클래스 사용하기</h2>
        <p>클래스를 사용해 보겠습니다.</p>

        <code>
          int main()<br />
          {<br />
          &nbsp;&nbsp;person Hyunseung;<br /><br />

          &nbsp;&nbsp;Hyunseung.age = 12;<br />
          &nbsp;&nbsp;Hyunseung.name = "Hyunseung";<br /><br />

          &nbsp;&nbsp;cout &lt;&lt; Hyunseung.name &lt;&lt; " is " &lt;&lt;
          Hyunseung.age &lt;&lt; " years old";<br /><br />

          &nbsp;&nbsp;return 0;<br />
          }</code
        >
      </div>
      <iframe
        width="100%"
        height="300"
        src="https://www.jdoodle.com/embed/v0/4mS4"
      />
    </div>

    <QuadSpace />

    <Navigation bef="endl" aft="classmethod" />
  </div>
</template>
