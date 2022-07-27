# 박스

박스란 일반적으로 기본 데이터를 저장하는 곳인 stack과는 다르게 heap에 저장합니다.

```rust
fn main() {
  let b = Box::new(5);
  println!("b = {}", b);
}
```

`b = 5`가 출력됩니다.

## `enum`과의 사용

실질적으로 한 값을 저장하는데에는 stack이 더 효율적입니다.

그래서 한 값을 저장하는데에는 `Box`를 사용하지 않습니다.

`Box`는 대부분 메모리와 관련된 문제들을 해결하는데 사용됩니다.

```rust
enum List {
  Cons(i32, List),
  Nil,
}

use List::{Cons, Nil};

fn main() {
  let list = Cons(1, Cons(2, Cons(3, Nil)));
}
```

위의 코드에는 문제가 있습니다.

처음으로 보면 `Cons()` 안에 여러 `Cons()`, 즉, `List`의 값들이 들어 있습니다.

```sh
   Compiling playground v0.0.1 (/playground)
error[E0072]: recursive type `List` has infinite size
 --> src/main.rs:1:1
  |
1 | enum List {
  | ^^^^^^^^^ recursive type has infinite size
2 |   Cons(i32, List),
  |             ---- recursive without indirection
  |
help: insert some indirection (e.g., a `Box`, `Rc`, or `&`) to make `List` representable
  |
  #highlight-next-line
2 |   Cons(i32, Box<List>),
  |             ++++    +

error[E0391]: cycle detected when computing drop-check constraints for `List`
 --> src/main.rs:1:1
  |
1 | enum List {
  | ^^^^^^^^^
  |
  = note: ...which immediately requires computing drop-check constraints for `List` again
  = note: cycle used when computing dropck types for `Canonical { max_universe: U0, variables: [], value: ParamEnvAnd { param_env: ParamEnv { caller_bounds: [], reveal: UserFacing, constness: NotConst }, value: List } }`

Some errors have detailed explanations: E0072, E0391.
For more information about an error, try `rustc --explain E0072`.
error: could not compile `playground` due to 2 previous errors
```

매우 중요한 팁을 주었습니다.

`enum` 안에서 `List`을 사용하지 않고 `Box<List>`를 사용해야 한다고 되어 있습니다.

`enum` 자체는 heap이자만 각 값들은 stack에 저장되기 때문에 heap `List`를 저장하면 무한 값이 되어 버립니다.

`Box`를 통해 `List`라는 값의 사용을 Rust가 자동으로 조절해 줍니다.

```rust
enum List {
  Cons(i32, Box<List>),
  Nil,
}

use List::{Cons, Nil};

fn main() {
  let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Nil)))));
}
```
