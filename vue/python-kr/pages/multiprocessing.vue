<template>
  <div>
    <br />

    <div class="d-flex img-div">
      <div style="margin: auto;">
        <v-img alt="python-factory-picture" class="img-fluid"
          src="data:image/png;base64,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"
          max-width="200px" />
      </div>
      <div style="margin: auto;">
        <h1>멀티프로세싱이란?</h1>
        <p>
          멀티프로세싱이라는 것은 어떤 함수를 동시에 실행할 수 있는 모듈 이름입니다.<br /><br />
          <code>
          import multiprocessing
          </code>
        </p>
      </div>
    </div>

    <br /><br />

    <Header num="76" title="멀티프로세싱"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>예시</h1>
        <p>
          multiprocessing.Process() 메서드를 사용하여 멀티프로세싱을 만들 수 있고 start()를 사용하여 그 프로세스를 실행할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe src="https://trinket.io/embed/python3/bbf4c84765" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>주의할 것</h1>
        <p>
          예시에서 if __name__ == "__main__ 문을 사용하는 것이 필수입니다.<br /><br />

          <h2>순서</h2>
          1. p1 프로세스가 만들어집니다.<br />
          2. p2 프로세스가 만들어집니다.<br />
          3. p1, p2 프로세스가 시작됩니다.<br />
          4. Done! 이 출력이 되고 p1, p2가 가지고 있는 표적 함수가 실행됩니다.<br /><br />

          <h2>daemon, name</h2>
          daemon과 name 키는 스레드와 같습니다.<br /><br />

          <h2>terminate()</h2>
          terminate()는 멀티프로세싱을 멈춥니다.<br /><br />

          <code>
          p1 = multiprocessing.Process(target=threTime, args=(10, ))<br /><br />
          p1.start()<br />
          p1.terminate()
          </code>
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="threadmethod" slink="counter"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>
