---
sidebar_position: 5
id: 'rustc'
---

# 컴파일러 (rustc)

rustc는 rust 컴파일러로 rust 코드를 `exe` 파일로 전환하여 모든 기기에서 실행 가능하게 만듭니다.

## Rust를 exe로

먼저, `rust` 파일을 만듭니다.

```rust
fn main() {
  println!("Hello, world!");
}
```

그리고 터미널에서 `rustc main.rs`를 입력하여 컴파일합니다.

`main` 대신 파일 이름을 입력하세요.

```sh
rustc main.rs
```

## exe 파일 실행하기

그리고 새롭게 생성된 `exe` 파일을 실행하기 위해 터미널에서 `./main`를 입력합니다.

```sh
./main
```

:::note
참고로 `./main`을 실행했을 때 에러가 생기면 `.\main.exe`를 입력해 보세요.

기기마다 `exe` 파일을 실행하는 방법이 다를 수 있습니다.
:::
