# 반환 (return)

return은 함수의 결과를 반환하는 것을 의미합니다.

예를 들면, 덧셈을 하고 출력하는 데신 그 값을 반환할 수 있습니다.

```rust
fn add_one(x: i32) -> i32 {
  x + 1
}

fn main() {
  let five = add_one(4);
  println!("The value of five is: {}", five);
}
```

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20add_one(x%3A%20i32)%20-%3E%20i32%20%7B%0D%0A%20%20x%20%2B%201%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20let%20five%20%3D%20add_one(4)%3B%0D%0A%20%20println!(%22The%20value%20of%20five%20is%3A%20%7B%7D%22%2C%20five)%3B%0D%0A%7D"
  height="400"
/>

## 반환 방법

반환하는데는 2가지 방법이 있습니다.

`return`을 사용하거나 `return`를 사용하지 않는 방법입니다.

즉, `return x + 1`을 사용할 수도 있고 `x + 1`을 사용할 수도 있습니다.

## 반환 데이터 종류

`->` 뒤에 데이터 정류를 넣으면 반환 데이터 종류를 선언할 수 있습니다.

## 여러 값 반환

여라 값을 동시에 반환할 때는 튜플을 사용하면 됩니다.

```rust
fn main() {
  let length = 4;
  let width = 3;

  println!("Rectangle lenth:{}", length);
  println!("Rectangle width:{}", width);

  let (area, perimeter) = calculate_area_perimeter(length, width);
  println!("넓이: {}, 겉넓이: {}", area, perimeter);
}

// 겉넓이와 넓이 구하기
fn calculate_area_perimeter(x: i32, y: i32) -> (i32, i32) {
  let area = x * y;
  let perimeter = 2 * (x + y);

  (area, perimeter)
}
```

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20let%20length%20%3D%204%3B%0D%0A%20%20let%20width%20%3D%203%3B%0D%0A%0D%0A%20%20println!(%22Rectangle%20lenth%3A%7B%7D%22%2C%20length)%3B%0D%0A%20%20println!(%22Rectangle%20width%3A%7B%7D%22%2C%20width)%3B%0D%0A%0D%0A%20%20let%20(area%2C%20perimeter)%20%3D%20calculate_area_perimeter(length%2C%20width)%3B%0D%0A%20%20println!(%22%EB%84%93%EC%9D%B4%3A%20%7B%7D%2C%20%EA%B2%89%EB%84%93%EC%9D%B4%3A%20%7B%7D%22%2C%20area%2C%20perimeter)%3B%0D%0A%7D%0D%0A%0D%0A%2F%2F%20%EA%B2%89%EB%84%93%EC%9D%B4%EC%99%80%20%EB%84%93%EC%9D%B4%20%EA%B5%AC%ED%95%98%EA%B8%B0%0D%0Afn%20calculate_area_perimeter(x%3A%20i32%2C%20y%3A%20i32)%20-%3E%20(i32%2C%20i32)%20%7B%0D%0A%20%20let%20area%20%3D%20x%20*%20y%3B%0D%0A%20%20let%20perimeter%20%3D%202%20*%20(x%20%2B%20y)%3B%0D%0A%0D%0A%20%20(area%2C%20perimeter)%0D%0A%7D"
  height="500"
/>
