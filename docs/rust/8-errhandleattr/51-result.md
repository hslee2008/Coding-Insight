# std::result

`std::option`에 대해서는 저번에 알아 보았었지만 이번에 더 자세히 알아보겠습니다.

## `Ok()`와 `Err()`

함수에서 `Ok()` 또는 `Err()`을 반환할 수 있습니다.

이러한 함수는 Rust 라이브러리, 도구, 모듈 등을 사용하며 많이 접할 내용입니다.

```rust
fn main() {
    let x;
    match function_with_error() {
        Ok(v) => x = v,
        Err(e) => panic!(e),
    }

    println!("{}", x);
}

fn function_with_error() -> Result<u64, String> {
  Err("some message".to_string());
}
```

위의 코드에서는 함수에서 `Err()`를 반환했습니다.

그 `Err()`와 `Ok()`는 `Result` 데이터 형태이고 에러 메시지는 `Result<u64, String>`을 통해 전달할 수 있습니다.

## 예시

일부 값이 에러를 일으킨다면 그 값만 에러를 만들 수 있습니다.

```rust
fn divide(x: u64, y: u64) -> Result<u64, String> {
  if y == 0 {
    Err("0으로 나눌 수 없습니다".to_string())
  } else {
    Ok(x / y)
  }
}
```

## `unwrap()` 사용하기

`Result` 데이터 형태를 반환한다면 `unwrap()`를 통해 바로 에러를 다룰 수 있습니다.

```rust
fn main() {
  let _x: Result<u32, String> = None.unwrap();
}
```

만일 돌려지는 값이 `None`이라면 다음과 같은 panic이 출력됩니다.

```sh
   Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 1.25s
     Running `target/debug/playground`
#highlight-next-line
thread 'main' panicked at 'called `Option::unwrap()` on a `None` value', src/main.rs:3:38
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

```rust
fn main() {
  let _x: Result<u32, String> = Err("No!".to_string()).unwrap();
}
```

만일 값이 `Err`이라면 다음과 같은 panic이 출력됩니다.

```sh
   Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 0.94s
     Running `target/debug/playground`
#highlight-next-line
thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: "No!"', src/main.rs:3:56
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

만일 `Some`이라면 그 값이 출력됩니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20let%20x%3A%20%26str%20%3D%20Some(%22Hello%22).unwrap()%3B%0D%0A%20%20println!(%22%7Bx%7D%22)%3B%0D%0A%7D`"
  height="400"
/>
