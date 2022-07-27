# 주석

주석이라는 것은 프로그램에서 노트를 달고 싶을 때 사용합니다.

노트라는 것은 사실 프로그래머들이 나중에 알아야 하는 내용, 다른 프로그래머들이 알아야 하는 것 등 코드가 아닌 사람이 참고할 내용입니다.

## 주석 달기 (한 줄)

`//`를 사용하면 그 줄에서 이 다음으로 나오는 모든 글자들은 다 주석으로 변합니다.

코드를 실행할 때 다 무시되어서 일부 코드를 없에고 일시적으로 실행하고 싶다면 주석을 사용하면 됩니다.

밑 화면에서는 `Hello World`는 주석이어서 출력이 않되고 `Hello, World!`만 출력됩니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2Fprintln!(%22Hello%20World%22)%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0A%7D"
  height="400"
/>

:::note

## 중괄호의 사용 {}

`{}`를 `""` 안에 넣고 다음에 값을 선언하면 그 값이 `{}` 안에 대신 넣어집니다.

예를 들면, `println!("{} {}", 1, 2)`는 `"1 2"`를 출력합니다.
:::note


## 주석 달기 (블록 줄)

`//`는 그 줄에서 이 다음으로 나오는 모든 글자들은 다 주석으로 만들지만 `/**/`는 `/*`와 `*/` 사이를 주석으로 만듭니다.

<iframe
  loading="lazy"
  title="Rust Playrground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%2F*eprint!(%22Error%3F%3F%3F!!!%22)%3B*%2F%0A%20%20%20%20%0A%20%20%20%20print!(%22%EC%9C%84%20%EC%BD%94%EB%93%9C%EB%8A%94%20%EC%8B%A4%ED%96%89%EC%9D%B4%20X%22)%3B%0A%7D"
  height="400"
/>

## 주석 달기 (DOC 주석)

`///`와 `//!`는 `//`와 똑같지만 [Markdown](https://www.markdownguide.org/basic-syntax/) 형식을 지원합니다.

Markdown이란 글이 아니라 특별한 스타일을 넣은 글입니다 (예: 글의 크기, 모양 등)

`///`는 코드 블록 (예: `main()`) 밖에서 `//!` 코드 블록 안에서 사용합니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F%2F%20%23Hello%20World%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20%2F%2F!%20%23Testing%0D%0A%20%20%20%20println!(%22%7B%7D%20can%20support%20%7B%7D%20notation%22%2C%22Doc%20comment%22%2C%22markdown%22)%3B%0D%0A%7D"
  height="400"
/>
