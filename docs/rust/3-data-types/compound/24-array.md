# 배열 (arr)

arr은 배열로 데이터 형태의 리스트를 담는 데이터 형태입니다.

arr이라는 데이터 형태를 `:` 다음에 넣는 데신 배열의 각 아이템의 데이터 형태와 숫자를 넣습니다.

```
[i32;5]
```

사실 이는 넣어도 되고 넣지 않아도 됩니다 (다 자동으로 Rust가 이해합니다).

그리고 `[]` 안에 각 아이템을 넣습니다.

참고로 나중에 배열의 값을 바꾸기 위해서 `mut`를 사용할 수도 있습니다 (`let` 다음에 넣어주세요).

```rust
let mut arr: [i32;5] = [1,2,3,4,5];
```

## 인덱스를 사용

인덱스를 사용해서 `x + 1` 번째 아이템을 얻기 위해서 `[x]`를 사용하면 됩니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%3A%20%5Bi32%3B%205%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s%5B0%5D)%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s%5B1%5D)%3B%0A%7D"
  height="400"
/>

## {:?} 사용하기

배열을 출력하기 위해서 디버깅 특성 `{:?}`를 사용합니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20val1)%3B%0D%0A%7D"
  height="400"
/>

## `len()`, is_empty() 메서드

`len()`을 사용하면 배열의 길이를 출력할 수 있습니다.

`is_empty()`를 사용하면 배열이 비어있는지 아닌지 확인할 수 있습니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EA%B8%B8%EC%9D%B4%3A%20%7B%7D%22%2C%20val1.len())%3B%0D%0A%20%20%20%20println!(%22%EB%B9%84%EC%96%B4%20%EC%9E%88%EB%82%98%EC%9A%94%3F%3A%20%7B%7D%22%2C%20val1.is_empty())%3B%0D%0A%7D"
  height="400"
/>

## `swap()` 메서드

`swap()`를 사용하면 인덱스에 있는 값을 바꿀 수 있습니다.

0, 1이면 첫 번쨰 값과 두 번째 값이 배열에서 위치를 바꿉니다.

참고로 배열의 값을 바꾸니 `mut` 형태의 변수를 사용해야 합니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20val1.swap(0%2C%201)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20val1)%3B%0D%0A%7D"
  height="400"
/>

## `reverse()` 메서드

`reverse()`를 사용하면 배열의 순서를 뒤집어줍니다.

참고로 배열의 값을 바꾸니 `mut` 형태의 변수를 사용해야 합니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20val1.reverse()%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EB%92%A4%EC%A7%91%ED%9E%98%3A%20%7B%3A%3F%7D%22%2C%20val1)%3B%0D%0A%7D"
  height="400"
/>
