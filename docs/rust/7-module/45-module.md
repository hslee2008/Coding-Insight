# 모듈

모듈이란 코드를 모은 장소입니다.

가끔 코드를 짜다 보면 매우 복잡할 때가 많습니다.

이때 모듈을 통해 코드를 묶어서 사용할 수 있습니다.

```rust
mod r {
  fn print_statement() {
    println!("r의 함수");
  }
}
```

## `pub`

위이 코드는 사실 사용할 수 없습니다.

그 이유는 `private`이기 때문에 밖에서 사용할 수 없기 때문입니다.

밖에서 사용할 수 있게 하기 위해서는 `pub`를 붙이면 됩니다.

```rust
mod r {
  pub fn print_statement() {
    println!("r의 함수");
  }
}

fn main() {
  r::print_statement();
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=mod%20r%20%7B%0D%0A%20%20pub%20fn%20print_statement()%7B%0D%0A%20%20%20%20println!(%22r%EC%9D%98%20%ED%95%A8%EC%88%98%22)%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20r%3A%3Aprint_statement()%3B%0D%0A%7D"
  height="300"
/>

## `self`

`private` 함수은 모듈 안에서 다른 함수에서 사용할 수 있습니다.

이는 `self`를 통해 실행할 수 있습니다.

```rust
mod r {
  fn print_statement() {
    println!("r의 private 함수");
  }

  pub fn printing() {
    self::print_statement();
  }
}

fn main() {
   r::printing();
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=mod%20r%20%7B%0D%0A%20%20fn%20print_statement()%20%7B%0D%0A%20%20%20%20println!(%22r%EC%9D%98%20private%20%ED%95%A8%EC%88%98%22)%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20pub%20fn%20printing()%20%7B%0D%0A%20%20%20%20self%3A%3Aprint_statement()%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20r%3A%3Aprinting()%3B%0D%0A%7D"
  height="400"
/>

## `mod` (모듈 안의 모듈)

모듈안의 모듈은 `mode`를 또 사용할 수 있습니다.

```rust
// main function
fn main() {
  outer_module::inner_module::my_public_function();
}

mod outer_module {
  fn my_private_function() {
    println!("Hi, I got into the private function of outer module");
  }

  pub mod inner_module {
    pub fn my_public_function() {
      println!("Hi, I got into the public function of inner module");
      println!("I'll invoke private function of outer module");
      super::my_private_function();
    }
  }
}
```

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20outer_module%3A%3Ainner_module%3A%3Amy_public_function()%3B%0D%0A%7D%0D%0A%0D%0Amod%20outer_module%20%7B%0D%0A%20%20fn%20my_private_function()%20%7B%0D%0A%20%20%20%20println!(%22Hi%2C%20I%20got%20into%20the%20private%20function%20of%20outer%20module%22)%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20pub%20mod%20inner_module%20%7B%0D%0A%20%20%20%20pub%20fn%20my_public_function()%20%7B%0D%0A%20%20%20%20%20%20println!(%22Hi%2C%20I%20got%20into%20the%20public%20function%20of%20inner%20module%22)%3B%0D%0A%20%20%20%20%20%20println!(%22I%27ll%20invoke%20private%20function%20of%20outer%20module%22)%3B%0D%0A%20%20%20%20%20%20super%3A%3Amy_private_function()%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D"
  height="450"
/>

## `super` (부모 모듈)

부모 모듈은 `super`를 통해 사용할 수 있습니다.

참고로 파일 자체도 모듈이기 때문에 이 파일의 모듈에서 `super`을 사용하면 그 파일의 함수를 사용할 수 있습니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20println!(%22Let%27s%20go%20inside%20the%20module%22)%3B%0D%0A%20%20my_module%20%3A%3Amy_public_function()%3B%0D%0A%7D%0D%0A%0D%0Afn%20my_function()%7B%0D%0A%20%20println!(%22Hi%2C%20you%20came%20inside%20the%20root%20function%20using%20super%22)%3B%0D%0A%7D%0D%0A%0D%0Amod%20my_module%20%7B%0D%0A%20%20pub%20fn%20my_public_function()%20%7B%0D%0A%20%20%20%20println!(%22Invoke%20root%20function%22)%3B%0D%0A%20%20%20%20super%3A%3Amy_function()%3B%0D%0A%20%20%7D%0D%0A%7D
"
  height="450"
/>
