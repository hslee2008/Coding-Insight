# Escape Characters

다음 코드는 문제가 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python/cb2f50d77b"
  height="400"
/>

이스케이프는 탈출하다를 뜻합니다.

이스케이프 문자는 에러를 피하는 것을 도와줍니다.

옆에 있는 예시를 보겠습니다.

이 코드를 실행하면 에러가 생깁니다.

그 이유는 파이썬은 첫 번째 `""`이 페어이고 다음의 `" 문자란..."`이 또 다른 문자라고 인식합니다.

:::info 모든 이스케이프는 다 `\`를 앞에 붙여서 이스케이프 문자라고 파이썬 컴파일러에게 알려줍니다. :::

<iframe
  loading="lazy"
  className="youtube"
  src="https://www.youtube.com/embed/X3D4VTMiLL4"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
/>

## \'와 \"

`\'`와 `\"`는 각각 `', "`와 충돌하지 않게 도와주는 문자입니다.

`\'`는 `'`의 이스케이프 문자로 다릅니다.

그래서 `''` 안에 에러 없이 `\'`를 사용할 수 있습니다.

`\"`도 `""` 안에서 문제 없이 사용이 가능합니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python/5d4e5680b4"
  height="400"
/>

:::note 컴퓨터에 따라 W와 선이 그어진 모양으로 보일 수 있고 / 옆으로 뒤집어진 모양으로 보일 수도 있습니다. :::

## \n

\n는 엔터와 같습니다.

`""`와 `''`안에는 항상 한 줄 안에만 값이 있어야 합니다.

`""" """` 또는 `''' '''`를 사용하지 않고 `\n`를 사용하여 새로운 줄을 만들 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python/c420acd5f8"
  height="400"
/>

## \t

탭은 스페이스바를 4번 누른 것과 같습니다.

탭은 우리 자판에서 tab 버튼을 누르면 됩니다.

```py
essay = "안녕하세요.\t저는 파이썬을 코딩할 줄 알아요..."
```

## r'문자' 형태

파이썬에서 문자인데 이스케이프 문자를 사용하지 않는 문자를 만들고 싶다면 어떻게 할까요?

문자 `''` 앞에 `'r'`을 붙이면 됩니다.

`r`은 rawstring의 약자로 이스케이프 문자를 사용하지 않겠다고 선언하는 역할을 합니다.

옆에 있는 예시를 보면 `\n`은 새로운 줄로 출력되지 않고 `\n`로 출력됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python/6dc36d8ca4"
  height="400"
/>
