<template>
  <div>
    <div>
      <div>
        <h2>클래스 안의 함수</h2>
        <p>
          클래스 안의 함수를 메서드라고 합니다.<br /><br />

          메서드는 클래스 안에서 선언할 수 있고 밖에서도 가능합니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="클래스 메서드" num="12" />

    <div>
      <div>
        <h2>메서드 안에서 선언</h2>
        <p>
          메서드는 public: 키워드 안에 함수를 넣으면 그것이 메서드가 됩니다.<br /><br />

          <code>
            class chess {<br />
            &nbsp;&nbsp;public: void movePiece() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Moved This Piece";<br />
            &nbsp;&nbsp;}<br />
            }
          </code>

          메서드를 사용해 보겠습니다.<br /><br />

          <code>
            class chess {<br />
            &nbsp;&nbsp;public: void movePiece() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Moved This Piece";<br />
            &nbsp;&nbsp;}<br />
            }<br /><br />

            int main() {<br />
            &nbsp;&nbsp;chess ROOK;<br />
            &nbsp;&nbsp;ROOK.movePiece();<br />
            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe :src="`${jdoodle}4mSa`" height="300" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>메서드 밖에서 선언</h2>
        <p>
          클래스를 밖에서 선언해보겠습니다.

          <code>
            class chess {<br />
            &nbsp;&nbsp;public:<br />
            void movePiece();<br />
            }<br /><br />

            void chess::movePiece() {<br />
            cout &lt;&lt; "Moved This Piece";<br />
            }<br /><br />

            int main() {<br />
            chess ROOK;<br /><br />

            ROOK.movePiece();<br /><br />

            return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe height="300" :src="`${jdoodle}4mS4`" />
    </div>

    <Navigation bef="class" aft="constructor" />
  </div>
</template>
