# 매개변수

매개변수란 함수에 전달되는 변수를 뜻합니다.

예를 들면, 두 수를 더하는 함수를 만들고 싶다면 두 매개변수를 입력합니다.

```rust
fn add(x: i32, y: i32) {
  println!(x + y)
}

fn main() {
  add(1, 2);
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20add(x%3A%20i32%2C%20y%3A%20i32)%20%7B%0D%0A%20%20println!(%22%7B%7D%22%2C%20x%20%2B%20y)%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20add(1%2C%202)%3B%0D%0A%7D"
  height="400"
/>

:::note 매개변수를 선언할 떄 데이터 타입을 적어야 합니다.

`x: 32`, `y: 32`와 같이. :::

## 값을 통해 정보 전달

만일 함수 안에서 변수의 값을 바꾸어야 한다면 `mut`를 통해 바꿀 수 있습니다.

하지만 그 함수 밖에서는 그 값이 바뀌어 있지 않았을 것입니다.

그 이유는 [Ownership](/docs/rust/memory/ownership) 때문에 인데 이는 나중에 더 자세히 알아보겠습니다.

```rust
fn square(mut n: i32){
  n = n * n;
  println!("함수 안: {}", n);
}

fn main() {
  let n = 4;
  println!("함수 전: {}", n);
  square(n);
  println!("함수 실행함");
  println!("함수 후: {}", n);
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20square(mut%20n%3A%20i32)%7B%0D%0A%20%20n%20%3D%20n%20*%20n%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%95%88%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20let%20n%20%3D%204%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%A0%84%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%20%20square(n)%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%8B%A4%ED%96%89%ED%95%A8%22)%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%ED%9B%84%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%7D"
  height="400"
/>

## 참조를 통한 정보 전달

참조란 그 변수의 값만 사용하는 것이 아니라 그 변수의 위치를 사용한다는 뜻입니다.

즉, 변수를 항상 사용할 떄 그 변수의 값만 사용했지만 참조를 한다면 그 변수의 위치를 사용합니다.

위치는 변수 이름 앞에 `&`를 붙이면 됩니다.

사실 `&`를 붙이든 말든 출력하면 값은 같으나 `*`를 사용해서 값을 바꾸게 된다면 그 위치의 값이 바뀌어 원래 변수의 값이 바뀌게 됩니다.

```rust
fn square(&mut n: i32){
  *n = *n * *n;
  println!("함수 안: {}", n);
}

fn main() {
  let n = 4;
  println!("함수 전: {}", n);
  square(n);
  println!("함수 실행함");
  println!("함수 후: {}", n);
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20square(n%3A%20%26mut%20i32)%7B%0D%0A%20%20*n%20%3D%20*n%20*%20*n%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%95%88%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20let%20mut%20n%20%3D%204%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%A0%84%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%20%20square(%26mut%20n)%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%EC%8B%A4%ED%96%89%ED%95%A8%22)%3B%0D%0A%20%20println!(%22%ED%95%A8%EC%88%98%20%ED%9B%84%3A%20%7B%7D%22%2C%20n)%3B%0D%0A%7D"
  heght="400"
/>
