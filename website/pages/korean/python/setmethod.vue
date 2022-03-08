<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>집합 연산</h2>
        <p>
          집합의 종류에는 합집합, 교집합, 차집합이 있습니다.<br /><br />

          합집합은 어떤 두 집합의 모든 값을 뜻합니다. 예를 들어 집합 1, 2와 2,
          3의 합집합은 1, 2, 3입니다. 같은 값은 중복되지 않게 하나로만
          줄입니다.<br /><br />

          교집합은 어떤 두 집합의 같은 값을 뜻합니다. 예를 들어 집합 1, 2와 2,
          3의 교집합은 2입니다. 두 집합에 다 존재하는 값의 집합입니다.<br /><br />

          차집합은 A 집합과 B 집합이 있으면 A 집합에만 있는 값의 모임입니다.
          예를 들어 1, 2와 2, 3의 차집합은 1입니다. A와 B의 차집합은 A에만
          존재하는 값입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZE9_w5vNI-c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <Header type="파이썬" num="25" title="집합 메서드" />

    <div>
      <div>
        <h2>합집합</h2>
        <p>
          영어로 union은 '하나로 만들다'라는 뜻이 있습니다.<br /><br />

          파이썬에서 집합을 하나로 만들기 위하여 union()이라는 메서드를 사용할
          수 있습니다.<br /><br />

          union 대신 update를 사용해도 됩니다. 같은 메서드입니다.<br /><br />

          또는 더 간단하고 쉽게 | (엔터 위에 있는 키보드(\)와 shift를 같이
          누르세요) 연산자를 사용할 수 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/f16d8554a4"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>교집합</h2>
          <p>
            어떤 두 집합에서 겹치는 값들만 찾기 위하여 intersection_update()를
            사용해보겠습니다.<br /><br />

            intersection은 '겹치는 파트'라는 뜻이 있습니다.<br /><br />

            어떤 집합에 intersection_update()를 실행하고 첫 번째 매개변수를 두
            번째 집합으로 입력하면 첫 번째 집합에 결합하지 않는 값들은 제거할
            것입니다.<br /><br />

            intersection_update()은 첫 번째 집합을 바꾸었지만 새로운 집합을
            만들려면 intersection() 메서드를 사용하고 새로운 변수 안에 저장하면
            됩니다.<br /><br />

            intersection_update과 intersection() 대신 & 연산자를 사용하여
            교집합을 찾을 수 있습니다.<br /><br />
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/bdb3068e9e"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>차집합</h2>
        <p>
          intersection_update()의 반대인 symmetric_difference_update은 어떤 두
          집합에 공동으로 존재하지 않는 아이템들만 저장합니다.<br /><br />

          symmetric_difference 메서드는 새로운 변수에 저장합니다.<br /><br />

          간단하게 '-'를 사용해보겠습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a69bea0190"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="set" aft="if" />
  </div>
</template>

<script>
export default {
  page: 'SetMethodPage',
};
</script>
