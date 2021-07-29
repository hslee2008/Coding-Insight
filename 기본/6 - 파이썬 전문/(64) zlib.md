# 파일 압축
파일을 압축하면 파일에 있는 내용의 용량이 많이 줄어듭니다. 어떻게 파일을 압축할까요?

파일에서는 반복되는 단어들이 많이 있습니다.

```
And miles to go before I sleep, and miles to go before I sleep.
```

miles, to, go, before, I, sleep 단어들은 2번 반복이 됩니다. 만일 이 파일 옆에 따로 딕셔너리를 만들어서 이 값들 대신 다른 값을 넣는다면 어떻게 될까요?

다음과 같은 딕셔너리를 만들 수 있습니다.

```
{
  "miles": 0,
  ": 1,
  "go": 2,
  "before": 3,
  "I": 4,
  "sleep": 5
}
```

위의 딕셔너리를 사용하여 파일을 압축한다면 다음과 같은 내용으로 바뀔 수 있습니다.

```
And 0 1 2 3 4 5, and 1 2 3 4 5
```

용량을 덜 차지합니다. 하지만, 딕셔너리 값도 저장을 해야 하니 아주 아주 큰 파일을 압축하는 것이 더 많은 용량을 줄일 수 있습니다.

# ZLIB 모듈
파이썬에서는 파일 또는 데이터 형태를 압출할 수 있는 모듈이 있습니다. 바로 glib이라는 모율입니다. zlib은 ZIP COMPRESSION LIBRARY의 약자입니다.

먼저, PIP을 이용하여 ZLIB를 내려받겠습니다.

> pip install zlib

다음에, 새로운 파일을 만들어 zlib 모듈을 가지고 오겠습니다.

```
import zlib
```

# ZLIB - 문자 압축하기
문자를 압축하겠습니다.

```
import zlib

mainString = b"And miles to go before I sleep, and miles to go before I sleep."
print(len(mainString))

compressedString = zlib.compress(mainString)
print(len(comprssedString))
```

설명을 시작하겠습니다.

1. 먼저, zlib 모듈을 가지고 옵니다.
2. 다음, 압축할 문자를 만듭니다. 이 문자는 byte 문자여야 하니 문자 앞에 'b'를 붙입니다.
3. 그리고, zlib.compress() 메서드를 이용하여 압축합니다.

위의 코드를 실행하면 63, 44 숫자가 나옵니다. 이처럼 63의 길이인 문자를 44인 문자로 바꾸기가 가능합니다.

# ZLIB - 문자 압축 level
문자 압축을 하는데 다양한 level이 있습니다. zlib에서는 총 10개의 level (0~9)이 있습니다.

0 - 가장 낮은 level로 압축을 하지 않습니다.
1 - 두 번쨰로 낮은 level로 압축을 조금 합니다. 스피드는 빠릅니다.
...
9 - 가장 높은 level로 압축은 많이 하지만 스프드는 느립니다.

```
import zlib

mainString = b"And miles to go before I sleep, and miles to go before I sleep."
print(len(mainString))

compressedString = zlib.compress(mainString, level = 9)
print(len(comprssedString))
```

하지만 위의 예시에서는 1(원래 값)과 9와 차이가 없습니다. 그 이유는 너무 짧기 때문입니다.

# ZLIB - 문자 압축 풀기
압축을 풀기 위하여 zlib.decompress() 메서드를 사용할 수 있습니다.

```
import zlib

mainString = '''It's the thought of being young
When your heart's just like a drum
Beating louder with no way to guard it
When it all seems like it's wrong
Just sing along to Elton John
And to that feeling, we're just getting started
When the nights get colder
And the rhythms got you falling behind
Just dream about that moment
When you look yourself right in the eye, eye, eye
Then you say
I wanna dance
The music's got me going
Ain't nothing that can stop how we move, yeah
Let's break our plans
And live just like we're golden
And roll in like we're dancing fools
We don't need to worry
'Cause when we fall, we know how to land
Don't need to talk the talk, just walk the walk tonight
'Cause we don't need permission to dance
There's always something that's standing in the way
But if you don't let it faze ya
You'll know just how to break
Just keep the right vibe, yeah
'Cause there's no looking back
There ain't no one to prove
We don't got this on lock, yeah
The wait is over
The time is now, so let's do it right (yeah umm)
Yeah, we'll keep going
And stay up until we see the sunrise (yeah)'''

compressedString = zlib.compress(mainString)

print(compressedString)
print(zlib.decompress(compressedString))
```
