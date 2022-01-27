<template>
  <div>
    <br />

    <div>
      <div>
        <h1>예외 처리란?</h1>
        <p>
          예외 처리는 만일 코드를 실행하는데 에러가 생기는 부분을 찾아내고 에러
          때문에 프로그램을 바로 종료하지 않고 계속 문제 없이 넘어가게
          만들어주는 작업을 예외 처리라고 합니다.<br /><br />

          만일 나누기 프로그램을 만들 때 분모를 0으로 입력하면 에러가
          생깁니다.<br /><br />

          이 상황에서 예외 처리를 하지 않는다면 에러가 나고 프로그램이 강재로
          중단됩니다.<br /><br />

          하지만 예외 처리를 한다면 사용자에게 분모가 0이 될 수 없다고 설명을
          하고 넘어갈 수 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="예외 처리" num="8" />

    <QuadSpace />

    <div>
      <div>
        <h1>예외 처리하는 방법</h1>
        <p>
          try{} 안에 문제가 될 수 있는 코드를 넣고 catch()를 사용해서 특정한
          에러가 일어났을 때 프로그램을 중단하지 않고 바로 catch() 안에 있는
          코드를 실행할 수 있습니다.<br /><br />

          <code>
            #include &lt;iostream><br />
            using namespace std;<br /><br />

            double division(int a, int b) {<br />
            &nbsp;&nbsp;if( b == 0 ) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;throw "Division by zero condition!";<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return (a/b);<br />
            }<br /><br />

            int main () {<br />
            &nbsp;&nbsp;int x = 50;<br />
            &nbsp;&nbsp;int y = 0;<br />
            &nbsp;&nbsp;double z = 0;<br /><br />

            &nbsp;&nbsp;try {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;z = division(x, y);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; z &lt;&lt; endl;<br />
            &nbsp;&nbsp;} catch (const char* msg) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cerr &lt;&lt; msg &lt;&lt; endl;<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          참고로 catch() 안에 있는 const char*은 에러 문자로 catch() 코드에서
          msg 변수를 사용할 수 있게 도와줍니다.
        </p>
      </div>
      <iframe
        src="https://www.jdoodle.com/embed/v0/4iPQ"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>단점</h1>
        <p>1. 프로그램이 느려질 수 있습니다.</p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>에러 만들기</h1>
        <p>
          나만의 에러는 throw라는 키워드를 사용해서 만들 수 있습니다.<br /><br />

          <code>
            double division(int a, int b) {<br />
            &nbsp;&nbsp;if( b == 0 ) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;throw "Division by zero condition!";<br />
            &nbsp;&nbsp;}<br />
            &nbsp;&nbsp;return (a/b);<br />
            }
          </code>

          위의 함수에서 만일 b에 0을 넣게되면 "Division by zero
          condition!"이라는 에러가 생길 것입니다.
        </p>
      </div>
      <iframe
        src="https://www.jdoodle.com/embed/v0/4iPQ"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <NaviBtn flink="allheader" slink="namespace" />

    <QuadSpace />
  </div>
</template>
