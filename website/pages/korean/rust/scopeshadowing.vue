<template>
  <div>
    <br />

    <div style="display: flex">
      <div style="margin: auto">
        <h2>변수 범위</h2>
        <p>
          변수의 범위라는 것은 변수를 어디에서까지 사용할 수 있는지를 나타내는
          것입니다.<br /><br />

          어디에서 변수가 만들어지었는지가 중요한데요 {} (코드 블록) 안에서만
          작동하는 변수와 글로벌 변수가 있습니다.<br /><br />

          예: main() {} 함수 안에서는 main이만 사용할 수 있고 밖에서 선정하면
          모든 파일에서 사용할 수 있습니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1JR0zWx1nJyis2cLni6s3IuftL-qTu4aYQ&usqp=CAU"
          max-width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Header title="변수 범위 및 그림자" num="10"></Header>

    <QuadSpace />

    <div>
      <div>
        <h2>{} 코드 블록</h2>
        <p>
          {} 코드 블록 안에서 만든 변수는 {} 안에서만 사용할 수 있습니다.<br /><br />

          이런 변수를 지역 변수라고 합니다.<br /><br />

          지금까지 알아보았던 변수는(저번 페이지) 다 main()의 지역 변수입니다.
        </p>
      </div>
      <div>
        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20let%20testing%20%3D%20%22Hello%2C%20World!%22%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20testing)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%7D%22%2C%20testing)%3B%20%2F%2F%EC%97%90%EB%9F%AC!%20testing%EC%9D%B4%EB%9D%BC%EB%8A%94%20%EB%B3%80%EC%88%98%EA%B0%80%20%EB%B2%94%EC%9C%84%20%EC%95%88%EC%97%90%20%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80%20%EC%95%8A%EC%95%84%EC%9A%94!%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>그림자</h2>
        <p>
          변수의 "새로운 그림자 변수"는 변수 범위가 다른 곳에서 똑같은 이름을
          만든 것입니다.<br /><br />

          예를 들면, lang 변수 안에 "Rust" 값을 저장하고 {} 코드 블록 안에
          "Python"이라고 따로 저장하면 {} 안에서는 "Python" 값을 가지고 있고
          밖에서는 "Rust"를 가지고 있습니다.
        </p>
      </div>
      <div>
        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20lang%20%3D%20%22Rust%22%3B%0D%0A%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EB%B0%96%3A%20%7Blang%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20let%20lang%20%3D%20%22Python%22%3B%0D%0A%20%20%20%20%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EC%95%88%3A%20%7Blang%7D%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EC%BD%94%EB%93%9C%20%EB%B8%94%EB%A1%9D%20%EB%B0%96%3A%20%7Blang%7D%22)%3B%0D%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="identifier" aft="datatypes" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'RustVariablePage',
};
</script>
