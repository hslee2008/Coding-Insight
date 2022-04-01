<template>
  <div>
    <br /><br />

    <div>
      <h2>char 데이터 형태</h2>
      <p>
        char은 한 알파벳을 저장하는 데이터 형태입니다.<br /><br />

        사실 다른 코딩 언어는 캐릭터를 저장하는데 1 BYTE (8bit)를 사용하는데,
        Rust는 사실 4 BYTE를 이용합니다.<br /><br />

        나쁜 것 같지만 사실 Rust에서는 한국어, 일본어, 중국어, 아랍어, 이모지 등
        일반 영어와 특수문자만 저장할 수 있는 것이 아닙니다!
      </p>
    </div>

    <Header type="Rust" title="Char 데이터 형태" num="18" />

    <div>
      <div>
        <h2>char 데이터 형태 선언</h2>
        char은 '' 안에 한 문자를 넣어서 선언할 수 있습니다.<br /><br />

        위에서 설명했듯이 Rust는 4 BYTE를 사용하는데, 이는 아스키 코드값을
        저장하는데 사용됩니다.<br /><br />

        아스키 코드란 문자를 컴퓨터가 효율적으로 저장하기 위해서 사용하는
        코드(숫자)를 의미합니다.<br /><br />

        예를 들면, a는 아스키 코드로 97이라는 숫자를 사용합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20char1%3A%20char%20%3D%20%27i%27%3B%20%2F%2F%EC%BA%90%EB%A6%AD%ED%84%B0%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7Bchar1%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20let%20char2%3A%20i32%20%3D%20%27a%27%20as%20i32%3B%20%2F%2Fa%EC%9D%98%20%EC%95%84%EC%8A%A4%ED%82%A4%20%EC%BD%94%EB%93%9C%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7Bchar2%7D%22)%3B%0D%0A%7D`"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>char 값에 대한 정보 얻기</h2>
        is_alphabetic() 메서드는 char 값이 알파벳인지 확인합니다.<br /><br />

        is_lowercase() 메서드는 char 값이 소문자인지 확인합니다.<br /><br />

        is_uppercase() 메서드는 char 값이 대문자인지 확인합니다.<br /><br />

        is_whitespace() 메서드는 char 값이 공백인지 확인합니다.<br /><br />

        is_alphanumeric() 메서드는 char 값이 알파벳 또는 숫자인지 확인합니다.<br /><br />

        is_numeric() 메서드는 char 값이 숫자인지 확인합니다.<br /><br />

        is_ascii() 메서드는 char 값이 ASCII 문자인지 확인합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20char%20%3D%20%27a%27%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_alphabetic())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_lowercase())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_uppercase())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_whitespace())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_alphanumeric())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_numeric())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.is_ascii())%3B%0D%0A%7D`"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>char 대소문자</h2>
        to_uppercase() 메서드는 char 값을 대문자로 변형합니다.<br /><br />

        to_lowercase() 메서드는 char 값을 소문자로 변형합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20char%20%3D%20%27a%27%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.to_uppercase())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1.to_lowercase())%3B%0D%0A%7D`"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="boolean-operator" aft="string" />
  </div>
</template>
