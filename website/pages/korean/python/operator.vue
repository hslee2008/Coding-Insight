<template>
  <div>
    <div>
      <h2>연산자란?</h2>
      <p>
        연산자란 연산을 수행하는 자입니다.<br /><br />
        예를 들면, +와 -는 연산자의 예시입니다.<br /><br />
        이 장에서는 파이썬에서 사용되고 알면 좋은 연산자에 대하여 배우겠습니다.
      </p>
    </div>

    <div class="text-center">
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/sGZLq4VZW58"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="15" title="연산자" />

    <div>
      <div>
        <h2>산수 연산자</h2>
        <p>
          산수 연산자는
          <NuxtLink :aria-label="allink" to="./number"> 숫자 </NuxtLink>
          에서 배웠습니다.<br /><br />
          기억이 나지 않는다면 다시 한번 확인하세요.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>할당 연산자</h2>
        <p>
          할당 연산자란 산수 연산자와 비슷하지만 산수 연산자의 결과 값을 변수
          안에 저장합니다.<br /><br />

          산수 연산자는 두 수를 비교하여 새로운 값을 돌려주는 성질이지만 할당
          연산자는 변수의 값을 바꿉니다.
        </p>

        <h2>+=</h2>
        <p>
          +=은 더하지만 원래 값에 또 다른 값을 더합니다.<br /><br />

          예를 들면, 원래값이 1이고 += 연산자를 사용하여 2를 더하면 원래 변수의
          값에 2를 더한 것이 변수 안에 저장됩니다. 즉 3이 저장됩니다.
        </p>

        <h2>-=, *=, /=, **=, %=, //=</h2>
        <p>
          옆에서 -=, *=, /=, **=, %=, //= 할당 연산자를 잘 사용하기 위해서
          옆에서 연습하세요!
        </p>
      </div>

      <iframe
        title="Trinket Python"
        :src="`${trinket}fd203a6323`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>비교 연산자</h2>
        <p>
          비교 연산자란 두 값을 비교하는 연산자입니다.<br /><br />
          예를 들면 '=='은 두 값이 같은지 알려주는 연산자이고 불리언을
          돌려줍니다.<br /><br />
          == 두 값을 비교합니다.<br />
          != 는 두 값을 대조합니다.<br />
          > 는 두 값 중 큰 값이 무엇인지 알려줍니다.<br />
          >= 는 두 값이 크거나 같은지 알려줍니다.<br />
          &lt; 는 두 값 중 더 작은 것이 무엇인지 알려줍니다.
        </p>
      </div>

      <iframe
        title="Trinket Python"
        :src="`${trinket}39a09b977e`"
        height="356"
      />
    </div>

    <Navigation bef="number" aft="numtype" />
  </div>
</template>

<script>
  export default {
    page: 'OperatorPage',
  };
</script>
