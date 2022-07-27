# While 문

`while`문은 루프와 비슷하지만 조건이 들어갑니다.

그 조건이 틀릴 때 까지 코드를 무한 반복합니다.

코드의 실행이 끝나고 다시 조건을 확인했을 때 거짓이라면 이제 멈추고 다음 코드로 넘어갑니다.

```rust
let mut cnt = 0;

while (cnt < 10) {
  println!("{}", cnt);
  cnt += 1;
}
```

이 또한 실수로 코드의 조건을 잘못 짜서 무한으로 반복되는 경우가 있습니다.

## break와 continue

`break`는 루프 시간에 설명했지만 이는 `while`, `for`, `loop`와 같이 반복해서 코드를 돌릴 때 중간에 멈추는 코드입니다.

`continue`는 완벽히 멈추는 대신 그 때의 코드를 멈추고 다시 한 번 조건문을 확인하겠다는 뜻입니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20a%20%3D%20String%3A%3Afrom(%22Hello%2C%20World%22)%3B%0A%20%20%20%20%0A%20%20%20%20while%20a.len()%20%3C%2020%20%7B%0A%20%20%20%20%20%20%20%20a%20%3D%20String%3A%3Afrom(%22.%22)%20%2B%20%26a%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20a.starts_with(%22.....%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20continue%3B%20%2F%2F5%20%EB%B2%88%EC%A7%B8%EC%97%90%EC%84%9C%EB%8A%94%20%EC%B6%9C%EB%A0%A5%EC%9D%84%20%ED%95%98%EC%A7%80%20%EC%95%8A%EC%9D%8C%3A%20%EB%B0%94%EB%A1%9C%20println%EC%9D%84%20%EB%84%98%EC%96%B4%EA%B0%90.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20println!(%22%7Ba%7D%22)%3B%0A%20%20%20%20%7D%0A%7D"
  height='400'
/>
