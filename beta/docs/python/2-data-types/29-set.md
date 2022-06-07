---
sidebar_position: 29
id: 'set'
---

# 집합

<iframe width="560" height="315" src="https://www.youtube.com/embed/D3sZWUlvDuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

집합이란 어떤 객관적인 조건에 따라 나뉘어진 목록이라고 할 수 있습니다.

객관적이란 분명한 기준을 뜻합니다.

예를 들어 키 큰 사람은 집합이 될 수 없습니다.

그 이유는 사람마다 키가 크다는 기준이 다르기 때문입니다.

예를 들어 우리반에서 서울에 사는 친구들의 집합을 만들어 보겠습니다.

<iframe src="https://trinket.io/embed/python3/17ff96c784" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 집합의 특징

집합에는 순서가 없습니다.

집합에서는 순서가 없기 때문에 항상 코드를 실행할 때 마다 집합에 있는 값들의 순서는 항상 바뀝니다.

## 집합에 값 더하고 빼기

집합 끝 부분에 값을 더하기 위하여 우리는 `add()`를 사용해 보겠습니다.

CODE1 예시를 확인하세요.

집합을 붙이기 위하여 `update()`을 사용할 수 있습니다.

CODE2에서 확인할 수 있습니다.

<iframe src="https://trinket.io/embed/python3/1c4e61a04e" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## 집합 값 제거

`colorSet`이라는 집합에 있는 값 중에서 `red`라는 아이템을 `remove()`를 사용해서 제거해 보겠습니다.

`remove()`라는 메서드를 사용하는데 만일 `red`라는 아이템이 집합 안에 존재하지 않다면 에러가 생깁니다.

에러가 생기지 않는 것을 원한다면 `discard()` 메서드를 사용하세요.

<iframe src="https://trinket.io/embed/python3/62528e1b44" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>