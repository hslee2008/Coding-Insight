<template>
  <div>
    <div>
      <h2>스레드란?</h2>
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

    <Header type="파이썬" num="73" title="스레드" />

    <div>
      <div>
        <h2>스레드 여러 개</h2>
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
            title="Trinket Python"
            :src="`${trinket}cf48124315`"
            height="356"
            loading="lazy"
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
        <h2>파이썬 threading</h2>
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
      title="Trinket Python"
      :src="`${trinket}a21ef7102c`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="name" aft="complexthread" />
  </div>
</template>

<script>
  export default {
    page: 'ThreadPage',
  };
</script>
