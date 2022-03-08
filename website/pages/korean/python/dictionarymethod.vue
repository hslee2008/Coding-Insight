<template>
  <div>
    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SaJzwva53zo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <br />

    <Header type="파이썬" num="22" title="딕셔너리 메서드" />

    <div>
      <div>
        <h2>딕셔너리 쌍 추가하기</h2>
        <p>
          a = {1: "a", 2: "b"}라는 딕셔너리에 {3: "c"}라는 딕셔너리 쌍을
          추가시키는 방법 중 <mark>인덱싱</mark>을 사용하는 방법이 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/bb91a39a67"
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
        <h2>딕셔너리 쌍 삭제하기</h2>
        <p>
          딕셔너리 요소를 삭제하는 방법은 매우 간단합니다.<br /><br />

          del 딕셔너리 이름[Key]를 입력하면 삭제할 수 있습니다.
        </p>
        <iframe
          src="https://trinket.io/embed/python3/1a3ca85630"
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
        <h2>딕셔너리 값 바꾸기</h2>
        <p>
          딕셔너리 Key의 값을 바꾸고 싶다면 딕셔너리에서 Key를 선택한 후 새로운
          값을 입력하면 됩니다. CODE1에서 확인하세요.<br /><br />

          한 번에 많은 Key의 값을 바꾸고 싶다면 update() 메서드를 사용하여
          update() 함수 안에 또 다른 딕셔너리를 입력하면 됩니다. CODE2에서
          확인하세요.<br /><br />

          만일 새로운 딕셔너리 안에 새로운 key가 있다면 새로운 key를 만들고 이미
          있다면 그 key의 값을 바꿉니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/c093c433f6"
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
        <h2>get()</h2>
        <p>
          딕셔너리에서 Key의 Value를 찾기 위하여 get()라는 메서드를 사용할 수
          있습니다.<br /><br />

          첫 번째 매개변수에는 아이템의 값을 넣고 두 번째는 만일 그 값이
          딕셔너리에 존재하지 않는다면 출력될 값을 입력하면 됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/c250d6c262"
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

    <NaviBtn bef="dictionary" aft="zipping" />
  </div>
</template>
