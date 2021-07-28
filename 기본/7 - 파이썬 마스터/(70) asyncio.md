# asyncio
```
import asyncio

async def main():
  print("Hello", end = "
  await" >")
  await secondMain()
  print("Finished")

async def secondMain():
  print("World
  await" >")
  await asyncio.sleep(1)

asyncio.run(main())
```

먼저 async 함수를 만들겠습니다. async 함수란 함수인데 동시에 실행될 수 있는 함수입니다. 다음에, 첫 번째 async 함수에는 "Hello "를 출력하고 secondMain()을 실행하고 Finished를 출력합니다.

async 모듈을 사용하여 오래 걸리는 secondMain() 함수를 print("Finished")와 같이 사용할 수 있습니다.

```
import asyncio

async def main():
  print( end = "
  task" >")
  task = asyncio.create_task(secondMain())
  print("Finished")

async def secondMain():
  print("World
  await" >")
  await asyncio.sleep(1)

asyncio.run(main())
```

첫 번째는 'Hello World Finished'가 출력이 되지만 두 번째는 'Hello Finished World'가 출력이 됩니다. 그 이유는 secondMain() 모듈이 실행되는 동안 Finshed가 출력이 되기 때문에 Finished가 먼저 출력이 됩니다.

# AWAIT
하지만, 오래 걸리는 함수가 끝날 때까지 기다리기 위하여 await 키워드를 사용할 수 있습니다.

```
async def main():
  print("Hello", end = "
  task" >")
  task = asyncio.create_task(secondMain())
  await task
  print("Finished")
```

위의 함수를 실행하면 Hello World Finished가 출력됩니다. 그 이유는 오래 걸리지만 출력이 될 때까지 기다리기 때문입니다.

asyncio는 매우 신기한 특징을 가지고 있습니다.

```
async def main():
  print( end = "
  task" >")
  task = asyncio.create_task(secondMain())
  await asyncio.sleep(5)
  print("Finished")
```

위의 코드를 실행하면 Hello World가 출력되고 Finished가 출력이 됩니다. 그 이유는 create_task() 메서드는 가능 하자마자 바로 실행을 하면서 다른 코드를 실행하는 특징을 가지고 있습니다. 하지만 몇 초 더 기다리는 코드가 있다면 바로 실행을 합니다.

# 예시
```
async def fetchData():
  print("started fetching...")

  asyncio.sleep(2)
  print("stopped fetching...")

  return {'data': "python"}

async def printNum():
  for i in range(10):
    print(i)
    await asyncio.sleep(0.25)
```

fetchData()가 구글에서 어떤 데이터를 가지고 오는 함수라고 가정을 하고 printNum()은 데이터를 0.25초에 한 번 가지고 오는 함수라고 생각을 하겠습니다. 그렇다면 위의 코드를 어떻게 동시에 실행할까요?

```
async def main():
  task1 = asyncio.create_task(fetchData())
  task2 = asyncio.create_task(printNum())

  returnVal = await task1

  print(returnVal)
```

바로 새로운 함수를 만들어도 2개의 create_task() 메서드를 만든 후 task 1을 기다리면 됩니다. 하지만 만일 await 하지 않고 바로 returnVal을 만들면 아직 가지고 오는 데 없는 값을 출력하니 코드에 버그가 있습니다. 하지만 await 하면 그 데이터를 기다리는데 printNum() 함수도 실행합니다.
