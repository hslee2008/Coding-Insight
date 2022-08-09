# Impl과 Trait

`String` 데이터를 선언할 때 사용하는 `::new()`처럼 `Struct`를 새로 만들 때 다양한 메서드를 개발자가 정할 수 있습니다.

이는 `trait`과 `impl`을 통해 선언할 수 있습니다.

## `impl`

구조체 메서드란 그 구조체의 변수들을 사용해서 함수를 실행하는 메서드입니다.

이는 `impl` 안에 선언하면 됩니다.

```rust
struct Point {
  x: i32,
  y: i32,
}

impl Point {
  fn new(x: i32, y: i32) -> Point {
    Point { x, y }
  }

  fn distance_from_origin(&self) -> f32 {
    ((self.x.pow(2) + self.y.pow(2)) as f32).sqrt()
  }
}

fn main() {
  let point = Point::new(3, 4);
  println!("{}", point.distance_from_origin());
}
```

위의 예시에서는 (3, 4)의 점을 만들고 `distance_from_origin()`을 통해 원점 (0, 0)에서의 거리를 계산하는데 사용되었습니다.

`::new()`와 같은 것은 특별한 함수인데 구조체를 선언했을 때 자동으로 실행되는 함수입니다.

이와 같은 `impl`을 통해 특별한 함수를 만들 수 있습니다.

## `trait`

`trait`은 `impl` 함수들을 정리해 놓습니다.

그 함수들의 매개변수와 반환하는 데이터 형태를 미리 정합니다.

```rust
struct Point {
  x: i32,
  y: i32,
}

trait Point {
  fn new(x: i32, y: i32) -> Point;
  fn distance_from_origin(&self) -> f32;
}

impl Point {
  fn new(x: i32, y: i32) -> Point {
    Point { x, y }
  }

  fn distance_from_origin(&self) -> f32 {
    ((self.x.pow(2) + self.y.pow(2)) as f32).sqrt()
  }
}

fn main() {
  let point = Point::new(3, 4);
  println!("{}", point.distance_from_origin());
}
```
