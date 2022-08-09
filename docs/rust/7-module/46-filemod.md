# 다른 파일 모듈

모듈을 사용할 때 다른 파일에 있는 모듈도 사용할 수 있습니다.

```rust title="print.rs"
pub fn print_statement() {
    println!("print의 함수");
}
```

```rust title="main.rs"
mod print

fn main() {
    print::print_statement();
}
```
