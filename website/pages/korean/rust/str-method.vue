<template>
  <div>
    <QuadSpace />

    <Header type="Rust" title="str 매서드" num="20" />

    <QuadSpace />

    <div>
      <div>
        <h2>길이와 관련된 메서드</h2>
        len()을 사용하면 &str의 길이를 알 수 있습니다.<br /><br />

        is_empty()는 &str이 비어있는지 아닌지를 판단합니다. 즉, len()이 0인지
        확인합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Rust%20Language%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7Ba%7D%EC%9D%98%20%EA%B8%B8%EC%9D%B4%EB%8A%94%20%7B%7D%EC%9E%85%EB%8B%88%EB%8B%A4.%22%2C%20a.len())%3B%0A%20%20%20%20println!(%22a%EA%B0%80%20%EB%B9%84%EC%96%B4%EC%9E%88%EB%82%98%EC%9A%94%3F%20%7B%7D%22%2C%20a.is_empty())%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>아스키 코드로</h2>
        as_bytes()를 사용하면 각 문자를 아스키 코드로 변환합니다.<br /><br />

        이를 사용하면 사실 '배열'이 만들어 지는데 이는 나중에 더 자세히
        배우겠습니다. 참고로 배열을 출력하기 위해서는 {} 대신 {:?}를 사용해야
        합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Hello%2C%20World!%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20a.as_bytes())%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>인덱스 메서드</h2>
        인덱스란 문자열에서 각 문자의 위치 번호를 뜻합니다.<br /><br />

        0 인덱스는 첫 번째 문자를 뜻합니다.<br /><br />

        1 인덱스는 두 번째 문자를 뜻합니다.<br /><br />

        사실 x 인덱스는 x + 1 번째 문자입니다.<br /><br />

        문자열의 인덱스는 &str에서 chars()로 바꾸고 nth()를 사용해서 n번째 인덱스를 찾을 수 있습니다. 참고로 nth()는 사실 <IC code='Some("")' />를 반환하기 때문에 Some()을 없에기 위해서 unwrap()를 사용합니다.<br /><br />

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
        <h2>contains() 메서드</h2>
        어떤 값이 문자열에 포함되어 있는지 확인하는 메서드입니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Hello%20World%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.contains(%22Hello%22))%3B%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="string" aft="str-method-specific" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'string-method',
};
</script>
