<template>
  <div>
    <br />

    <Header num="71" title="asyncio"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>asyncio</h1>
        <p>
          먼저 async 함수를 만들겠습니다.<br /><br />

          <code>
            import asyncio<br /><br />

            async def main():<br />
            &nbsp;&nbsp;print("Hello")<br />
            &nbsp;&nbsp;await secondMain()<br />
            &nbsp;&nbsp;print("Finished")<br /><br />

            async def secondMain():<br />
            &nbsp;&nbsp;print("World")<br />
            &nbsp;&nbsp;await asyncio.sleep(1)<br /><br />

            asyncio.run(main())
          </code>

          async 함수란 함수인데 하나하나 실행될 수 있는 함수입니다.<br /><br />

          다음에, 첫 번째 async 함수에는 "Hello "를 출력하고 secondMain()을
          실행하고 Finished를 출력합니다.<br /><br />

          async 모듈을 사용하여 오래 걸리는 secondMain() 함수를
          print("Finished")와 같이 사용할 수 있습니다.<br /><br />

          <code>
            import asyncio<br /><br />

            async def main():<br />
            &nbsp;&nbsp;print("Hello")<br />
            &nbsp;&nbsp;task = asyncio.create_task(secondMain())<br />
            &nbsp;&nbsp;print("Finished")<br /><br />

            async def secondMain():<br />
            &nbsp;&nbsp;print("World")<br />
            &nbsp;&nbsp;await asyncio.sleep(1)<br /><br />

            asyncio.run(main())
          </code>

          첫 번째는 'Hello World Finished'가 출력이 되지만 두 번째는 'Hello
          Finished World'가 출력이 됩니다.<br /><br />

          그 이유는 secondMain() 모듈이 실행되는 동안 Finshed가 출력이 되기
          때문입니다.
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>AWAIT</h1>
        <p>
          하지만, 오래 걸리는 함수가 끝날 때까지 기다리기 위하여 await 키워드를
          사용할 수 있습니다.<br /><br />

          <code>
            async def main():<br />
            &nbsp;&nbsp;print("Hello")<br />
            &nbsp;&nbsp;task = asyncio.create_task(secondMain())<br />
            &nbsp;&nbsp;await task<br />
            &nbsp;&nbsp;print("Finished")
          </code>

          위의 함수를 실행하면 Hello World Finished가 출력됩니다<br /><br />

          그 이유는 오래 걸리는 함수라도 출력이 전부 될 때까지 기다리기
          때문입니다.<br /><br />

          asyncio는 매우 신기한 특징을 가지고 있습니다.<br /><br />

          <code>
            async def main():<br />
            &nbsp;&nbsp;print("Hello")<br />
            &nbsp;&nbsp;task = asyncio.create_task(secondMain())<br />
            &nbsp;&nbsp;await asyncio.sleep(5)<br />
            &nbsp;&nbsp;print("Finished")
          </code>

          위의 코드를 실행하면 Hello World가 출력되고 Finished가 출력이
          됩니다.<br /><br />

          그 이유는 create_task() 메서드는 두 개의 다른 코드를 동시에 실행시키는
          특징을 가지고 있기 때문입니다.<br /><br />

          하지만 몇 초 기다리는 코드가 있다면 그 다음에 실행이 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>예시</h1>
        <p>
          <code>
            async def fetchData():<br />
            &nbsp;&nbsp;print("started fetching...")<br /><br />

            &nbsp;&nbsp;asyncio.sleep(2)<br />
            &nbsp;&nbsp;print("stopped fetching...")<br /><br />

            &nbsp;&nbsp;return {'data': "python"}<br /><br />

            async def printNum():<br />
            &nbsp;&nbsp;for i in range(10):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(i)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;await asyncio.sleep(0.25)
          </code>

          fetchData()가 구글에서 어떤 데이터를 가지고 오는 함수라고 가정을 하고
          printNum()은 데이터를 0.25초에 한 번 가지고 오는 함수라고 생각을
          하겠습니다.<br /><br />

          그렇다면 위의 코드를 어떻게 동시에 실행할까요?<br /><br />

          <code>
            async def main():<br />
            &nbsp;&nbsp;task1 = asyncio.create_task(fetchData())<br />
            &nbsp;&nbsp;task2 = asyncio.create_task(printNum())<br /><br />

            &nbsp;&nbsp;returnVal = await task1<br /><br />

            print(returnVal)
          </code>

          바로 새로운 함수를 만들고 2개의 create_task() 메서드를 만든 후 task
          1을 기다리면 됩니다.<br /><br />

          하지만 만일 await 하지 않고 바로 returnVal을 만들면 아직 없는 값을
          출력하는 것이기 때문에 코드에 버그가 생깁니다.<br /><br />

          await을 하면 그 데이터를 기다리는데 printNum() 함수도 실행합니다.
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="beedongee" slink="name"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>
