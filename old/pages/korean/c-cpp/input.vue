<template>
  <div>
    <div
      style="
        display: flex;
        background-color: #67d8f8;
        border-radius: 5px;
        color: black;
      "
    >
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbPlGs1KONj35lMRnJTnaPaZ-awICYbPhSw&usqp=CAU"
        />
      </div>
      <div style="margin: auto; padding: 50px">
        <h2>입력이란?</h2>
        계속 컴퓨터만 일을 하면 재미가 없습니다.<br /><br />

        입력이란 사용자가 정보를 제공하면 그 정보를 변수 안에 저장하는 작업을
        뜻합니다.<br /><br />

        C 언어에서는 scanf()를 사용합니다.
      </div>
    </div>

    <Header type="C/C++" title="입력" num="7" />

    <div>
      <div>
        <h2>scanf()</h2>
        scanf()는 변수 안에 사용자가 입력하는 정보를 저장합니다.<br /><br />

        그래서 먼저 변수를 만들고 scanf()를 사용해야 됩니다.<br /><br />

        <h2>&</h2>

        scanf()는 변수를 먼저 가지고 와야합니다.<br /><br />

        그렇게 하기 위해서는 변수의 이름만 넣으면 안됩니다. 변수의 장소를 넣어야
        합니다.<br /><br />

        &는 나중에 더 자세히 배울 내용이지만 변수 이름 앞에 붙여 변수의 위치를
        scanf()에게 알려줍니다.<br /><br />

        <h2>포멧</h2>

        scanf()는 먼저 %를 사용하여 어떤 정보를 받을 것인지 알려주어야
        합니다.<br /><br />

        <code v-highlight class="cpp">
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;int a;<br />
          &nbsp;scanf("%d", &a);<br /><br />

          &nbsp;printf("%d", a);<br /><br />

          &nbsp;return 0;<br />
          }
        </code>
      </div>
      <div class="ma-auto">
        "Interactive Mode"를 키고 "Result"(검은색 박스) 안에 숫자를
        입력하세요.<br /><br />

        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3VZe`"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>getchar()</h2>
        <p>
          getchar()는 putchar()의 반대로 사용자의 입력(문자)를 받아 변수에
          저장합니다.<br /><br />

          참고로 scanf()는 변수를 입력해야 되었습니다. 하지만 getchar()은 변수의
          값을 바꾸는 형태로 변수 안에 저장하는 형식입니다.<br /><br />

          <code v-highlight class="cpp">
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;char a = getchar();<br /><br />

            &nbsp;putchar(a);<br /><br />

            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div class="ma-auto">
        여기도 "Interactive Mode"를 켜야 합니다.<br /><br />

        <iframe
          title="JDoodle C and CPP"
          :src="`${jdoodle}3VZj`"
          height="300"
        />
      </div>
    </div>

    <Navigation bef="variableadvance" aft="basicdatatype" />
  </div>
</template>
