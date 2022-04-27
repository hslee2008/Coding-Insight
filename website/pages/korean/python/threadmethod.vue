<template>
  <div>
    <Header type="파이썬" num="75" title="스레드 메서드" />

    <div>
      <div>
        <h2>데이먼 (daemon)</h2>
        <p>
          데이먼은 배경에서 실행되는 스레드를 뜻합니다.<br /><br />

          파이썬에서는 프로그램이 끝나면 바로 끝나는 스레드를 뜻합니다. 만일
          데이먼 스레드가 있다면 다른 스레드가 다 멈출 때까지 기다리고 바로
          없어집니다.<br /><br />

          마지막으로 실행이 되는 스레드를 뜻합니다.<br /><br />

          데이먼 스레드는 처음에 스레드를 만들 떼 선정할 수 있습니다.<br /><br />

          <code v-highlight class="python">
            mainThread = threading.Thread(target = mainFunc, daemon = True)
          </code>

          스레드가 데이먼 스레드인지 확인하는 방법은 daemon 키를 사용하는 방법이
          있습니다.<br /><br />

          <code v-highlight class="python">
            mainThread = threading.Thread(target = mainFunc, daemon = True)<br />
            print(mainThread.daemon) # True가 출력됩니다
          </code>

          스레드를 나중에 데이먼으로 바꾸는 것도 가능하지만 스레드가 실행하고
          있으면 안 됩니다.<br /><br />

          <code v-highlight class="python"> mainThread.setDaemon(True) </code>
        </p>
      </div>
    </div>
    <iframe :src="`${trinket}4f89284925`" height="356" loading="lazy" />

    <Navigation bef="complexthread" aft="multiprocessing" />
  </div>
</template>

<script>
  export default {
    page: 'ThreadMethodPage',
  };
</script>
