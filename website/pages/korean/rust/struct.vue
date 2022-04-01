<template>
  <div>
    <br /><br />

    <h2>struct란?</h2>
    <p>
      struct는 구조체(structure)라는 뜻인데 미리 정의된 구조체를 사용하는
      변수입니다.<br /><br />

      구조체란 어떤 이름에 지정된 형태를 가진 변수들입니다.<br /><br />

      예를 들면, dictionary라는 변수 안에 구조체를 만들 때 '뜻'의 값에 String
      형태로 저장하고 '단어' 값에 String 형태로 저장하는 구조체를 만들 수
      있습니다.
    </p>

    <Header type="Rust" title="구조체" num="43" />

    <h2>구조체 선언 방법</h2>
    <p>
      구조체를 선언하는 방법은 다음과 같습니다.<br /><br />

      <code>
        struct Dictionary {<br />
        &nbsp;&nbsp;word: String,<br />
        &nbsp;&nbsp;meaning: String<br />
        }
      </code>

      그리고 구조체를 사용하기 위해서 아래와 같이 사용합니다.<br /><br />

      <code>
        let dictionary = Dictionary {<br />
        &nbsp;&nbsp;word: "안녕".to_string(),<br />
        &nbsp;&nbsp;meaning: "Hello".to_string()<br />
        };
      </code>

      <iframe
        :src="`${playrust}%0D%0Astruct%20Dictionary%20%7B%0D%0A%20%20word%3A%20String%2C%0D%0A%20%20meaning%3A%20String%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20let%20dictionary%20%3D%20Dictionary%20%7B%0D%0A%20%20%20%20%20%20%20%20word%3A%20%22%EC%95%88%EB%85%95%22.to_string()%2C%0D%0A%20%20%20%20%20%20%20%20meaning%3A%20%22Hello%22.to_string()%0D%0A%20%20%20%20%7D%3B%0D%0A%0D%0A%20%20%20%20println!(%22%7B%7D%EC%9D%98%20%EB%9C%BB%EC%9D%80%20%7B%7D%EC%9E%85%EB%8B%88%EB%8B%A4.%22%2C%20dictionary.word%2C%20dictionary.meaning)%3B%0D%0A%7D`"
        width="100%"
        height="400"
      />
    </p>

    <QuadSpace />

    <h2>튜플과 구조체</h2>
    <p>
      튜플은 배열과 비슷하지만 다양한 데이터 형태를 가질 수 있습니다.<br /><br />

      배열은 에를 들면 i32 변수만 가질 수 있게 만들 수 있고 튜플은 String, i32,
      i64 등 여러 개의 데이터 형태를 가질 수 있습니다.<br /><br />

      튜플은 ()를 사용해서 만들 수 있고 튜플 구조체는
      <code class="ic">struct Random(String, String)</code> 등으로 선언할 수
      있습니다.<br /><br />

      튜플 구조체나 튜플은 대부분 값을 모아서 함수로 반환하거나 함수의 값을
      받아서 사용합니다.<br /><br />

      <iframe
        :src="`${playrust}struct%20Color(i32%2C%20i32%2C%20i32)%3B%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20let%20black%20%3D%20Color(0%2C%200%2C%200)%3B%0D%0A%20%20let%20Color(r%2C%20g%2C%20b)%20%3D%20black%3B%0D%0A%0D%0A%20%20println!(%22%7B%7D%20%7B%7D%20%7B%7D%22%2C%20r%2C%20g%2C%20b)%3B%0D%0A%7D`"
        width="100%"
        height="400"
      />
    </p>

    <QuadSpace />

    <Navigation bef="vec_method" next="enum" />
  </div>
</template>
