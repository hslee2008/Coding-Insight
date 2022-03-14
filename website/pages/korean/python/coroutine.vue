<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>코루틴 만들기</h2>
        <p>
          아주 아주 오래전에 for 반복문에서 yield 키워드에 대하여 배웠습니다.<br /><br />

          하지만 yield 키워드가 값만 돌려주는 것이 아니라 코루틴이라는 것을 쉽게
          만들 수 있게 도와줍니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://i.pinimg.com/736x/1c/86/84/1c8684b06bc7ad1e1f6b7b0099d87300.jpg"
          max-width="200px"
        />
      </div>
    </div>

    <Header type="파이썬" num="84" title="코루틴" />

    <div>
      <div>
        <h2>yield - 코루틴</h2>
        <p>
          코루틴은 먼저 함수를 만듭니다. 다음에, 변수를 만들고 안에 while
          반복문을 사용하여 yield a (a 값 찾기)가 기본 모형입니다.<br /><br />

          먼저, 변수 안에 코루틴을 저장하고 기본값을 입력합니다.<br /><br />

          다음에, __next__() 함수를 사용하여 코루틴을 실행시킵니다.<br /><br />

          send() 메서드를 이용하면 yield에서 입력을 받을 수 있습니다.<br /><br />

          마지막으로 close()를 사용하여 코루틴을 끝냅니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/fe3f6eff37"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <NaviBtn bef="atexit" aft="spam" />
  </div>
</template>
