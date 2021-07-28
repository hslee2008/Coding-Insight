# Iterable
for 반복문을 사용하여 리스트에 있는 아이템을 순환하며 하나씩 선택하여 사용할 수 있습니다. 이런 순환을 Iterable(이 터 러블)이라고 합니다.

다음은 이 터 러블즈의 예시입니다.

```
for i in [1, 2, 3]:
  print(i)
```

다음은 for 반복문을 줄인 코드입니다. 리스트 안에 for 반복문 코드가 있습니다. for 키워드 전에는 돌려주는 값이고 그다음은 원래 for 반복문 형태와 같습니다.

```
myList = [x * x for x in range(3)]

for i in myList:
  print(i)
```

이터러블은 (for + 변수 + in + 데이터 형태)의 형태를 뜻합니다. 만일을 원하는 아이템의 리스트를 선택하여 사용할 때는 좋지만 아주 큰 양의 집합을 순환할 때는 비효율적입니다.

# Generator
Generator(제너레이터)는 이터러블과 같다고 할 수 있습니다. 하지만 데이터(예: 리스트)를 만든 후 바로 삭제를 합니다. myList를 사용해서 for 반복문을 다시 실행할 수 없습니다.

```
myList = (x * x for x in range(3))

for i in myList:
  print(i)
```

# YIELD
Yield는 return과 비슷합니다. 다음과 같은 예시를 보겠습니다.

```
def myGenerator():
  myList = range(3)
  for i in myList:
    yield i + 1

myGenerator = myGenerator()

for i in myGenerator:
  print(i)
```

1. 먼저, 제너레이터 함수를 만듭니다.
2. 다음에 제너레이터 함수 안에 for 반복문을 넣은 후 yield 키워드를 사용하여 제너레이터 함수를 사용할 때 되돌려지는 리스트를 만듭니다.
3. 변수 안에 되돌려지는 리스트를 만듭니다.
4. for 반복문을 만듭니다.
