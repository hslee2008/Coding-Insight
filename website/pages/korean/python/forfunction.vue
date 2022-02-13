<template>
  <div>
    <QuadSpace />

    <div>
      <Header type="파이썬" num="36" title="반복문 함수" />

      <QuadSpace />

      <div>
        <div>
          <h2>iter()와 __next__()</h2>
          <p>
            iter() 메서드를 사용하면 for 반복문을 대신할 수 있습니다.<br /><br />

            iter() 함수를 사용하면 for 반복과 비슷한 이터러블을 만듭니다.<br /><br />

            __next__() 메서드를 사용하면 i의 값을 하나하나 돌려줍니다.
            __next__()를 사용할 때마다 새로운 값 하나하나가 새롭게
            나타납니다.<br /><br />

            만일 마지막 값까지 도착했고 더 이상 값이 존재하지 않는데 __next__()
            메서드를 사용했다면 에러가 생깁니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/496fc82d74"
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
            <h2>range()</h2>
            <p>
              range()는 for 반복문을 사용할 때 매우 유용합니다. range() 함수는
              숫자로 구성된 리스트를 돌려주는 함수입니다.<br /><br />

              range(start, stop, step)가 있습니다.<br /><br />

              start는 숫자의 시작입니다.<br />
              stop은 숫자의 끝입니다.<br />
              step은 숫자 간의 간격입니다.
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/31f75bee24"
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
    </div>

    <QuadSpace />

    <NaviBtn bef="fortype" aft="while" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ForFunctionPage',
}
</script>
