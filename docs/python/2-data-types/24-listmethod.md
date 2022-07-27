# 리스트 메서드

<iframe
  loading="lazy" width="560" height="315" className="youtube" src="https://www.youtube.com/embed/OrWWnx2ydHc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

<iframe
  loading="lazy" width="560" height="315" className="youtube" src="https://www.youtube.com/embed/hnNX6_xr-3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

## 인덱싱

CODE1과 같이 인덱싱을 이용하여 x번째 값을 새로운 값으로 바꿀 수 있습니다.

인덱싱을 이용하여 리스트 변수 a의 x~y번째 값까지를 새로운 리스트로 바꿀 수도 있습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/a413df3b12" height="400" />

## `insert()`

`insert()`라는 메서드를 이용하여 사용자가 원하는 자리에 새로운 값을 더할 수 있습니다.

`list.insert(index, item)` 형태를 가지고 있고 첫 번째에는 어디(인덱스)에 아이템을 넣을지 입력하면 됩니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/d50ab693f8" height="400" />

## `remove()`, `pop()`, `clear()`

CODE1에서와 같이 리스트에서 'C'라는 데이터를 제거하기 위하여 `remove()`를 사용할 수 있습니다.

CODE2에 있는 예시를 보면 `pop(x)`와 `del` 키워드를 이용하여 x번째 값을 제거할 수도 있습니다.

마지막으로 CODE3에 있는 코드는 `clear()`를 사용하면 리스트를 쓰레기통에 버리는 것과 같이 모든 값을 제거할 수 예시입니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/8ea821b7b4" height="400" />

## `count()`

리스트에서 'blue'라는 값이 나타나는 개수를 찾기 위하여 `count()`를 CODE1에서 사용해보겠습니다.

## `index()`

리스트에서 값의 인덱스를 찾을 수도 있습니다.

CODE2와 같이 'Poo'라는 단어의 인덱스를 찾아보겠습니다.

## `sum()`

`sum()` 함수를 사용하면 리스트에 있는 모든 숫자를 더한 값을 찾을 수 있습니다 (CODE3)

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/7fdd2b43c1" height="400" />

## `sort()`와 reverse()

리스트를 알파벳과 숫자 순서로 정리하기 위해서 `sort()` 메서드를 사용할 수 있습니다 (CODE1)

리스트에서 알파벳과 숫자 순서를 거꾸로 정리하려면 `sort()` 안에서 `reverse = True`를 입력하면 됩니다. (CODE2)

`reverse()` 함수를 이용하여 리스트의 순서를 뒤집을 수도 있습니다. (CODE3)

우리가 저희만의 규칙을 정할 수 있습니다. CODE4를 보면 문자에서 소문자인 것부터 시작하여 대문자로 정리했습니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/44f3241dca" height="400" />

## `append()`

리스트 끝에 새로운 값을 더하기 위하여 우리는 `append()`를 사용해 보겠습니다.

`list.append(item)` 형태로 list 끝에 새로운 item을 더합니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/12cc090a48" height="400" />

## `extend()`

두 리스트를 더하여 새로운 리시트를 만들기 위하여 `extend()`를 사용할 수 있습니다.

`list1.extend(list2)` 형태로 `list1`이 `list1`과 `list2`에 있는 아이템을 모두 합친 값을 그 변수 안에 저장하는 메서드입니다.

<iframe
  loading="lazy" title="Python Playground" src="https://trinket.io/embed/python3/7e53c5b5a9" height="400" />

## `max()`와 min()

리스트가 만일 모두 다 숫자로만 이루어져 있다면 가장 큰 수와 가장 작은 수를 `max()`와 `min()`을 사용하여 알 수 있습니다.
