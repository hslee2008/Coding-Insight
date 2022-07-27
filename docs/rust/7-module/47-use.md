# use 키워드

`use` 키워드는 어떤 모듈 안의 함수들을 사용할 수 있도록 해줍니다.

```rust
pub mod chapter {
    pub mod lesson {
        pub mod heading {
            pub fn illustration() {
              println!("Hi, I'm a 3rd level nested function");
            }
        }
    }
}
use chapter::lesson::heading;
fn main() {
    heading::illustration();
}
```

즉, 그 모듈 안의 것들을 밖으로 끄집어 내서 사용합니다.

## `*` 사용하기

`use` 키워드를 사용할 때 `*`를 사용하면 그 안의 모든 아이템들을 밖으로 끄집어 냅니다.

```rust
pub mod chapter {
    pub mod lesson {
        pub mod heading {
            pub fn illustration() {
              println!("Hi, I'm a 3rd level nested function");
            }
        }

        pub mod illustration {
          pub fn illustration() {
            println!("Hi, I'm a 3rd level second nested function");
          }
        }
    }
}

use chapter::lesson::*;
fn main() {
    heading::illustration();
    illustration::illustration();
}
```
