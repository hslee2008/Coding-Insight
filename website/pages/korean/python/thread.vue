<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>스레드란?</h1>
        <p>
          설명할 것이 조금 많습니다.<br /><br />

          먼저, 모든 컴퓨터에서는 CPU라는 것이 있습니다. CPU는 모든 커맨드가 이
          물건을 지나면서 실행이 됩니다.<br /><br />

          CPU 안에는 코어라는 것이 몇 개 있습니다. 코어가 실제로 CPU 안에서
          커맨드를 읽어서 실행합니다.<br /><br />

          코어에는 스레드가 달려있습니다. 코어는 커맨드를 읽을 때 스레드를 읽고
          실행합니다.<br /><br />

          컴퓨터는 매우 빨리 정보를 처리할 수 있지만 코어는 하나하나 스레드만
          실행할 수 있습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,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"
          max-width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header num="73" title="스레드"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>스레드 여러 개</h1>
        <p>
          만일 스레드 여러 개가 코어에 달려있다면 어떻게 될까요?<br /><br />

          코어는 한 스레드를 하나하나씩 실행할 수 있어서 여러 개가 있다면 먼저
          스레드 1에서 들어오는 커맨드를 실행하고 넘어갑니다.<br /><br />

          하지만 만일 2개 이상이 있다면 가장 중요한 것을 먼저 실행하고 다른 것을
          기다립니다.<br /><br />

          파이썬에서 스레드를 지정하는 것이 가능합니다. 스레드 1을 만들고 스레드
          2를 만들려면 threading이라는 모듈을 이용할 수 있습니다. 먼저, 원리부터
          설명하겠습니다.<br /><br />

          만일 스레드가 2개가 있고 하나는 "Hello"를 출력하고 1초 기다리고
          "Done"을 출력합니다. 다른 하나는 "World"를 출력합니다.<br /><br />

          <iframe
            src="https://trinket.io/embed/python3/cf48124315"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          />

          <br /><br />만일 thread 1을 실행하고 thread 2를 실행하면 Hello done
          World가 출력됩니다.<br /><br />

          그 이유는 아직 스레드를 1에서만 실행하고 있기 때문입니다.<br /><br />

          모든 작업은 하나씩 실행을 해야 합니다.<br /><br />

          하지만 threading 모듈을 이용하여 다른 스레드를 만든다면 먼저 thread
          1이 실행되고 1초 기다릴 때 코어는 thread 2를 실행합니다. 그러면 매우
          효율적입니다.<br /><br />

          또한, 만일 한 스레드에서 버그나 문제가 있다면 그 스레드에 있는 코드는
          멈추지만 다른 스레드에 있는 코드는 계속 실행이 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>파이썬 threading</h1>
        <p>
          1. 파이썬 모듈 threading을 가지고 옵니다. 다음에, time도 가지고
          옵니다.<br />
          2. 그리고 thread 1과 thread 2 함수를 만들겠습니다.<br />
          3. 그리고 스레드를 만들겠습니다.<br /><br />

          밑의 코드는 threading.Thread() 메서드를 사용하여 스레드를 만들고
          함수를 입력합니다. 함수가 매개변수일 때는 ()를 사용하지 않습니다.<br /><br />

          ()를 사용할 수 없으니 args 안에 매개변수 튜플을 사용할 수 있습니다.<br /><br />

          start() 메서드를 사용하여 스레드를 실행시킬 수 있습니다.<br /><br />

          start()를 실행하지 않는다면 thread 1은 실행되지 않고 스레드의
          수(active_count())도 1입니다. 만일 start()를 사용한다면 thread 1은
          실행이 됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/a21ef7102c"
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

    <NaviBtn flink="name" slink="complexthread" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: "ThreadPage"
}
</script>
