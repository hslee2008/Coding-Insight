# 루프

루프란 `loop {}`를 통해 무한으로 코드를 반복하는 형식입니다.

잘못하면 계속 코드를 실행해서 에러가 생길 수 있으니 조심해야 합니다.

그래도 Rust 컴파일러는 이러한 실수를 에러 없이 다 처리할 수 있는 능력을 가지고 있습니다.

```rust
loop { // 위험한 코드
  println!("Hello, world!");
}
```

## `break` 키워드

만일 무한 루프에서 빠져 나오고 싶다면 `break` 키워드를 사용하면 됩니다.

```rust
loop {
  println!("Hello, world!");
  break;
}
```

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22%F0%9F%A4%B1%22%3B%0D%0A%20%20%20%20let%20mut%20count%3A%20i32%20%3D%200%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20loop%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20count%20%3E%3D%205%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20println!(%22Hello%2C%20Mom!%20%7Ba%7D%22)%3B%0D%0A%20%20%20%20%20%20%20%20count%20%2B%3D%201%3B%0D%0A%20%20%20%20%7D%0D%0A%7D"
  height="400"
/>

## 루프안의 루프

밑의 코드는 복잡합니다.

`'outer: loop {}`라는 것은 루프에 'outer'라는 이름을 붙여 주었다라는 뜻입니다.

`'inner: loop {}`라는 것은 루프에 'inner'라는 이름을 붙여 주었다라는 뜻입니다.

inner loop에서는 카운트를 하나 증가하고 3이상이면 inner loop가 중단됩니다.

outer loop에서는 5이상이면 outer loop가 중단됩니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20inner_count%3A%20i32%20%3D%200%3B%0A%20%20%20%20%0A%20%20%20%20%27outer%3A%20loop%20%7B%0A%20%20%20%20%20%20%20%20println!(%22Entered%20the%20outer%20loop%22)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20inner_count%20%2B%3D%201%3B%0A%0A%20%20%20%20%20%20%20%20%27inner%3A%20loop%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%22Entered%20the%20inner%20loop%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20inner_count%20%2B%3D%201%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20inner_count%20%3E%3D%203%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%20%27inner%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20inner_count%20%3E%3D%205%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20break%20%27outer%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20println!(%22Exited%20the%20outer%20loop%22)%3B%0A%7D%0A"
  height="600"
/>

## 루프에서 결과 값 받기

루프에서 실해이 끝나고 결과 값을 받고 싶다면 `break` 다음에 돌려주고 싶은 값을 넣습니다.

그리고 밖에서는 변수를 선언해서 변수의 값을 `loop {}`로 두면 됩니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20string%20%3D%20String%3A%3Afrom(%22%22)%3B%0D%0A%20%20%20%20let%20mut%20count%3A%20i32%20%3D%200%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20let%20result%3A%20String%20%3D%20loop%20%7B%0D%0A%20%20%20%20%20%20%20%20string%20%2B%3D%20%22*%22%3B%0D%0A%20%20%20%20%20%20%20%20count%20%2B%3D%201%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20if%20count%20%3E%3D%2010%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20break%20string%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7Bresult%7D%22)%3B%0D%0A%7D"
  height="400"
/>
