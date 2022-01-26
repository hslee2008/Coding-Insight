<template>
  <div>
    <br />

    <div>
      <div>
        <h1>카운터에 대한 간단한 예시와 설명</h1>
        <p>
          카운터 모듈은 어떤 이터러블 변수(리스트, 튜플, 집합)에 대한
          <mark>다양한 정보</mark>를 알려줄 수 있습니다.<br /><br />

          예를 들어 리스트 안에 A, A, B 아이템이 있다면 Counter({"A": 2, "B":
          1})를 돌려줍니다.<br /><br />

          또는 '매개변수이름=값' 형태로 값의 수가 많으면 하나하나 다 입력하지
          않고 숫자만 이용하여 카운터를 만드는 것이 가능합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/da3dfe80d1"
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

    <br /><br />

    <Header num="77" title="카원터"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>글로벌 카운터</h1>
        <p>
          카운터를 글로벌 변수로 삼아 계속 업데이트하는 것이 가능합니다.
          업데이트하면 새롭게 원래 카운트하는 이터러블에 값을 더합니다.<br /><br />

          업데이트는 update() 메서드를 사용합니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/1784ae1aca"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>카운터 아이템</h1>
        <p>
          카운터를 계속 업데이트하다 보면 카운터 아이템의 값을 다시 찾아야 하는
          경우가 종종 있습니다.<br /><br />

          카운터의 아이템은 elements()라는 메서드를 이용할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/6776498f90"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>카운터 가장 흔한 값</h1>
        <p>
          카운터에서 가장 흔히 나오는 값을 찾으려면 most_common() 메서드를
          사용하고 매개변수로 숫자를 입력하여 그 수 만큼 가장 흔한 아이템을 찾을
          수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/f918534c52"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>카운터 값 빼기</h1>
        <p>
          카운터 2개로 값을 빼서 새로운 카운터를 저장할 수 있습니다.<br /><br />

          하지만 어떤 아이템의 수가 음의 정수가 될 수 있습니다.<br /><br />

          물건이 0보다 적게 있다는 것이 말은 되지 않지만 파이썬 카운터에서는
          가능합니다.<br /><br />
          <code>
            a = Counter(a = 4, b = 5) b = Counter(a = 6, b = 9)
            print(a.subtract(b))
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn
      flink="multiprocessing"
      slink="request"
     />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'CounterPage',
}
</script>
