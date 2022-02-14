<template>
  <div>
    <QuadSpace />

    <Header type="Rust" title="str 매서드 2" num="21" />

    <QuadSpace />

    <div>
      <div>
        <h2>대소문자</h2>
        to_ascii_uppercase()는 문자열(모든 문자들)을 대문자로 변환합니다.<br /><br />

        to_ascii_lowercase()는 문자열(모든 문자들)을 소문자로 변환합니다.<br /><br />

        참고로 to_uppercase()나 to_lowercase()와 다르게 ascii 대소문자 변형은
        알파벳만 변환하지 않고 그리스어, 라틴어 등도 가능합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%20=%20%22Gr%C3%BC%C3%9Fe,%20J%C3%BCrgen%20%E2%9D%A4%22;%0A%0A%20%20%20%20println!(%22%7B%7D%22,%20s.to_ascii_uppercase());%0A%20%20%20%20println!(%22%7B%7D%22,%20s.to_ascii_lowercase());%0A%20%20%20%20println!(%22%7B%7D%22,%20s.to_uppercase());%0A%20%20%20%20println!(%22%7B%7D%22,%20s.to_lowercase());%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>repeat() 메서드</h2>
        repeat(x)은 어떤 문자열을 x번 반복하는 메서드입니다.<br /><br />

        참고로 x 숫자가 너무 크면 panic이 생깁니다.<br /><br />

        panic이라는 것은 Rust에서 코드르 실행하는 동안 예외, 에러 발생 또는 아주
        위험한 코드이면 panic합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22abc%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.repeat(3))%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>일부 문자열 바꾸기</h2>
        replace()를 사용하면 문자열의 일부만 새로운 값으로 바꿀 수 있습니다.<br /><br />

        replaceen()를 replace()를 x번 실행합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a:%20&str%20=%20%22Hello,%20World!%22;%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B:%253F%7D%22,%20a.as_bytes());%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>find() 메서드</h2>
        find()을 사용하면 문자의 인덱스를 찾습니다.<br /><br />

        find()를 실행하고도 다시 unwrap()를 실행해야 합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20%22L%C3%B6we%20%E8%80%81%E8%99%8E%20L%C3%A9opard%20Gepardi%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.find(%22%E8%99%8E%22).unwrap())%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>startswith() 메서드</h2>
        startswith()을 사용하면 어떤 문자열이 어떤 값으로 시작하는지 확인합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=fn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20%22L%C3%B6we%20%E8%80%81%E8%99%8E%20L%C3%A9opard%20Gepardi%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20s.starts_with(%22L%22))%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="str-method" aft="array" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'string-method',
};
</script>
