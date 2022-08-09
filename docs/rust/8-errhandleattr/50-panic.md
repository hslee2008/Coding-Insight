# panic

대부분 프로그래밍 언어에서는 잘못된 코드가 있거나 어떤 오작동이 일어나면 '에러'라는 개념을 사용합니다.

Rust는 매우 보안이 신경을 쓰는 편이어서 조금의 실수라도 있으면 다 잡아서 실질적으로 파일을 만들지도 못하게 합니다.

:::note
프로그램을 만드는데 다음 과정을 거칩니다.

1. 코드를 이진수로 바꾸기 (컴파일)
2. 파일에 저장하기
3. 파일 실행하기
   :::

그래서 에러가 있으면 컴파일도 하지 못하는데요 이 과정에서 생기는 문제를 'panic'이라고 합니다.

나만의 panic은 `panic!()`을 통해 만들 수 있습니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20panic!(%22oopsie!%22)%3B%0D%0A%7D"
  height="400"
/>

## Backtrace

backtrace란 panic이 생긴 이유를 알아보는 과정입니다.

```rust
fn main() {
    let v = vec![1, 2, 3];
    v[99];
}
```

위의 코드를 실행하면 다음과 같은 결과가 출력됩니다.

```sh
$ cargo run
   Compiling panic v0.1.0 (file:///projects/panic)
    Finished dev [unoptimized + debuginfo] target(s) in 0.27s
     Running `target/debug/panic`
thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', src/main.rs:4:5
#highlight-next-line
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

위의 코드에서 `RUST_BACKTRACe=1`이라는 환경 변수를 사용해서 backtrace를 출력합니다.

```sh
RUST_BACKTRACE=1 cargo run
```

```sh
thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', src/main.rs:4:5
stack backtrace:
   0: rust_begin_unwind
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/std/src/panicking.rs:483
   1: core::panicking::panic_fmt
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/core/src/panicking.rs:85
   2: core::panicking::panic_bounds_check
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/core/src/panicking.rs:62
   3: <usize as core::slice::index::SliceIndex<[T]>>::index
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/core/src/slice/index.rs:255
   4: core::slice::index::<impl core::ops::index::Index<I> for [T]>::index
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/core/src/slice/index.rs:15
   5: <alloc::vec::Vec<T> as core::ops::index::Index<I>>::index
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/alloc/src/vec.rs:1982
   6: panic::main
             at ./src/main.rs:4
   7: core::ops::function::FnOnce::call_once
             at /rustc/7eac88abb2e57e752f3302f02be5f3ce3d7adfb4/library/core/src/ops/function.rs:227
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
```

## 넘어갈 수 있는 에러

에러 하나로 인해 코드 전체를 실행할 수 없을 때가 있습니다.

하지만 rust에서는 일부 중요한 에러들을 다루어서 전체적인 코드에 지장이 없게 만들 수 있습니다.

```rust
use std::fs::File;

fn main() {
  let f = File::open("hello.txt");
  println!("Hello World");
}
```

위 코드에서 에러가 생기면 다음 코드를 실행할 수 없습니다.

하지만 `Ok()`와 `Err()`를 사용하면 에러가 생겨도 넘어가서 다음 코드를 실행할 수 있습니다.

```rust
use std::fs::File;

fn main() {
    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    println!("Hello World")
}
```

## 다양한 에러 종류

에러에는 다양한 종류가 있습니다.

이는 `Err(error) => `안에서 에러의 종류에 따라 다양한 코드를 실행할 수 있습니다.

에러의 종류는 `std::io::ErrorKind`를 통해 알 수 있습니다.

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => {
                panic!("Problem opening the file: {:?}", other_error)
            }
        },
    };
}
```
