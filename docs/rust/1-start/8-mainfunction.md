# main 함수

코딩 언어에서 `main()`이라는 것을 "main 함수"라고 부릅니다.

함수는 나중에 자세히 알아보겠지만 쉽게 코드를 담는 부분이라고 생각하면 됩니다.

`main()` 함수는 Rust 코드의 대부분을 담을 박스입니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%2C%20world!%22)%3B%0A%7D"
  height="400"
/>

## main 함수가 없어지면

```rust
fn main() {
    println!("Hello, world!");
}
```

위 코드가 기본 Rust 코드입니다.

하지만 `fn main() {}`을 삭제하고 `println!("Hello, world!");`만 남기면 문제가 됩니다.

```sh
   Compiling rusty v0.1.0 (C:\Users\USER\rusty)
error: macro expansion ignores token `{` and any following
   --> C:\Users\USER\.rustup\toolchains\stable-x86_64-pc-windows-msvc\lib/rustlib/src/rust\library\std\src\macros.rs:102:23
    |
102 |       ($($arg:tt)*) => {{
    |  _______________________^
103 | |         $crate::io::_print($crate::format_args_nl!($($arg)*));
104 | |     }};
    | |_____^
    |
   ::: src\main.rs:1:1
    |
1   |   println!("Hello, world!");
    |   ------------------------- caused by the macro expansion here
    |
    = note: the usage of `println!` is likely invalid in item context
#highlight-next-line
error[E0601]: `main` function not found in crate `rusty`
 --> src\main.rs:1:27
  |
1 | println!("Hello, world!");
  |                           ^ consider adding a `main` function to `src\main.rs`

For more information about this error, try `rustc --explain E0601`.
error: could not compile `rusty` due to 2 previous errors
```

2개의 에러가 생겼습니다.

`println!()`은 매크로라는 것으로 직접 `main()` 밖이나 다른 함수 밖에서는 사용되지 않습니다.

`main()` 함수가 존재하지 않습니다.

:::tip

```sh
For more information about this error, try `rustc --explain E0601`.
```

Rust는 항상 에러가 생기면 에러의 종류를 알려주고 더 제사한 내용을 확인하기 위한 커맨드도 알려줍니다.

```sh
rustc --explain E0601
```

다음이 출력됩니다.

```sh
No `main` function was found in a binary crate.

#highlight-next-line
To fix this error, add a `main` function:

fn main() {
// Your program will start here.
println!("Hello world!");
}

If you don't know the basics of Rust, you can look at the
[Rust Book][rust-book] to get started.

[rust-book]: https://doc.rust-lang.org/book/
```

더 자세한 설명과 추가 링크까지 알려줍니다.
:::
