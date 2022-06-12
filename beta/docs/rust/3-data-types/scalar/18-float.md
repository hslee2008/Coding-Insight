---
sidebar_position: 18
id: 'float'
---

# 소수

저번 페이지에서 Rust 정수 형태에 대해 알아 보았습니다.

이번에는 정수가 아닌 소수를 사용해 보겠습니다.

소수는 Rust에서 ``f`이고 비트는 32, 64 숫자를 사용합니다.

## floor(), ceil(), round()

`floor()`을 사용하면 소수를 내림하고 ceil()은 올림합니다.

`round()`는 가장 가까운 정수를 찾습니다.

:::note
참고로 `'이름'()`의 형태를 Rust에서는 '메서드'라고 하고 대부분 데이터를 다룰 때 사용합니다.
:::

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%20123.123%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.floor())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.ceil())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.round())%3B%0D%0A%7D"
  height="400"
/>

## trunc(), fract()

`trunc()`를 사용하면 정수 부분만 찾고 소수 부분은 버립니다.

`fract()`는 반대로 소수 부분만 찾습니다.

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%203.14159%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.trunc())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.fract())%3B%0D%0A%7D"
  height="400"
/>
