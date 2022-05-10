<template>
  <div>
    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OrWWnx2ydHc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <br />
    <Header type="파이썬" num="19" title="리스트 메서드 1" />
    <QuadSpace />
    <div>
      <div>
        <h2>리스트 - 인덱싱</h2>
        <p>
          CODE1과 같이 인덱싱을 이용하여 x번째 값을 새로운 값으로 바꿀 수
          있습니다.<br /><br />
          인덱싱을 이용하여 리스트 변수 a의 x~y번째 값까지를 새로운 리스트로
          바꿀 수도 있습니다.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}a413df3b12`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>insert()</h2>
        <p>
          insert()라는 메서드를 이용하여 사용자가 원하는 자리에 새로운 값을 더할
          수 있습니다.<br /><br />
          list.insert(index, item) 형태를 가지고 있고 첫 번째에는 어디(인덱스)에
          아이템을 넣을지 입력하면 됩니다.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}d50ab693f8`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>리스트에서 값 빼기</h2>
        <p>
          CODE1에서와 같이 리스트에서 'C'라는 데이터를 제거하기 위하여
          'remove'를 사용할 수 있습니다.<br /><br />
          CODE2에 있는 예시를 보면 pop(x)과 del 키워드를 이용하여 x번째 값을
          제거할 수도 있습니다.<br /><br />
          마지막으로 CODE3에 있는 코드는 clear()를 사용하면 리스트를 쓰레기통에
          버리는 것과 같이 모든 값을 제거할 수 예시입니다.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}8ea821b7b4`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>다른 메서드</h2>

        <h3>리스트에서 값이 나타나는 개수 찾기</h3>
        리스트에서 'blue'라는 값이 나타나는 개수를 찾기 위하여 'count()'를
        CODE1에서 사용해보겠습니다.<br /><br />
        <h3>리스트 값의 인덱스 찾기</h3>
        리스트에서 값의 인덱스를 찾을 수도 있습니다. CODE2와 같이 'Poo'라는
        단어의 인덱스를 찾아보겠습니다.<br /><br />
        <h3>리스트에서 모든 값 더하기</h3>
        sum() 함수를 사용하면 리스트에 있는 모든 숫자를 더한 값을 찾을 수
        있습니다 (CODE3)
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}7fdd2b43c1`"
        height="356"
      />
    </div>

    <Navigation bef="list" aft="listmethod2" />
  </div>
</template>
<script>
  export default {
    page: 'ListMethod1Page',
  };
</script>
