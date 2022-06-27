---
sidebar_position: 25
id: 'vec'
---

# Vec

Vec는 배열인데 매일 값을 넣거나 제거할 때마다 배열의 크기가 변합니다.

일반 배열은 항상 크기가 정해져 있기 때문에 값을 제거하거나 새롭게 넣을 수 없습니다.

Vec는 `Vec<데이터>`로 선언할 수 있습니다.

## Vec 사용하기

`vec!`라는 매크로를 사용하면 다음에 나오는 배열은 바로 Vec로 선언할 수 있습니다.

`vec![1, 2, 3, 4, 5]` Vec는 크기가 지정되지 않았기 때문에 `.push()` 메서드나 `.pop()`를 사용해 새로운 값을 끝에 추가하거나 끝의 값을 제거할 수 있습니다.

참고로 Vec에 새로운 값을 추가하거나 삭제하기 위해서는 `mut` 변수여야 합니다.

그리고 Vec를 출력하기 위해서는 배열과 같이 `{{ :? }}`를 사용해야 합니다.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20veccy.push(6)%3B%0D%0A%20%20%20%20veccy.pop()%3B%0D%0A%0D%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20veccy)%3B%0D%0A%7D"
  height="400"
/>

## 인덱스

`get()`이나 인덱스를 사용하면 vec의 값을 얻을 수 있습니다.

`[]`를 사용해도 됩니다.

:::note
`get()`을 사용하면 범위의 값을 저장할 수 있습니다.

숫자를 넣는 대신 `a..b`를 사용하면 a부터 b까지 사용하는 것이 가능합니다.

`get()`을 실행한 후 `unwrap()`을 사용하면 vec가 반환됩니다.

만일 값이 범위를 넘으면 None을 반환합니다.
:::

## len() 메서드와 인덱스

`len()` 메서드를 사용하면 배열의 크기를 알 수 있습니다.

그리고 배열처럼 `[]`를 사용해 사이에 숫자를 넣으면 그 인덱스에 있는 값을 알 수 있습니다.

그리고 `iter()`르 사용하면 각 아이템을 순서대로 순회할 수 있습니다.

마지막으로 `iter`할 때 값을 바꾸고 싶다면 항상 `iter_mut()`를 사용하고 반환된 값 앞에 `*`를 붙여서 값을 지정하세요.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20println!(%22Vec%EC%9D%98%20%ED%81%AC%EA%B8%B0%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3A%20%7B%7D%22%2C%20veccy.len())%3B%0D%0A%0D%0A%20%20%20%20println!(%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8!%20%7B%7D%22%2C%20veccy%5B0%5D)%3B%0D%0A%0D%0A%20%20%20%20for%20x%20in%20veccy.iter()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%3E%20%7B%7D%22%2C%20x)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D"
  height="400"
/>

## first(), first_mut(), last(), last_mut()

first는 백터의 가장 첫 번째 값을 찾고 `_mut()`를 붙이면 mut 변수가 되어서 반환됩니다.

last는 백터의 가장 마지막 값을 찾고 `_mut()`를 붙이면 mut 변수가 되어서 반환됩니다.

참고로 값을 저장하고 싶다면 `unwrap()`를 사용해서 `Some()`을 제거하세요.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20println!(%22Vec%EC%9D%98%20%ED%81%AC%EA%B8%B0%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3A%20%7B%7D%22%2C%20veccy.len())%3B%0D%0A%0D%0A%20%20%20%20println!(%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8!%20%7B%7D%22%2C%20veccy%5B0%5D)%3B%0D%0A%0D%0A%20%20%20%20for%20x%20in%20veccy.iter()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%3E%20%7B%7D%22%2C%20x)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D"
  height="400"
/>

## enumerate() 메서드

`enumerate()` 메서드를 사용하면 각 아이템을의 인덱스와 값이 함께 순회할 수 있습니다.

`(인덱스, 값)` 튜플을 순회하면서 인덱스를 출력하고 값을 출력합니다.

```rust
for (index, value) in veccy.iter().enumerate() {
  println!("{}에 {}", value, index);
}
```

그리고 `enumerate()`를 사용하면 `iter()`를 먼저 사용해야 됩니다.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20for%20(index%2C%20value)%20in%20veccy.iter().enumerate()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%EC%97%90%20%7B%7D%22%2C%20value%2C%20index)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D"
  height="400"
/>

## ::new() 사용하기

`Vec::new()` 를 사용하면 백터를 생성할 수 있습니다.

`::new()`를 사용하면 크기가 0이고 값이 없는 Vec가 만들어집니다.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20vec%20%3D%20Vec%3A%3Anew()%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20vec.push(1)%3B%0D%0A%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20vec%5B0%5D)%3B%0D%0A%7D"
  height="400"
/>
