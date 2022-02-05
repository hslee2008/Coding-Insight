<template>
  <div>
    <br />

    <div>
      <div>
        <h2>ctype.h 라이브러리</h2>
        <p>
          ctype 라이브러리는 어떤 문자가 숫자로만, 문자로만 등 확인하는 함수를
          가지고 있는 라이브러리 이름입니다.<br /><br />

          쉽게 설명하지면, ctype 라이브러리를 사용하여 C 언어에 있는 다양한
          데이터 형태를 다룰 수 있습니다.<br /><br />

          <code> #include &lt;ctype.h> </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="ctype.h" num="43" />

    <QuadSpace />

    <div>
      <div>
        <h2>islower()와 tolower()</h2>
        <p>
          islower()이라는 함수는 문자를 입력하면 영문자가 소문자인지 확인하는
          함수입니다.<br /><br />

          <code>
            if (islower('a')) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("lower");<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("not lower");<br />
            }
          </code>

          tolower()은 문자를 소문자로 바꾸는 함수입니다.<br /><br />

          <code>
            if (islower('a')) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("lower");<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("not lower");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%c", tolower('a'));<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47C5"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>isupper()와 toupper()</h2>
        <p>
          isupper()이라는 함수는 문자를 입력하면 영문자가 대문자인지 확인하는
          함수입니다.<br /><br />

          <code>
            if (isupper('A')) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("upper");<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("not upper");<br />
            }
          </code>

          toupper()은 문자를 대문자로 바꾸는 함수입니다.<br /><br />

          <code>
            if (islower('A')) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("upper");<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("not upper");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("%c", toupper('A'));<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47C6"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>프린트를 할 수 있는지</h2>
        <p>
          ctype.h의 isprint() 함수를 사용하면 그 문자가 터미널에 출력이 될 수
          있는지 확인할 수 있습니다.<br /><br />

          <code>
            if (isprint('a')) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("printable!");<br />
            } else {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("not printable :(");<br />
            }
          </code>
          <iframe
            src="https://www.jdoodle.com/embed/v0/47C8"
            width="100%"
            height="300"
          />
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>중요 내용 정리하기</h2>
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
              <th scope="row">isalnum()</th>
              <td>문자 또는 숫자인지</td>
              <td><kbd>isalnum(3)</kbd></td>
            </tr>
            <tr>
              <th scope="row">isalpha()</th>
              <td>문자인지</td>
              <td><kbd>isalnum("asdf")</kbd></td>
            </tr>
            <tr>
              <th scope="row">isdigit()</th>
              <td>숫자인지</td>
              <td><kbd>isalnum("hi")</kbd></td>
            </tr>
            <tr>
              <th scope="row">isspace()</th>
              <td>스페이스로만 이루어져 있는지</td>
              <td><kbd>isalnum("hi world")</kbd></td>
            </tr>
            <tr>
              <th scope="row">isblank()</th>
              <td>스페이스 또는 탭</td>
              <td><kbd>isblank(" d")</kbd></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="random" aft="stopprogram" />

    <QuadSpace />
  </div>
</template>
