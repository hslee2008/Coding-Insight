<template>
  <div>
    <br /><br />

    <div>
      <h2>리스트란?</h2>
      <p>
        리스트는 한국어로 '순서'입니다.<br /><br />
        파이썬에서 리스트는 다양한 데이터를 순서대로 나열한 데이터 형태를
        뜻합니다.<br /><br />
        예를 들면, 일상생활에서 오늘 해야할 일을 나열할 때 파이썬에서 리스트를
        사용할 수 있습니다.
      </p>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/707kPFDQdks"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="18" title="리스트" />

    <div>
      <div>
        <h2>리스트 선언</h2>
        <p>
          파이썬에서 리스트를 만들기 위해서 대괄호[] 안에 데이터를 넣으면
          됩니다.<br /><br />
          리스트에서 항상 ,가 데이터들 사이에 있어야 합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/59634d0a4b"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>리스트 인덱스</h2>
        <p>리스트에서 x번째 값을 찾으려면 인덱싱을 사용하면 됩니다.</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/151def333f"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <h2>인덱싱이 x를 사용하면 x-1 번째를 출력하는 이유</h2>
    <p>
      왜 저희는 목록의 첫 번째로 1을 사용하는데 코딩에서는 0부터 시작할까요?<br /><br />

      그 이유는 '수학'입니다. 리스트는 한국어로 번역하면 '목록'입니다. 목록에는
      '순서'가 있습니다.<br /><br />

      예를 들어 1에서 시작하여 2씩 증가하는 리스트를 만들겠습니다.<br /><br />

      <code>1, 3, 5, 7</code>

      처음에 1에서 시작했습니다. 처음에는
      <code class="ic">1 + (2 * 0)</code>입니다.<br /><br />

      1에서 2 증가했습니다. 이 순서의 공차(차이)는 2입니다. 두 번째 값은 1 +
      (2+1)입니다.<br /><br />

      이렇게 계속하면 다음과 같은 공식이 나옵니다.<br /><br />

      <code>a = 1 + {2 * (a-1)}</code>

      그래서 첫 번째 리스트 값을 0을 이용해서 찾는 이유는 공차의 값을 기준으로
      0이 곱해졌기 때문입니다.
    </p>

    <QuadSpace />

    <Navigation bef="nummethod" aft="listmethod1" />
  </div>
</template>

<script>
  export default {
    page: 'ListPage',
  };
</script>
