<template>
  <div>
    <div>
      <div>
        <h2>파일 읽기</h2>
        <p>
          파일 읽기란 파일의 내용을 알아내는 작업입니다.<br /><br />

          모드는 'r'을 사용하면 됩니다.<br /><br />

          <code v-highlight class="cpp">
            FILE * fp = fopen("test.txt", "r");<br /><br />

            fprintf(fp, "blablabla");<br /><br />

            fclose(fp);
          </code>
        </p>
      </div>
    </div>

    <Header type="C/C++" title="파일 읽기" num="48" />

    <div>
      <div>
        <h2>파일 내용 읽기</h2>
        <p>
          파일의 내용을 변수 안에 저장하겠습니다.<br /><br />

          그렇게 하기 위해서는 다음 방법을 따라주세요.<br /><br />

          1. 먼저, char[] 변수를 만듭니다. 길이로 원하는 값을 넣어주세요.<br />
          2. 다음, 파일을 'r' 모드를 사용해서 열어주세요.<br />
          3. fgets() 함수를 사용해서 char[] 변수 이름, 변수 길이, 그리고 파일
          변수의 이름을 넣어주세요.<br />
          4. 파일 닫기!<br /><br />

          참고로 char[] 안에 있는 파일 내용은 %s를 사용해서 출력합니다.<br /><br />

          <code v-highlight class="cpp">
            char string[999];<br />
            FILE * fp = fopen("test.txt", "r");<br /><br />

            fgets(string, 999, fp);<br /><br />

            printf("%s", string);<br /><br />

            fclose(fp);
          </code>
        </p>
      </div>
    </div>

    <Navigation bef="file" aft="writefile" />
  </div>
</template>
