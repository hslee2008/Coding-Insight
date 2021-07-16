# JSON
JSON이란 JavaScript Object Notation이라고 데이터를 정리하는 형태 중 하나입니다. 대부분 JSON은 자바스크립트와 같이 사용되지만 파이썬과도 사용이 가능합니다.

JSON은 모듈입니다. 그래서 먼저 모듈을 불러와야 합니다. JSON은 딕셔너리와 비습하지만 항상 다 "" 안에 있어야하고 문자, 딕션어리, 리스트, 튜플, 숫자, 분리언, 그리고 None을 제외하고 다른 데이터 행태가 존재하면 안됩니다.

```
import json
someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}'
```

# JSON을 딕셔너리로
json.loads() 메서드 안에 JSON 데이터 행태를 입력하면 파이썬 딕셔너리로 전환됩니다.

```
import json
someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}'

print(json.loads(someJson)["name"]) #Hyunseung Lee가 출력이 됩니다
```

# 딕셔너리를 JSON으로
파이썬 딕셔너리를 JSON으로 전환하기 위하여 json.dumps() 메서드를 이용해보겠습니다. indent는 인덴팅의 값을 정합니다.

```
import json
someJson = {"name": "Hyunseung Lee", "bornIn": "2008", "gender": "male"}

print(json.dumps(someJson, indent=2)) #딕션어리가 문자처럼 출력이 되고 인덴팅이 2입니다.

print(json.dumps(someJson, indent=2, sort_keys=True)) #딕션어리의 키를 알파벳 순서러 정렬
```
