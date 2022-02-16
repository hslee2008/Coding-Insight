<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>2차원 배열이란?</h2>
        <p>
          2차원 배열은 배열 안에 있는 배열입니다.<br /><br />

          지금까지 우리가 배운 배열과 문자열은 다 1차원 배열입니다.<br /><br />

          이 수업에서 오늘은 어떻게 2차원 배열을 만들 것인지 알아보겠습니다.
        </p>
      </div>
      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          width="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header type="C/C++" title="2차원 배열" num="27" />

    <QuadSpace />

    <div>
      <div>
        <h2>2차원 배열 만들기</h2>
        <p>
          2차원 배열을 만드는 방법은 1차원과 비슷합니다.<br /><br />

          1. 자료형 입력합니다<br /><br />
          2. 배열 변수의 이름 넣습니다<br /><br />
          3. [] 안에 row (세로)의 길이 입력을 합니다<br /><br />
          4. 바로 뒤에 []를 붙이고 안에 column (가로)의 길이를 넣습니다<br /><br />
          5. 다음에 변수와 비슷하게 =를 사용한 후 아이템을 {} 안에 넣습니다. 또
          {} 안에 {}를 넣고 아이템을 입력합니다.<br /><br />
          6. ; 입력하기<br /><br />

          <code v-pre>
            int grid[19][19];<br />
            int test[4][4] =
            {{0, 1, 2, 3}, {0, 1, 2, 3}, {0, 1, 2, 3}, {0, 1, 2, 3}};
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gq"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>2차원 배열 아이템 찾기</h2>
        <p>
          인덱싱은 이름[ ][ ] 형태로 1차원과 비슷합니다.<br /><br />

          <code v-pre>
            int grid[2][2] = {{0, 1}, {0, 1}};<br /><br />

            printf("%d", grid[0][0]);
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44gr"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="stringlibrary" aft="function" />

    <QuadSpace />
  </div>
</template>
