# asyncio

```
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

First, we made an async function.

An async function is a function that can contain the 'await' keyword.

Await keyword will wait till the function after the keyword finishes.

```
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

The example above, above will print "Hello World Finished" while the one above prints "Hello Finished World:.

This is because since we created a task using asyncio, the secondMain() function is skipped as it takes long time to run it and prints "Finished" first.

# AWAIT

Using the await keyword, Python will wait till that is finished.

```
async def main():
  print("Hello", end = ">")
  task = asyncio.create_task(secondMain())
  await task
  print("Finished")
```

If we run the code above,  "Hello World Finished" is printed.

This is because Python will wait till secondMain() finishes.

```
async def main():
  print("Hello", end = ">")
  task = asyncio.create_task(secondMain())
  await asyncio.sleep(5)
  print("Finished")
```

If we run the code above, "Hello World" is printed then "Finished" appears in the console.

# Example

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

Let's assume that fetchData() is a function that takes a long time and printNum() takes about 0.25 seconds.

How can we run thetwo function above at the same time?

```
async def main():
  task1 = asyncio.create_task(fetchData())
  task2 = asyncio.create_task(printNum())

  returnVal = await task1

  print(returnVal)
```

If we create two task and await the first one, the two can run at the same time.
