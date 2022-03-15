<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>데이터 형태 보너스 - short, long</h2>
        <p>
          short를 int 앞에 붙이면 int의 가능한 값은 줄어들고 long을 붙이면
          많아집니다.<br /><br />

          short int는 -32768부터 32767까지 가능하고 %hd를 사용합니다.<br /><br />

          long int는 -2,147,483,648부터 2,147,483,647까지 이고 %ld를
          사용합니다.<br /><br />

          long을 두 번 붙인 long long int는 -9223372040000000000부터
          9223372040000000000까지 가능하고 %lld를 사용합니다.<br /><br />

          아쉽게도 long long long int는 존재하지 않습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;long long int a = 123456789;<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>데이터 형태 보너스 - unsigned, signed</h2>
        <p>
          unsigned는 기호가 붙지 않은 수를 뜻합니다. unsinged를 기본 데이터 형태
          붙이면 -값은 불가능하지만 +값은 더 많아집니다.<br /><br />

          unsigned short int는 0부터 65535만 가능하고 %hu를 사용합니다.<br /><br />

          0부터 4294967295까지 unsigned int라고 '%u'를 사용합니다.<br /><br />

          unsigned long int와 unsigned long long int는 각 0부터 4294967295,
          0부터 18446744073709551615까지 '%lu'와 '%llu'를 사용합니다.<br /><br />

          signed char은 조금 더 긴 char를 뜻합니다. 문자 하나는 0부터 255까지의
          값을 가질 수 있지만 signed char는 -128부터 127까지 가능합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;short int a = 123;<br />
            &nbsp;long int b = 123;<br />
            &nbsp;long long int c = 123123;<br />
            &nbsp;unsigned long long int d = 123123123;<br />
            &nbsp;unsigned short in e = 123;<br />
            &nbsp;signed char f = 'a';<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="basicdatatype" aft="typecasting" />
  </div>
</template>
