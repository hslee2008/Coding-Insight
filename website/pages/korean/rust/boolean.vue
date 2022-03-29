<template>
  <div>
    <br /><br />

    <div>
      <h2>불리언</h2>
      <p>
        불리언이이란 참과 거짓을 나타내는 값입니다.<br /><br />

        0 또는 1, 즉 false 또는 true를 의미합니다.<br /><br />

        Rust에서 불리언은 bool을 통해 선언합니다.
      </p>
    </div>

    <Header type="Rust" title="불리언" num="15" />

    <div>
      <div>
        <h2>불리언 변수 선언</h2>

        불리언 변수는 다음과 같이 선언합니다.<br /><br />

        <code class="ic">let is_true: bool = true;</code>

        참고로 bool은 항상 true 또는 false 값만 가질 수 있습니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20boolean_value%3A%20bool%20%3D%20true%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20boolean_value)%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>! 느낀표</h2>
        ! 느낀표를 사용하면 불리언 값의 반대를 얻을 수 있습니다.<br /><br />

        !true는 false를 반환하고, !false는 true를 반환합니다.<br /><br />

        !!true는 true이고 !!false는 false입니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20boolean_value%3A%20bool%20%3D%20true%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!boolean_value)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!!boolean_value)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20!!!boolean_value)%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>assert!()와 assert_eq!()와 assert_ne!()</h2>
        assert!()는 불리언 값이 참이어야 하는 경우에만 실행되고, 거짓이면 에러를
        발생시킵니다.<br /><br />

        예: assert!(true);는 아무것도 않하고 assert!(false)는 에러가
        발생합니다.<br /><br />

        assert_eq!()은 어떤 두 값이 같으면 실행되고, 같지 않으면 에러가
        발생합니다.<br /><br />

        assert_ne!()는 반대로 어떤 두 값이 같지 않으면 실행되고, 같으면 에러가
        발생합니다 (ne는 not equal).<br /><br />

        TIP: 이렇게 !()로 끝나는 메서드를 Rust에서는 매크로라고 부릅니다. 이는
        나중에 더 자세히 알아보겠습니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20boolean_value%3A%20bool%20%3D%20true%3B%0D%0A%20%20%20%20let%20num_value%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20let%20num_value2%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20assert!(boolean_value)%3B%0D%0A%20%20%20%20assert_ne(num_value%2C%20num_value2)%3B%0D%0A%20%20%20%20assert_eq(num_value%2C%20num_value2)%3B%20%2F%2F%EC%97%AC%EA%B8%B0%EC%97%90%EC%84%9C%EB%A7%8C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="math" aft="cmp-operator" />
  </div>
</template>
