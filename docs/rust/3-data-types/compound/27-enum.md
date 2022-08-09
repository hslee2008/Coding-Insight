# Enum

Enum은 쉽게 옵션들이라고 생각하면 됩니다.

예를 들면, 횡단보다 불 색깔을 3가지로 정하면 다음과 같습니다.

```rust
enum Color {
  Red,
  Green,
  Blue,
}
```

즉, 옵션들만 나열한 것을 Enum이라고 합니다.

또 다른 예로는 성별을 할 수 있습니다.

```rust
enum Gender {
  Male,
  Female,
  NonBinary,
  Trans,
  Other
}
```

## Enum에 값 넣기

Enum에 값을 넣기 위해서 처음에 선언할 때 `()`를 두고 넣으면 됩니다.

```rust
#[derive(Debug)]
enum Gender {
  Male(String),
  Female(String),
  NonBinary(String),
  Trans(String),
  Other(String)
}

fn main() {
  let people_male = Gender::Male("Jake".to_string())
  let people_trans = Gender::Trans("Alex".to_string())

  println!("Male: ", people_male)
}
```

:::note

```rust
#[derive(Debug)]
```

를 넣은 이유는 enum을 출력하기 위해서 입니다.

없으면 에러가 생깁니다. :::

## Enum 메서드

Enum도 구조체와 같이 `impl`을 통해 메서드를 정의할 수 있습니다.

```rust
impl Gender {
  fn is_male(&self) -> bool{
    match self {
      Gender::Male => return true,
      _ => return false
    }
  }
}
```
