<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>문자열이란?</h2>
        <p>
          문자열은 문자의 배열을 뜻합니다.<br /><br />

          문자는 한 알파벳이었고 문자열은 단어라고 할 수 있습니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfACCcn3fn-YXylQf1-S3a2wrIXJ51Z6_LzA&usqp=CAU"
          width="300px"
        />
      </div>
    </div>

    <Header type="C/C++" title="문자열" num="25" />

    <div>
      <div>
        <h2>문자열 선언</h2>
        <p>
          문자열을 만들 때 두가지 방법을 사용할 수 있습니다.<br /><br />

          1. 배열과 비슷하게 {} 안에 문자 하나하나 집어 넣을 수 있습니다<br />
          2. 또는 "" 안에 텍스트를 넣을 수 있습니다.<br /><br />

          <code> char message[] = "Hello, World!" </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자열 사용</h2>
        <p>
          문자열은 puts() 또는 printf() 함수를 사용할 수 있습니다.<br /><br />

          puts()는 쉽게 문자열을 출력하고 바로 뒤에 '\n'을 붙이는 성질을 가지고
          있습니다.<br /><br />

          printf()에서 문자열은 "" 안에 넣을 수 있습니다. 변수 값은 '%s'를
          사용합니다.
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}42tH`" width="100%" height="300px" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>문자 붙이기</h2>
        <p>
          문자를 출력할 때 붙이려면 '%s%s'을 옆에 놓아서 변수를 두 개 입력할 수
          있습니다.<br /><br />

          <code>
            char a[] = "Hello ";<br />
            char b[] = "World";<br /><br />

            printf("%s%s", a, b);
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}42tI`" width="100%" height="300px" />
      </div>
    </div>

    <Navigation bef="array" aft="stringlibrary" />
  </div>
</template>
