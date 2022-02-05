<template>
  <div>
    <br />

    <div>
      <div>
        <p>
        <h2>조금 더 좋아질 수 있는 코드</h2>
        숫자로 구성된 리스트를 다룰 때 대부분 다음과 같은 방법을 이용합니다.<br /><br />
        이 코드는 for 반복문을 사용했습니다.<br /><br />
        for 반복문은 상대적으로 느리므로 매우 크고 복잡한 앱을 만드는 데 좋지 않습니다.
        </p>
      </div>
      <iframe
src="https://trinket.io/embed/python3/0be5e6efb5" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>
    </div>

    <QuadSpace />

    <Header num="64" title="map, reduce, filter"></Header>

    <QuadSpace />

    <div>
      <div>
        <h2>map() 이용하기</h2>
        <p>
          다음과 같은 예시를 보겠습니다.<br /><br />
          매우 간단합니다.<br /><br />
          <iframe
src="https://trinket.io/embed/python3/373f6daa17" width="100%" height="356" frameborder="0"
            marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin:
            auto;"/><br /><br />
          1. 먼저, map() 함수의 첫 번째 매개변수에는 함수의 이름을 넣습니다.<br />
          2. 만일 어떤 계산을 하는 함수 (예: x에 2를 곱하는 함수)가 존재하지 않는다면 그 함수를 만드세요.<br />
          3. 그리고 두 번째에는 리스트 변수 이름을 넣습니다.<br />
          4. 마지막으로, 리스트 형태로 바꾸기 위하여 list() 함수를 사용하면 for 반복문을 사용한 것과 같지만 더 효율적입니다.<br /><br />
          map() 함수에서 나만의 함수를 넣으려면 lambda(익명 함수)를 이용할 수 있습니다.<br /><br /> <iframe
            src="https://trinket.io/embed/python3/22c2bc5172" width="100%" height="356" frameborder="0"
            marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin:
            auto;"/><br /><br />
          lambda를 이용할 때 첫 번째 매개변수가 들어오는 값(mainList에 있는 숫자의 값)이기 때문에 매개변수의 이름은 우리가 정할 수 있습니다.<br /><br />
          n이 될 수 있고 number 또는 num이 될 수 있지만 존재해야 하고 돌아오는 값이 있어야 합니다.<br /><br />
          만일 어떤 함수가 x개 매개변수가 필요하다면 x개 리스트를 입력하면 됩니다. 그리고 lambda에서는 x개 매개변수를 만들면 됩니다.<br /><br />
          참고로 map()은 리스트에서 숫자뿐만 아니라 모든 데이터 형태를 반복할 수 있습니다. 문자도 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>리스트의 값 필터링</h2>
        <p>
          필터링이라고 하면 '정수기에서 더러운 물질을 필터링한다'라는 말이 떠오르지 않나요?<br /><br />
          필터링은 어떤 리스트에서 아이템이 특정 조건에 해당한다면 버린다는 뜻이 있습니다.<br /><br />
          위의 예시에서 음의 정수는 다 제거를 하고 양의 정수와 0만 남겼습니다.<br /><br />
          filter() 메서드는 map()의 매개변수와 같습니다.<br /><br />
          1. 첫 번째는 필터링하는 함수이지만 돌아오는 것이 꼭 불리언이어야합니다. 왜냐하면 필터링은 '어떤 조건에 해당하면' 이라는 뜻이기 때문에 조건이 맞다, 틀리다로 구분할 수 있기
          때문입니다.<br />
          2. 그리고 다른 매개변수는 다 필터링의 조건에서 필요한 매개변수의 수입니다.<br /><br />
          참고로 map()과 같이 lambda 대신 def를 이용한 함수여도 되고 이미 존재하는
          함수를 사용해도 됩니다.
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/9eb9345774" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>

    <QuadSpace />

    <div>
      <div>
        <h2>reduce()</h2>
        <p>
          reduce()는 어떤 리스트의 값들을 다 어떤 연산이나 함수를 이용하여 하나로 만드는 함수입니다.<br /><br />
          예를 들어 문자가 담긴 리스트의 모든 문자를 합한 값을 계산하고 싶다면 for 반복문 대신
          reduce()를 사용하는 방법도 있습니다.<br /><br />
          하지만 reduce()는 아직 파이썬에서 존재하지 않기 때문에 functools라는 모듈에서만 사용할 수 있습니다.<br /><br />
          옆에 있는 코드를 실행하면 'Hello, World!.'라고 출력이 됩니다.<br /><br />
          만일 reduce의 값이 여러 개라면 먼저 하나하나 함수에 집어넣고 돌아오는 값을 저장한 후 모든 값을 한꺼번에 돌려줍니다.
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/294b66f2c5" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>

    <QuadSpace />

    <NaviBtn bef="logging" aft="zlib" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MapAndReduceAndFilterPage',
}
</script>
