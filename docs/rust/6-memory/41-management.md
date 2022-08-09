# 메모리 관리

대부분 프로그래밍 언어에서는 메모리를 관리할 필요가 없습니다.

그 이유는 다 자동으로 컴파일러가 처리하기 때문입니다.

Rust의 가장 핵심적인 장점 중 하나가 메모리 관리의 안전성과 자유성이 있습니다.

그래서 Rust에서는 메모리 관리를 할 줄 알고 있어여 직접 프로그램을 만들 수 있습니다.

## Stack

Stack이라는 것은 쌓은 데이터들이라는 뜻인데 새로운 값을 넣으면 위로 쌓이고 제거하면 위 데이터를 제거합니다.

즉, 펜케이크와 같이 펜케이크를 쌓고 하나 먹으면 위 펜케이크를 먹고 새로 구으면 위에 높드시 메모리를 디자인했습니다.

![pancake](https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/11/8/1383936392609/a-pile-of-pancakes-008.jpg?width=620&quality=85&fit=max&s=1363eeeefb4ddab1ddd428e7857c9b14)

기본 데이터 형식(정수, 소수, 불리언과 문자)는 길이가 미리 정해진 stack의 메모리를 사용합니다.

:::note

stack의 길이(높이)는 미리 정해져 있습니다.

그래서 `i32`와 같이 정해진 길이를 가졌습니다. :::

## Heap

Heap은 미리 데이터들의 빈 자리를 마련하고 나중에 새롭게 데이터를 넣어주는 메모리 형식입니다.

즉, 미리 학교 방 2-5반에 32개의 자리를 마련하고 31명의 학생만 있어도 새로 오면 그 자리에 넣거나 새로운 의자를 가지고 울 수 있드시 마립니다.

Vector, 문자열은 Heap에 저장됩니다.

![classroom](https://www.gannett-cdn.com/-mm-/f97bc5d4a093a763cbc7692b56c01785829755dc/c=0-27-1000-592/local/-/media/2018/02/13/DetroitNews/DetroitNews/636541223334677459-classroom2.jpg?width=1000&height=500&fit=crop&format=pjpg&auto=webp)
