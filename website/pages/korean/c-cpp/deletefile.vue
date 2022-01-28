<template>
  <div>
    <br />

    <div>
      <div>
        <h1>파일 삭제하기</h1>
        <p>
          파일을 완벽하게 삭제하는 함수는 stdio.h 라이브러리 안에 있습니다.<br /><br />

          <code> #include &lt;stdio.h> </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="파일 삭제" num="50" />

    <QuadSpace />

    <div>
      <div>
        <h1>파일 삭제하기</h1>
        <p>
          파일을 삭제하는 함수의 이름은 remove()입니다.<br /><br />

          remove() 함수 안에 파일의 주소를 넣으세요.<br /><br />

          만일 remove() 함수가 성공했다면 0이 되돌려지고 그렇지 않다면 1이
          되돌려질 것입니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (remove("test.txt") == 0) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("성공!");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;} else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("실패 :(!");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/48mx"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>중요 내용 정리하기</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">뜻</th>
              <th scope="col">예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">./</th>
              <td>지금 이 폴더 안에</td>
              <td><kbd>./testing.text</kbd></td>
            </tr>
            <tr>
              <th scope="row">..</th>
              <td>폴더의 폴더</td>
              <td><kbd>../a.exe</kbd></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="writefile" aft="cpp" />

    <QuadSpace />
  </div>
</template>
