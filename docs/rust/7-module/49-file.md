# 파일

Rust에서 파일을 다루는 방법을 간단히 알아보겠습니다.

`std::fs::File` 모듈을 사용해야 됩니다.

```rust
use std::fs::File;

fn main() {
    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };
}
```

:::note 참고로 `Ok()`와 `Err()`에 대해서는 다음 장에서 더 제사히 알아보겠습니다. :::

## `create()` - 파일 만들기

파일은 `File::create()`을 통해 만들 수 있습니다.

```rust
use std::io::Write;
use std::fs::File;

fn main() {
   let mut file = File::create("data.txt").expect("create failed");
   println!("File created");
}
```

## `write_all()` - 파일 쓰기

파일에 데이터를 저장하기 위해서는 `write_all()` 메서드를 사용합니다.

```rust
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut file = File::create("foo.txt");
    file.write_all(b"Hello, world!");
}
```

참고로 문자열 앞에 `b`를 붙이면 문자열이 바이너리로 변환됩니다.

바이너리는 이진수입니다.

항상 파일에 쓸 때에는 이진수로 적어야 합니다.

## `read_to_string()` - 파일 읽기

파일을 읽는 것은 입력과 비슷합니다.

```rust
use std::fs::File;
use std::io::prelude::*;

fn main() {
  let mut file = File::open("foo.txt")?;
  let mut contents = String::new();
  file.read_to_string(&mut contents)?;
}
```

참고로 `?`는 `unwrap()`를 줄인 것입니다.

## 파일 삭제

```rust
use std::fs;
fn main() {
   fs::remove_file("data.txt").expect("could not remove file");
   println!("file is removed");
}
```
