<template>
  <div>
    <Header type="파이썬" num="79" title="리퀘스트 메서드" />

    <div>
      <div>
        <h2>상태</h2>
        <p>
          데이터의 상태는 status_code 키를 사용할 수 있습니다.<br /><br />

          200이 출력이 된다면 성공했습니다.<br /><br />

          모든 status_code는
          <a href="https://www.restapitutorial.com/httpstatuscodes.html">여기</a
          >에서 배울 수 있습니다.<br /><br />

          쉽게 성공했는지만 확인하기 위하여 ok 키를 이용할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/ae32425775"
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
        <h2>머리글</h2>
        <p>
          머리글이란 리퀘스트를 할 때 어떤 리퀘스트인지 설명하는 데이터
          이름입니다.<br /><br />

          머리글은 영어로 header라고 하고 header 매개변수 안에 딕셔너리로 나만의
          머리글을 만드는 것이 가능합니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/30fb5ba090"
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

    <NaviBtn bef="request" aft="dundermethod" />
  </div>
</template>

<script>
export default {
  page: 'RequestMethodPage',
};
</script>
