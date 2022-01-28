<template>
  <div>
    <br />

    <div>
      <div>
        <h1>Access Specifier</h1>
        <p>
          Access Specifier이란 그 안에 있는 정보들이 어디에서 사용 될 수 있는지
          정하는 키워드입니다.<br /><br />

          저저번 시간에 public이라는 access specifier을 배웠습니다.<br /><br />

          public 안에 있는 변수들은 박에서도 사용이 될 수 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="Access Specifier" num="14" />

    <QuadSpace />

    <div>
      <div>
        <h1>private</h1>
        <p>
          private 안에 있는 모든 변수들은 박에서 사용이 불가능합니다.<br /><br />

          <code>
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;private:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int cardNumber;<br />
            };<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;person Hyunseung;<br /><br />

            &nbsp;&nbsp;Hyunseung.age = 12;<br />
            &nbsp;&nbsp;Hyunseung.cardNumber = 123456789; //에러<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          위의 코드를 실행하면 다음 에러가 생깁니다.<br /><br />

          <code> error: cardNumber is private </code>

          변수를 바로 class 안에 선언해도 private입니다.<br /><br />

          <code>
            class person {<br />
            &nbsp;&nbsp;int cardNumber; //private<br />
            };
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>private 변수 사용하기</h1>
        <p>
          private 변수는 그 클래스 안에서만 사용할 수 있기 때문에 박에서는
          메서드를 사용해서만 가능합니다.<br /><br />

          <code>
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int getCardNumber() {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return cardNumber;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;};<br />
            &nbsp;&nbsp;private:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int cardNumber;<br />
            };<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;person Hyunseung;<br /><br />

            &nbsp;&nbsp;Hyunseung.age = 12;<br /><br />

            &nbsp;&nbsp;cout &lt;&lt; Hyunseung.getCardNumber();<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <iframe
        width="100%"
        height="400"
        src="https://www.jdoodle.com/embed/v0/4n6o"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="constructor" aft="inheritance" />

    <QuadSpace />
  </div>
</template>
