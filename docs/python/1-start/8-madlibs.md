# 매드립 게임 프로젝트

매드립스는 빈칸이 있는 곳에 단어들을 넣으며 문장을 만들어 나가는 게임입니다.

파이썬을 사용해서 매드립을 만들어 보겠습니다.

![Mad Libs](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnR3OVF_3m7noHBoE4X3o7t7id6ONlGD60g&usqp=CAU)

##️ 만드는 방법

어떻게 매드립스 게임을 만들지 알아보겠습니다.

1. 먼저, 기본 문장 틀을 만들어 빈칸과 단어를 넣을 것입니다. (예: "Roses are 빈칸")
2. 다음, 사용자의 입력을 input()을 사용해 받을 것입니다.
3. 마지막으로 그 입력을 빈칸에 넣어 문장을 완성하고 출력할 것입니다.

## 게임 만들기

1. 빈 칸이 들어 있는 문장 만들기
   - sentence라는 변수 안에 "Roses are ?. Violets are ?. And I like ?."라는 문장을 저장하겠습니다.
   - {}는 빈칸이고 나중에 {} 안에 단어를 넣을 것입니다.

```py
sentence = "Roses are {}. Violets are {}. And I like {}."
```

2. 입력받기
   - 입력은 input()을 사용해 총 3개를 받겠습니다.

```py
fw = input("형용사(영어): ")
sw = input("형용사(영어): ")
tw = input("사람: ")
```

3. 빈칸에 넣기
   - format()이라는 메서드를 사용해 sentence 안에 있는 모든 {}를 새로운 값으로 변화하게 만들어 보겠습니다.
   - format을 사용하면 문장 안에 있는 {}들은 나타나느 순서대로 fw, sw, tw로 바뀝니다.
   - 그래서 처음의 {}는 fw의 값, 두 번째는 sw, 그리고 마지막은 tw로 바뀝니다.

```py
finish = sentence.format(fw, sw, tw)
```

4. 출력하기
   - 출력은 print()를 사용하겠습니다.

```py
print(finish)
```

##️ 확인하기

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/e1d336381d"
  height="400"
/>
