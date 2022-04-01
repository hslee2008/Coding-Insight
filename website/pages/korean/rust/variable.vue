<template>
  <div>
    <br /><br />

    <div>
      <h2>변수</h2>
      <p>
        변수란 정보를 저장할 수 있는 공간을 뜻합니다.<br /><br />

        박스 안에 물건을 담아두는 것이 변수에 값을 지정하는 것과 매우
        비슷합니다.
      </p>
    </div>

    <Header type="Rust" title="변수" num="7" />

    <div>
      <h2>변수 만드는 방법</h2>
      <p>
        Rust에서 변수를 만드는데 총 6가지 부분이 있습니다.<br /><br />

        1. 식별자 (let, const, mut)<br />
        2. 이름 (변수의 이름)<br />
        3. 타입 (:i32, :i64, :f32, 등)<br />
        4. '=' (값 지정)<br />
        5. 값
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>예시</h2>
      <p>위의 lang 변수는 문자열("" 안에)이라는 값을 가지고 있습니다.</p>
      <GlobalImage
        src="https://image-loader-coding-insight.web.app/rust-kr/img/code_variable.png"
        max-width="450"
        :noMargin="true"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>규칙 :(</h2>
        <p>
          변수를 만들 때 변수 이름에 특정한 규칙을 따르는 것이 좋습니다.<br /><br />

          1. 영어, 한국어, 숫자만 사용할 수 있습니다.<br />
          2. 영어로 시작해야 합니다.<br />
          3. _도 사용 가능합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수 출력</h2>
        <p>
          Rust에서 변수를 출력하는 방법을 알아보겠습니다.<br /><br />

          원래 쉽게 출력하기 위해서
          <code class="ic">println!()</code> 사이에 넣었습니다.<br /><br />

          변수를 사용하기 위해서는 <code class="ic">{}</code> 사이에 변수 이름을
          넣으면 됩니다.<br /><br />

          또는 '' 사이에 먼저 <code class="ic">{}</code>를 넣고 '' 다음에 변수
          이름을 넣어도 됩니다.
        </p>
      </div>
      <iframe
        :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20let%20language%20%3D%20%22Rust%22%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Hello%20you!%20I%20am%20learning%20%7Blanguage%7D%22)%3B%0A%20%20%20%20println!(%22Hello%20you!%20I%20am%20learning%20%7B%7D%22%2C%20language)%3B%0A%7D`"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <Navigation bef="comment" aft="mutable" />
  </div>
</template>
