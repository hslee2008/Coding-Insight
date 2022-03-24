<template>
  <div>
    <h2>모듈이란?</h2>

    <p>
      모듈이란 함수, 배열, 변수 등 다양한 데이터들을 모아둔 공간입니다.<br /><br />

      복잡한 코드를 짜려고 할 때 함수, 변수 등이 많아지다 보면 개발하기 힘들어
      집니다.<br /><br />

      그래서 Rust의 모듈화 기능을 사용하면 필요에 따라 공간별로 코드를 분리할 수
      있습니다.
    </p>

    <Header type="Rust" title="모듈" num="34" />

    <h2>모듈 선언</h2>
    <p>모듈은 mod 키워드를 사용해서 선언을 합니다.</p>

    <code> mod 모듈이름 { ... } </code>

    <QuadSpace />

    <h2>모듈 안에 함수 선언</h2>
    <p>
      처음에는 모듈 안에 함수를 선언하여 코드를 정리하는 방법을 알아보겠습니다.
    </p>

    <iframe
      src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=mod%20module_example%20%7B%20%0D%0A%20%20%20%20fn%20print_this()%20%7B%20%0D%0A%20%20%20%20%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%20%0D%0A%20%20%20%20%7D%20%0D%0A%7D%20%0D%0A%0D%0Afn%20main()%20%7B%20%0D%0A%20%20%20%20module_example%3A%3Aprint_this()%3B%20%0D%0A%7D"
      width="100%"
      height="300"
    />

    <p>
      참고로 위의 코드를 실행하면 에러가 생길 것입니다.<br /><br />

      그 이유는 print_this()라는 함수는 모듈 안에서만 활용할 수 있기 때문에
      pub를 사용해서 이 에러를 피할 수 있는 방법을 알아보겠습니다.
    </p>

    <QuadSpace />

    <Navigation bef="closure" aft="pub" />
  </div>
</template>
