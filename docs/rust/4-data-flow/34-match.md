# match 문

`if`문을 사용하다보면 다음과 같은 상황에서 문제가 생길 수 있습니다.

```rust
fn main() {
  let x = 1;

  if x == 1 {
    println!("x is 1");
  } else if x == 2 {
    println!("x is 2");
  } else if x == 3 {
    println!("x is 3");
  } else if x == 4 {
    println!("x is 4");
  } else if x == 5 {
    println!("x is 5");
  } else if x == 6 {
    println!("x is 6");
  } else if x == 7 {
    println!("x is 7");
  } else if x == 8 {
    println!("x is 8");
  } else if x == 9 {
    println!("x is 9");
  } else if x == 10 {
    println!("x is 10");
  } else {
    println!("x is not 1-10");
  }
}
```

위의 코드는 조금 복잡합니다.

# 방법 #1

이는 `match()`를 통해서 해결할 수 있습니다.

```rust
fn main() {
  let x = 1;

  match x {
    1 => println!("x is 1"),
    2 => println!("x is 2"),
    3 => println!("x is 3"),
    4 => println!("x is 4"),
    5 => println!("x is 5"),
    6 => println!("x is 6"),
    7 => println!("x is 7"),
    8 => println!("x is 8"),
    9 => println!("x is 9"),
    10 => println!("x is 10"),
    _ => println!("x is not 1-10"),
  }
}
```

# 방법 #2

`match`의 값을 변수에 저장하여 사용할 수도 있습니다.

다음과 같은 방법도 사용할 수 있습니다.

```rust
fn main(){
   let course = "Rust";

   let found_course = match course {
      "Rust" => "Rust F*ck",
      "Java" => "Java",
      "C++" => "C Plus Plus",
      "C#" => "C Sharp",
      _ => "Unknown Language"
   };

   println!("Course name : {}",found_course);
}
```

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%7B%0D%0A%20%20%20let%20course%20%3D%20%22Rust%22%3B%0D%0A%20%20%20%0D%0A%20%20%20let%20found_course%20%3D%20match%20course%20%7B%0D%0A%20%20%20%20%20%20%22Rust%22%20%3D%3E%20%22Rust%20F*ck%22%2C%0D%0A%20%20%20%20%20%20%22Java%22%20%3D%3E%20%22Java%22%2C%0D%0A%20%20%20%20%20%20%22C%2B%2B%22%20%3D%3E%20%22C%20Plus%20Plus%22%2C%0D%0A%20%20%20%20%20%20%22C%23%22%20%3D%3E%20%22C%20Sharp%22%2C%0D%0A%20%20%20%20%20%20_%20%3D%3E%20%22Unknown%20Language%22%0D%0A%20%20%20%7D%3B%0D%0A%0D%0A%20%20%20println!(%22Course%20name%20%3A%20%7B%7D%22%2Cfound_course)%3B%0D%0A%7D"
  height="400"
/>
