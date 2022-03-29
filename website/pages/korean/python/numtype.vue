<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>숫자 종류</h2>
        <p>
          파이썬 숫자에는 3가지 종류가 있습니다.<br /><br />

          - int(정수)<br />
          - float(소수)<br />
          - complex(허수)<br />
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200918224427/Number-and-Its-Types.png"
          width="500px"
        />
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NhzBkfhAb3g"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="16" title="숫자 종류" />

    <div>
      <div>
        <h2>int (정수)</h2>
        <p>
          int는 정수입니다.<br /><br />

          소수점 아래의 숫자가 0인 수를 정수라고 합니다.<br /><br />

          0, 1, 2…. 그리고 -1, -2, -3, ... 숫자들을 정수라고 합니다.<br /><br />

          정수형 변수를 선언하는 방법은 다음과 같습니다.<br /><br />

          변수 형태의 정수인지 확인하기 위해서 저희는 다음과 같은 함수를 사용할
          수 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/0856d3ad88"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>float (소수)</h2>
        <p>
          float는 소수입니다.<br /><br />

          '앗 소수했다!!!'에 그 소수가 아닙니다.<br /><br />

          소수란 a/b(b≠0)로 나타낼 수 있는 유리수와 a+√b의 형태로 나타낼 수 있는
          무리수를 통틀어 소수라고 합니다.<br /><br />

          조금 복잡한가요? 소수는 쉽게 소수점 뒤에 숫자가 있는 숫자를
          뜻합니다.<br /><br />

          예를 들어 3.14159는 소수점 뒤에 숫자가 있기 때문에 소수라고 합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/e726e404fa"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>complex (허수)</h2>
        <p>
          허수는 고등학교 1 수학이어서 이 수업에서는 설명을 하지 않겠습니다.<br /><br />
          부모님이나 선생님 또는 더 나이가 많은 분에게 물어보세요.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="operator" aft="calc" />
  </div>
</template>

<script>
  export default {
    page: 'NumberTypePage',
  };
</script>
