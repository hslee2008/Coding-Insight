# 입력

지금까지 입력에 대해 한 번도 말한 적이 없습니다.

대부분 프로그래밍 언어는 입력이 매우 간단해 바로 공부하지만 Rust 같은 경우는 모듈을 먼저 알아야 하기 때문입니다.

입력을 하기 위해서는 Rust의 `std::io` 라이브러리를 사용해야 합니다.

```rust
use std::io;
```

## `stdin()` 메서드

`stdin()`으로 입력을 준비하고 `read_line()`으로 입력을 받습니다.

Rust는 항상 에러를 엄격히 다루기 때문에 `.expect()`를 통해 항상 에러가 생기면 어떤 메시지를 출력해야 하는지 정해야 합니다.

```rust
use std::io;

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}
```

입력은 항상 `mut String` 타입이므로 `read_line()`을 통해 입력을 받아야 합니다.

:::note `expect`를 사용하지 않으면 다음과 같은 에러가 생깁니다.

```sh
$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
warning: unused `Result` that must be used
  --> src/main.rs:10:5
   |
10 |     io::stdin().read_line(&mut guess);
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_must_use)]` on by default
   = note: this `Result` may be an `Err` variant, which should be handled

warning: `guessing_game` (bin "guessing_game") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.59s
```

:::
