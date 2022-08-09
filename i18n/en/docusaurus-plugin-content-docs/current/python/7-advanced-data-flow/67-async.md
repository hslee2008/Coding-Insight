# 비동기

밥을 먹는데 숟가락과 포크를 같이 사용할 수 있고 하나씩 사용할 수도 있습니다.

비동기란 '동시에 일어나지 않는다'를 뜻입니다.

파이썬에서 비동기는 어떤 두 작업이 서로에게 영향을 주지 않게 하는 모듈입니다.

이를 이용하여 여러 문제들을 해결할 수 있습니다.

## 비동기 모듈

모듈을 가지고 오기 위하여 다음 코드를 실행하겠습니다.

```py
import asyncio
```

## 비동기 설명

다음 예시를 보겠습니다.

```py
print("Hello")
print("World")
```

위의 예시에서는 `print("Hello")`가 먼저 실행이 되고 다음에 `print("Word")`가 실행됩니다.

파이썬은 항상 한 함수를 실행하고 끝날 때까지 기다리고 넘어갑니다

하지만 만일 실행하는데 아주아주 오래 걸리는 코드가 있다고 가정을 해봅시다.

사용자가 앱을 실행하는데 오래 걸리는 함수 때문에 아무것도 할 수 없을 수 있습니다.

하지만 `asyncio`를 사용한다면 오래 걸리는 함수를 동시에 실행하는 것이 가능합니다.

## asyncio

먼저 async 함수를 만들겠습니다.

```py
import asyncio

async def main():
  print("Hello")
  await secondMain()
  print("Finished")

async def secondMain():
  print("World")
  await asyncio.sleep(1)
  asyncio.run(main())
```

`async` 함수란 함수인데 하나하나 실행될 수 있는 함수입니다.

다음에, 첫 번째 `async` 함수에는 `Hello `를 출력하고 `secondMain()`을 실행하고 `Finished`를 출력합니다.

`async` 모듈을 사용하여 오래 걸리는 `secondMain()` 함수를 `print("Finished")`와 같이 사용할 수 있습니다.

```py
import asyncio

async def main():
  print("Hello")
  task = asyncio.create_task(secondMain())
  print("Finished")

async def secondMain():
  print("World")
  await asyncio.sleep(1)
  asyncio.run(main())
```

첫 번째는 `'Hello, World! Finished'`가 출력이 되지만 두 번째는 `'Hello Finished World'`가 출력이 됩니다.

그 이유는 `secondMain()` 모듈이 실행되는 동안 `Finshed`가 출력이 되기 때문입니다.

## await

하지만, 오래 걸리는 함수가 끝날 때까지 기다리기 위하여 await 키워드를 사용할 수 있습니다.

```py
async def main():
  print("Hello")
  task = asyncio.create_task(secondMain())
  await task
  print("Finished")
```

위의 함수를 실행하면 `Hello, World! Finished`가 출력됩니다

그 이유는 오래 걸리는 함수라도 출력이 전부 될 때까지 기다리기 때문입니다.

asyncio는 매우 신기한 특징을 가지고 있습니다.

```py
async def main():
  print("Hello")
  task = asyncio.create_task(secondMain())
  await asyncio.sleep(5)
  print("Finished")
```

위의 코드를 실행하면 `Hello, World!`가 출력되고 `Finished`가 출력이 됩니다.

그 이유는 `create_task()` 메서드는 두 개의 다른 코드를 동시에 실행시키는 특징을 가지고 있기 때문입니다.

하지만 몇 초 기다리는 코드가 있다면 그 다음에 실행이 됩니다.

## 예시

```py
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

`fetchData()`가 구글에서 어떤 데이터를 가지고 오는 함수라고 가정을 하고 `printNum()`은 데이터를 0.25초에 한 번 가지고 오는 함수라고 생각을 하겠습니다.

그렇다면 위의 코드를 어떻게 동시에 실행할까요?

```py
async def main():
  task1 = asyncio.create_task(fetchData())
  task2 = asyncio.create_task(printNum())
  returnVal = await task1 print(returnVal)
```

바로 새로운 함수를 만들고 2개의 `create_task()` 메서드를 만든 후 task 1을 기다리면 됩니다.

하지만 만일 `await` 하지 않고 바로 `returnVal`을 만들면 아직 없는 값을 출력하는 것이기 때문에 코드에 버그가 생깁니다.

`await`을 하면 그 데이터를 기다리는데 `printNum()` 함수도 실행합니다.
