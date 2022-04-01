<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>Switch</h2>
        <p>
          C 언어에서 switch는 조건문과 비슷하지만 변수와 다른 값을
          비교합니다.<br /><br />

          switch는 '=='를 사용한 조건문입니다.
        </p>
      </div>
      <div class="ma-auto">
        <v-switch v-model="switch1" />
      </div>
    </div>

    <Header type="C/C++" title="Switch문" num="17" />

    <div>
      <div>
        <h2>조건문이 복잡해진다!!!</h2>
        <p>
          조건문이 매우 복잡해질 때가 있습니다.<br /><br />

          예를 들면, char를 입력 받아 A이면 1, B이면 2, C이면 3그리고 F이면
          6까지 출력하는 프로그램을 만들어 보겠습니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;char a;<br />
            &nbsp;&nbsp;scanf("%d", &a);<br /><br />

            &nbsp;&nbsp;if(a == 'A') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("1");<br />
            &nbsp;&nbsp;} else if(a == 'B') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("2");<br />
            &nbsp;&nbsp;} else if(a == 'C') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("3");<br />
            &nbsp;&nbsp;}else if(a == 'D') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("4");<br />
            &nbsp;&nbsp;} else if(a == 'E') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("5");<br />
            &nbsp;&nbsp;} else if(a == 'F') {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;printf("6");<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          흠... 조금 이해하기 어렵습니다. 이 상황에서 switch문을 사용하면
          어떨까요?
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3W93`" height="400px" width="100%" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>switch 문</h2>
        <p>
          1. switch() {}를 선언한 후 괄호() 안에 비교하고 싶은 변수를
          넣습니다.<br /><br />
          (지금부터 중괄호{} 안에 코드를 넣습니다.)<br /><br />
          2. case "A":라고 친 후 새로운 줄에 만일 a의 값이 A라면 샐행할 코드를
          넣습니다.<br /><br />
          (참고로 case는 {} 중괄호를 사용하지 않고 ':'를 사용합니다)<br /><br />
          4. 그리고 항상 a의 값이 A라면 실행할 코드 다음에 "break"를 넣어야
          합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;char a;<br />
            &nbsp;&nbsp;scanf("%c", a);<br /><br />

            &nbsp;&nbsp;switch(a) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;case 'A':<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("1");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reak;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;case 'B':<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("2");<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br />
            &nbsp;&nbsp;}<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div>
        <iframe :src="`${jdoodle}3Wcm`" width="100%" height="300px" />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="hardif" aft="for" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switch1: false,
      };
    },
  };
</script>
