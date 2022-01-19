<template>
      <div>
      <br>
        <div style="display: flex;">
          <div style="margin: auto;">
            <h1>숫자 종류</h1>
            <p>
              파이썬 숫자에는 3가지 종류가 있습니다.<br /><br />

              - int(정수)<br />
              - float(실수)<br />
              - complex(허수)<br />
            </p>
          </div>
          <div style="margin: auto">
            <v-img
              alt="python-factory-picture"
              class="img-fluid"
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200918224427/Number-and-Its-Types.png"
              width="500px"
            />
          </div>
        </div>

        <br /><br />

        <div class="text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NhzBkfhAb3g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <br /><br />

        <Header num="16" title="숫자 종류"></Header>

        <QuadSpace></QuadSpace>

        <div>
          <div>
            <h1>int (정수)</h1>
            <p>
              int는 정수입니다.<br /><br />

              소수점 아래의 숫자가 0인 수를 정수라고 합니다.<br /><br />

              0, 1, 2…. 그리고 -1, -2, -3, ... 숫자들을 정수라고 합니다.<br /><br />

              정수형 변수를 선언하는 방법은 다음과 같습니다.<br /><br />

              변수 형태의 정수인지 확인하기 위해서 저희는 다음과 같은 함수를
              사용할 수 있습니다.<br /><br />
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/0856d3ad88"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          ></iframe>
        </div>

        <QuadSpace></QuadSpace>

        <div class="color-contrast-div">
          <div>
            <h1>float (실수)</h1>
            <p>
              float는 실수입니다.<br /><br />

              '앗 실수했다!!!'에 그 실수가 아닙니다.<br /><br />

              실수란 a/b(b≠0)로 나타낼 수 있는 유리수와 a+√b의 형태로 나타낼 수
              있는 무리수를 통틀어 실수라고 합니다.<br /><br />

              조금 복잡한가요? 실수는 쉽게 소수점 뒤에 숫자가 있는 숫자를
              뜻합니다.<br /><br />

              예를 들어 3.14159는 소수점 뒤에 숫자가 있기 때문에 실수라고
              합니다.<br /><br />
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/e726e404fa"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          ></iframe>
        </div>

        <QuadSpace></QuadSpace>

        <div>
          <div>
            <h1>complex (허수)</h1>
            <p>
              허수는 고등학교 1 수학이어서 이 수업에서는 설명을 하지
              않겠습니다.<br /><br />
              부모님이나 선생님 또는 더 나이가 많은 분에게 물어보세요.
            </p>
          </div>
        </div>

        <QuadSpace></QuadSpace>

        <BeforeNextButton flink="operator" slink="calc"></BeforeNextButton>

        <QuadSpace></QuadSpace>
      </div>

    </div>
</template>
