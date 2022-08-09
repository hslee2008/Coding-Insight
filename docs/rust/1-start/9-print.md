# 출력

출력이란 개발자 또는 사용자가 어떤 정보를 확인하기 위해 컴퓨터 화면에 나타내는 작업을 뜻합니다.

예를 들면, `1 + 1`의 값을 컴퓨터 화면에 출력할 수 있습니다.

```
2
```

참고로 콘솔이라는 것은 모든 정보를 출력하는 곳을 뜻합니다.

## `println!()`

`println!()`는 컴퓨터 화면에 정보를 출력합니다.

괄호 `()` 안에 원하는 글자를 넣으면 콘솔에 그 값이 나타납니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/"
  height="400"
/>

## `print!()`

`println!()`을 사용했을 때는 사실 값을 출력하고 그 다음에 새로운 줄을 넣습니다.

예를 들면, `println!('Hello World')`를 실행했을 때 Hello World가 출력되고 그 다음에 새로운 줄로 넘어갑니다.

`print!()`는 그 값만 출력합니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%20%22)%3B%0A%20%20%20%20println!(%22World%22)%3B%0A%20%20%20%20%0A%20%20%20%20print!(%22Hello%20%22)%3B%0A%20%20%20%20print!(%22World%22)%3B%0A%7D"
  height="400"
/>

`println!()`을 사용했을 때는 새로운 줄에 출력되는 것을 확인할 수 있고 `print!()`에서는 같은 줄에서 출력됩니다.

## `eprint!()`와 eprintln!()

`eprint!()`와 `eprintln!()`은 `print!()`와 같지만 에러를 표시할 때 사용합니다.

이 두 코드는 에러가 생길 때 사용하세요.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20eprint!(%22Error%3A%20System%20Memory%20Overflow%22)%3B%0A%20%20%20%20eprint!(%22Error%3A%20Need%20Sleep%22)%3B%0A%7D"
  height="400"
/>

:::note 입력에 대해 알고 싶다면 [여기](/docs/rust/module/input)을 참조하세요.

이는 더 복잡한 Rust 코드가 들어 있기 때문에 나중에 공부하겠습니다. :::
