# What is Anonymous Function?

Anonymous function is a type of function that does not have a name.

In another word, anonymous functions are created and used right away while normal functions are created for later use.

# Lambda

To declare

'lambda' 뒤에 매개변수가 오고 변환할 값이 매개변수와 ':' 뒤에 있으면 익명 함수 형태가 완성됩니다.

```
x = lambda a: 10*a

print(x(10))
```

1개 이상 매개변수를 사용하고 싶다면 변수 사이에 ','를 삽입하세요.

```
x = lambda a,b: a*b

print(x(10, 30))
```

# 익명 함수와 함수 비교

익명 함수는 다음 예시와 같습니다.

```
x = lambda a,b: a*b

function x(a, b):
  return a*b
```

이름이 있는 함수에서는 return 키워드가 사용이 되는 것을 확인할 수 있습니다. 그래서 익명 함수는 항상 돌아오는 값이 있어야 합니다.
`
