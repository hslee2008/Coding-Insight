# Borrowing

Borrowing은 빌린다는 뜻을 가지는데 Rust에서는 그 값을 비릴 수 있습니다.

## 공유 빌림

```rust
let a = 3;
let b = &a;
```

변수들은 똑같은 값을 여러번 공유할 수 있습니다.

## mutable 빌림

```rust
let a = 3;
let b = &mut a;
```

이제 `a`를 사용할 수 없습니다.

## 빌림 규칙

### 규칙 # 1

공유 빌림과 mutable 빌림을 동시에 할 수 없다.

대신 변수 범위가 다르면 오류가 생기자 않는다.

### 규칙 # 2

모든 '참조'는 유효해야 한다.

```rust
fn main() {
  let a = String::from("Rust");

  println!("This is a variable a: {}", a);

  let b = a;

  println!("Value of variable a is moved to b.\n b : {}", b);
  println!("Now a becomes invalid.Accessing a will give error");

  let c = &a; // 이미 빌림
  println!("This is a variable c trying to access value a: {}", c);
}
```
