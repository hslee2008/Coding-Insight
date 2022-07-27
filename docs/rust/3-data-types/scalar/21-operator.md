# 연산자

## 비교 연산자

비교 연산자란 두 값을 비교하는 작업을 하는 연산자입니다.

비교 연산자에는 `>`, `<`, `==`, `!=`, `>=`, `<=` 이 있습니다.

참고로 비교 연산자는 숫자 값에만 사용할 수 있습니다.

### >와 <, >=와 <=

`>`는 왼쪽 숫자가 더 크면 `true`이고 `<`는 오른쪽 숫자가 더 크면 `true`입니다.

`>=`는 왼쪽 숫자가 크거나 같으면 `true`이고 `<=`는 오른쪽 숫자가 크거나 같으면 `true`입니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%3D%20val2)%3B%0D%0A%7D"
  height="400"
/>

### ==와 !=

대부분 프로그래밍 언어에서 변수가 있어서 변수의 값을 지정할 때 `=`를 사용하기 때문에 값이 같은지 비교할 때는 `==`를 사용합니다.

값이 다른지 비교할 때는 `!=`를 사용합니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3D%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20!%3D%20val2)%3B%0D%0A%7D"
  height="400"
/>

## 논리 연산자

### &&

`&&`는 어떤 두 불리언이 모두 `true`일 때만 `true`를 반환합니다.

그래서 `true && true`이면 값이 `true`이고 `false && true`와 `true && false`는 값이 `false`입니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%2023%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%2024%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%26%26%20val1%20!%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%26%26%20val1%20%3D%3D%20val2)%3B%0D%0A%7D"
  height="400"
/>

### ||

`||`는 어떤 두 값이 하나라도 `true`일 때만 `true`를 반환합니다.

그래서 `true || true`이면 값이 `true`이고 `false || true`와 `true || false`도 값이 `true`입니다.

`false || false`일 때만 값이 `false`입니다.

<iframe
  loading="lazy"
  title="Rust Playground"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%2023%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%2024%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%7C%7C%20val1%20%3D%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%20val2%20%7C%7C%20val1%20%3D%3D%20val2)%3B%0D%0A%7D"
  height="400"
/>
