# 문자열 (str)

str(문자열)은 char 데이터 형태를 여러게 붙여 놓은 데이터 형태입니다.

즉, 문자열은 글자를 담고 있는 데이터 형태입니다.

`char`은 ''를 사용하고 str은 ""를 사용해야 합니다.

## str 데이터 형태

`str` 변수를 선언할 때 str을 사용하는 것이 아니라 `&str`를 대신 사용해야 합니다.

사실 Rust에는 str과 String 데이터 형태가 있는데 str은 ASCII를 사용하고 String은 UTF-8 (Unicode)를 사용합니다.

UTF-8이란 ASCII보다 훨씬 더 많은 문자를 가지고 있습니다.

`str`은 binary, stack, heap이라는 저장소에 다 저장할 수 있어서 정확한 사이즈를 몰라서 항상 `&`를 붙여야 합니다.

| 메모리 저장소 | 설명                                                                 |
| ------------- | -------------------------------------------------------------------- |
| binary        | 0과 1로 저장                                                         |
| stack         | 데이터가 끝에 들어가고 가장 위는 나가는 형식                         |
| heap          | 프로그래머가 코딩할 때 저장하는 모든 변수, 코드 등이 들어있는 메모리 |

String은 heap에만 저장할 수 있습니다.

## &str과 String

`&str`은` let vari: &str = ""` 형태로 변수를 선언하면 되고 String은 `let vari = String::from("")`과 같이 선언하면 됩니다.

참고로 `String`에 `&`를 붙이면 `&str`로 변합니다.

`&`에 대해서는 나중에 더 자세히 배우겠습니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20%26str%20%3D%20%22Hello%2C%20World!%22%3B%0D%0A%20%20%20%20let%20val2%20%3D%20String%3A%3Afrom(%22%F0%9F%A6%80%F0%9F%A6%80%F0%9F%A6%80%20Rust%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EC%96%B8%EC%96%B4%20%EB%A1%9C%EA%B3%A0%EA%B0%80%20%EA%B2%8C%EC%9D%B8%EA%B1%B0%20%EC%95%8C%EC%95%98%EB%82%98%EC%9A%94%3F%3F%3F%20%F0%9F%A6%80%F0%9F%A6%80%F0%9F%A6%80%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7Bval1%7D%22)%3B%0D%0A%20%20%20%20println!(%22%7Bval2%7D%22)%3B%0D%0A%7D"
  height="400"
/>

## 다양한 매서드

### 길이와 관련된 메서드

`len()`을 사용하면 `&str`의 길이를 알 수 있습니다.

`is_empty()`는 `&str`이 비어있는지 아닌지를 판단합니다.

즉, `len()`의 값이 0인지 확인합니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%20%3D%20String%3A%3Afrom(%22Rust%20Language%22)%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7Ba%7D%EC%9D%98%20%EA%B8%B8%EC%9D%B4%EB%8A%94%20%7B%7D%EC%9E%85%EB%8B%88%EB%8B%A4.%22%2C%20a.len())%3B%0A%20%20%20%20println!(%22a%EA%B0%80%20%EB%B9%84%EC%96%B4%EC%9E%88%EB%82%98%EC%9A%94%3F%20%7B%7D%22%2C%20a.is_empty())%3B%0A%7D"
  height="400"
/>

:::note

지금부터 배우는 메서드는 다 `String`과 `&str` 형태에 사용할 수 있습니다.

:::

### 인덱스 메서드

인덱스란 문자열에서 각 문자의 위치 번호를 뜻합니다.

0 인덱스는 첫 번째 문자를 뜻합니다.

1 인덱스는 두 번째 문자를 뜻합니다.

사실 `x` 인덱스는 `x + 1` 번째 문자입니다.

문자열의 인덱스는 `&str`에서 `chars()`로 바꾸고 `nth()`를 사용해서 `n`번째 인덱스를 찾을 수 있습니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Superman%22%3B%0A%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.chars().nth(0).unwrap())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.chars().nth(1).unwrap())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.chars().nth(2).unwrap())%3B%0A%7D"
  height="400"
/>

:::note

참고로 `nth()`는 사실 `Some("")`를 반환하기 때문에 `Some()`을 없에기 위해서 `unwrap()`를 사용합니다.

:::

### 대소문자

`to_ascii_uppercase()`는 문자열(모든 문자들)을 대문자로 변환합니다.

`to_ascii_lowercase()`는 문자열(모든 문자들)을 소문자로 변환합니다.

참고로 `to_uppercase()`나 `to_lowercase()`와 다르게 ascii 대소문자 변형은 알파벳만 변환하지 않고 그리스어, 라틴어 등도 가능합니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20%22Gr%C3%BC%C3%9Fe%2C%20J%C3%BCrgen%20%E2%9D%A4%22%3B%0A%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.to_ascii_uppercase())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.to_ascii_lowercase())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.to_uppercase())%3B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.to_lowercase())%3B%0A%7D"
  height="400"
  />

### `contains()` 메서드

어떤 값이 문자열에 포함되어 있는지 확인하는 메서드입니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Hello%20World%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.contains(%22Hello%22))%3B%0A%7D"
  height="400"
/>

### `repeat()` 메서드

`repeat(x)`은 어떤 문자열을 x번 반복하는 메서드입니다.

참고로 x 숫자가 너무 크면 panic이 생깁니다.

panic이라는 것은 Rust에서 코드르 실행하는 동안 예외, 에러 발생 또는 아주 위험한 코드이면 panic합니다.

### `startswith()` 메서드

`startswith()`을 사용하면 어떤 문자열이 어떤 값으로 시작하는지 확인합니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20%22L%C3%B6we%20%E8%80%81%E8%99%8E%20L%C3%A9opard%20Gepardi%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.starts_with(%22L%22))%3B%0A%7D"
  height="400"
/>

## ASCII 코드

`as_bytes()`를 사용하면 각 문자를 아스키 코드로 변환합니다.

이를 사용하면 사실 '배열'이 만들어 지는데 이는 나중에 더 자세히 배우겠습니다.

참고로 배열을 출력하기 위해서는 `{}` 대신 `{:?}`를 사용해야 합니다.

<iframe
  loading="lazy"
  title="Rust IDLE"
  src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Hello%2C%20World!%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20a.as_bytes())%3B%0A%7D"
  height="400"
/>
