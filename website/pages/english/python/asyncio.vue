<template>
  <div>
    <br />

    <Header num="71" title="asyncio"></Header>

    <QuadSpace />

    <div>
      <div>
        <h2>asyncio</h2>
        <p>
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

          First, we made an async function.<br /><br />

          An async function is a function that can contain the 'await'
          keyword.<br /><br />

          Await keyword will wait till the function after the keyword
          finishes.<br /><br />

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

          The example above, above will print "Hello, World! Finished" while the
          one above prints "Hello Finished World:.<br /><br />

          This is because since we created a task using asyncio, the
          secondMain() function is skipped as it takes long time to run it and
          prints "Finished" first.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>AWAIT</h2>
        <p>
          Using the await keyword, Python will wait till that is finished.<br /><br />

          <code>
            async def main():<br />
            &nbsp;&nbsp;print("Hello", end = ">")<br />
            &nbsp;&nbsp;task = asyncio.create_task(secondMain())<br />
            &nbsp;&nbsp;await task<br />
            &nbsp;&nbsp;print("Finished")
          </code>

          If we run the code above, "Hello, World! Finished" is printed.<br /><br />

          This is because Python will wait till secondMain() finishes.<br /><br />

          <code>
            async def main():<br />
            &nbsp;&nbsp;print("Hello", end = ">")<br />
            &nbsp;&nbsp;task = asyncio.create_task(secondMain())<br />
            &nbsp;&nbsp;await asyncio.sleep(5)<br />
            &nbsp;&nbsp;print("Finished")
          </code>

          If we run the code above, "Hello, World!" is printed then "Finished"
          appears in the console.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Example</h2>
        <p>
          <code>
            async def fetchData():<br />
            &nbsp;&nbsp;print("started fetching...")<br />
            &nbsp;&nbsp;asyncio.sleep(2)<br />
            &nbsp;&nbsp;print("stopped fetching...")<br /><br />

            &nbsp;&nbsp;return {'data': "python"}<br /><br />

            async def printNum():<br />
            &nbsp;&nbsp;for i in range(10):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(i)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;await asyncio.sleep(0.25)
          </code>

          Let's assume that fetchData() is a function that takes a long time and
          printNum() takes about 0.25 seconds. How can we run thetwo function
          above at the same time?

          <code>
            async def main():<br />
            &nbsp;&nbsp;task1 = asyncio.create_task(fetchData())<br />
            &nbsp;&nbsp;task2 = asyncio.create_task(printNum())<br /><br />

            &nbsp;&nbsp;returnVal = await task1<br /><br />

            print(returnVal)
          </code>

          If we create two task and await the first one, the two can run at the
          same time.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="asynchronous" aft="name" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'AsyncioPage',
};
</script>
