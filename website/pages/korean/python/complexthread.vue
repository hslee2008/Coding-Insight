<template>
  <div>
    <br />

    <div>
      <div>
        <h1>파이썬에서 조금 더 복잡한 스레드 예시</h1>
        <p>
          이제 조금 더 복잡한 스레드 예시를 관찰하겠습니다.<br /><br />

          위의 예시를 실행하면 다음과 같은 순서로 실행이 됩니다.<br /><br />

          1. 첫 번째 스레드 (파일의 코드가 실행되는 곳)에서 mainThread를
          만듭니다.<br />
          2. 다음에 thread1 함수를 실행합니다.<br />
          3. Hello를 출력하고 1초 기다립니다.<br />
          4. 코어에서 1초 시간이 있으니 바로 threading.active_count()를
          실행합니다.<br />
          5. 다음에 첫 번째 스레드에 있는 time.sleep(1) 메서드를 실행합니다.<br />
          6. 다음에 "Finally"를 출력합니다. 그 이유는 0.95가 1보다 더 작기
          때문입니다.<br />
          7. 첫 번째 스레드에 있는 코드를 다 실행했으니 이제 스레드 2에 있는
          Done! 과 0.9초 기다리고 Now It is Really Done! 을 출력합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/d14f421fa3"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <Br /><br />

    <Header num="74" title="스레드 (자세히)"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>.join 메서드</h1>
        <p>
          asyncio에서 배웠듯이 await 키워드는 async 함수가 끝날 때까지
          기다립니다.<br /><br />

          비슷하게 스레드에서도. join() 메서드를 사용하면
          <mark>스레드에 있는 코드가 끝날 때까지 기다립니다</mark>.<br /><br />

          밑의 코드는 5 스텝까지 같지만 mainThread.join() 메서드가 있어 Done! 과
          Now It is Really Done! 이 먼저 출력이 되고 Finally! 가 출력이 됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/4b10ddd953"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace />

    <BeforeNextButton flink="thread" slink="threadmethod"></BeforeNextButton>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ComplexThreadPage',
}
</script>
