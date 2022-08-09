# std::option

`std::option`이라는 이름은 나중에 더 자세히 알아보겠지만 지금 알아야할 몇가지 필요한 옵션을 알아보겠습니다.

## 옵션 값이란?

옵션 값은 Rust 코드에서 자주 사용되는 것인데 어떤 값을 비교하거나 에러를 다룰 때 사용합니다.

활용은 `match`, `if let`, `while let` 등의 문법에서 자주 사용됩니다.

## `Some()`

`Some()`은 값을 비교하는데 자주 사용됩니다.

안에 값을 넣으면 되는데 이는 `println!()`으로 출력이 불가능합니다.

```rust
fn main() {
    println!("{}", Some(1));
}
```

`Some()` 안의 값은 `.unwrap()`를 통해 출력할 수 있습니다.

```rust
fn main() {
    println!("{}", Some(1).unwrap());
}
```

:::note

```sh
   Compiling playground v0.0.1 (/playground)
error[E0277]: 'Option<{integer}>' doesn\'t implement 'std::fmt::Display'
 --> src/main.rs:2:20
  |
2 |     println!("{}", Some(1))
  |                    ^^^^^^^ `Option<{integer}>` cannot be formatted with the default formatter
  |
  = help: the trait `std::fmt::Display` is not implemented for `Option<{integer}>`
  = note: in format strings you may be able to use `{:?}` (or {:#?} for pretty-print) instead
  = note: this error originates in the macro `$crate::format_args_nl` (in Nightly builds, run with -Z macro-backtrace for more info)

For more information about this error, try `rustc --explain E0277`.
error: could not compile `playground` due to previous error
```

더 제시하 알고 싶다면 `rustc --explain E0277`을 사용하세요. :::

## `None`

`None`은 해당하는 값이 없다는 뜻입니다.
