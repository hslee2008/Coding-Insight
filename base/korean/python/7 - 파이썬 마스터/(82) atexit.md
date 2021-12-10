# 파이썬 함수 등록

파이썬에서 어떤 코드가 실행이 끝나면 어떤 함수를 실행하는 것이 가능합니다.

atexit 모듈을 사용하여 함수를 '등록'할 수 있습니다.

만일 atexit 모듈을 사용하지 않고 그냥 파일 끝에 코드를 넣는다면 exit(), quit() 등 그 상황에서 끝내버리는 함수들을 대비할 수 없습니다.

그래서 atexit 모듈이 있습니다.

# register()

파이썬을 이용하여 파일 에디터를 만들어보겠습니다.

```
with open(input("Full path: "), "w") as f:
  f.write(input("New Content: "))
```

만일 파이썬이 파일에 입력하는 동안 보도록 ctrl+c를 눌러 쓰고 있을 때 나가면 어떻게 해야 할까요?

atexit.register() 메서드를 이용하여 파일 작업을 마무리 지울 수 있습니다.

```
import atexit

def informAbort(f):
  with open(f, "w") as file:
    file.write("User aborted. ERROR")

pathFile = input("Full path:")
atexit.register(informAbort, f=pathFile)

with open(pathFile, "w") as f:
  f.write(input("New Content: "))
```

또는 데코레이터를 사용하여 간단히 할 수 있습니다.

```
import atexit

@atexit.register
def informAbort(f):
  print("User aborted. High chance error will occur")

with open(pathFile, "w") as f:
  f.write(input("New Content: "))
```
