# 에트리뷰트

에트리뷰트란 Rust에서 파일을 실행할 때 전달되는 정보들을 말합니다.

예를 들면, Rust 일부 코드를 실행할 때 사용하지 않아도 되는 코드를 허용한다고 한다면 다음과 같이 사용할 수 있습니다.

```rust
#[allow(dead_code)]
fn unused_function() {}
```

그냥 에트리뷰트 없이 사용하지도 않는 함수가 있다면 에러가 발생합니다.

```rust
fn unused_function() {}
```

## cfg

cfg를 통해 일부 개발자가 설정을 할 수 있는 것들이 있습니다.

컴퓨터의 종류에 따라 어떤 코드를 실행할지도 달라질 수 있습니다.

```rust
#[cfg(target_os = "linux")]
fn are_you_on_linux() {
    println!("You are running linux!");
}

#[cfg(not(target_os = "linux"))]
fn are_you_on_linux() {
    println!("You are *not* running linux!");
}

fn main() {
    are_you_on_linux();

    println!("Are you sure?");
    if cfg!(target_os = "linux") {
        println!("Yes. It's definitely linux!");
    } else {
        println!("Yes. It's definitely *not* linux!");
    }
}
```

`#[cfg(target_os = "linux")]` 다음에 나오는 함수는 만일 컴퓨터가 linux일 때만 저장이 되고 아닐 때는 저장이 안됩니다.

`#[cfg(not(target_os = "linux"))]` 다음에 나오는 함수는 만일 컴퓨터가 linux이 아닐 때만 저장이 되고 linux일 때는 저장이 안됩니다.

`cfg!(target_os = "linux")`를 통해 불리언을 받을 수도 있습니다.
