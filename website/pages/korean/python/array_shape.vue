<template>
  <div>
    <br />

    <div>
      <div>
        <h1>정렬 모양이란?</h1>
        <p>
          정렬 모양이란 <mark>정렬의 길이</mark>를 뜻합니다.<br /><br />

          예를 들면 정렬 [ [1, 2] , [2, 3] ]는 2개의 정렬 안에 2개의 아이템이
          있기 때문에 모양은 (2, 2)입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header num="60" title="정렬 모양"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>정렬 모양</h1>
        <p>
          정렬의 모양을 알기 위하여 shape라는 것을 쓸 수 있습니다.<br /><br />

          이것을 이용하여 정렬의 큰 모양을 알 수 있습니다.<br /><br />

          arr.shape을 출력하면 (2, 3) 튜플이 출력됩니다. (2, 3)에서 2란 2-D
          정렬을 뜻하고 3은 3개 아이템이 있다는 뜻입니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/20b4a15af9"
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
      <div class="inner-div">
        <h1>정렬 모양 바꾸기</h1>
        <p>
          정렬.reshape() 메서드는 새로운 정렬을 되돌려주고 그것을 변수에
          저장하는 메서드입니다.<br /><br />

          첫 번째 매개변수에는 정렬의 치수를 입력하고, 두 번째 매개변수에는 정렬
          아이템의 개수를 입력하면 됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/2143d07d6a"
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

    <NaviBtn flink="array_type" slink="error" />

    <QuadSpace />
  </div>
</template>

<script>
  export default {
    name: "ArrayShapePage"
  }
</script>
