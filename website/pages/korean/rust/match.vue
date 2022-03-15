<template>
  <div>
    <br /><br />

    <div>
      <h2>숫자 메서드</h2>
      <p>
        Rust의 다양한 숫자 메서드를 알아보겠습니다.<br /><br />

        숫자 메서드를 알면 숫자 데이터를 더 쉽게 처리할 수 있습니다.
      </p>
    </div>

    <Header type="Rust" title="숫자 메서드" num="14" />

    <div>
      <div>
        <h2>pow(), powf(), sqrt()</h2>

        숫자에 pow(x) 메서드를 실행하면 x만큼 그 값을 곱하게 됩니다.<br /><br />

        참고로 x의 값은 소수가 되면 루트의 값도 찾을 수 있습니다. 소수를 넣고
        싶으면 powf()를 사용하세요.<br /><br />

        루트(a를 두번 곱했하면 b일 때 b의 루트는 a)를 찾고 싶으면 sqrt()를
        사용하세요.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.pow(2))%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20let%20test_integer2%3A%20f32%20%3D%204.0%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer2.powf(0.5))%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer2.sqrt())%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>abs()</h2>

        abs()를 실행하면 -는 없어져서 항상 그 값의 +를 찾습니다.<br /><br />

        -1은 1, -2는 2, -3은 3... 이런 식으로 찾습니다.<br /><br />

        근데 1은 1, 2는 2, 3은 3... 이런 식으로 찾습니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20i32%20%3D%20-4%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.abs())%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>연산자</h2>

        +, -, *, /는 더하고 빼고 곱하고 나누는 연산자입니다.<br /><br />

        +=, -=, *=, /=는 더하고 빼고 곱하고 나누는 연산자인데 결과 값을 변수에
        다시 저장합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20a%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22a%20%2B%201%20%3D%20%7B%7D%22%2C%20a%20%2B%201)%3B%0D%0A%20%20%20%20println!(%22a%20-%201%20%3D%20%7B%7D%22%2C%20a%20-%201)%3B%0D%0A%20%20%20%20println!(%22a%20*%201%20%3D%20%7B%7D%22%2C%20a%20*%201)%3B%0D%0A%20%20%20%20println!(%22a%20%2F%201%20%3D%20%7B%7D%22%2C%20a%20%2F%201)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20a%20%2B%3D%201%3B%20%2F%2F%20a%20%3D%20a%20%2B%201%3B%20a%EB%A5%BC%201%20%EB%8D%94%ED%95%98%EA%B3%A0%20%EB%8B%A4%EC%8B%9C%20a%EB%A5%BC%20%EC%A0%80%EC%9E%A5%ED%95%A9%EB%8B%88%EB%8B%A4...%0D%0A%20%20%20%20a%20-%3D%201%3B%0D%0A%20%20%20%20a%20*%3D%201%3B%0D%0A%20%20%20%20a%20%2F%3D%201%3B%0D%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="numeric-float" aft="boolean" />
  </div>
</template>
