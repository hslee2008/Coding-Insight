# iter()와 next()
iter() 메서드를 사용하면 for 반복문을 대신할 수 있습니다.

```
i = iter(["하나", "둘", "셋", "넷"])

print(i.next())
```

iter() 함수를 사용하면 for 반복과 비슷한 이터러블을 만듭니다.

next() 메서드를 사용하면 i의 값을 하나하나 돌려줍니다. 만일 다시는 값이 없다면 에러를 만듭니다.

# range()
range()는 for 반복문을 사용할 때 매우 유용합니다. range() 함수는 숫자로 구성된 리스트를 돌려주는 함수입니다.

range(start, stop, step)이 있습니다.

start는 숫자의 시작입니다.
stop은 숫자의 끝입니다
step은 숫자 간의 간격입니다.


```
for i in range(1, 10, 2):
  print(i, end=" ")
```


# groupby()
groubpy()는 리스트값에서 그룹을 만드는 역할을 하는 매우 중요한 함수입니다.

```
import itertools

mainList = itertools.groupby(["Hyunseung", "Hyunseung Lee", "Lee", "Lee"])
mainDict = {}

for key, group in mainList:
  mainDict[key] = list(group)

print(mainDict)
```

groupby() 메서드는 리스트에서 같은 값을 모아서 key(값)에 리스트를 저장합니다. 그래서 mainList 안에서 key와 group을 가지고 오고 mainDict에 key가 group의 리스트로 입력하면 잘 데이터가 정리됩니다.

```
{'Hyunseung': ['Hyunseung'], 'Hyunseung Lee': ['Hyunseung Lee'], 'Lee': ['Lee', 'Lee']}
```
