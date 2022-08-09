# if let 문

`if let`은 `if`와 비슷하지만 튜플, 배열 등의 값을 확인합니다.

```rust
fn main() {
  let course = ("Rust", "beginner","course");

  if let ("Rust", "beginner","course") = course {
    println!("Wrote all values in pattern to be matched with the scrutinee expression");
  } else {
    println!("Value unmatched");
  }
}
```

## 사용 방법 #2

그 값을 비교하는 대신 변수에 저장하여 사용할 수도 있습니다.

```rust
fn main() {
  let course = ("Rust", "beginner","course");

  if let (lang, "beginner","course") = course {
    println!("Learning {}", lang);
  } else {
    println!("Value unmatched");
  }
}
```

## 사용 방법 #3

밑의 사용 방법의 거의 사용되지 않고 권장하지는 않습니다.

```rust
fn main() {
    if let _ = 10 {
        println!("irrefutable if-let pattern is always executed");
    }
}
```

위의 코드는 패턴이 없어서 값이 어떠하든 무조건 안의 코드를 실행하게 됩니다.

하지만 Rust 컴파일러는 이러한 경우에 코드를 바꾸어여 한다고 알려줍니다.

```sh
   Compiling playground v0.0.1 (/playground)
error: in expressions, `_` can only be used on the left-hand side of an assignment
 --> src/main.rs:4:71
  |
4 |         println!("irrefutable if-let pattern is always executed, {}", _);
  |                                                                       ^ `_` not allowed here

error: could not compile `playground` due to previous error
```
