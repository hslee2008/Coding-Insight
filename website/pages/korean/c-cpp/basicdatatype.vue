<template>
  <div>
    <br /><br />

    <div>
      <h2>데이터 형태란?</h2>
      <p>
        데이터 형태란 정보의 종류를 뜻합니다.<br /><br />

        상자에 음식, 책, 유리 등 다양한 종류를 담어야 합니다. 하지만 매우 얇은
        박스에 유리를 담으면 안되는 것같이 상자의 종류도 매우 중요합니다.<br /><br />

        위의 예시에서 상자의 종류가 데이터 형태입니다.
      </p>
    </div>

    <Header type="C/C++" title="데이터 형태" num="7" />

    <div>
      <h2>int - 정수</h2>
      <p>
        int는 integer의 약자이고 정수를 뜻합니다. ..., -3, -2, -1, 0, 1, 2, 3,
        ...을 정수라고 합니다.<br /><br />

        정수는 '%d'를 사용하여 포멧하고 d는 digit의 약자입니다.<br /><br />

        하지만 integer 변수는 숫자 -2147483648에서부터 2147483648까지만 받을 수
        있습니다. 그래서 더 큰 숫자는 다른 데이터 형태를 사용해야 합니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>float - 소수</h2>
      <p>
        float은 소수를 뜻합니다. 소수점 뒤에 0이 아닌 수가 있습니다. 예를 들어
        3.14는 .뒤에 14가 있어서 소수입니다.<br /><br />

        소수는 '%f'를 사용하고 f는 float의 약자입니다.<br /><br />

        정수와 같이 C에서 소수는 -340000000000000000000000000000000000000에서
        340000000000000000000000000000000000000입니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>bool - 참 또는 거짓</h2>
        <p>
          bool은 boolean의 약자로 참 또는 거짓의 값만 가지고 있는 데이터
          형태입니다.<br /><br />

          true 또는 false값만 저장이 가능합니다.<br /><br />

          bool은 따로 %가 없고 %d를 사용하여 출력이 가능합니다. false이면 0
          true이면 1입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <h2>double - 더 긴 소수</h2>
      <p>
        double은 2배가 아닙니다!<br /><br />

        C 언어에서 double은 float와 비슷하지만 조금 더 큰 소수를 뜻합니다.<br /><br />

        double은 -1700...(0이 307개)와 1700...(0이 307개) 사이에 있는 수를 입력
        받습니다.<br /><br />

        double은 '%lf'를 사용합니다.<br /><br />

        절대로 double보다 더 큰 소수는 필요하지 않을 것 같습니다.<br /><br />

        17000...(0이 407개)
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>char - 문자</h2>
      <p>
        char는 character의 약자로 문자를 뜻합니다.<br /><br />

        문자는 알파벳 하나입니다.<br /><br />

        문자는 항상 알파벳 하나이어야 합니다.<br /><br />

        그리고 "대신 '를 사용해야 합니다.<br /><br />

        char은 %c를 사용합니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <div class="ma-auto">
        <h2>예시</h2>
        <p>
          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;int a = 123;<br />
            &nbsp;float b = 123.123;<br />
            &nbsp;double c = 123.123123123123123213;<br />
            &nbsp;char d = 'd';<br />
            &nbsp;bool e = true;<br /><br />

            &nbsp;printf("%d %f %lf %c %d", a, b, c, d, e);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZp"
          width="600px"
          height="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>팁!</h2>
        <p>
          float이나 double을 x번째 자리까지 자르는 방법 중 하나는 '%f'를 사용할
          때 % 다음에 .x를 붙이면 됩니다.<br /><br />

          .x 전에 다른 숫자 y를 넣으면 그 숫자가 y만큼 길이를 가질 때 까지 앞에
          ' '를 넣습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;float a = 3.13456789<br /><br />

            &nbsp;printf("%10.6f", a);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VZs"
          width="100%"
          height="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="input" aft="otherdatatype" />
  </div>
</template>
