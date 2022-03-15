<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>mut 변수란?</h2>
        <p>
          mut란 변수의 값을 바꿀 수 있다는 뜻입니다.<br /><br />

          immutable 변수는 값을 바꿀 수 없는데 Rust는 기본적으로
          immutable입니다.<br /><br />

          그리하여 변수에 값을 저장하고 나중에 바꾸고 싶다면 mut를 사용해야
          합니다.
        </p>
      </div>

      <div class="mx-auto my-auto">
        <GlobalImage
          src="https://image-loader-coding-insight.web.app/rust-kr/img/code_mut_variable.png"
          max-width="300"
        />
      </div>
    </div>

    <Header type="Rust" title="mut 변수" num="8" />

    <div>
      <div>
        <h2>mut 사용 방법</h2>
        <p>
          식별자 (예: let) 다음에 mut를 붙이면 mutable 변수로 인식합니다.<br /><br />

          값을 지정한 후 다시 값을 바꿀 수 있습니다.
        </p>
      </div>
      <div>
        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20mut%20language%20%3D%20%22English%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Hello%20you!%20I%20am%20learning%20%7Blanguage%7D%22)%3B%0A%20%20%20%20%0A%20%20%20%20language%20%3D%20%22Rust%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Sorry%2C%20not%20English!%20I%20am%20learning%20%7Blanguage%7D%22)%3B%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="variable" aft="identifier" />
  </div>
</template>
