---
sidebar_position: 20
id: 'boolean'
---

# 불리언

불리언이이란 참과 거짓을 나타내는 값입니다.

0 또는 1, 즉 `false` 또는 `true`를 의미합니다.

Rust에서 불리언은 bool을 통해 선언합니다.

## 불리언 변수 선언

불리언 변수는 다음과 같이 선언합니다.

```rust
let is_true: bool = true;
```

:::note
참고로 `bool`은 항상 `true` 또는 `false` 값만 가질 수 있습니다.
:::

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2022&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20boolean_value%3A%20bool%20%3D%20true%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20boolean_value)%3B%0D%0A%7D"
  height="400"
/>

## ! 느낀표

`!` 느낀표를 사용하면 불리언 값의 반대를 얻을 수 있습니다.

`!true`는 `false`를 반환하고, `!false`는 `true`를 반환합니다.

`!!true`는 `true`이고 `!!false`는 `false`입니다.

## assert!(), assert_eq!(), assert_ne!()

`assert!()`는 불리언 값이 참이어야 하는 경우에만 실행되고, 거짓이면 에러를 발생시킵니다.

예: `assert!(true);`는 정상적으로 코드가 실행되지만 `assert!(false)`는 에러가 발생합니다.

`assert_eq!()`은 어떤 두 값이 같으면 실행되고, 같지 않으면 에러가 발생합니다.

`assert_ne!()`는 반대로 어떤 두 값이 같지 않으면 실행되고, 같으면 에러가 발생합니다 (ne는 not equal).

:::info
이렇게 `!()`로 끝나는 메서드를 Rust에서는 매크로라고 부릅니다.

이는 나중에 더 자세히 알아보겠습니다.
:::

<iframe
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20boolean_value%3A%20bool%20%3D%20true%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!boolean_value)%3B%20%2F%2F%20false%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!!boolean_value)%3B%20%2F%2F%20true%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!!!boolean_value)%3B%20%2F%2F%20false%0D%0A%7D"
  height="400"
/>
