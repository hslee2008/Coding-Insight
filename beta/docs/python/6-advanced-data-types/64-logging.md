---
sidebar_position: 64
id: 'logging'
---

# 로깅

파이썬 프로그램에서 문제가 발생하여 그 문제를 확인하고 싶을 때 값을 콘솔에 프린트하는 행위를 로깅이라고 합니다.

파이썬에서는 따로 로깅 메서드가 없으므로 logging 모듈을 사용해야합니다.

그 로그 파일을 만드려면 `basicConfig()` 메서드를 먼저 사용해서 파일 이름을 넣으세요!

```py
import logging
logging.basicConfig(filename="log.log")
```

## INFO

INFO는 INFORMATION의 약자이고 정보를 뜻합니다.

파이썬 코드를 테스트할 때 정보를 얻고 싶다면(예: 어떨 때의 값) `logging.info()` 메서드를 사용할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/9d4fc4880a" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## WARNING

warning은 사용자에게 에러가 났다는 사실을 경고하는 코드입니다.

<iframe src="https://trinket.io/embed/python3/784c0fc5a6" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## ERROR와 EXCEPTION

ERROR은 에러를 발생시키는 메서드입니다.

EXCEPTION은 예외를 뜻합니다.

위에서 설명한 ERROR 메서드와 비슷합니다.

<iframe src="https://trinket.io/embed/python3/f9687df6a4" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
