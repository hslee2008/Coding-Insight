# mut 변수

`mut`란 변수의 값을 바꿀 수 있다는 뜻입니다.

immutable 변수는 값을 바꿀 수 없는데 Rust는 기본적으로 immutable입니다.

그리하여 변수에 값을 저장하고 나중에 바꾸고 싶다면 `mut`를 사용해야 합니다.

```rust
let mut mood = "happy";
```

## mut 사용 방법

식별자 (예: `let`) 다음에 `mut`를 붙이면 mutable 변수로 인식합니다.

값을 지정한 후 다시 값을 바꿀 수 있습니다.

<firame
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20language%20%3D%20%22English%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Hello%20you!%20I%20am%20learning%20%7Blanguage%7D%22)%3B%0A%20%20%20%20%0A%20%20%20%20language%20%3D%20%22Rust%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Sorry%2C%20not%20English!%20I%20am%20learning%20%7Blanguage%7D%22)%3B%0A%7D"
  height="400"
/>
