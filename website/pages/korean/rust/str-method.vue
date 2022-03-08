<template>
  <div>
    <Header type="Rust" title="str 매서드" num="20" />

    <BasicExpDivWithOneIframe
      heading="길이와 관련된 메서드"
      :contents="[
        'len()을 사용하면 &str의 길이를 알 수 있습니다.',
        'is_empty()는 &str이 비어있는지 아닌지를 판단합니다. 즉, len()이 0인지 확인합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Rust%20Language%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7Ba%7D%EC%9D%98%20%EA%B8%B8%EC%9D%B4%EB%8A%94%20%7B%7D%EC%9E%85%EB%8B%88%EB%8B%A4.%22%2C%20a.len())%3B%0A%20%20%20%20println!(%22a%EA%B0%80%20%EB%B9%84%EC%96%B4%EC%9E%88%EB%82%98%EC%9A%94%3F%20%7B%7D%22%2C%20a.is_empty())%3B%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="아스키 코드로"
      :contents="[
        'as_bytes()를 사용하면 각 문자를 아스키 코드로 변환합니다.',
        '이를 사용하면 사실 \'배열\'이 만들어 지는데 이는 나중에 더 자세히 배우겠습니다.',
        ' 참고로 배열을 출력하기 위해서는 {} 대신 {:?}를 사용해야 합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Rust%20Language%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7Ba%7D%EC%9D%98%20%EA%B8%B8%EC%9D%B4%EB%8A%94%20%7B%7D%EC%9E%85%EB%8B%88%EB%8B%A4.%22%2C%20a.len())%3B%0A%20%20%20%20println!(%22a%EA%B0%80%20%EB%B9%84%EC%96%B4%EC%9E%88%EB%82%98%EC%9A%94%3F%20%7B%7D%22%2C%20a.is_empty())%3B%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="인덱스 메서드"
      :contents="[
        '인덱스란 문자열에서 각 문자의 위치 번호를 뜻합니다.',
        '0 인덱스는 첫 번째 문자를 뜻합니다.',
        '1 인덱스는 두 번째 문자를 뜻합니다.',
        '사실 x 인덱스는 x + 1 번째 문자입니다.',
        '문자열의 인덱스는 &str에서 chars()로 바꾸고 nth()를 사용해서 n번째 인덱스를 찾을 수 있습니다.',
        'CODE:Some(값)',
        '은 nth()를 실행했을 때의 결과이기 때문에 Some으로 둘러쌓인 값은 .unwrap() 메서드를 사용합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a:%20&str%20=%20%22Hello,%20World!%22;%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B:%253F%7D%22,%20a.as_bytes());%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="contains() 메서드"
      :contents="['어떤 값이 문자열에 포함되어 있는지 확인하는 메서드입니다.']"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20a%3A%20%26str%20%3D%20%22Hello%20World%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20a.contains(%22Hello%22))%3B%0A%7D"
    />

    <NaviBtn bef="string" aft="str-method-specific" />
  </div>
</template>
