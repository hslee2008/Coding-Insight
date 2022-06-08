---
sidebar_position: 15
id: 'shadow'
---

# 그림자

변수의 "새로운 그림자 변수"는 변수 범위가 다른 곳에서 똑같은 이름을 만든 것입니다.

예를 들면, `lang` 변수 안에 `"Rust"` 값을 저장하고 `{}` 코드 블록 안에 `"Python"`이라고 따로 저장하면 `{}` 안에서는 `"Python"` 값을 가지고 있고 밖에서는 `"Rust"`를 가지고 있습니다.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2022&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20lang%20%3D%20%22Rust%22%3B%0D%0A%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EB%B0%96%3A%20%7Blang%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20let%20lang%20%3D%20%22Python%22%3B%0D%0A%20%20%20%20%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EC%95%88%3A%20%7Blang%7D%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EB%B0%96%3A%20%7Blang%7D%22)%3B%0D%0A%7D"
  height="400"
/>
