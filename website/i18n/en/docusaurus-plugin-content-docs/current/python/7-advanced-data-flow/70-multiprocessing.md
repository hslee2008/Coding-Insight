---
sidebar_position: 70
id: 'multiprocessing'
---

# 멀티프로세싱

멀티프로세싱이라는 것은 어떤 함수를 동시에 실행할 수 있는 모듈 이름입니다.

```py
import multiprocessing
```

## 예시

`multiprocessing.Process()` 메서드를 사용하여 멀티프로세싱을 만들 수 있고 `start()`를 사용하여 그 프로세스를 실행할 수 있습니다.

<iframe title="Python Playground" src="https://trinket.io/embed/python3/bbf4c84765" height="400" />

## 주의할 것

예시에서 `if __name__ == "__main__"`문을 사용하는 것이 필수입니다.

### 순서

1. `p1` 프로세스가 만들어집니다.
2. `p2` 프로세스가 만들어집니다.
3. `p1`, `p2` 프로세스가 시작됩니다.
4. `Done!` 이 출력이 되고 `p1`, `p2가` 가지고 있는 표적 함수가 실행됩니다.

### daemon, name

`daemon`과 `name` 키는 스레드와 같습니다.

### terminate()

`terminate()`는 멀티프로세싱을 멈춥니다.

```py
p1 = multiprocessing.Process(target=threTime, args=(10, ))
p1.start()
#highlight-next-line
p1.terminate()
```
