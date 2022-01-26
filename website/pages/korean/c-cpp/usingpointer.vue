<template>
  <div>
    <br />

    <div>
      <div>
        <h1>*를 이용해서 배열과 문자열 선언</h1>
        *를 이용하면 [] 안에 길이를 넣지 않아도 자동으로 배열과 문자열을 선언할
        수 있습니다.<br /><br />

        <code> int* arr = {1, 2, 3, 4, 5}; </code>

        2차원 배열은 **(두 개)를 사용하면 됩니다.<br /><br />

        <code v-pre> int** arr = {{1, 1}, {2, 2}}; </code>

        그리고 <kbd>*(&lt;포인터 이름> + &lt;인덱스>)</kbd>를 사용하면 배열 또는
        문자열의 인덱스 값을 찾거나 저장할 수 있습니다.<br /><br />

        <code>
          int* arr;<br /><br />

          *(arr + 2) = 40;
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47Au"
          width="100%"
          height="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header title="포인터 사용하기" num="34" />

    <QuadSpace />

    <div>
      <div>
        <h1>malloc()을 이용해서 배열 선언하기</h1>

        malloc()을 이용해서 동적으로 배열의 길이를 지정할 수 있습니다.<br /><br />

        동적이라는 것은 사용자에게서부터 입력을 받아 배열의 길이를 저장한다는
        뜻입니다.<br /><br />

        <code>
          #include &lt;stdio.h><br />
          #include &lt;stdlib.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int* ptr;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int n;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;scanf("%d",&n);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;ptr = (int*)malloc(n * sizeof(int));<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; n; ++i) ptr[i]=i +
          1;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;for (int i=0; i &lt; n; ++i) printf("%d, ",
          ptr[i]);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>

        1. 먼저, malloc()을 사용하기 위해서 stdlib 라이브러리를
        include합니다.<br />
        2. 포인터를 선언하고 입력 받을 수 n을 선언합니다.<br />
        3. n을 입력 받습니다.<br />
        4. mallc()을 사용해서 배열을 만듭니다.<br /><br />

        (int*)는 배열이 int 자료형을 가지고 있고 n * sizeof(int)는 배열의 크기를
        지정합니다.<br /><br />

        여기서 n은 배열의 길이이고 sizeof(int)는 각 아이템의 크기입니다(아이템은
        int이기 때문에 sizeof(int)를 사용했습니다.)<br /><br />

        요약: malloc()을 사용하면 나만의 배열을 자기가 원하는 수를 입력해서
        사용할 수 있습니다.<br />
        (문자열도 가능합니다. int* ptr 대신 char* ptr로 바꾸세요!)<br /><br />
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47AG"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>calloc()</h1>

        calloc은 malloc과 비슷하지만 배열을 만든 후 값을 모드 0으로 바꿉니다.<br /><br />

        그래서 조금 더 느립니다.<br /><br />

        malloc는 n*sizeof(int)이지만 calloc는 n과 sizeof(int) 매개변수를
        입력해야 합니다.<br /><br />

        참고로 n은 총 배열의 길이이고 sizeof(int)는 int의 메모리 양을 각
        저장합니다.<br /><br />

        <code>
          #include &lt;stdio.h><br />
          #include &lt;stdlib.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int* ptr;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int n;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;scanf("%d",&n);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;ptr = (int*)calloc(n, sizeof(int));<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; n; ++i) ptr[i]=i +
          1;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;for (int i=0; i &lt; n; ++i) printf("%d, ",
          ptr[i]);<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47AE"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>realloc()</h1>

        realloc을 사용해서 다시 메모리의 길이를 다시 지정할 수 있습니다.<br /><br />

        <code>
          size_t number = 7;<br />
          ptr = (int*)realloc(number, sizeof(int));
        </code>

        참고로 size_t는 C 언어에서 크기를 저장하는 변수 형태입니다.<br /><br />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>free()</h1>

        free를 사용하면 포인터를 완벽히 컴퓨터 메모리에서 삭제할 수 있습니다.<br /><br />

        <code>
          #include &lt;stdio.h><br /><br />

          int main() {<br />
          &nbsp;&nbsp;int* ptr = (int*)malloc(10 * sizeof(int)) //int ptr[10];과
          같음<br /><br />

          &nbsp;&nbsp;*(ptr + 2) = 50; //ptr[2] = 50;와 같음<br />
          &nbsp;&nbsp;printf("2번째 값: %d", *(ptr + 2));<br /><br />

          &nbsp;&nbsp;free(ptr); //삭제<br /><br />

          &nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47B7"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>중요 내용 정리하기</h1>
        <p>malloc() ? 다른 배열 변수의 크기를 지정한다.</p>
        <kbd>(int*)malloc(n * sizeof(int));</kbd>
        <br /><br />
        <p>calloc() ? 다른 배열 변수의 크기를 지정한다.</p>
        <kbd>(int*)malloc(n, sizeof(int));</kbd>
        <br /><br />
        <p>realloc() ? 다시 저장</p>
        <kbd>(int*)realloc(number, sizeof(int));</kbd>
        <br /><br />
        <p>free() ? 삭제하기</p>
        <kbd>free(ptr);</kbd>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="pointer" slink="union" />

    <QuadSpace />
  </div>
</template>
