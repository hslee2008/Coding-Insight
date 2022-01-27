<template>
  <div>
    <br />

    <div>
      <div>
        <h1>파일 쓰기 모드</h1>
        <p>
          파일을 읽는 모드는 'w'를 사용해야 합니다.<br /><br />

          w는 writing의 약자입니다.<br /><br />

          <code>
            FILE * fp = fopen("test.txt", "w");<br /><br />

            fclose(fp);
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="파일 쓰기" num="49" />

    <QuadSpace />

    <div>
      <div>
        <h1>파일에 내용 쓰기</h1>
        <p>
          파일 안에 새로운 내용을 쓰기 위해서 fprintf() 함수를 사용합니다.<br /><br />

          먼저, fprintf() 안에 파일의 주소를 넣습니다.<br /><br />

          다음, 파일 안에 새롭게 쓸 내용을 문자열로 넣습니다.<br /><br />

          <code>
            FILE * fp = fopen("test.txt", "w");<br /><br />

            fprintf(fp, "blablabla");<br /><br />

            fclose(fp);
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>append 모드</h1>
        <p>
          w 모드는 새롭게 덮어씁니다.<br /><br />

          저번에 새로운 내용이 있고 fprintf()를 사용해서 내용을 쓴다면, 완벽하게
          덮어씁니다.<br /><br />

          하지만, a 모드를 사용하면 파일 내용 다음에 새롭게 내용을 추가하지
          완벽하게 덮어쓰지는 않습니다.<br /><br />

          <code>
            FILE * fp = fopen("test.txt", "a");<br /><br />

            fprintf(fp, "blablabla");<br /><br />

            fclose(fp);
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="readfile" slink="deletefile" />

    <QuadSpace />
  </div>
</template>
