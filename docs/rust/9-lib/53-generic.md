# 일반적인 데이터 형태

일반적인 데이터 형태란 데이터 형태가 정해져 있지 않고 들어 오는 값에 따라 자동으로 형태가 정해진다는 뜻입니다.

대부분 임시 이름을 지어주고 (예: `T`) 그리고 함수 매개변수에서 사용됩니다.

```rust
fn foo<T>(arg: T) {  }
```

## 구조체에서 활용

```rust
struct GenVal<T> {
  random_value: T
}

impl<T> GenVal<T> {
  fn new(value: T) -> GenVal<T> {
    GenVal { random_value: value }
  }

  fn get_value(&self) -> &T {
    &self.random_value
  }
}

fn main() {
  let gen_val = GenVal::new(10);
  println!("{}", gen_val.get_value());
}
```

이와 같이 구조체를 사용할 때 타입이 필요 없을 때가 있습니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct%20GenVal%3CT%3E%20%7B%0D%0A%20%20random_value%3A%20T%0D%0A%7D%0D%0A%0D%0Aimpl%3CT%3E%20GenVal%3CT%3E%20%7B%0D%0A%20%20fn%20new(value%3A%20T)%20-%3E%20GenVal%3CT%3E%20%7B%0D%0A%20%20%20%20GenVal%20%7B%20random_value%3A%20value%20%7D%0D%0A%20%20%7D%0D%0A%0D%0A%20%20fn%20get_value(%26self)%20-%3E%20%26T%20%7B%0D%0A%20%20%20%20%26self.random_value%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20let%20gen_val%20%3D%20GenVal%3A%3Anew(10)%3B%0D%0A%20%20println!(%22%7B%7D%22%2C%20gen_val.get_value())%3B%0D%0A%7D"
  height="400"
/>
