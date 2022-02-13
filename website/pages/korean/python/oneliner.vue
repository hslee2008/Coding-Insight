<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>왜 코드를 한 줄에 넣어야 할까요?</h2>
        <p>
          가끔 코드를 한 줄 안에 넣어야 할 때가 있습니다. 예를 들어 기기의
          용량이 적다면 최대한 효율적으로 코드를 줄여야 합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header type="파이썬" num="38" title="코드를 한 줄에" />

    <QuadSpace />

    <div>
      <div>
        <h2>; 세미콜론</h2>
        <p>
          다른 언어(예: 자바스크립트)에서는 세미콜론(;)이 있습니다.<br /><br />
          파이썬에서도 있지만 자주 사용되지는 않습니다.<br /><br />
          세미콜론은 코드 사이에 넣는 키워드입니다.<br /><br />
          코드를 한 줄 안에 넣기 위하여 다음과 같은 방법을 사용할 수
          있습니다.<br /><br />
          하지만 이 방법은 파이썬에서 자주 사용되지 않습니다. 꼭 필요할 때만
          사용하세요.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/724bf9a522"
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
          <h2>세미콜론에 대한 추가적인 설명</h2>
          <p>
            세미콜론은 파이썬에서 사용해도 되고 안 해도 됩니다. 원한다면 한 줄에
            파이썬 코드를 넣지 않아도 코드의 끝에 붙일 수 있습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/ca6f756679"
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

    <NaviBtn bef="while" aft="etcfunction" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'OnelinerPage',
}
</script>
